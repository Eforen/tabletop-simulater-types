/** @noSelfInFile */
export {};

declare global {
    /** 
     * The static global JSON class provides the ability to encode/decode data into JSON strings. This is largely used by the onSave() event function, but has other potential applications as well. The JSON class can be used on any String, Int, Float or Table. You call these functions like this:
     * 
     * **WARNING:** This class does not work with Object references. Use the Object's GUID instead.
     */
    interface JSON {
        /**
         * This is the javascript version of JSON.decode(...) DO NOT USE IT
         * @deprecated **WARNING:** do not use this function it is not supported by Tabletop Simulator
         */
        parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
        /**
         * This is the javascript version of JSON.encode(...) DO NOT USE IT
         * @deprecated **WARNING:** do not use this function it is not supported by Tabletop Simulator
         */
        stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
        /**
         * This is the javascript version of JSON.encode(...) DO NOT USE IT
         * @deprecated **WARNING:** do not use this function it is not supported by Tabletop Simulator
         */
        stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
        /**
         * Value obtained from the encoded string. Can return a number, string or Table.
         * @param json_string A String that is decoded, generally created by encode(...) or encode_pretty(...).
         * @returns Value obtained from the encoded string. Can return a number, string or Table.
         * ----------------------------------------------------------------
         * **WARNING:** This class does not work with Object references. Use the Object's GUID instead.
         */
        decode(json_string: string): any;
        /**
         * Encodes data from a number, string or Table into a JSON string.
         * @param json_string A Var, either String, Int, Float or Table, to encode as a string.
         * @returns Encodes data from a number, string or Table into a JSON string.
         * ----------------------------------------------------------------
         * **WARNING:** This class does not work with Object references. Use the Object's GUID instead.
         */
        encode(data: any): string;
        /**
         * Same as encode(...) but this version is slightly less efficient but is easier to read.
         * @param data A Var, either String, Int, Float or Table, to encode as a string.
         * @returns Encodes data from a number, string or Table into a JSON string. This version is slightly less efficient but is easier to read.
         * ----------------------------------------------------------------
         * **WARNING:** This class does not work with Object references. Use the Object's GUID instead.
         */
        encode_pretty(data: any): string;
    }
}