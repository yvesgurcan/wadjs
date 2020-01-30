export const TEXT = 'text';
export const MAPDATA = 'mapdata';
export const MUSIC = 'music';
export const MIDI = 'midi';
export const MP3 = 'mp3';
export const PNG = 'png';
export const MUS = 'mus';
export const GRAPHIC = 'graphic';
export const FLAT = 'flat';
export const MARKER = 'marker';
export const ENDOOM = 'ENDOOM';
export const TEXTUREx = ['TEXTURE1', 'TEXTURE2'];

export const TEXTLUMPS = [
    'DEHACKED',
    'MAPINFO',
    'ZMAPINFO',
    'EMAPINFO',
    'DMXGUS',
    'DMXGUSC',
    'WADINFO',
    'EMENUS',
    'MUSINFO',
    'SNDINFO',
    'GLDEFS',
    'KEYCONF',
    'SCRIPTS',
    'LANGUAGE',
    'DECORATE',
    'SBARINFO',
    'MENUDEF'
];
export const DATA_LUMPS = [
    'PLAYPAL',
    'COLORMAP',
    'TEXTURE1',
    'TEXTURE2',
    'PNAMES',
    'ENDOOM'
];

export const DEFAULT_EXTENSION = 'lmp';
export const EXTENSIONS = {
    text: 'txt',
    mp3: 'mp3',
    mus: 'mus',
    midi: 'mid',
    png: 'png'
};

/* Environment */

export const NO_BRAND_ENV = 'development-no-brand';

/* Workers */

export const SERVICE_WORKER_CORE = 'service-worker-core.js';

export const WEB_WORKER_MAX_RETRIES = 1;

/* Web worker internal errors */

export const INVALID_TEXT = 'INVALID_TEXT';

/* Themes */

export const DARK_THEME = 'dark';

export const LIGHT_THEME = 'light';

/* Input types */

export const CHECKBOX = 'checkbox';

/* File formats */

export const SUPPORTED_FORMATS = ['.wad', '.zip', '.pk3', '.json'];

export const VALID_FILE_FORMATS = [
    '',
    'application/x-doom',
    'application/zip',
    'application/json'
];

/* WAD types */

export const IWAD = 'IWAD';
export const PWAD = 'PWAD';
export const VALID_WAD_TYPES = [IWAD, PWAD];

/* Lump types */

export const MAP = 'maps';

export const INTERMISSION = 'intermission';

export const STATUS_BAR = 'status bar';

export const MENU = 'menu';

export const IMAGE_LUMPS = [
    'patches',
    'flats',
    'sprites',
    MENU,
    INTERMISSION,
    STATUS_BAR
];

export const UNCATEGORIZED = 'uncategorized';

/* Lump names */

export const THINGS = 'THINGS';

export const TEXTMAP = 'TEXTMAP';

export const ENDMAP = 'ENDMAP';

export const MAP_LUMPS = [
    THINGS,
    'LINEDEFS',
    'SIDEDEFS',
    'VERTEXES',
    'SEGS',
    'TEXTMAP',
    'SSECTORS',
    'NODES',
    'SECTORS',
    'REJECT',
    'BLOCKMAP',
    // Hexen only
    'BEHAVIOR',
    // ZDoom only? (optional)
    'SCRIPTS',
    // Universal Doom Map Format only
    'ZNODES',
    'DIALOGUE'
];

export const OPENGL_MAP_LUMPS = [
    'GL_VERT',
    'GL_SEGS',
    'GL_SSECT',
    'GL_NODES',
    'GL_PVS'
];

export const START_MARKERS = new RegExp(/^[0-9a-zA-Z]{0,2}_START$/);

export const END_MARKERS = new RegExp(/^[0-9a-zA-Z]{0,2}_END$/);

export const TEXTURE_LUMPS = new RegExp(/^TEXTURE[0-9a-zA-Z]$/);

export const INTERMISSION_LUMPS = new RegExp(/^WI[0-9a-zA-Z_]{1,}$/);

// Doom II
export const INTERMISSION_MAP_NAME_LUMPS = new RegExp(
    /^CWILV[0-9a-zA-Z_]{1,}$/
);

export const STATUS_BAR_LUMPS = new RegExp(/^(ST|AMM|BRDR_)[0-9a-zA-Z_]{1,}$/);

/* Unique lumps */

export const ANSI_LUMPS = [
    // Doom or Chex Quest
    'ENDOOM',
    // Heretic
    'ENDTEXT',
    // Strife
    'ENDSTRF',
    // Boom
    'ENDBOOM'
    // lack of ANSI lump in IWAD = Hexen
];

export const MAPINFO = ['MAPINFO', 'ZMAPINFO'];

