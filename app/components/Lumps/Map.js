import React, { Fragment } from 'react';

import style from './ImageLump.scss';

export default ({ wad, lump }) => {
    console.log({ lump });
    return (
        <Fragment>
            <div className={style.wadLumpDetailsEntry}>
                Things:
            </div>
            <div className={style.wadLumpDetailsEntry}>
                Sectors:
            </div>
            <div className={style.wadLumpDetailsEntry}>
                Linedefs:
            </div>
            <div className={style.wadLumpDetailsEntry}>
                Vertices:
            </div>
        </Fragment>
    );
};