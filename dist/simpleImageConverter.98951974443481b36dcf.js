!function(I){var n={};function g(U){if(n[U])return n[U].exports;var C=n[U]={i:U,l:!1,exports:{}};return I[U].call(C.exports,C,C.exports,g),C.l=!0,C.exports}g.m=I,g.c=n,g.d=function(I,n,U){g.o(I,n)||Object.defineProperty(I,n,{enumerable:!0,get:U})},g.r=function(I){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},g.t=function(I,n){if(1&n&&(I=g(I)),8&n)return I;if(4&n&&"object"==typeof I&&I&&I.__esModule)return I;var U=Object.create(null);if(g.r(U),Object.defineProperty(U,"default",{enumerable:!0,value:I}),2&n&&"string"!=typeof I)for(var C in I)g.d(U,C,function(n){return I[n]}.bind(null,C));return U},g.n=function(I){var n=I&&I.__esModule?function(){return I.default}:function(){return I};return g.d(n,"a",n),n},g.o=function(I,n){return Object.prototype.hasOwnProperty.call(I,n)},g.p="",g(g.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./app/lib/constants.js\nvar TEXT = 'text';\nvar MAPDATA = 'mapdata';\nvar MUSIC = 'music';\nvar MIDI = 'midi';\nvar MP3 = 'mp3';\nvar PNG = 'png';\nvar MUS = 'mus';\nvar GRAPHIC = 'graphic';\nvar FLAT = 'flat';\nvar MARKER = 'marker';\nvar ENDOOM = 'ENDOOM';\nvar TEXTUREx = ['TEXTURE1', 'TEXTURE2'];\nvar TEXTLUMPS = ['DEHACKED', 'MAPINFO', 'ZMAPINFO', 'EMAPINFO', 'DMXGUS', 'DMXGUSC', 'WADINFO', 'EMENUS', 'MUSINFO', 'SNDINFO', 'GLDEFS', 'KEYCONF', 'SCRIPTS', 'LANGUAGE', 'DECORATE', 'SBARINFO', 'MENUDEF'];\nvar DATA_LUMPS = ['PLAYPAL', 'COLORMAP', 'TEXTURE1', 'TEXTURE2', 'PNAMES', 'ENDOOM'];\nvar DEFAULT_EXTENSION = 'lmp';\nvar EXTENSIONS = {\n  text: 'txt',\n  mp3: 'mp3',\n  mus: 'mus',\n  midi: 'mid',\n  png: 'png'\n};\nvar IWAD = 'IWAD';\nvar PWAD = 'PWAD';\nvar VALID_WAD_TYPES = [IWAD, PWAD];\nvar SUPPORTED_FORMATS = ['.wad', '.zip', '.pk3', '.json'];\nvar VALID_FILE_FORMATS = ['', 'application/x-doom', 'application/zip', 'application/json'];\n/* Lump types */\n\nvar MAP = 'maps';\nvar INTERMISSION = 'intermission';\nvar STATUS_BAR = 'status bar';\nvar MENU = 'menu';\nvar IMAGE_LUMPS = ['patches', 'flats', 'sprites', MENU, INTERMISSION, STATUS_BAR];\nvar UNCATEGORIZED = 'uncategorized';\n/* Lump names */\n\nvar THINGS = 'THINGS';\nvar TEXTMAP = 'TEXTMAP';\nvar ENDMAP = 'ENDMAP';\nvar MAP_LUMPS = [THINGS, 'LINEDEFS', 'SIDEDEFS', 'VERTEXES', 'SEGS', 'TEXTMAP', 'SSECTORS', 'NODES', 'SECTORS', 'REJECT', 'BLOCKMAP', // Hexen only\n'BEHAVIOR', // ZDoom only? (optional)\n'SCRIPTS', // Universal Doom Map Format only\n'ZNODES', 'DIALOGUE'];\nvar OPENGL_MAP_LUMPS = ['GL_VERT', 'GL_SEGS', 'GL_SSECT', 'GL_NODES', 'GL_PVS'];\nvar INTERMISSION_LUMPS = new RegExp(/WI[0-9a-zA-Z_]{1,}$/);\nvar STATUS_BAR_LUMPS = new RegExp(/(ST|AMM|BRDR_)[0-9a-zA-Z_]{1,}$/);\n/* Unique lumps */\n\nvar MAPINFO = ['MAPINFO', 'ZMAPINFO'];\nvar PLAYPAL = 'PLAYPAL';\nvar COLORMAP = 'COLORMAP';\nvar PNAMES = 'PNAMES';\nvar SBARINFO = 'SBARINFO';\nvar MENU_SCREENS = ['TITLEPIC', 'HELP', 'HELP1', 'HELP2', 'CREDIT'];\nvar INTERMISSION_SCREEN = 'INTERPIC';\nvar MUSIC_LUMPS = ['GENMIDI', 'DMXGUS', 'DMXGUSC', // Hexen only\n'SNDINFO'];\nvar DEMO_LUMPS = ['DEMO1', 'DEMO2', 'DEMO3', 'DEMO4'];\nvar LUMP_INDEX_ENTRY_SIZE = 16;\nvar LUMP_INDEX_ENTRY_OFFSET_TO_LUMP_SIZE = 4;\nvar LUMP_INDEX_ENTRY_OFFSET_TO_LUMP_NAME = 8;\nvar COLOR_COUNT_PER_PALETTE = 256;\nvar PALETTE_SIZE = 768;\nvar COLORMAP_SIZE = 256;\nvar BYTES_PER_COLOR = 3;\nvar GREEN_COLOR_OFFSET = 1;\nvar BLUE_COLOR_OFFSET = 2;\nvar FLAT_DIMENSIONS = 64;\nvar IMAGE_DATA_HEADER_SIZE = 8;\nvar IMAGE_DATA_BOUNDARY = 255;\nvar TRANSPARENT_PIXEL = -1;\n/* MUS -> MIDI conversion */\n\nvar MUS_HEADER = 'MUS';\nvar MIDI_HEADER = 'MThd';\nvar MIDI_HEADER_SIZE = 4;\nvar MIDI_HEADER_DATA = ['M'.charCodeAt(0), 'T'.charCodeAt(0), 'h'.charCodeAt(0), 'd'.charCodeAt(0), // Main header\n0x00, 0x00, 0x00, 0x06, // Header size\n0x00, 0x00, // MIDI type (0)\n0x00, 0x01, // Number of tracks\n0x00, 0x46, // Resolution\n'M'.charCodeAt(0), 'T'.charCodeAt(0), 'r'.charCodeAt(0), 'k'.charCodeAt(0), // Start of track\n0x00, 0x00, 0x00, 0x00];\nvar MUS_NUM_CHANNELS = 16;\nvar MUS_PERCUSSION_CHANNEL = 15;\nvar MIDI_PERCUSSION_CHANNEL = 9;\nvar MIDI_TRACKLENGTH_OFS = 18;\nvar MIDI_CONTROLLER_MAP = [0x00, 0x20, 0x01, 0x07, 0x0A, 0x0B, 0x5B, 0x5D, 0x40, 0x43, 0x78, 0x7B, 0x7E, 0x7F, 0x79]; // MUS event codes\n\nvar MUS_RELEASE_KEY = 0x00;\nvar MUS_PRESS_KEY = 0x10;\nvar MUS_PITCH_WHEEL = 0x20;\nvar MUS_SYSTEM_EVENT = 0x30;\nvar MUS_CHANGE_CONTROLLER = 0x40;\nvar MUS_SCORE_END = 0x60; // MIDI event codes\n\nvar MIDI_RELEASE_KEY = 0x80;\nvar MIDI_PRESS_KEY = 0x90;\nvar MIDI_CHANGE_CONTROLLER = 0xB0;\nvar MIDI_CHANGE_PATCH = 0xC0;\nvar MIDI_PITCH_WHEEL = 0xE0;\n// CONCATENATED MODULE: ./app/workers/simpleImageConverter.js\n\n\nfunction buildColorIndexReferences(data) {\n    const colorIndexReferences = [];\n\n    for (let i = 0; i < data.byteLength; i++) {\n        colorIndexReferences.push(data.getUint8(i));\n    }\n\n    return colorIndexReferences;\n}\n\nasync function convertColorIndexesReferencesToBlob(\n    colorIndexReferences,\n    width,\n    height,\n    palette,\n) {\n    if (palette.length !== COLOR_COUNT_PER_PALETTE) {\n        console.error('The palette does not have enough colors to draw images.');\n        return null;\n    }\n\n    try {\n        const canvas = new OffscreenCanvas(height, width);\n        canvas.height = height;\n        canvas.width = width;\n        const context = canvas.getContext('2d');\n\n        const imageData = context.createImageData(\n            canvas.width,\n            canvas.height,\n        );\n\n        for (let i = 0; i < colorIndexReferences.length; i++) {\n            const { red, green, blue } = palette[colorIndexReferences[i]];\n            imageData.data[(i * 4) + 0] = red;\n            imageData.data[(i * 4) + 1] = green;\n            imageData.data[(i * 4) + 2] = blue;\n            imageData.data[(i * 4) + 3] = 255;\n        }\n        const newCanvas = new OffscreenCanvas(height, width);\n        newCanvas.height = imageData.height;\n        newCanvas.width = imageData.width;\n        newCanvas.getContext('2d').putImageData(imageData, 0, 0);\n        context.imageSmoothingEnabled = false;\n        context.drawImage(newCanvas, 0, 0);\n\n        const blob = await canvas.convertToBlob();\n\n        return blob;\n    } catch (error) {\n        console.error('An error occurred while converting the color index references to a blob', { error });\n        return '';\n    }\n}\n\nonmessage = async (message) => {\n    const {\n        wadId,\n        lump,\n        palette,\n    } = message.data;\n\n    const {\n        name, data, width, height,\n    } = lump;\n\n    console.log(`Converting '${name}' from simple color index references to PNG data URL (WAD: '${wadId}') ...`);\n\n    const colorIndexReferences = buildColorIndexReferences(data);\n\n    const blob = await convertColorIndexesReferencesToBlob(\n        colorIndexReferences,\n        width,\n        height,\n        palette,\n    );\n\n    if (blob) {\n        console.log(`Converted '${name}' from simple color index references to blob (WAD: '${wadId}').`);\n    } else {\n        console.error(`Could not convert '${name}' from simple color index references to blob (WAD: '${wadId}').`);\n    }\n\n    postMessage({\n        wadId,\n        lumpId: name,\n        image: blob,\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9saWIvY29uc3RhbnRzLmpzP2I2NGQiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dvcmtlcnMvc2ltcGxlSW1hZ2VDb252ZXJ0ZXIuanM/MjQ3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmV4cG9ydCBjb25zdCBNQVBEQVRBID0gJ21hcGRhdGEnO1xuZXhwb3J0IGNvbnN0IE1VU0lDID0gJ211c2ljJztcbmV4cG9ydCBjb25zdCBNSURJID0gJ21pZGknO1xuZXhwb3J0IGNvbnN0IE1QMyA9ICdtcDMnO1xuZXhwb3J0IGNvbnN0IFBORyA9ICdwbmcnO1xuZXhwb3J0IGNvbnN0IE1VUyA9ICdtdXMnO1xuZXhwb3J0IGNvbnN0IEdSQVBISUMgPSAnZ3JhcGhpYyc7XG5leHBvcnQgY29uc3QgRkxBVCA9ICdmbGF0JztcbmV4cG9ydCBjb25zdCBNQVJLRVIgPSAnbWFya2VyJztcbmV4cG9ydCBjb25zdCBFTkRPT00gPSAnRU5ET09NJztcbmV4cG9ydCBjb25zdCBURVhUVVJFeCA9IFsnVEVYVFVSRTEnLCAnVEVYVFVSRTInXTtcblxuZXhwb3J0IGNvbnN0IFRFWFRMVU1QUyA9IFsnREVIQUNLRUQnLCAnTUFQSU5GTycsICdaTUFQSU5GTycsICdFTUFQSU5GTycsXG4gICAgJ0RNWEdVUycsICdETVhHVVNDJywgJ1dBRElORk8nLCAnRU1FTlVTJywgJ01VU0lORk8nLFxuICAgICdTTkRJTkZPJywgJ0dMREVGUycsICdLRVlDT05GJywgJ1NDUklQVFMnLCAnTEFOR1VBR0UnLFxuICAgICdERUNPUkFURScsICdTQkFSSU5GTycsICdNRU5VREVGJ107XG5leHBvcnQgY29uc3QgREFUQV9MVU1QUyA9IFsnUExBWVBBTCcsICdDT0xPUk1BUCcsICdURVhUVVJFMScsICdURVhUVVJFMicsICdQTkFNRVMnLFxuICAgICdFTkRPT00nXTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhURU5TSU9OID0gJ2xtcCc7XG5leHBvcnQgY29uc3QgRVhURU5TSU9OUyA9IHtcbiAgICB0ZXh0OiAndHh0JyxcbiAgICBtcDM6ICdtcDMnLFxuICAgIG11czogJ211cycsXG4gICAgbWlkaTogJ21pZCcsXG4gICAgcG5nOiAncG5nJyxcbn07XG5cblxuZXhwb3J0IGNvbnN0IElXQUQgPSAnSVdBRCc7XG5leHBvcnQgY29uc3QgUFdBRCA9ICdQV0FEJztcbmV4cG9ydCBjb25zdCBWQUxJRF9XQURfVFlQRVMgPSBbSVdBRCwgUFdBRF07XG5cbmV4cG9ydCBjb25zdCBTVVBQT1JURURfRk9STUFUUyA9IFtcbiAgICAnLndhZCcsXG4gICAgJy56aXAnLFxuICAgICcucGszJyxcbiAgICAnLmpzb24nLFxuXTtcblxuZXhwb3J0IGNvbnN0IFZBTElEX0ZJTEVfRk9STUFUUyA9IFtcbiAgICAnJyxcbiAgICAnYXBwbGljYXRpb24veC1kb29tJyxcbiAgICAnYXBwbGljYXRpb24vemlwJyxcbiAgICAnYXBwbGljYXRpb24vanNvbicsXG5dO1xuXG4vKiBMdW1wIHR5cGVzICovXG5cbmV4cG9ydCBjb25zdCBNQVAgPSAnbWFwcyc7XG5cbmV4cG9ydCBjb25zdCBJTlRFUk1JU1NJT04gPSAnaW50ZXJtaXNzaW9uJztcblxuZXhwb3J0IGNvbnN0IFNUQVRVU19CQVIgPSAnc3RhdHVzIGJhcic7XG5cbmV4cG9ydCBjb25zdCBNRU5VID0gJ21lbnUnO1xuXG5leHBvcnQgY29uc3QgSU1BR0VfTFVNUFMgPSBbXG4gICAgJ3BhdGNoZXMnLFxuICAgICdmbGF0cycsXG4gICAgJ3Nwcml0ZXMnLFxuICAgIE1FTlUsXG4gICAgSU5URVJNSVNTSU9OLFxuICAgIFNUQVRVU19CQVIsXG5dO1xuXG5leHBvcnQgY29uc3QgVU5DQVRFR09SSVpFRCA9ICd1bmNhdGVnb3JpemVkJztcblxuLyogTHVtcCBuYW1lcyAqL1xuXG5leHBvcnQgY29uc3QgVEhJTkdTID0gJ1RISU5HUyc7XG5cbmV4cG9ydCBjb25zdCBURVhUTUFQID0gJ1RFWFRNQVAnO1xuXG5leHBvcnQgY29uc3QgRU5ETUFQID0gJ0VORE1BUCc7XG5cbmV4cG9ydCBjb25zdCBNQVBfTFVNUFMgPSBbXG4gICAgVEhJTkdTLFxuICAgICdMSU5FREVGUycsXG4gICAgJ1NJREVERUZTJyxcbiAgICAnVkVSVEVYRVMnLFxuICAgICdTRUdTJyxcbiAgICAnVEVYVE1BUCcsXG4gICAgJ1NTRUNUT1JTJyxcbiAgICAnTk9ERVMnLFxuICAgICdTRUNUT1JTJyxcbiAgICAnUkVKRUNUJyxcbiAgICAnQkxPQ0tNQVAnLFxuICAgIC8vIEhleGVuIG9ubHlcbiAgICAnQkVIQVZJT1InLFxuICAgIC8vIFpEb29tIG9ubHk/IChvcHRpb25hbClcbiAgICAnU0NSSVBUUycsXG4gICAgLy8gVW5pdmVyc2FsIERvb20gTWFwIEZvcm1hdCBvbmx5XG4gICAgJ1pOT0RFUycsXG4gICAgJ0RJQUxPR1VFJyxcbl07XG5cbmV4cG9ydCBjb25zdCBPUEVOR0xfTUFQX0xVTVBTID0gW1xuICAgICdHTF9WRVJUJyxcbiAgICAnR0xfU0VHUycsXG4gICAgJ0dMX1NTRUNUJyxcbiAgICAnR0xfTk9ERVMnLFxuICAgICdHTF9QVlMnLFxuXTtcblxuZXhwb3J0IGNvbnN0IElOVEVSTUlTU0lPTl9MVU1QUyA9IG5ldyBSZWdFeHAoL1dJWzAtOWEtekEtWl9dezEsfSQvKTtcblxuZXhwb3J0IGNvbnN0IFNUQVRVU19CQVJfTFVNUFMgPSBuZXcgUmVnRXhwKC8oU1R8QU1NfEJSRFJfKVswLTlhLXpBLVpfXXsxLH0kLyk7XG5cbi8qIFVuaXF1ZSBsdW1wcyAqL1xuXG5leHBvcnQgY29uc3QgTUFQSU5GTyA9IFsnTUFQSU5GTycsICdaTUFQSU5GTyddO1xuXG5leHBvcnQgY29uc3QgUExBWVBBTCA9ICdQTEFZUEFMJztcbmV4cG9ydCBjb25zdCBDT0xPUk1BUCA9ICdDT0xPUk1BUCc7XG5cbmV4cG9ydCBjb25zdCBQTkFNRVMgPSAnUE5BTUVTJztcblxuZXhwb3J0IGNvbnN0IFNCQVJJTkZPID0gJ1NCQVJJTkZPJztcblxuZXhwb3J0IGNvbnN0IE1FTlVfU0NSRUVOUyA9IFtcbiAgICAnVElUTEVQSUMnLFxuICAgICdIRUxQJyxcbiAgICAnSEVMUDEnLFxuICAgICdIRUxQMicsXG4gICAgJ0NSRURJVCcsXG5dO1xuXG5leHBvcnQgY29uc3QgSU5URVJNSVNTSU9OX1NDUkVFTiA9ICdJTlRFUlBJQyc7XG5cbmV4cG9ydCBjb25zdCBNVVNJQ19MVU1QUyA9IFtcbiAgICAnR0VOTUlESScsXG4gICAgJ0RNWEdVUycsXG4gICAgJ0RNWEdVU0MnLFxuICAgIC8vIEhleGVuIG9ubHlcbiAgICAnU05ESU5GTycsXG5dO1xuXG5leHBvcnQgY29uc3QgREVNT19MVU1QUyA9IFtcbiAgICAnREVNTzEnLFxuICAgICdERU1PMicsXG4gICAgJ0RFTU8zJyxcbiAgICAnREVNTzQnLFxuXTtcblxuZXhwb3J0IGNvbnN0IExVTVBfSU5ERVhfRU5UUllfU0laRSA9IDE2O1xuZXhwb3J0IGNvbnN0IExVTVBfSU5ERVhfRU5UUllfT0ZGU0VUX1RPX0xVTVBfU0laRSA9IDQ7XG5leHBvcnQgY29uc3QgTFVNUF9JTkRFWF9FTlRSWV9PRkZTRVRfVE9fTFVNUF9OQU1FID0gODtcblxuZXhwb3J0IGNvbnN0IENPTE9SX0NPVU5UX1BFUl9QQUxFVFRFID0gMjU2O1xuZXhwb3J0IGNvbnN0IFBBTEVUVEVfU0laRSA9IDc2ODtcbmV4cG9ydCBjb25zdCBDT0xPUk1BUF9TSVpFID0gMjU2O1xuXG5leHBvcnQgY29uc3QgQllURVNfUEVSX0NPTE9SID0gMztcbmV4cG9ydCBjb25zdCBHUkVFTl9DT0xPUl9PRkZTRVQgPSAxO1xuZXhwb3J0IGNvbnN0IEJMVUVfQ09MT1JfT0ZGU0VUID0gMjtcblxuZXhwb3J0IGNvbnN0IEZMQVRfRElNRU5TSU9OUyA9IDY0O1xuXG5leHBvcnQgY29uc3QgSU1BR0VfREFUQV9IRUFERVJfU0laRSA9IDg7XG5leHBvcnQgY29uc3QgSU1BR0VfREFUQV9CT1VOREFSWSA9IDI1NTtcblxuZXhwb3J0IGNvbnN0IFRSQU5TUEFSRU5UX1BJWEVMID0gLTE7XG5cbi8qIE1VUyAtPiBNSURJIGNvbnZlcnNpb24gKi9cblxuZXhwb3J0IGNvbnN0IE1VU19IRUFERVIgPSAnTVVTJztcbmV4cG9ydCBjb25zdCBNSURJX0hFQURFUiA9ICdNVGhkJztcbmV4cG9ydCBjb25zdCBNSURJX0hFQURFUl9TSVpFID0gNDtcbmV4cG9ydCBjb25zdCBNSURJX0hFQURFUl9EQVRBID0gW1xuICAgICdNJy5jaGFyQ29kZUF0KDApLCAnVCcuY2hhckNvZGVBdCgwKSwgJ2gnLmNoYXJDb2RlQXQoMCksICdkJy5jaGFyQ29kZUF0KDApLCAvLyBNYWluIGhlYWRlclxuICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDYsIC8vIEhlYWRlciBzaXplXG4gICAgMHgwMCwgMHgwMCwgLy8gTUlESSB0eXBlICgwKVxuICAgIDB4MDAsIDB4MDEsIC8vIE51bWJlciBvZiB0cmFja3NcbiAgICAweDAwLCAweDQ2LCAvLyBSZXNvbHV0aW9uXG4gICAgJ00nLmNoYXJDb2RlQXQoMCksICdUJy5jaGFyQ29kZUF0KDApLCAncicuY2hhckNvZGVBdCgwKSwgJ2snLmNoYXJDb2RlQXQoMCksIC8vIFN0YXJ0IG9mIHRyYWNrXG4gICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gUGxhY2Vob2xkZXIgZm9yIHRyYWNrIGxlbmd0aFxuXTtcblxuZXhwb3J0IGNvbnN0IE1VU19OVU1fQ0hBTk5FTFMgPSAxNjtcbmV4cG9ydCBjb25zdCBNVVNfUEVSQ1VTU0lPTl9DSEFOTkVMID0gMTU7XG5leHBvcnQgY29uc3QgTUlESV9QRVJDVVNTSU9OX0NIQU5ORUwgPSA5O1xuZXhwb3J0IGNvbnN0IE1JRElfVFJBQ0tMRU5HVEhfT0ZTID0gMTg7XG5cbmV4cG9ydCBjb25zdCBNSURJX0NPTlRST0xMRVJfTUFQID0gW1xuICAgIDB4MDAsIDB4MjAsIDB4MDEsIDB4MDcsIDB4MEEsIDB4MEIsIDB4NUIsIDB4NUQsIDB4NDAsIDB4NDMsIDB4NzgsIDB4N0IsIDB4N0UsIDB4N0YsIDB4NzksXG5dO1xuXG4vLyBNVVMgZXZlbnQgY29kZXNcbmV4cG9ydCBjb25zdCBNVVNfUkVMRUFTRV9LRVkgPSAweDAwO1xuZXhwb3J0IGNvbnN0IE1VU19QUkVTU19LRVkgPSAweDEwO1xuZXhwb3J0IGNvbnN0IE1VU19QSVRDSF9XSEVFTCA9IDB4MjA7XG5leHBvcnQgY29uc3QgTVVTX1NZU1RFTV9FVkVOVCA9IDB4MzA7XG5leHBvcnQgY29uc3QgTVVTX0NIQU5HRV9DT05UUk9MTEVSID0gMHg0MDtcbmV4cG9ydCBjb25zdCBNVVNfU0NPUkVfRU5EID0gMHg2MDtcblxuLy8gTUlESSBldmVudCBjb2Rlc1xuZXhwb3J0IGNvbnN0IE1JRElfUkVMRUFTRV9LRVkgPSAweDgwO1xuZXhwb3J0IGNvbnN0IE1JRElfUFJFU1NfS0VZID0gMHg5MDtcbmV4cG9ydCBjb25zdCBNSURJX0NIQU5HRV9DT05UUk9MTEVSID0gMHhCMDtcbmV4cG9ydCBjb25zdCBNSURJX0NIQU5HRV9QQVRDSCA9IDB4QzA7XG5leHBvcnQgY29uc3QgTUlESV9QSVRDSF9XSEVFTCA9IDB4RTA7XG4iLCJpbXBvcnQgeyBDT0xPUl9DT1VOVF9QRVJfUEFMRVRURSB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBidWlsZENvbG9ySW5kZXhSZWZlcmVuY2VzKGRhdGEpIHtcbiAgICBjb25zdCBjb2xvckluZGV4UmVmZXJlbmNlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgICBjb2xvckluZGV4UmVmZXJlbmNlcy5wdXNoKGRhdGEuZ2V0VWludDgoaSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvckluZGV4UmVmZXJlbmNlcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29udmVydENvbG9ySW5kZXhlc1JlZmVyZW5jZXNUb0Jsb2IoXG4gICAgY29sb3JJbmRleFJlZmVyZW5jZXMsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHBhbGV0dGUsXG4pIHtcbiAgICBpZiAocGFsZXR0ZS5sZW5ndGggIT09IENPTE9SX0NPVU5UX1BFUl9QQUxFVFRFKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYWxldHRlIGRvZXMgbm90IGhhdmUgZW5vdWdoIGNvbG9ycyB0byBkcmF3IGltYWdlcy4nKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjb250ZXh0LmNyZWF0ZUltYWdlRGF0YShcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQsXG4gICAgICAgICk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvckluZGV4UmVmZXJlbmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeyByZWQsIGdyZWVuLCBibHVlIH0gPSBwYWxldHRlW2NvbG9ySW5kZXhSZWZlcmVuY2VzW2ldXTtcbiAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhWyhpICogNCkgKyAwXSA9IHJlZDtcbiAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhWyhpICogNCkgKyAxXSA9IGdyZWVuO1xuICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKiA0KSArIDJdID0gYmx1ZTtcbiAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhWyhpICogNCkgKyAzXSA9IDI1NTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdDYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGhlaWdodCwgd2lkdGgpO1xuICAgICAgICBuZXdDYW52YXMuaGVpZ2h0ID0gaW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgbmV3Q2FudmFzLndpZHRoID0gaW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UobmV3Q2FudmFzLCAwLCAwKTtcblxuICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgY2FudmFzLmNvbnZlcnRUb0Jsb2IoKTtcblxuICAgICAgICByZXR1cm4gYmxvYjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjb252ZXJ0aW5nIHRoZSBjb2xvciBpbmRleCByZWZlcmVuY2VzIHRvIGEgYmxvYicsIHsgZXJyb3IgfSk7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5cbm9ubWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICB3YWRJZCxcbiAgICAgICAgbHVtcCxcbiAgICAgICAgcGFsZXR0ZSxcbiAgICB9ID0gbWVzc2FnZS5kYXRhO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBuYW1lLCBkYXRhLCB3aWR0aCwgaGVpZ2h0LFxuICAgIH0gPSBsdW1wO1xuXG4gICAgY29uc29sZS5sb2coYENvbnZlcnRpbmcgJyR7bmFtZX0nIGZyb20gc2ltcGxlIGNvbG9yIGluZGV4IHJlZmVyZW5jZXMgdG8gUE5HIGRhdGEgVVJMIChXQUQ6ICcke3dhZElkfScpIC4uLmApO1xuXG4gICAgY29uc3QgY29sb3JJbmRleFJlZmVyZW5jZXMgPSBidWlsZENvbG9ySW5kZXhSZWZlcmVuY2VzKGRhdGEpO1xuXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IGNvbnZlcnRDb2xvckluZGV4ZXNSZWZlcmVuY2VzVG9CbG9iKFxuICAgICAgICBjb2xvckluZGV4UmVmZXJlbmNlcyxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgcGFsZXR0ZSxcbiAgICApO1xuXG4gICAgaWYgKGJsb2IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvbnZlcnRlZCAnJHtuYW1lfScgZnJvbSBzaW1wbGUgY29sb3IgaW5kZXggcmVmZXJlbmNlcyB0byBibG9iIChXQUQ6ICcke3dhZElkfScpLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBjb252ZXJ0ICcke25hbWV9JyBmcm9tIHNpbXBsZSBjb2xvciBpbmRleCByZWZlcmVuY2VzIHRvIGJsb2IgKFdBRDogJyR7d2FkSWR9JykuYCk7XG4gICAgfVxuXG4gICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICB3YWRJZCxcbiAgICAgICAgbHVtcElkOiBuYW1lLFxuICAgICAgICBpbWFnZTogYmxvYixcbiAgICB9KTtcbn07XG4iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFhQTtBQUVBO0FBRUE7QUFJQTtBQVFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBUUE7QUFFQTtBQUtBO0FBR0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);