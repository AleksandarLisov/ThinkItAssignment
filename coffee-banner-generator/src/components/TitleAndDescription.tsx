import React, { useState } from 'react';

interface Props {
    onDetailsUpdate: (details: { title: string; description: string }) => void;
  }

  const TitleAndDescription: React.FC<Props> = ({ onDetailsUpdate }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    onDetailsUpdate({ title: e.target.value, description: desc });
  };

  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
    onDetailsUpdate({ title, description: e.target.value });
};

  return (
    <div>
      <text>Title:</text>
      <input placeholder="Title" value={title} onChange={handleTitleChange}/>
      <text>Description:</text>
      <textarea placeholder="Description" value={desc} onChange={handleDescChange}></textarea>
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
            }}>&lt;&gt; View and copy code</button>
    </div>
  );
}

export default TitleAndDescription;
