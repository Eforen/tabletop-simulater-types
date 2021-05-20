/** @noSelfInFile */

type XYZTuple = [ x: number, y: number, z: number ]
type OrthoTuple = [ base: Vector, normal: Vector, binormal: Vector ]

/** X is right/left, Y is up/down, Z is forward/back. A positional Vector can be either world or local. Most of Tabletop Simulator's functions use world positional Vectors. 
 * 
 * positionToWorld(...) and positionToLocal(...) can be used to convert between the two types.
 */
type PositionLocal = Vector
/** X is right/left, Y is up/down, Z is forward/back. A positional Vector can be either world or local. Most of Tabletop Simulator's functions use world positional Vectors. 
 * 
 * positionToWorld(...) and positionToLocal(...) can be used to convert between the two types.
 */
type PositionWorld = Vector
/** X is pitch (nodding your head), Y is yaw (shaking your head), Z is roll (tilting your head). */
type Rotation = Vector
/** X is right/left, Y is up/down, Z is forward/back. */
type Direction = Vector

/** 
 * Functions to interact with the map. 
 * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/)
 */
declare class Vector {
    /** 
     * Return a vector with specified (x, y, z) components.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/)
     */
    constructor(x: number, y: number, z: number)
    /**
     * Return a vector with x/y/z or 1/2/3 components from source table (x/y/z first).
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/)
     */
    constructor(vectorTable: {x: number, y: number, z: number})
    /** 
     * Return a vector with specified (x, y, z) components.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/)
     */
    public static "new"(x: number, y: number, z: number): Vector
    /**
     * Return a vector with x/y/z or 1/2/3 components from source table (x/y/z first).
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/)
     */
    public static "new"(vectorTable: {x: number, y: number, z: number}): Vector

    /**
     * Returns a vector that is made from the smallest components of two vectors.
     * @param vec1 First vector.
     * @param vec2 Second vector.
     * @returns Returns a vector that is made from the smallest components of two vectors.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#vectormin)
     */
    public static min(vec1: Vector, vec2: Vector): Vector
    /**
     * Returns a vector that is made from the largest components of two vectors.
     * @param vec1 First vector.
     * @param vec2 Second vector.
     * @returns Returns a vector that is made from the largest components of two vectors.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#vectormax)
     */
    public static max(vec1: Vector, vec2: Vector): Vector
    /**
     * Return a vector pointing from vec1 to vec2.
     * @param vec1 First vector.
     * @param vec2 Second vector.
     * @returns Return a vector pointing from vec1 to vec2.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#vectorbetween)
     */
    public static between(vec1: Vector, vec2: Vector): Vector

    public x: number
    public y: number
    public z: number

    /********************
     ** Element access **
     ********************
     *
     * In addition to accessing vector components by their numeric indices (1, 2, 3) and textual identifiers (x, y, z), the following methods may also be utilized.
     */
    
    /** 
     * Sets a component to value and returns self.
     * @param key Index of component (1, 2 or 3 for x, y or z).
     * @param value New value.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#setAt) 
     */
    public setAt( key: 1|2|3|'x'|'y'|'z',  value: number): this
    /** 
     * Sets x, y, z components to given values and returns self. 
     * 
     * ----------------------------------------------------------------
     * Providing a null value makes it ignore that argument.
     * */
    public set(x: number|null, y: number|null, z: number|null): this

    /**
     * @tupleReturn
     * @returns Returns x, y, z components as three separate values.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#get)
     */
    public get(): XYZTuple

    /**
     * Returns a separate Vector with identical component values.
     * @returns Copy self into a new vector and return it.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#copy)
     */
    public copy(): Vector

    /*********************
     ** Methods details **
      ************************************
      ** Methods modifying self details **
      ************************************
     *
     * [Tabletop Simulator Api Docs: Methods modifying self details](https://api.tabletopsimulator.com/vector/#methods-modifying-self-details)
     */

