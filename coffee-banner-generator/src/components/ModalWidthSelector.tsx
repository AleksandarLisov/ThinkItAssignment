import React, { useState } from 'react';

interface Props {
    onWidthSelect: (width: number) => void;
  }

  const ModalWidthSelector: React.FC<Props> = ({ onWidthSelect }) => {
  const [width, setWidth] = useState(500);  

  return (
    <div>
      

      <input 
        type="number" 
        value={width} 
        onChange={e => {
          const selectedWidth = parseInt(e.target.value, 10);
          setWidth(selectedWidth);
          onWidthSelect(selectedWidth);
        }}
      />
      <button style={{
              marginTop: "20px",
              backgroundColor: "#00aaff",
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px"
            }}>Next step</button>
    </div>
  );
}

export default ModalWidthSelector;
