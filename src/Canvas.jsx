import React, { useRef, useEffect } from 'react';
import Canvas from 'react-canvas';

export default function MyCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Perform drawing operations here
        ctx.fillStyle = 'blue';
        ctx.fillRect(10, 10, 100, 100);

    }, []);
    return (
        <div>

            <Canvas ref={canvasRef} />
        </div>
    );
};