import React from 'react';

interface Props {
    coffee: any; 
    width: number;
    title: string;
    description: string;
  }

  const Preview: React.FC<Props> = ({ coffee, width, title, description }) => {
  return (
    <div style={{ width: `${width}px` }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={coffee?.image} alt={coffee?.name} style={{ width: `${width}px` }}/>
    </div>
  );
}

export default Preview;
