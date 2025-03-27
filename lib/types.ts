// Color format types

export type HexColor = string
export type RgbColor = [number, number, number]
export type HslColor = [number, number, number]
export type CmykColor = [number, number, number, number]

export type ColorFormat = "hex" | "rgb" | "hsl" | "cmyk"

// RGB object for state management
export interface RGBValues {
    r: number
    g: number
    b: number
}

// Color conversion result
export interface ColorConversion {
    hex: HexColor
    rgb: string
    hsl: string
    cmyk: string
}

// Contrast calculation result
export interface ContrastResult {
    ratio: number
    level: "AAA" | "AA" | "Fail"
    className: string
}

// Color validation result
export interface ColorValidationResult {
    isValid: boolean
    value: HexColor | null
    error?: string
}

// Color utility functions
export interface ColorUtils {
    isValidColor: (color: string) => ColorValidationResult
    convertColor: (color: string) => ColorConversion
    calculateContrast: (backgroundColor: string, textColor: "white" | "black") => ContrastResult
    generateShades: (baseColor: string, count?: number) => HexColor[]
    generatePalette: (baseColor: string, count?: number) => HexColor[]
}

// // Type guard for chroma-js
// export function isChromaInstance(obj): obj is ChromaStatic {
//     return obj && typeof obj.hex === "function" && typeof obj.rgb === "function"
// }
