declare type byte = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255
declare type ColorTable = { r: byte, g: byte, b: byte } | { r: byte, g: byte, b: byte, a: byte} | [r: byte, g: byte, b: byte] | [r: byte, g: byte, b: byte, a: byte]
declare type ColorTuple = [r: byte, g: byte, b: byte, a: byte]
declare type ColorIndex = 1 | 2 | 3 | 4 | 'r' | 'g' | 'b' | 'a'
declare type ColorString = "White" | "Brown" | "Red" | "Orange" | "Yellow" | "Green" | "Teal" | "Blue" | "Purple" | "Pink" | "Grey" | "Black" | string
declare class Color {
    public r: float
    public g: float
    public b: float
    public a: float

    constructor(r: float, g: float, b: float, a?: float)
    constructor(colorTable: ColorTable)
    "new"(r: float, g: float, b: float, a?: float): Color
    "new"(colorTable: ColorTable): Color
    public static fromString(PlayerColor: ColorString ): Color
    /** Sets a component to value and returns self.
     * @kind Self Modifying
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#setat)
     */
    public setAt( k: ColorIndex,  value: float): this
    /** Sets r, g, b, a components to given values and returns self, alpha is optional
     * @kind Self Modifying
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#set)
     */
    public set( r: byte, g: byte, b: byte, a?:byte ): this
    /** Returns r, g, b, a components as four separate values.
     * @kind Self Modifying
     * @tupleReturn
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#get)
     */
    public get(): ColorTuple
    /** Returns a separate Color with identical component values.
     * @kind Self Modifying
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#copy)
     */
    public copy(): Color

    /** Returns a hex string for col, boolean parameter includeAlpha.
     * @kind Not Self Modifying
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#tohex)
     */
    public toHex( includeAlph: boolean ): string
    /** Returns a color string if matching this instance, nil otherwise, optional numeric tolerance param.
     * @kind Not Self Modifying
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#tostring)
     */
    public toString( tolerance: float ): string
    /** Returns true if otherCol same as col, false otherwise, optional numeric tolerance param.
     * @kind Not Self Modifying
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#equals)
     */
    public equals( otherCol: Color,  num: float): boolean 
    /** Return a color some part of the way between col and otherCol, numeric arg [0, 1] is the fraction.
     * @kind Not Self Modifying
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#lerp)
     */
    public lerp( otherCol: Color,  num: float): Color
    /** Return a string description of a color with an optional prefix.
     * @kind Not Self Modifying
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#dump)
     */
    public dump( prefix: string): string
    /** Return a string description of a color with an optional prefix.
     * @kind Not Self Modifying
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#dump)
     */
    public static dump( color: Color, prefix: string): string

    /** Returns a table of all color strings.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#dump)
     */
    public static list: [
        "White",
        "Brown",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Teal",
        "Blue",
        "Purple",
        "Pink",
        "Grey",
        "Black",
        ...string[]
    ]

    public static White: Color
    public static Brown: Color
    public static Red: Color
    public static Orange: Color
    public static Yellow: Color
    public static Green: Color
    public static Teal: Color
    public static Blue: Color
    public static Purple: Color
    public static Pink: Color
    public static Grey: Color
    public static Black: Color

    /** Add your own color definition to the class.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/color/#dump)
     */
    public static Add( name: string,  yourColor: Color ): string
}