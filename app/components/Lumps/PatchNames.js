import React, { Fragment } from 'react';

import style from './PatchNames.scss';

export default ({ lump }) => (
    <Fragment>
        <div className={style.patchCount}>
            Patch count:
            {' '}
            {lump.count}
        </div>
        <div className={style.patchNames}>
            {lump.data && lump.data.map((patchName, index) => (
                <div key={patchName} title={`patch #${index}`}>
                    {patchName}
                </div>
            ))}
        </div>
    </Fragment>
);
