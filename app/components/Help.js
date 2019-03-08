import React from 'react';

import style from './Help.scss';

export default ({
    title,
    id,
    children,
    layoutClass,
    iconClass,
}) => (
    <div className={layoutClass ? style[layoutClass] : style.helpSpaceBetweenLayout}>
        {children}
        {id && (
            <a
                className={`${style.helpIcon} ${iconClass ? style[iconClass] : style.helpIcon}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Click here for help on ${title}.`}
                href={`${REPO}/blob/master/HELP.md#${id}`}
            >
                    ?
            </a>
        )}
    </div>
);