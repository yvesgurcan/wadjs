import React from 'react';

import iconStyle from './icons.scss';

export default ({ inverted }) => (
    <svg
        className={iconStyle.icon}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
    >
        <path
            fill="currentColor"
            className={inverted ? iconStyle.invertedFill : null}
            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
        />
    </svg>
);
