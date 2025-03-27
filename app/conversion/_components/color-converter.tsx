"use client"

import {useEffect, useState} from "react"
import chroma from "chroma-js"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Slider} from "@/components/ui/slider"
import {Check, Copy} from "lucide-react"
import {Button} from "@/components/ui/button"
import {ColorFormat, ContrastResult, RGBValues} from "@/lib/types";
import {calculateContrast, convertColor, generatePalette, generateShades, isValidColor} from "@/lib/utils";

export default function ColorConverter() {
    // State with proper typing
    const [color, setColor] = useState<string>("#6366f1")
    const [inputValue, setInputValue] = useState<string>("#6366f1")
    const [copied, setCopied] = useState<ColorFormat | null>(null)
    const [isValidColorInput, setIsValidColorInput] = useState<boolean>(true)

    // RGB values for sliders with proper typing
    const [rgbValues, setRgbValues] = useState<RGBValues>({
        r: 99,
        g: 102,
        b: 241,
    })

    // Update RGB values when color changes
    useEffect(() => {
        if (isValidColorInput) {
            try {
                const rgb = chroma(color).rgb()
                setRgbValues({
                    r: rgb[0],
                    g: rgb[1],
                    b: rgb[2],
                })
            } catch (error) {
                console.error("Error updating RGB values:", error)
            }
        }
    }, [color, isValidColorInput])

    // Update color when RGB sliders change
    useEffect(() => {
        try {
            const {r, g, b} = rgbValues
            const newColor = chroma.rgb(r, g, b).hex()
            setColor(newColor)
            setInputValue(newColor)
        } catch (error) {
            console.error("Error updating color from RGB:", error)
        }
    }, [rgbValues])

    // Handle input change with proper typing
    const handleInputChange = (value: string): void => {
        setInputValue(value)

        const result = isValidColor(value)
        if (result.isValid && result.value) {
            setColor(result.value)
            setIsValidColorInput(true)
        } else {
            setIsValidColorInput(false)
        }
    }

    // Copy to clipboard function with proper typing
    const copyToClipboard = (text: string, type: ColorFormat): void => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopied(type)
                setTimeout(() => setCopied(null), 2000)
            })
            .catch((err) => {
                console.error("Failed to copy:", err)
            })
    }

    // Get all color formats at once
    const colorFormats = isValidColorInput
        ? convertColor(color)
        : {
            hex: "#000000",
            rgb: "rgb(0, 0, 0)",
            hsl: "hsl(0, 0%, 0%)",
            cmyk: "cmyk(0%, 0%, 0%, 100%)",
        }

    // Calculate contrast values
    const whiteContrast: ContrastResult = isValidColorInput
        ? calculateContrast(color, "white")
        : {ratio: 0, level: "Fail", className: "text-red-500 font-medium"}

    const blackContrast: ContrastResult = isValidColorInput
        ? calculateContrast(color, "black")
        : {ratio: 0, level: "Fail", className: "text-red-500 font-medium"}

    // Generate color variations
    const shades = isValidColorInput ? generateShades(color) : generateShades("#6366f1")

    const palette = isValidColorInput ? generatePalette(color) : generatePalette("#6366f1")

    return (
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Color Input</CardTitle>
                    <CardDescription>Enter a color or use the color picker</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="color-input">Color Value</Label>
                        <div className="flex gap-2">
                            <Input
                                id="color-input"
                                value={inputValue}
                                onChange={(e) => handleInputChange(e.target.value)}
                                className={!isValidColorInput ? "border-red-500" : ""}
                                placeholder="Enter HEX, RGB, or HSL"
                            />
                            <input
                                type="color"
                                value={isValidColorInput ? color : "#6366f1"}
                                onChange={(e) => {
                                    setColor(e.target.value)
                                    setInputValue(e.target.value)
                                    setIsValidColorInput(true)
                                }}
                                className="w-12 h-10 p-1 rounded border"
                            />
                        </div>
                        {!isValidColorInput && <p className="text-red-500 text-sm">Please enter a valid color</p>}
                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="space-y-2">
                            <Label>Red ({rgbValues.r})</Label>
                            <Slider
                                value={[rgbValues.r]}
                                min={0}
                                max={255}
                                step={1}
                                onValueChange={(value) => setRgbValues((prev) => ({...prev, r: value[0]}))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Green ({rgbValues.g})</Label>
                            <Slider
                                value={[rgbValues.g]}
                                min={0}
                                max={255}
                                step={1}
                                onValueChange={(value) => setRgbValues((prev) => ({...prev, g: value[0]}))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Blue ({rgbValues.b})</Label>
                            <Slider
                                value={[rgbValues.b]}
                                min={0}
                                max={255}
                                step={1}
                                onValueChange={(value) => setRgbValues((prev) => ({...prev, b: value[0]}))}
                            />
                        </div>
                    </div>

                    <div
                        className="h-24 rounded-md mt-4"
                        style={{backgroundColor: isValidColorInput ? color : "#cccccc"}}
                    ></div>
                </CardContent>
            </Card>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Color Formats</CardTitle>
                        <CardDescription>Convert between different color formats</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="hex" className="w-full">
                            <TabsList className="grid grid-cols-4 mb-4">
                                <TabsTrigger value="hex">HEX</TabsTrigger>
                                <TabsTrigger value="rgb">RGB</TabsTrigger>
                                <TabsTrigger value="hsl">HSL</TabsTrigger>
                                <TabsTrigger value="cmyk">CMYK</TabsTrigger>
                            </TabsList>

                            <TabsContent value="hex" className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                                    <code>{colorFormats.hex}</code>
                                    <Button variant="ghost" size="icon"
                                            onClick={() => copyToClipboard(colorFormats.hex, "hex")}>
                                        {copied === "hex" ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="rgb" className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                                    <code>{colorFormats.rgb}</code>
                                    <Button variant="ghost" size="icon"
                                            onClick={() => copyToClipboard(colorFormats.rgb, "rgb")}>
                                        {copied === "rgb" ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="hsl" className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                                    <code>{colorFormats.hsl}</code>
                                    <Button variant="ghost" size="icon"
                                            onClick={() => copyToClipboard(colorFormats.hsl, "hsl")}>
                                        {copied === "hsl" ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="cmyk" className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                                    <code>{colorFormats.cmyk}</code>
                                    <Button variant="ghost" size="icon"
                                            onClick={() => copyToClipboard(colorFormats.cmyk, "cmyk")}>
                                        {copied === "cmyk" ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                                    </Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Color Variations</CardTitle>
                        <CardDescription>Shades and palette based on the selected color</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium mb-2">Shades</h3>
                            <div className="grid grid-cols-10 gap-1 h-8">
                                {shades.map((shade, index) => (
                                    <div
                                        key={`shade-${index}`}
                                        className="h-full rounded-sm cursor-pointer hover:scale-105 transition-transform"
                                        style={{backgroundColor: shade}}
                                        onClick={() => {
                                            setColor(shade)
                                            setInputValue(shade)
                                            setIsValidColorInput(true)
                                        }}
                                        title={shade}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-2">Palette</h3>
                            <div className="grid grid-cols-5 gap-1 h-12">
                                {palette.map((paletteColor, index) => (
                                    <div
                                        key={`palette-${index}`}
                                        className="h-full rounded-sm cursor-pointer hover:scale-105 transition-transform"
                                        style={{backgroundColor: paletteColor}}
                                        onClick={() => {
                                            setColor(paletteColor)
                                            setInputValue(paletteColor)
                                            setIsValidColorInput(true)
                                        }}
                                        title={paletteColor}
                                    />
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Accessibility</CardTitle>
                        <CardDescription>Check contrast ratios for accessibility</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div
                                    className="flex-1 p-4 rounded-md flex items-center justify-center font-medium"
                                    style={{
                                        backgroundColor: isValidColorInput ? color : "#cccccc",
                                        color: "white",
                                    }}
                                >
                                    White Text
                                </div>
                                <div
                                    className="flex-1 p-4 rounded-md flex items-center justify-center font-medium"
                                    style={{
                                        backgroundColor: isValidColorInput ? color : "#cccccc",
                                        color: "black",
                                    }}
                                >
                                    Black Text
                                </div>
                            </div>

                            <div className="text-sm">
                                <p>
                                    White text contrast:{" "}
                                    <span className={whiteContrast.className}>
                    {whiteContrast.ratio.toFixed(2)}:1 ({whiteContrast.level})
                  </span>
                                </p>
                                <p>
                                    Black text contrast:{" "}
                                    <span className={blackContrast.className}>
                    {blackContrast.ratio.toFixed(2)}:1 ({blackContrast.level})
                  </span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

