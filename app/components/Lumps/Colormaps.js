import React from 'react';

import style from './Colormaps.scss';

export default ({ wad, lump, firstColormapOnly }) => {
    if (!lump.data) {
        return null;
    }

    const colormaps = firstColormapOnly ? [lump.data[0]] : lump.data;

    return (colormaps.map((colormap, index) => (
        <div key={index}>
            {!firstColormapOnly && (
                <h5>
                    Colormap #
                    {index}
                </h5>
            )}
            <div className={style.colormapColorList}>
                {colormap.map((colorIndex, index) => {
                    const palette0 = wad.lumps.palettes.PLAYPAL.data[0];
                    const { red, green, blue } = palette0[colorIndex];
                    return (
                        <div
                            key={index}
                            title={`color #${index}: rgb(${red},${green},${blue})`}
                            className={style.colormapColor}
                            style={{ background: `rgb(${red},${green},${blue})` }}
                        />
                    );
                })}
            </div>
        </div>
    ))) || null;
};
