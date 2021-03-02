import React from 'react';

import StarFilling from './Stars/StarFilling';
import StarFalling from './Stars/StarFalling';

import './StarOverlay.scss';

const StarOverlay: React.FC = () => (
    <div className="sky-overlay">
        <StarFilling size="small" />
        <StarFilling size="medium" />
        <StarFilling size="large" />
        <StarFalling />
        <StarFalling />
    </div>
);

export default StarOverlay;
