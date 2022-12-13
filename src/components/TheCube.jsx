import React, { useEffect, useState } from 'react';
import './theCube.css';

function TheCube() {
  const cube = document.querySelector('.cube');
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);

  function handleDrag() {
    console.log('Dragging...');
  }

  useEffect(() => {});

  return (
    <div className="cube-container" draggable onDrag={handleDrag}>
      <div className="cube">
        <div className="side front">front</div>
        <div className="side top">top</div>
        <div className="side bottom">bottom</div>
        <div className="side right">right</div>
        <div className="side left">left</div>
        <div className="side back">back</div>
      </div>
    </div>
  );
}

export default TheCube;