    /** Adds components of otherVec to self.
     * @kind Self Modifying
     * @param otherVec The vector to add.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#add)
     */
    public add( otherVec: Vector): this

    /** Subtracts components of otherVec from self.
     * @kind Self Modifying
     * @param otherVec The vector to subtracts.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#sub)
     */
    public sub( otherVec: Vector): this

    /** Multiplies self-components by corresponding components from otherVec. 
     * @kind Self Modifying
     * @param otherVec The vector to scale.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#scale)
     */
    public scale( otherVec: Vector): this

    /** Multiplies self-components by corresponding components from otherVec. 
     * @kind Self Modifying
     * 
     * Note: Every component in the result is a component of vec multiplied by the same component of otherVec or by a number factor.
     * @param num The numeric factor.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#scale)
     */
    public scale( num: Vector): this

    /** If self-magnitude is higher than provided limit, scale self-down to match it. 
     * @kind Self Modifying
     * @param num The numeric max magnitude.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#clamp)
     */
    public clamp( num: number): this

    /** Makes self-have a magnitude of 1. 
     * 
     * When normalized, a vector keeps the same direction but its length is 1.0.
     * 
     * ----------------------------------------------------------------
     * **Note:** this function will change the current vector. If you want to keep the current vector unchanged, use normalized() method.
     * 
     * ----------------------------------------------------------------
     * @kind Self Modifying
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#normalize)
     */
    public normalize(): this

    /** Make self into projection on another vector. 
     * 
     * ----------------------------------------------------------------
     * To understand vector projection, imagine that `otherVec` is resting on a line pointing in its direction. Somewhere along that line will be the nearest point to the tip of vector. The projection is just `otherVec` rescaled so that it reaches that point on the line.
     * 
     * @kind Self Modifying
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#project)
     */
    public project( otherVec: Vector): this

    /** Project self on a plane defined through a normal vector arg.
     * @kind Self Modifying
     * @param otherVec The plane normal vector.
     * 
     * ----------------------------------------------------------------
     * A Vector stores the position of the given `vec` in 3d space. A second Vector is given by `otherVec` and defines a direction from a plane towards vector that passes through the origin. Vector.projectOnPlane uses the two Vector values to generate the position of vector in the `otherVec` direction, and return the location of the Vector on the plane.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#projectonplane)
     */
    public projectOnPlane( otherVec: Vector): this

    /** Reflect self over a plane defined through a normal vector arg.
     * @kind Self Modifying
     * @param otherVec The normal vector.
     * 
     * ----------------------------------------------------------------
     * The otherVec vector defines a plane (a plane's normal is the vector that is perpendicular to its surface). The vec vector is treated as a directional arrow coming in to the plane. The returned value is a vector of equal magnitude to vec but with its direction reflected.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#reflect)
     */
    public reflect( otherVec: Vector): this

    /** Multiply self-components by -1.
     * @kind Self Modifying
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#inverse)
     */
    public inverse(): this

    /** Move self towards another vector, but only up to a provided distance limit.
     * @kind Self Modifying
     * @param target The position to move towards.
     * @param num The distance limit.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#movetowards)
     */
    public moveTowards( target: Vector,  num: number): this

    /** Rotate self towards another vector, but only up to a provided angle limit.
     * @kind Self Modifying
     * @param target The position to rotate towards.
     * @param maxAngle The maximum angle in degree allowed for this rotation.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#rotatetowards)
     */
    public rotateTowards( target: Vector,  maxAngle: number): this

    /** Same as {@link rotateTowards}, but only works correctly if target `Vector` is normalized. Less expensive than {@link rotateTowards}.
     * @kind Self Modifying
     * @param target The position to rotate towards.
     * @param maxAngle The maximum angle in degree allowed for this rotation.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#rotatetowardsunit)
     */
    public rotateTowardsUnit( target: Vector,  maxAngle: number): this

