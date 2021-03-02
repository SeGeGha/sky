/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState, useEffect, useRef } from 'react';

import getRandomInteger from '../../../utils/randomInt';

import './Star.scss';

const StarFalling: React.FC = () => {
    function getRandomStarFalling() {
        return {
            top: `${getRandomInteger(0, 100)}%`,
            left: `${getRandomInteger(0, 100)}%`,
            delay: `${getRandomInteger(0, 10000)}ms`,
            opacity: getRandomInteger(30, 100) / 100,
        };
    }

    const [starSettings, setStarSettings] = useState(getRandomStarFalling());
    const starRef: { current: HTMLDivElement } = useRef();

    useEffect(() => {
        starRef.current.classList.add('shooting');
    }, [starSettings]);

    return (
        <div
            className="star-wrapper"
            style={{ top: starSettings.top, left: starSettings.left }}
        >
            <div
                className="star-falling"
                ref={starRef}
                style={{ animationDelay: starSettings.delay, opacity: starSettings.opacity }}
                onAnimationEnd={(e) => {
                    if (e.nativeEvent.animationName === 'shooting') {
                        starRef.current.classList.remove('shooting');
                        setStarSettings(getRandomStarFalling());
                    }
                }}
            />
        </div>
    );
};

export default StarFalling;
