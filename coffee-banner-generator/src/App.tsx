import React, { useState } from 'react';
import CoffeeSelector from './components/CoffeeSelector';
import ModalWidthSelector from './components/ModalWidthSelector';
import TitleAndDescription from './components/TitleAndDescription';
import Preview from './components/Preview';

function App() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [width, setWidth] = useState(500);
  const [details, setDetails] = useState({ title: '', description: '' });

  return (
    <div>
      <h2>1. Select your coffee</h2>
      <CoffeeSelector onSelect={(coffee: any) => setSelectedCoffee(coffee)} />

      <h2>2. Choose your width</h2>
      <ModalWidthSelector onWidthSelect={(w: number) => setWidth(w)} />

      <h2>3. Customize title and description</h2>
      <TitleAndDescription onDetailsUpdate={(det: { title: string; description: string }) => setDetails(det)} />

      <h2>Preview:</h2>
      <Preview coffee={selectedCoffee} width={width} title={details.title} description={details.description} />
    </div>
  );
}

export default App;
