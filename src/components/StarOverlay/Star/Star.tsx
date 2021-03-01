import React from 'react';

import './Star.scss';

interface StarProps {
    size?: string,
    type?: string,
}

const Star: React.FC<StarProps> = ({ size, type }) => {
    const classList = ['star'];

    if (type) {
        classList.push(`star--${type}`);
    }

    if (size) {
        classList.push(`star--${size}`);
    }

    return (
        <div className={classList.join(' ')} />
    );
};

export default Star;