export const PLAYPAL = 'PLAYPAL';
export const COLORMAP = 'COLORMAP';

export const PNAMES = 'PNAMES';

export const SBARINFO = 'SBARINFO';

// Hexen only
export const SNDINFO = 'SNDINFO';

export const MENU_SCREENS = ['TITLEPIC', 'HELP', 'HELP1', 'HELP2', 'CREDIT'];

export const INTER_SCREENS = [
    'INTERPIC',
    // Doom 1 registered
    'ENDPIC',
    'VICTORY2',
    'PFUB1',
    'PFUB2',
    // Doom 2
    'BOSSBACK'
];

export const MUSIC_LUMPS = ['GENMIDI', 'DMXGUS', 'DMXGUSC'];

export const DEMO_LUMPS = ['DEMO1', 'DEMO2', 'DEMO3', 'DEMO4'];

export const END_LUMPS = new RegExp(/^END[0-9]{1,}$/);

/* Lump original formats */

export const ANSI = 'ANSI';

/* Lump special values */

export const LUMP_INDEX_ENTRY_SIZE = 16;
export const LUMP_INDEX_ENTRY_OFFSET_TO_LUMP_SIZE = 4;
export const LUMP_INDEX_ENTRY_OFFSET_TO_LUMP_NAME = 8;

export const COLOR_COUNT_PER_PALETTE = 256;
export const PALETTE_SIZE = 768;
export const COLORMAP_SIZE = 256;

export const BYTES_PER_COLOR = 3;
export const GREEN_COLOR_OFFSET = 1;
export const BLUE_COLOR_OFFSET = 2;

export const FLAT_DIMENSIONS = 64;

export const IMAGE_DATA_HEADER_SIZE = 8;
export const IMAGE_DATA_BOUNDARY = 255;

export const TRANSPARENT_PIXEL = -1;

export const HEXEN_SOUND_ARCHIVE_PATH = '$ARCHIVEPATH';

export const HEXEN_SOUND_REGISTERED = '$REGISTERED';

export const HEXEN_MUSIC_KEYWORD = '$MAP';

/* MUS -> MIDI conversion */

export const MUS_HEADER = 'MUS';
export const MUS_HEADER_SIGNATURE = [
    'M'.charCodeAt(0),
    'U'.charCodeAt(0),
    'S'.charCodeAt(0),
    0x1a
].join(' ');
export const MIDI_HEADER = 'MThd';
export const MIDI_HEADER_SIZE = 4;
export const MIDI_HEADER_DATA = [
    'M'.charCodeAt(0),
    'T'.charCodeAt(0),
    'h'.charCodeAt(0),
    'd'.charCodeAt(0), // Main header
    0x00,
    0x00,
    0x00,
    0x06, // Header size
    0x00,
    0x00, // MIDI type (0)
    0x00,
    0x01, // Number of tracks
    0x00,
    0x46, // Resolution
    'M'.charCodeAt(0),
    'T'.charCodeAt(0),
    'r'.charCodeAt(0),
    'k'.charCodeAt(0), // Start of track
    0x00,
    0x00,
    0x00,
    0x00 // Placeholder for track length
];

export const MUS_NUM_CHANNELS = 16;
export const MUS_PERCUSSION_CHANNEL = 15;
export const MIDI_PERCUSSION_CHANNEL = 9;
export const MIDI_TRACKLENGTH_OFS = 18;

export const MIDI_CONTROLLER_MAP = [
    0x00,
    0x20,
    0x01,
    0x07,
    0x0a,
    0x0b,
    0x5b,
    0x5d,
    0x40,
    0x43,
    0x78,
    0x7b,
    0x7e,
    0x7f,
    0x79
];

// MUS event codes
export const MUS_RELEASE_KEY = 0x00;
export const MUS_PRESS_KEY = 0x10;
export const MUS_PITCH_WHEEL = 0x20;
export const MUS_SYSTEM_EVENT = 0x30;
export const MUS_CHANGE_CONTROLLER = 0x40;
export const MUS_SCORE_END = 0x60;

// MIDI event codes
export const MIDI_RELEASE_KEY = 0x80;
export const MIDI_PRESS_KEY = 0x90;
export const MIDI_CHANGE_CONTROLLER = 0xb0;
export const MIDI_CHANGE_PATCH = 0xc0;
export const MIDI_PITCH_WHEEL = 0xe0;

/* MIDI player */

export const MIDI_PATCH_URL = '/public/midi/pat/';

export const MIDI_PLAYER_MESSAGE_PREFIX = 'Midi player:';

export const MIDI_ERROR = 'MIDI_ERROR';

export const MIDI_STATUS = 'MIDI_STATUS';

