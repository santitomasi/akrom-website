import { useEffect, useState } from 'react';



const HorizontalPanel = () => {

    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setPosition(position => position + 1);
        }, 10);
      
        return () => clearInterval(interval);
      }, []);

    <div style={{ position: 'relative', top: position }}>
        <p>Probando Panel Horizontal</p>
    </div>
}

export default HorizontalPanel;