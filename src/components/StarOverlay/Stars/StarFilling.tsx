import React from 'react';

import './Star.scss';

interface StarProps {
    size?: string,
}

const StarFilling: React.FC<StarProps> = ({ size }) => (
    <div className={`star-filling star-filling--${size}`} />
);

export default StarFilling;
