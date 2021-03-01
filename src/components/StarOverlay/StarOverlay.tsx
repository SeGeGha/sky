import React from 'react';

import Star from './Star/Star';

import './StarOverlay.scss';

const StarOverlay: React.FC = () => (
    <div className="sky-overlay">
        <div className="stars-filling">
            <Star size="small" type="filling" />
            <Star size="medium" type="filling" />
            <Star size="large" type="filling" />
        </div>
        <div className="stars-falling">
            <Star type="falling" />
            <Star type="falling" />
            <Star type="falling" />
        </div>
    </div>
);

export default StarOverlay;
