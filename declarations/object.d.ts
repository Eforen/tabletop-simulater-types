/** @noSelfInFile */

type ObjectGUID = string

declare enum ClassicUIAlignment {
    Auto = 1,
    Left = 2,
    Center = 3,
    Right = 4,
    Justified = 5
}

declare enum ClassicUIValidation {
    None = 1,
    Integer = 2,
    Float = 3,
    Alphanumeric = 4,
    Username = 5,
    Name = 6
}

declare enum ClassicUIPressTabBehavior {
    None = 1,
    /** Select Next Input */
    Next = 2,
    Indent = 3
}

declare type AnyClassicUIElement = ClassicUIButton | ClassicUIInput
declare interface ClassicUIElement {
    /** Index of the button you want to edit. */
    index: int,
    /** The Object which contains the click_function function. */
    function_owner: TabletopSimulatorObject
    /** Text that appears on the button. */
    label: string
    /** Where the button appears, relative to the Object's center. */
    position: Vector
    /** How the button is rotated, relative to the Object's rotation. */
    rotation: Vector
    /** Scale of the button, relative to the Object's scale. */
    scale: Vector
    /** How wide the button will be, relative to the Object. */
    width: float
    /** How tall the button will be, relative to the Object. */
    height: float
    /** Size the label font will be, relative to the Object. */
    font_size: float
    /** A Color for the label text. */
    font_color:  Color
    /** Text of a popup of text, similar to how an Object's name is displayed on mouseover. */
    tooltip: string
}
declare interface ClassicUIButton extends ClassicUIElement {
    /** Index of the button you want to edit.
     * 
     * index starts at 0 */
    click_function: string
    /** A Color for the clickable button.
     * @default {r=1, g=1, b=1}
     */
    color: Color
    /** A Color for the background during mouse-over. */
    hover_color:  Color
    /** A Color for the background when clicked. */
    press_color:  Color
}
declare interface ClassicUIInput extends ClassicUIElement {
    alignment: ClassicUIAlignment,
    /** A Color for the input's background.
     * @default {r=1, g=1, b=1}
     */
    color: Color
    value: string,
    validation: ClassicUIValidation,
    tab: ClassicUIPressTabBehavior
}

declare interface ClassicUIElementConstructorParams {
    /** The Object which contains the click_function function.
     * @default "Global"
     */
    function_owner?: TabletopSimulatorObject
    /** Text that appears on the button. 
     * @default ""
     */
    label?: string
    /** Where the button appears, relative to the Object's center.
     * @default { x=0, y=0, z=0 }
     */
    position?: Vector
    /** How the button is rotated, relative to the Object's rotation.
     * @default { x=0, y=0, z=0 }
     */
    rotation?: Vector
    /** Scale of the button, relative to the Object's scale.
     * @default { x=1, y=1, z=1 }
     */
    scale?: Vector
    /** How wide the button will be, relative to the Object.
     * @default 100
     */
    width?: float
    /** How tall the button will be, relative to the Object.
     * @default 100
     */
    height?: float
    /** Size the label font will be, relative to the Object.
     * @default 100
     */
    font_size?: float
    /** A Color for the label text.
     * @default {r=0, g=0, b=0}
     */
    font_color?:  Color
    /** Text of a popup of text, similar to how an Object's name is displayed on mouseover.
     * @default ""
     */
    tooltip?: string
}
declare interface ClassicUIButtonConstructorParams extends ClassicUIElementConstructorParams {
    /** Index of the button you want to edit.
     * 
     * index starts at 0 */
    click_function: string
    /** A Color for the clickable button.
     * @default {r=1, g=1, b=1}
     */
    color?: Color
    /** A Color for the background during mouse-over. */
    hover_color?:  Color
    /** A Color for the background when clicked. */
    press_color?:  Color
}
declare interface ClassicUIInputConstructorParams extends ClassicUIElementConstructorParams  {
    alignment?: ClassicUIAlignment,
    /** A Color for the input's background.
     * @default {r=1, g=1, b=1}
     */
    color?: Color
    value?: string,
    validation?: ClassicUIValidation,
    tab?: ClassicUIPressTabBehavior
}