    /** Rotate a Vector angle degrees over given axis (can be 'x', 'y', 'z').
     * @kind Self Modifying
     * @param axis The axis to rotate around.
     * @param angle The angle in degree for this rotation.
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#rotateover)
     */
    public rotateOver( axis: 'x' | 'y' | 'z',  angle: number): this

    /*********************
     ** Methods details **
    ****************************************
    ** Methods not modifying self details **
    ****************************************
    *
    * [Tabletop Simulator Api Docs: Methods not modifying self details](https://api.tabletopsimulator.com/vector/#methods-not-modifying-self-details)
    */

    /** Return a dot product of two vectors. 
     * 
     * ----------------------------------------------------------------
     * The dot product is a float value equal to the magnitudes of the two vectors multiplied together and then multiplied by the cosine of the angle between them.
     *
     * For normalized vectors Dot returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions and zero if the vectors are perpendicular.
     * @param vec1 First vector.
     * @param vec2 Second vector.
     * @example
     * ```lua
     * -- Lua Example
     * vec1 = Vector(0, 1, 2)
     * vec2 = Vector(0, 2, 4)
     * print(vec1:dot(vec2)) --> 10
     * print(Vector.dot(vec1:normalized(), vec2:normalized())) --> 1
     * ```
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#dot)
     */
    dot( vector: Vector): number

    /** Returns the length of this vector.
     * @example
     * ```lua
     * -- Lua Example
     * vec = Vector(1, 2, 3)
     * print(vec:magnitude()) --> 3.74 (sqrt of 14)
     * print(Vector.magnitude(vec)) --> 3.74 (sqrt of 14)
     * ```
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#magnitude)
     */
    magnitude(): number

    /** Returns the squared length of this vector. 
     * @example
     * ```lua
     * -- Lua Example
     * vec = Vector(1, 2, 3)
     * print(vec:sqrMagnitude()) --> 14
     * print(Vector.sqrMagnitude(vec)) --> 14
     * ```
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#sqrmagnitude)
     */
    sqrMagnitude(): number

    /** Returns distance between two points. 
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#distance)
     */
    distance( vector: Vector ): number

    /** Returns squared distance between two points. 
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#sqrdistance)
     */
    sqrDistance( vector: Vector): number

    /** Returns true if two vectors are approximately equal. The margin argument is optional and defaults to tolerating a difference of ~0.03 in both vector magnitude. 
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#equals)
     */
    equals( vector: Vector,  margin?: number): boolean

    /** Return string describing self, optional string prefix. 
     * @tupleReturn
     
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#string)
     */
    string( prefix: string ): [ output: string, trash: number ]

    /** Return an angle between two vectors, in degrees [0, 180]. 
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#angle)
     */
    angle( vec2: Vector ): number

    /** Return a cross-product vector of two vectors. 
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#cross)
     */
    cross( vec2: Vector ): Vector

    /** Linearly interpolates between two points. Numeric arg [0, 1] is the fraction. 
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#lerp)
     */
    lerp( p2: Vector,  t: Number): Vector

    /** Return a new vector that is normalized (length 1) version of self. 
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#normalized)
     */
    normalized(): Vector

    /** Return three normalized vectors perpendicular to each other, first one being in the same dir as self. Return base, normal, binormal vectors.
     * @tupleReturn
     
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#orthonormalize)
     */
    orthoNormalize(): OrthoTuple

    /** Same as vec:orthoNormalize(), but second vector is guranteed to be on a self-binormalPlanar plane.
     * @tupleReturn
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#orthonormalize)
     */
    orthoNormalize( binormalPlanar: Vector ): OrthoTuple

    /** Returns an angle (In degrees) of rotation of Vector over all axis ('x', 'y', 'z').
     * @tupleReturn
     
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#heading)
     */
    heading(): XYZTuple

    /** Returns an angle (In degrees) of rotation of Vector over a given axis (can be 'x', 'y', 'z'). 
     * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/vector/#heading)
     */
    heading( axis: 'x' | 'y' | 'z'): number
}

/** Functions to interact with the map. */
// declare const Vector: Vector