export const MIDI_PLAY = 'MIDI_PLAY';

export const MIDI_END = 'MIDI_END';

/* DMX -> PCM conversion */

export const DMX_HEADER_SIZE = 18;

export const DMX_TAIL_PADDING = 2;

/* PCM Player */

export const DEFAULT_PCM_SAMPLE_RATE = 11025;

export const DEFAULT_PCM_CONFIGURATION = {
    encoding: '8bit',
    channels: 1,
    volume: 1,
    logging: false
};

export const PCM_MAX_VALUES = {
    '8bit': 255,
    '16bit': 65535,
    '32bit': 4294967295,
    '32bitFloat': 1
};

export const PCM_TYPED_ARRAYS = {
    '8bit': Uint8Array,
    '16bit': Uint16Array,
    '32bit': Uint32Array,
    '32bitFloat': Float32Array
};

export const PCM_PLAYER_MESSAGE_PREFIX = 'PCM player:';

export const PCM_STATUS = 'PCM_STATUS';

export const PCM_ERROR = 'PCM_ERROR';

export const PCM_PLAY = 'PCM_PLAY';

export const PCM_PAUSE = 'PCM_PAUSE';

export const PCM_STOP = 'PCM_STOP';

export const PCM_END = 'PCM_END';

/* Map data */

export const MAP_PADDING = 64;

export const MAP_DATA_SCHEMAS = {
    THINGS: {
        size: 10,
        properties: [
            {
                name: 'x',
                format: 'Int16'
            },
            {
                name: 'y',
                format: 'Int16'
            },
            {
                name: 'angle',
                format: 'Int16'
            },
            {
                name: 'type',
                format: 'Int16'
            },
            {
                name: 'flags',
                format: 'Int16'
            }
        ]
    },
    VERTEXES: {
        size: 4,
        properties: [
            {
                name: 'x',
                format: 'Int16'
            },
            {
                name: 'y',
                format: 'Int16'
            }
        ]
    },
    LINEDEFS: {
        size: 14,
        properties: [
            { name: 'vertex1' },
            { name: 'vertex2' },
            { name: 'flags' },
            { name: 'action' },
            { name: 'tag' },
            { name: 'rightSidedef' },
            { name: 'leftSidedef' }
        ]
    },
    SIDEDEFS: {
        size: 30,
        properties: [
            { name: 'xOffset' },
            { name: 'yOffset' },
            { name: 'upper', format: 'name' },
            { name: 'lower', format: 'name' },
            { name: 'middle', format: 'name' },
            { name: 'sector' }
        ]
    },
    SECTORS: {
        size: 26,
        properties: [
            { name: 'zFloor' },
            { name: 'zCeil' },
            { name: 'floorFlat', format: 'name' },
            { name: 'ceilFlat', format: 'name' },
            { name: 'light' },
            { name: 'type' },
            { name: 'tag' }
        ]
    },
    SEGS: {
        size: 12,
        properties: [
            { name: 'vertex1' },
            { name: 'vertex2' },
            { name: 'angle' },
            { name: 'linedef' },
            { name: 'direction' },
            { name: 'offset' }
        ]
    },
    SSECTORS: {
        size: 4,
        properties: [{ name: 'segCount' }, { name: 'first' }]
    },
    NODES: {
        size: 28,
        properties: [
            { name: 'partitionX' },
            { name: 'partitionY' },
            { name: 'changeX' },
            { name: 'changeY' },
            // different form original
            { name: 'boundsRightTop' },
            { name: 'boundsRightBottom' },
            { name: 'boundsRightLeft' },
            { name: 'boundsRightRight' },
            // different form original
            { name: 'boundsLeftTop' },
            { name: 'boundsLeftBottom' },
            { name: 'boundsLeftLeft' },
            { name: 'boundsLeftRight' },
            { name: 'childRight' },
            { name: 'childLeft' }
        ]
    }
};