declare type TabletopSimulatorObjectMetaData = {
    /** Description of the contained object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    description: string
    /** GM Notes on the contained object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    gm_notes: string
    /** GUID of the contained object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    guid: string
    /** Index of the contained object, represents the item's order in the container.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    index: int
    /** Lua script on the contained object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    lua_script: string
    /** Lua script saved state of the contained object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    lua_script_state: string
    /** Memo on the contained object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    memo: string
    /**
     * Name of the contained object.
     * 
     * Will correspond with getName(), unless it's blank, in which case it'll be the internal resource name.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    name: string

    /**
     * Use name.
     * 
     * Name of the item.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    nickname: string

    /**
     * A table of  representing the tags on the contained object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    tags: any
}

/** The path/URL for the AssetBundle.
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/)
 */
declare enum TabletopSimulatorObjectType {
    Generic = 0,
    Figurine = 1,
    Dice = 2,
    Coin = 3,
    Board = 4,
    Chip = 5,
    Bag = 6,
    InfiniteBag = 7
}

declare enum TabletopSimulatorObjectMaterial {
    Plastic = 0,
    Wood = 1,
    Metal = 2,
    Cardboard = 3
}

declare type CustomObjectData = Custom_Assetbundle | Custom_Board | Custom_Card | Custom_Deck | Custom_Dice | Custom_Figurine | Custom_Model | Custom_Tile | Custom_Token;

declare interface CustomObjectDataBase {}

/** A Table of parameters which determine the properties of the Object.
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-assetbundle)
 */
declare interface Custom_Assetbundle extends CustomObjectDataBase {
    /** The path/URL for the AssetBundle.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-assetbundle)
     */
    assetbundle: string
    /** The path/URL for the secondary AssetBundle property.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-assetbundle)
     */
    assetbundle_secondary?: string
    /** An Int representing the Object's type.
     * @default 0 Generic
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-assetbundle)
     */
    type?: TabletopSimulatorObjectType
    /** An Int representing the Object's material.
     * @default 0 Plastic
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-assetbundle)
     */
    material?: TabletopSimulatorObjectMaterial
}

/** A Table of parameters which determine the properties of the Object.
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-board)
 */
declare interface Custom_Board extends CustomObjectDataBase {
    /** The path/URL for the board.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-board)
     */
     image: string
}

declare enum TabletopSimulatorCardShape {
    RectangleRounded = 0,
    Rectangle = 1,
    HexRounded = 2,
    Hex = 3,
    Circle = 4
}

/** A Table of parameters which determine the properties of the Object.
 * 
 * CardCustom
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-card)
 */
declare interface Custom_Card extends CustomObjectDataBase {
    /** The card shape.
     * @default 0 Rounded Rectangle
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-card)
     */
    type?: TabletopSimulatorCardShape
    /** The path/URL of the face image. */
    face: string
    /** The path/URL of the back image. */
    back: string
    /** If the card is horizontal, instead of vertical. */
    sideways?: boolean
}

/** A Table of parameters which determine the properties of the Object.
 * 
 * DeckCustom
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-deck)
 */
declare interface Custom_Deck extends CustomObjectDataBase {
    /** The path/URL of the  face cardsheet. */
    face: string
    /** The path/URL of the back cardsheet or card back. */
    back: string
    /** If each card has a unique card back (via a cardsheet). 
     * @default false
     */
    unique_back?: boolean
    /** The number of columns on the cardsheet.
     * @default 10
     */
    width?: int
    /** The number of rows on the cardsheet.
     * @default 7
     */
    height?: int
    /** The number of cards on the cardsheet.
     * @default 52
     */
    number?: int
    /** Whether the cards are horizontal, instead of vertical. 
     * @default false
     */
    sideways?: boolean
    /** Whether the card back should be used as the hidden image (instead of the last slot of the face image). 
     * @default false
     */
    back_is_hidden?: boolean
}

/**
 * The type of die, which determines its number of sides.
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-dice)
 */
declare enum TabletopSimulatorDiceType {
    D4 = 0,
    D6 = 1,
    D8 = 2,
    D10 = 3,
    D12 = 4,
    D20 = 5
}

/** A Table of parameters which determine the properties of the Object.
 * 
 * Custom_Dice
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-dice)
 */
declare interface Custom_Dice extends CustomObjectDataBase {
    /** The path/URL for the custom die. */
    image: string
    /** The Dice shape.
     * @default 1 D6
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-dice)
     */
    type?: TabletopSimulatorDiceType
}

/** A Table of parameters which determine the properties of the Object.
 * 
 * Figurine_Custom
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-figurine)
 */
declare interface Custom_Figurine extends CustomObjectDataBase {
    /** The path/URL for the custom die. 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-figurine)
     */
    image: string
    /** The path/URL for the custom figurine's back.
     * @default "image"
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-assetbundle)
     */
    image_secondary?: string
}

/** A Table of parameters which determine the properties of the Object.
 * 
 * Custom_Model
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
 */
declare interface Custom_Model extends CustomObjectDataBase {
    /** The path/URL for the .obj mesh used on the custom model. 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    mesh: string
    /** The path/URL for the diffuse image. 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    diffuse: string
    /** The path/URL for the normals image.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    normal?: string
    /** The path/URL for the collider mesh.
     * @default generic box collider
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    collider?: string
    
    /** An Int representing the Object's type.
     * @default 0 Generic
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    type?: TabletopSimulatorObjectType
    /** An Int representing the Object's material.
     * @default 0 Plastic
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    material?: TabletopSimulatorObjectMaterial
    /** The specular intensity. 
     * @default 0.1
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    specular_intensity: float
    /** The specular intensity. 
     * @default {r=1, g=1, b=1}
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    specular_color: ColorTable
    /** The specular sharpness. 
     * @default 3
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    specular_sharpness: float
    /** The freshnel strength. 
     * @default 0.1
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    freshnel_strength: float
    /**
     * Whether the Object casts shadows.
     * @default true
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-model)
     */
    cast_shadows: boolean
}

/**
 * The type of tile, which determines its number of sides.
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-dice)
 */
declare enum TabletopSimulatorTileType {
    Rectangle = 0,
    Hex = 1,
    Circle = 2
}

/** A Table of parameters which determine the properties of the Object.
 * 
 * Custom_Tile
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-tile)
 */
declare interface Custom_Tile extends CustomObjectDataBase {
    /** The path/URL for the [custom tile](https://kb.tabletopsimulator.com/custom-content/custom-tile/) image.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-tile)
     */
    image: string
    /** The Tile shape.
     * @default 0 Rectangle
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-tile)
     */
    type?: TabletopSimulatorTileType
    /** The path/URL for the bottom-side image.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-tile)
     */
    image_bottom?: string
    /** How thick the tile is.
     * @default 0.5
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-tile)
     */
    thickness?: float
    /** Whether these tiles stack together into a pile.
     * @default false
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-tile)
     */
    stackable?: boolean
}

/** A Table of parameters which determine the properties of the Object.
 * 
 * Custom_Token
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-token)
 */
declare interface Custom_Token extends CustomObjectDataBase {
    /** The path/URL for the [custom Token](https://kb.tabletopsimulator.com/custom-content/custom-token/) image.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-token)
     */
    image: string
    /** How thick the token is.
     * @default 0.2
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-token)
     */
    thickness?: float
    /** How accurately the token shape will trace image edge (in pixels).
     * @default 15
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-token)
     */
    merge_distance?: float
    /** Whether these Tokens stack together into a pile.
     * @default false
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/custom-game-objects/#custom-token)
     */
    stackable?: boolean
}

/** A Table of parameters which determine the properties of the Object Joint.
 * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getjoints)
 */
declare interface TabletopSimulatorObjectJoint {
    type              : string,
    joint_object_guid : ObjectGUID,
    collision         : boolean,
    break_force       : number,
    break_torgue      : number,
    axis              : Vector,
    anchor            : Vector,
    connector_anchor  : Vector,
    motor_force       : number,
    motor_velocity    : number,
    motor_free_spin   : false,
    spring            : number,
    damper            : number
    max_distance      : number
    min_distance      : number
}

declare interface TabletopSimulatorObjectState {
    /** Name of the item. */
    name: string
    /** Description of the item. */
    description: string
    /** GUID of the item. */
    guid: string
    /** Index of the item, represents the item's order in the states. */
    id: int
    /** Any Lua scripting saved on the item. */
    lua_script: string
    /** Any JSON save data on this item */
    lua_script_state: string
    /** A duplicate of the "name" field. 
     * @deprecated This is for backwards compatibility purposes only.
     */
    nickname: string
}

declare interface TabletopSimulatorObjectRotationAlias {
    value:string|number|int|float, 
    rotation:Vector
}

declare interface FogOfWarSettings { reveal: boolean, color: string, range: number }

declare type JointType = JointTypeFixed | JointTypeSpring | JointTypeHinge

declare interface JointTypeFixed {
    type         : "Fixed",
    collision    : boolean,
    break_force  : float,
    break_torgue : float,
}

declare interface JointTypeSpring {
    type         : "Spring",
    collision    : boolean,
    break_force  : float,
    break_torgue : float,
    spring       : number,
    damper       : float,
    max_distance : number,
    min_distance : number
}

declare interface JointTypeHinge {
    type            : "Hinge",
    collision       : boolean,
    axis            : Vector,
    anchor          : Vector,
    break_force     : float,
    break_torgue    : float,
    motor_force     : float,
    motor_velocity  : float,
    motor_free_spin : boolean
}

declare class GameObject {
    /** The name of the Component.
    */
    name: string
    
    //TODO: [Component Functions](https://api.tabletopsimulator.com/object/#component-functions)
    /** GameObjectReturns a child GameObject matching the specified name.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getchild)
     */
     getChild( name: string ): GameObject
     /** Returns the list of children GameObjects.
      * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getchildren)
      */
     getChildren(): GameObject[]
     /** ComponentReturns a Component matching the specified name from the Object's list of Components.
      * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getcomponent)
      */
     getComponent( name: string ): Component
     /** ComponentReturns a Component matching the specified name. Found by searching the Components of the Object and its children recursively (depth first).
      * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getcomponentinchildren)
      */
     getComponentInChildren( name: string ): Component
     /** Returns the Object's list of Components. name is optional, when specified only Components with specified name will be included.
      * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getcomponents)
      */
     getComponents( name: string ): Component[]
     /** Returns a list of Components found by searching the Object and its children recursively (depth first). name is optional, when specified only Components with specified name will be included.
      * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getcomponentsinchildren)
      */
     getComponentsInChildren( name: string ): Component[]
}

declare interface Component {
    /** The GameObject the Component composes. */
    game_object: GameObject;
    /** The name of the Component. */
    name: string
    /** Obtains the value of a given Variable on a Component. */
    get( name: string ): any
    /** Returns a table mapping Var names () to their type, which is also represented as a . */
    getVars(): any[]
    /** Sets the Var of the specified name to the provided value. */
    set( name: string,  value: any ): boolean
}

declare interface DecalParameters {
    /** The name of the decal being placed. */
    name     : string,
    /** The file path or URL for the image to be displayed. */
    url      : string,
    /** A Vector of the position to place Object. */
    position : Vector,
    /** A Vector of the rotation of the Object. */
    rotation : Vector,
    /** How the image is scaled.
     * 
     * 1 is normal scale,
     * 0.5 would be half sized,
     * 2 would be twice as large, etc.
     */
    scale    : Vector
}

declare interface SnapPoint {
    /** Local Position of the snap point. When attached to an object, position is relative to the object's center. */
    position: Vector
    /** Local Rotation of the snap point. When attached to an object, rotation is relative to the object's rotation. */
    rotation: Vector
    /** Whether the snap point is a rotation snap point. */
    rotation_snap:boolean
    /** Table of  representing the tags associated with the snap point. */
    tags: string[]
}

declare interface VectorLine {
    /** Table containing Vector positions for each "point" on the line. */
    points: Vector[]
    /** Color the line will be. */
    color?: Color
    /** How thick the line is (in Unity units). */
    thickness: float
    /** Rotation Vector for the line to be angled. */
    rotation: Vector
}

/** 
 * Functions to interact with the map.
 * 
 * @see [Tabletop Simulator Api Docs](https://api.tabletopsimulator.com/object/)
 */
declare interface TabletopSimulatorObject extends GameObject {
    /** When non-zero, the Alt view will use the specified Euler angle to look at the object.
     */
    alt_view_angle: Vector
    /** Angular drag. Unity rigidbody property.
     */
    angular_drag: number
    /** If the object should be lifted above other objects to avoid collision when held by a player.
    */
    auto_raise: boolean
    /** Bounciness, value of 0-1. Unity physics material.
    */
    bounciness: number
    /** Drag. Unity rigidbody property.
    */
    drag: number
    /*
    * When false, the object will not be selected by regular (click and drag) selection boxes that are drawn around the object.
    *
    * Players may proceed to override this behavior by holding the "Shift" modifier whilst drag selecting.
    */
    drag_selectable: boolean

    /** Dynamic friction, value of 0-1. Unity physics material.
    */
    dynamic_friction: number
    /** If grid lines can appear on the Object if visible grids are turned on.
    */
    grid_projection: boolean
    /** The 6 character unique Object identifier within Tabletop Simulator. It is assigned correctly once the spawning member variable becomes false.
    */
    guid: ObjectGUID
    /** The Color of the Player that is holding the object.
    */
    held_by_color: PlayerColor
    /** 0-23 value. Changes when a Player hits flip or alt + rotate.
    */
    held_flip_index: number
    /** Position offset from pointer.
    */
    held_position_offset: Vector
    /** When the Object collides with something while moving this is automatically enabled and reduces the movement force.
    */
    held_reduce_force: boolean
    /** Rotation offset from pointer.
    */
    held_rotation_offset: Vector
    /** 0-23 value. Changes when a Player rotates the Object.
    */
    held_spin_index: number
    /** Hide the Object when face-down as if it were in a hand zone. The face is the "top" of the Object, the direction of its positive Y coordinate. Cards/decks default to true.
    */
    hide_when_face_down: boolean
    /** Makes the object not be hidden by Fog of War.
    */
    ignore_fog_of_war: boolean
    /** If the object can be interacted with by Players. Other object will still be able to interact with it.
    */
    interactable: boolean
    /** If the Object is roughly face-down (like with cards). The face is the "top" of the Object, the direction of its positive Y coordinate. Read only.
    */
    is_face_down: boolean
    /** If the Object's custom elements (images/models/etc) are loading. Read only.
    */
    loading_custom: boolean
    /** If the object is frozen in place (preventing physics interactions).
    */
    locked: boolean
    /** Mass. Unity rigidbody property.
    */
    mass: number
    /** Determines the maximum number of digits which a user may type whilst hovering over the object.
    *
    * As soon as a player types the maximum number of digits, the corresponding behavior (e.g. onObjectNumberTyped/onNumberTyped) is triggered immediately, improving responsiveness.
    */
    max_typed_number: number

    /** Measure Tool will automatically be used when moving the Object.
    */
    measure_movement: boolean
    /** A string where you may persist user-data associated with the object. Tabletop Simulator saves this field, but otherwise does not use it. Store whatever information you see fit.
    */
    memo: string
    /** Internal resource name for this Object. Read only, and only useful for spawnObjectData(). Generally, you want getName().
    */
    name: string
    /** The position the Object was picked up at. Read only.
    */
    pick_up_position: Vector
    /** The rotation the Object was picked up at. Read only.
    */
    pick_up_rotation: Vector
    /** If this object is a container that cannot exist with less than two contained objects (e.g. a deck), taking out the second last contained object will result in the container being destroyed. In its place the last remaining object in the container will be spawned.
    *
    * This variable provides a reference to the remaining object when it is being spawned. Otherwise, it's nil. Read only.
    */
    remainder: TabletopSimulatorObject | null

    /** If the Object is at rest. Unity rigidbody property.
    */
    resting: boolean
    /** The Lua Script on the Object.
    */
    script_code: string
    /** The saved data on the object. See onSave().
    */
    script_state: string
    /** If the Object is finished spawning. Read only.
    */
    spawning: boolean
    /** Static friction, value of 0-1. Unity physics material.
    */
    static_friction: number
    /** If other Objects on top of this one are also picked up when this Object is.
    */
    sticky: boolean
    /** 
    * This object's type. Read only.
    * @deprecated Use type. 
    */
    tag: string
    /** If the tooltip opens when a pointer hovers over the object. Tooltips display name and description.
    */
    tooltip: boolean
    /** This object's type. Read only.
    */
    type: string
    /** If gravity affects this object.
    */
    use_gravity: boolean
    /** If snapping to grid is enabled or not.
    */
    use_grid: boolean
    /** If this object can be held in a hand zone.
    */
    use_hands: boolean
    /** Switches the axis the Object rotates around when flipped.
    */
    use_rotation_value_flip: boolean
    /** If snap points are used or ignored.
    */
    use_snap_points: boolean
    /*
    * A numeric value associated with the object, which when non-zero, will be displayed when hovering over the object.
    * 
    * In the case of stacks, the value shown in the UI will be multiplied by the stack size i.e. you can use value to create custom stackable chips.
    * 
    * 
    * When multiple objects are selected, values will be summed together with objects sharing overlapping object tags.
    */
    value: number
    /** Use object tags.
    *
    * A bit field. When objects with overlapping value_flags are selected and hovered over, their values will be summed together.
    */
    value_flags: number

    /************************
     ** Behavior Variables **
     ************************
     * https://api.tabletopsimulator.com/object/#behavior-variables
     * Some objects provide additional behavior. This functionality is accessible as Object member variables, but will be nil unless the Object includes the behavior.
     */

    //TODO: make this not null
    AssetBundle: any | null

    //TODO: make this not null
    Book: any | null

    //TODO: make this not null
    Browser: any | null

    //TODO: make this not null
    Clock: any | null

    //TODO: make this not null
    Counter: any | null

    //TODO: make this not null
    LayoutZone: any | null

    //TODO: make this not null
    RPGFigurine: any | null

    //TODO: make this not null
    TextTool: any | null


    /*************************
     ** Transform Functions **
     *************************
     * https://api.tabletopsimulator.com/object/#transform-functions
     * These functions handle the physical attributes of an Object: Position, Rotation, Scale, Bounds, Velocity. In other words, moving objects around as well as getting information on how they are moving.
     */

    /** Adds force to an object in a directional Vector.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#addforce)
     */
    addForce(vector: Vector,  force_type: number): boolean

     /** Adds torque to an object in a rotational Vector.
      * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#addforce)
      */
    addTorque(vector: Vector,  force_type: number): boolean

     /** Returns a Vector of the current angular velocity.
      * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#addforce)
      */
    getAngularVelocity(): Vector

     /** Returns a Vector describing the size of an object in Global terms.
      * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#addforce)
      */
    getBounds(): Vector

     /** Returns a Vector describing the size of an object in Global terms, as if it was rotated to {0,0,0}.
      * 
      */
    getBoundsNormalized(): Vector

    /** Returns a Vector of the current World Position.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#etposition)
     */
    getPosition(): Vector

    /** Returns a Vector of the current smooth move target if the object is smooth moving, otherwise returns nil.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getpositionsmooth)
     */
    getPositionSmooth(): Vector

    /** Returns a Vector of the current rotation.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getrotation)
     */
    getRotation(): Vector

    /** Returns a Vector of the current smooth rotation target if the object is smooth moving, otherwise returns nil.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getrotationsmooth)
     */
    getRotationSmooth(): Vector

    /** Returns a Vector of the current scale.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getscale)
     */
    getScale(): Vector

    /** Returns a Vector of the forward direction of this object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#gettransformforward)
     */
    getTransformForward(): Vector

    /** Returns a Vector of the right direction of this object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#gettransformright)
     */
    getTransformRight(): Vector

    /** Returns a Vector of the up direction of this object.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#gettransformup)
     */
    getTransformUp(): Vector

    /** Returns a Vector of the current velocity.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getvelocity)
     */
    getVelocity(): Vector

    /** Indicates if an object is traveling as part of a Smooth move. Smooth moving is performed by setPositionSmooth and setRotationSmooth.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#issmoothmoving)
     */
    isSmoothMoving(): boolean

    /** Returns a Vector after converting a world Vector (World Position) to a local Vector (Local Position).
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#positiontolocal)
     */
    positionToLocal( vector: Vector ): Vector

    /** Returns a Vector after converting a local Vector (Local Position) to a world Vector (World Position).
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#positiontoworld)
     */
    positionToWorld( vector: Vector ): Vector

    /** Rotates Object smoothly in the direction of the given Vector.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#rotate)
     */
    rotate( vector: Vector ): boolean

    /** Scales Object by a multiple.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#scale)
     */
    scale( vector: Vector): boolean

    /** Sets a Vector as the current angular velocity.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setangularvelocity)
     */
    setAngularVelocity( vector: Vector): boolean

    /** Instantly moves an Object to the given Vector. The Vector is interpreted as World Position.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setposition)
     */
    setPosition( vector: Vector ): boolean

    /** Moves the Object smoothly to the given Vector. The Vector is interpreted as World Position.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setpositionsmooth)
     */
    setPositionSmooth( vector:Vector, collide: boolean, fast: boolean): boolean

    /** Instantly rotates an Object to the given Vector.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setrotation)
     */
    setRotation( vector: Vector ): boolean

    /** Rotates the Object smoothly to the given Vector.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setrotationsmooth)
     */
    setRotationSmooth( vector:Vector, collide: boolean, fast: boolean ): boolean

    /** Sets a Vector as the current scale.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setscale)
     */
    setScale( vector: Vector ): boolean

    /** Sets a Vector as the current velocity.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setvelocity)
     */
    setVelocity( vector: Vector ): boolean

    /** Smoothly moves Object by the given Vector offset.
     * 
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#translate)
     */
    translate( vector: Vector ): boolean

    /*******************
     ** Tag Functions **
     *******************
     * https://api.tabletopsimulator.com/object/#tag-functions
     * These functions deal with the tags associated with the object. An individual tag is a  and is case-insensitive.
     */

    /**
     * Adds the specified tag to the object.
     * @param tag 
     */
    addTag( tag: string ): boolean

    /**
     * Returns a table of tags () that have been added to the object.
     */
    getTags(): object

    /**
     * Returns whether the object has any tags.
     */
    hasAnyTag(): boolean

    /**
     * Returns whether the object and the specified other object share at least one tag in common.
     * @param other 
     */
    hasMatchingTag( other: TabletopSimulatorObject ): boolean

    /**
     * Returns whether the object has the specified tag.
     * @param tag 
     */
    hasTag( tag: string ): boolean

    /**
     * Removes the specified tag from the object.
     * @param tag 
     */
    removeTag( tag: string ): boolean

    /**
     * Replaces all tags on the object with those contained in the specified table (containing ).
     * @param tag 
     */
    setTags( tags: string ): boolean

    /****************
     ** Classic UI **
     ****************
     * https://api.tabletopsimulator.com/object/#tag-functions
     * These functions deal with the tags associated with the object. An individual tag is a  and is case-insensitive.
     */

    /**
     * Removes all scripted buttons.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#clearbuttons)
     */
    clearButtons(): boolean
    /**
     * Removes all scripted inputs.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#clearinputs)
     */
    clearInputs(): boolean
    /**
     * Creates a scripted button attached to the Object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#createbutton)
     */
    createButton( parameters: ClassicUIButton ): boolean
    /**
     * Creates a scripted input attached to the Object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#createinput)
     */
    createInput( parameters: ClassicUIInput ): boolean
    /**
     * Modify an existing button.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#editbutton)
     */
    editButton( parameters: ClassicUIButton ): boolean
    /**
     * Modify an existing input.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#editinput)
     */
    editInput( parameters: ClassicUIInput ): boolean
    /**
     * Returns a Table of all buttons on this Object. The Table contains parameters tables with the same keys as seen in the createButton section, except each Table of parameters also contains an index entry. This is used to identify each button, used by editButton and removeButton.
     * 
     * 
     * Indexes start at 0.
     * @returns Returns a Table of all buttons on this Object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getbuttons)
     */
    getButtons(): any[]
    /**
     * Returns a Table of all inputs on this Object. The Table contains parameters tables with the same keys as seen in the createInput section, except each Table of parameters also contains an index entry. This is used to identify each input, used by editInput and removeInput.
     * 
     * Indexes start at 0.
     * @returns Returns a Table of all inputs on this Object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getinputs)
     */
    getInputs(): any[]
    /**
     * Removes a specific button.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#removebutton)
     */
    removeButton( index: int ): boolean
    /**
     * Removes a specific button.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#removeinput)
     */
    removeInput( index: int ): boolean
    
    //TODO: [Get Functions](https://api.tabletopsimulator.com/object/#get-functions)
    /** Returns a table in the same format as getObjects() for containers.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getattachments)
     */
    getAttachments(): TabletopSimulatorObjectMetaData
    /** Color tint.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getcolortint)
     */
    getColorTint(): Color
    /** Returns a Table with the Custom Object information of a Custom Object. See the [Custom Game Objects](https://api.tabletopsimulator.com/custom-game-objects/) page for the kind of information returned.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getcustomobject)
     */
    getCustomObject(): CustomObjectData
    /** Returns a table data structure representation of the object. Works with spawnObjectData(...).
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getdata)
     */
    getData(): TabletopSimulatorObjectMetaData
    /** Description, also shows as part of Object's tooltip.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getdescription)
     */
    getDescription(): string
    /** Settings impacting Fog of War being revealed.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getfogofwarreveal)
     */
    getFogOfWarReveal(): FogOfWarSettings
    /** Game Master Notes only visible for [Player Color](https://api.tabletopsimulator.com/player/colors/) Black.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getgmnotes)
     */
    getGMNotes(): string
    /** String of the Object's unique identifier.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getguid)
     */
    getGUID(): ObjectGUID
    /**
     * Returns a JSON string representation of the object. Works with [spawnObjectJSON(...)](https://api.tabletopsimulator.com/base/#spawnobjectjson).
     *
     * indented is optional and defaults to true.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#returns)
     */
    getJSON( indented: boolean): string

    /** Returns information on any joints attached to this object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getjoints)
     */
    getJoints(): TabletopSimulatorObjectJoint
    /** If the Object is locked.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getlock)
     */
    getLock(): boolean
    /** Name, also shows as part of Object's tooltip.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getname)
     */
    getName(): string
    /** Returns data describing the objects contained within in the zone/bag/deck.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getobjects)
     */
    getObjects(): TabletopSimulatorObjectMetaData[] | TabletopSimulatorObject[]
    /** Returns the number of objects contained within (if the Object is a bag, deck or stack), otherwise -1.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getquantity)
     */
    getQuantity(): int
    /** Returns the current rotationValue. Rotation values are used to give value to different rotations (like dice).
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getrotationvalue)
     */
    getRotationValue(): number | string
    /** Returns a Table of rotation values. Rotation values are used to give value to different rotations (like dice).
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getrotationvalues)
     */
    getRotationValues(): TabletopSimulatorObjectRotationAlias[]
    /** Returns a table of the player colors currently selecting the object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getselectingplayers)
     */
    getSelectingPlayers(): PlayerColor[]
    /** Current [state](https://kb.tabletopsimulator.com/host-guides/creating-states/) ID (index) an object is in. Returns -1 if there are no other states. State ids (indexes) start at 1.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getstateid)
     */
    getStateId(): int
    /** Returns a Table of information on the [states](https://kb.tabletopsimulator.com/host-guides/creating-states/) of an Object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getstates)
     */
    getStates(): TabletopSimulatorObjectState
    /** Returns the Object's value. This represents something different depending on the Object's [type](https://api.tabletopsimulator.com/object/#type).
     * 
     * **Important:**
     * 
     * If the Object has [rotation values](https://api.tabletopsimulator.com/object/#getrotationvalues), then this method will return the rotation value i.e. behave the same as [getRotationValue()](https://api.tabletopsimulator.com/object/#getrotationvalue).
     * @see [setValue(...)](https://api.tabletopsimulator.com/object/#setvalue) for more information.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getvalue)
     */
    getValue(): any
    /** Returns a list of zones that the object is currently occupying.
     * 
     * **Important:**
     * 
     * If the Object has [rotation values](https://api.tabletopsimulator.com/object/#getrotationvalues), then this method will return the rotation value i.e. behave the same as [getRotationValue()](https://api.tabletopsimulator.com/object/#getrotationvalue).
     * @example
     * ```lua
     * -- Print a comma separated list of GUIDs belonging to zones an object is currently occupying.
     * -- Lua Example
     * local guids = {}
     * 
     * for _, zone in ipairs(object.getZones()) do
     *     table.insert(guids, zone.guid)
     * end
     * 
     * if #guids > 0 then
     *     print("Object is contained within " .. table.concat(guids, ", "))
     * else
     *     print("Object is not contained within any zones")
     * end
     * ```
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getzones)
     */
    getZones(): TabletopSimulatorObject[]
    /** Returns true if the Object is (or will be) destroyed.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#isdestroyed)
     */
    isDestroyed(): boolean
    //TODO: [Set Functions](https://api.tabletopsimulator.com/object/#set-functions)
    /** Sets the Color tint.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setcolortint)
     */
    setColorTint( Color: Color ): boolean
    /** Sets a custom Object's properties.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setcustomobject)
     */
    setCustomObject( parameters: CustomObjectData ): boolean
    /** Sets a description for an Object. Shows in tooltip after delay.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setdescription)
     */
    setDescription( description: string): boolean
    /** Establish the settings and enable/disable an Object's revealing of Fog of War.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setfogofwarreveal)
     */
    setFogOfWarReveal( fog_settings: FogOfWarSettings): boolean
    /** Sets Game Master Notes only visible for Player Color Black.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setgmnotes)
     */
    setGMNotes( notes: string ): boolean
    /** Sets if an object is locked in place.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setlock)
     */
    setLock( lock: boolean ): boolean
    /** Sets a name for an Object. Shows in tooltip.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setname)
     */
    setName( name:string ): boolean
    /** Sets the Object's rotation value i.e. physically rotates the object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setrotationvalue)
     */
    setRotationValue( rotation_value: string | int | float ): boolean
    /** Sets rotation values of an object. Rotation values are used to give value to different rotations (like dice).
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setrotationvalues)
     */
    setRotationValues( rotation_values: TabletopSimulatorObjectRotationAlias[] ): boolean
    /** Sets state of an Object. State ids (indexes) start at 1.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setstate)
     */
    setState( state_id: int ): boolean
    /** Sets the Object's value. This represents something different depending on the Object's type.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setvalue)
     */
    setValue( value: int | string ): boolean


    //TODO: [Action Function](https://api.tabletopsimulator.com/object/#action-function)
    /** The Object supplied as param is destroyed and becomes a dummy Object child.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#addattachment)
     */
    addAttachment( Object: TabletopSimulatorObject ): boolean
    /** Adds a menu item to the objects right-click context menu.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#addcontextmenuitem)
     */
    addContextMenuItem( label: string,  toRunFunc: (playerColor: PlayerColor)=>void,  keep_open: boolean): boolean
    /** Clears all menu items added by function addContextMenuItem.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#clearcontextmenu)
     */
    clearContextMenu(): boolean
    /** Removes a child with the given index. Use getAttachments() to find out the index property.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#removeattachment)
     */
    removeAttachment( index: int ): TabletopSimulatorObject
    /** Detaches the children of this Object. Returns a table of object references
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#removeattachments)
     */
    removeAttachments(): TabletopSimulatorObject[]
    /** Destroys an attachment with the given index.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#destroyattachment)
     */
    destroyAttachment( index: int ): boolean
    /** Destroys all attachments.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#destroyattachments)
     */
    destroyAttachments(): boolean
    /** Adds object to player's selection.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#addtoplayerselection)
     */
    addToPlayerSelection( player_color: PlayerColor ): boolean
    /** Removes object from player's selection.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#removefromplayerselection)
     */
    removeFromPlayerSelection( player_color: PlayerColor ): boolean
    /** Flips Object over.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#flip)
     */
    flip(): boolean
    /** Copy/Paste this Object, returning a reference to the new Object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#clone)
     */
    clone( parameters: {position?: Vector, snap_to_grid: boolean }): TabletopSimulatorObject
    /** Cuts (splits) a deck at the given card count.
     * @param count How many cards down to cut the deck.
     * @return Cuts (splits) a deck down to a given card. In other words, it counts down from the top of the deck and makes a new deck of that size and puts the remaining cards in the other pile.
     * After the cut, the resulting decks much each have at least 2 cards. This means the parameter used must be between 2 and totalNumberOfCards - 2.
     * 
     * **Important**
     * New decks take a frame to be created. This means trying to act on them immediately will not work. Use a coroutine or timer to add a delay.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#cut)
     */
    cut( count: int ): [lowerDeck: TabletopSimulatorObject, upperDeck: TabletopSimulatorObject[]]
    /** Deals Objects to hand zones. Will deal from decks/bags/stacks as well as individual items. If dealing an individual item to a hand zone, it is a good idea to make sure that its [Member Variable](https://api.tabletopsimulator.com/object/#member-variables) for `use_hands` is `true`.
     * @param number How many to deal.
     * @param player_color The Player Color to deal to. Defaults to an empty string. If not supplied, it will attempt to deal to all seated players.
     * @param index Index of hand zone to deal to. Defaults to the first created hand zone.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#deal)
     */
    deal( number: int,  player_color: PlayerColor, index: int): boolean
    /** Deals from a deck to a position relative to the hand zone.
     * @param offset The x/y/z offset to deal to around the given hand zone.
     * @param flip If the card is flipped over when dealt.
     * @param player_color Hand zone Player Color to offset dealing to.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#dealtocolorwithoffset)
     */
    dealToColorWithOffset( offset: Vector, flip: boolean, player_color: PlayerColor ): TabletopSimulatorObject
    /** Destroys Object. Allows for self.destruct().
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#destruct)
     */
    destruct(): boolean
    /** Forces an Object, if held by a player, to be dropped.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#drop)
     */
    drop(): boolean
    /** Creates a highlight around an Object. duration is optional and specified in seconds, when omitted the Object remains highlighted.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#highlighton)
     */
    highlightOn( color: Color, duration: float ): boolean
    /** Removes a highlight from around an Object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#highlightoff)
     */
    highlightOff( color: Color ): boolean
    /** Joints objects together, in the same way the Joint tool does.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#jointto)
     */
    jointTo( object: Color, parameters: JointType ): boolean
    /** Places an object into a container (chip stacks/bags/decks).
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#putobject)
     */
    putObject( put_object: TabletopSimulatorObject ): TabletopSimulatorObject
    /** Shuffles deck/bag, rolls dice/coin, lifts other objects into the air. Same as pressing R by default. If the optional parameter color is used, this function will trigger onObjectRandomized(), passing that player color.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#randomize)
     */
    randomize( color: PlayerColor ): boolean
    /** Registers this object for Global collision events.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#registercollisions)
     */
    registerCollisions( stay: boolean ): boolean
    /** Returns Object reference of itself after it respawns itself.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#reload)
     */
    reload(): TabletopSimulatorObject
    /** Resets this Object. Resetting a Deck brings all the Cards back into it. Resetting a Bag clears its contents (works for both Loot and Infinite Bags).
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#reset)
     */
    reset(): boolean
    /** Rolls dice/coins.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#roll)
     */
    roll(): boolean
    /** Shuffles/shakes up contents of a deck or bag.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#shuffle)
     */
    shuffle(): boolean
    /** Returns an Object reference to a new state after randomly selecting and changing to one.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#shufflestates)
     */
    shuffleStates(): TabletopSimulatorObject
    /** Splits a deck, as evenly as possible, into a number of piles.
     * 
     * **Important:**
     * New decks take a frame to be created. This means trying to act on them immediately will not work. Use a coroutine or timer to add a delay.
     * @param piles How many piles to split the deck into.
     * 
     * Optional, if no value is provided, it is split into two piles.
     * 
     * Minimum Value: 2
     * 
     * Maximum Value: Number-Of-Cards-In-Deck / 2
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#split)
     */
    split( piles: int ): TabletopSimulatorObject[]
    /** Uses the spread action on a deck.
     * 
     * **Important:**
     * Cards take a frame to be created. This means trying to act on them immediately will not work. Use a coroutine or timer to add a delay.
     * @param distance How far apart should the cards be.
     * 
     * Optional, if no value is provided, they will be 0.6 inches apart.
     * 
     * Negative values will spread to the left instead of the right.
     * @return The number of Objects in the table is equal to the number of cards in the deck. They are returned in the order they were in the deck.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#spread)
     */
    spread( distance: float): TabletopSimulatorObject[]
    /** Takes an object out of a container (bag/deck/chip stack), returning a reference to the object that was taken out.
     * Objects that are taken out of a container will take one or more frames to spawn. Certain interactions (e.g. physics) will not be able to take place until the object has finished spawning.
     * 
     * **CAUTION**
     * 
     * Certain containers only exist whilst they have more than one object contained within them (e.g. decks). Once you remove the second last object from a container, the container will be destroyed and the remaining contained object will spawn in its place. After calling takeObject(...) you can check for a remainder.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#takeobject)
     */
    takeObject( parameters: {
        /** A Vector of the position to place Object. */
        position?: Vector, 
        /** A Vector of the rotation of the Object. */
        rotation?: Vector, 
        /** If the Object is flipped over. */
        flip: boolean, 
        /** GUID of the Object to take. */
        guid: ObjectGUID, 
        /** Index of the Object to take. */
        index: int, 
        /** If an object is taken from the top (vs bottom). */
        top: boolean,
        /** If the taken Object moves smoothly or instantly. */
        smooth: boolean, 
        /** Callback which will be called when the taken object has finished spawnning. */
        callback_function: (object: TabletopSimulatorObject) => void
    } ): TabletopSimulatorObject
    /** Unregisters this object for Global collision events.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#unregistercollisions)
     */
    unregisterCollisions(): boolean

    //TODO: [Hide Functions](https://api.tabletopsimulator.com/object/#hide-functions)
    /** Hides the Object from the specified players, as if it were in a hand zone.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#sethiddenfrom)
     */
    setHiddenFrom( players: PlayerColor[] ): boolean
    /** Hides the Object from the specified players, as if it were in a hidden zone.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setinvisibleto)
     */
    setInvisibleTo( players: PlayerColor[] ): boolean
    /** A more advanced version of setHiddenFrom(...).
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#attachhider)
     */
    attachHider( id: string,  hidden: boolean,  players: PlayerColor[] ): boolean
    /** A more advanced version of setInvisibleTo(...).
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#attachinvisiblehider)
     */
    attachInvisibleHider( id: string,  hidden: boolean,  players: PlayerColor[] ): boolean
    //TODO: [Global Function](https://api.tabletopsimulator.com/object/#global-function)
    /** Add a Decal onto an object or the game world.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#adddecal)
     */
    addDecal( parameters: DecalParameters ): boolean
    /** Used to call a Lua function on another entity.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#call)
     */
    call( func_name:string ,  func_params: any[] ): any
    /** Returns information on all decals attached to this object or the world.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getdecals)
     */
    getDecals(): DecalParameters[]
    /** Get a Lua script as a string from the entity.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getluascript)
     */
    getLuaScript(): string
    /** Returns a table representing a list of snap points.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getsnappoints)
     */
    getSnapPoints(): SnapPoint[]
    /** Data value of a variable in another Object's script. Can only return a table.
     * TODO: Figure out what this was
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#gettable)
     */
    getTable( table_name: string ): any[]
    /** Data value of a variable in another entity's script. Cannot return a table.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getvar)
     */
    getVar( var_name: string ): any
    /** Returns Table of data representing the current Vector Lines on this entity. See setVectorLines for table format.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#getvectorlines)
     */
    getVectorLines(): VectorLine[]
    /** Sets which decals are on an object. This removes other decals already present, and can remove all decals as well.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setdecals)
     */
    setDecals( parameters: DecalParameters ): boolean
    /** Input a string as an entity's Lua script. Generally only used after spawning a new Object.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setluascript)
     */
    setLuaScript( script: string ): boolean
    /** Replaces existing snap points with the specified list of snap points.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setsnappoints)
     */
    setSnapPoints( snap_points: SnapPoint[] ): boolean
    /** Creates/updates a variable in another entity's script. Only used for tables.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#settable)
     */
    setTable( func_name: string,  data: any[] | object ): boolean
    /** Creates/updates a variable in another entity's script. Cannot set a table.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setvar)
     */
    setVar( func_name: string,  data: any ): boolean
    /** Spawns Vector Lines from a list of parameters on this entity.
     * @see [Tabletop Simulator API Docs](https://api.tabletopsimulator.com/object/#setvectorlines)
     */
    setVectorLines( parameters: VectorLine[] ): boolean
}