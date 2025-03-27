import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import chroma from "chroma-js"
import {ColorConversion, ColorValidationResult, ContrastResult, HexColor} from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Validates if a string is a valid color that chroma-js can process
 */
export function isValidColor(color: string): ColorValidationResult {
    try {
        const chromaColor = chroma(color)
        return {
            isValid: true,
            value: chromaColor.hex(),
        }
    } catch (error) {
        return {
            isValid: false,
            value: null,
            error: error instanceof Error ? error.message : "Invalid color",
        }
    }
}

/**
 * Converts a color to all supported formats
 */
export function convertColor(color: string): ColorConversion {
    try {
        const chromaColor = chroma(color)

        const rgb = chromaColor.rgb()
        const hsl = chromaColor.hsl()
        const cmyk = chromaColor.cmyk()

        return {
            hex: chromaColor.hex(),
            rgb: `rgb(${Math.round(rgb[0])}, ${Math.round(rgb[1])}, ${Math.round(rgb[2])})`,
            hsl: `hsl(${Math.round(hsl[0] || 0)}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%)`,
            cmyk: `cmyk(${Math.round(cmyk[0] * 100)}%, ${Math.round(cmyk[1] * 100)}%, ${Math.round(cmyk[2] * 100)}%, ${Math.round(cmyk[3] * 100)}%)`,
        }
    } catch (error) {
        console.error("Error converting color:", error)
        return {
            hex: "#000000",
            rgb: "rgb(0, 0, 0)",
            hsl: "hsl(0, 0%, 0%)",
            cmyk: "cmyk(0%, 0%, 0%, 100%)",
        }
    }
}

/**
 * Calculates contrast ratio between background color and text color
 */
export function calculateContrast(backgroundColor: string, textColor: "white" | "black"): ContrastResult {
    try {
        const ratio = chroma.contrast(backgroundColor, textColor)

        if (ratio >= 7) {
            return {
                ratio,
                level: "AAA",
                className: "text-green-500 font-medium",
            }
        } else if (ratio >= 4.5) {
            return {
                ratio,
                level: "AA",
                className: "text-yellow-500 font-medium",
            }
        } else {
            return {
                ratio,
                level: "Fail",
                className: "text-red-500 font-medium",
            }
        }
    } catch (error) {
        console.error("Error calculating contrast:", error)
        return {
            ratio: 0,
            level: "Fail",
            className: "text-red-500 font-medium",
        }
    }
}

/**
 * Generates a range of shades from dark to light for a given color
 */
export function generateShades(baseColor: string, count = 10): HexColor[] {
    try {
        return chroma
            .scale([chroma(baseColor).darken(3), baseColor, "white"])
            .mode("lch")
            .colors(count)
    } catch (error) {
        console.error("Error generating shades:", error)
        return Array(count).fill("#cccccc")
    }
}

/**
 * Generates a complementary color palette
 */
export function generatePalette(baseColor: string, count = 5): HexColor[] {
    try {
        const baseHsl = chroma(baseColor).hsl()
        const hue = baseHsl[0] || 0

        return Array.from({length: count}, (_, i) => {
            const newHue = (hue + (360 / count) * i) % 360
            return chroma.hsl(newHue, baseHsl[1], baseHsl[2]).hex()
        })
    } catch (error) {
        console.error("Error generating palette:", error)
        return Array(count).fill("#cccccc")
    }
}