export const HEXEN_MAP_DATA_SCHEMAS = {
    THINGS: {
        size: 20,
        properties: [
            {
                name: 'tid',
                format: 'Int16'
            },
            {
                name: 'x',
                format: 'Int16'
            },
            {
                name: 'y',
                format: 'Int16'
            },
            {
                name: 'z',
                format: 'Int16'
            },
            {
                name: 'angle',
                format: 'Int16'
            },
            {
                name: 'type',
                format: 'Int16'
            },
            {
                name: 'flags',
                format: 'Int16'
            },
            {
                name: 'special',
                format: 'Int8',
                littleEndian: false
            },
            // different from original
            {
                name: 'arg0',
                format: 'Int8',
                littleEndian: false
            },
            {
                name: 'arg1',
                format: 'Int8',
                littleEndian: false
            },
            {
                name: 'arg2',
                format: 'Int8',
                littleEndian: false
            },
            {
                name: 'arg3',
                format: 'Int8',
                littleEndian: false
            },
            {
                name: 'arg4',
                format: 'Int8',
                littleEndian: false
            }
        ]
    },
    LINEDEFS: {
        size: 16,
        properties: [
            { name: 'vertex1' },
            { name: 'vertex2' },
            { name: 'flags' },
            {
                name: 'action',
                format: 'Uint8',
                littleEndian: false
            },
            // different from original
            {
                name: 'arg0',
                format: 'Int8',
                littleEndian: false
            },
            {
                name: 'arg1',
                format: 'Int8',
                littleEndian: false
            },
            {
                name: 'arg2',
                format: 'Int8',
                littleEndian: false
            },
            {
                name: 'arg3',
                format: 'Int8',
                littleEndian: false
            },
            {
                name: 'arg4',
                format: 'Int8',
                littleEndian: false
            },
            { name: 'rightSidedef' },
            { name: 'leftSidedef' }
        ]
    }
};

export const DEFAULT_MAP_PALETTE = {
    background: {
        blue: 0,
        green: 0,
        red: 0
    },
    solidWall: {
        blue: 0,
        green: 0,
        red: 255
    },
    lowerWall: {
        blue: 75,
        green: 123,
        red: 191
    },
    upperWall: {
        blue: 0,
        green: 255,
        red: 255
    },
    sameHeight: {
        blue: 131,
        green: 131,
        red: 131
    }
};

/* ANSI conversion */

export const ANSI_CODE_PAGE_437_TABLES = [
    '',
    '☺',
    '☻',
    '♥',
    '♦',
    '♣',
    '♠',
    '•',
    '◘',
    '○',
    '◙',
    '♂',
    '♀',
    '♪',
    '♫',
    '☼',
    '►',
    '◄',
    '↕',
    '‼',
    '¶',
    '§',
    '▬',
    '↨',
    '↑',
    '↓',
    '→',
    '←',
    '∟',
    '↔',
    '▲',
    '▼',
    ' ',
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    "'",
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '[',
    '\\',
    ']',
    '^',
    '_',
    '`',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '{',
    '|',
    '}',
    '~',
    '⌂',
    'Ç',
    'ü',
    'é',
    'â',
    'ä',
    'à',
    'å',
    'ç',
    'ê',
    'ë',
    'è',
    'ï',
    'î',
    'ì',
    'Ä',
    'Å',
    'É',
    'æ',
    'Æ',
    'ô',
    'ö',
    'ò',
    'û',
    'ù',
    'ÿ',
    'Ö',
    'Ü',
    '¢',
    '£',
    '¥',
    '₧',
    'ƒ',
    'á',
    'í',
    'ó',
    'ú',
    'ñ',
    'Ñ',
    'ª',
    'º',
    '¿',
    '⌐',
    '¬',
    '½',
    '¼',
    '¡',
    '«',
    '»',
    '░',
    '▒',
    '▓',
    '│',
    '┤',
    '╡',
    '╢',
    '╖',
    '╕',
    '╣',
    '║',
    '╗',
    '╝',
    '╜',
    '╛',
    '┐',
    '└',
    '┴',
    '┬',
    '├',
    '─',
    '┼',
    '╞',
    '╟',
    '╚',
    '╔',
    '╩',
    '╦',
    '╠',
    '═',
    '╬',
    '╧',
    '╨',
    '╤',
    '╥',
    '╙',
    '╘',
    '╒',
    '╓',
    '╫',
    '╪',
    '┘',
    '┌',
    '█',
    '▄',
    '▌',
    '▐',
    '▀',
    'α',
    'ß',
    'Γ',
    'π',
    'Σ',
    'σ',
    'µ',
    'τ',
    'Φ',
    'Θ',
    'Ω',
    'δ',
    '∞',
    'φ',
    'ε',
    '∩',
    '≡',
    '±',
    '≥',
    '≤',
    '⌠',
    '⌡',
    '÷',
    '≈',
    '°',
    '∙',
    '·',
    '√',
    'ⁿ',
    '²',
    '■',
    ' '
];

export const ANSI_BACKGROUND_COLOR_CODES = [
    'black',
    'blue',
    'green',
    'cyan',
    'red',
    'magenta',
    'brown',
    'light-gray'
];

export const ANSI_FOREGROUND_COLOR_CODES = [
    'black',
    'blue',
    'green',
    'cyan',
    'red',
    'magenta',
    'brown',
    'light-gray',
    'dark-gray',
    'light-blue',
    'light-green',
    'light-cyan',
    'light-red',
    'light-magenta',
    'yellow',
    'white'
];
