import React, { useState, useEffect } from 'react';

interface CoffeeSelectorProps {
  onSelect: (coffee: Coffee) => void;
}

type Coffee = {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
    image: string;
}

const CoffeeSelector: React.FC<CoffeeSelectorProps> = ({ onSelect }) => {
    const [coffeeData, setCoffeeData] = useState<Coffee[]>([]);
    const [desc, setDesc] = useState('');
    const [selectedType, setSelectedType] = useState<'iced' | 'hot'>('iced');

    const fetchCoffees = (type: 'iced' | 'hot') => {
        fetch(`https://api.sampleapis.com/coffee/${type}`)
            .then(response => response.json())
            .then(data => setCoffeeData(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        fetchCoffees(selectedType);
    }, [selectedType]);

    const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(e.target.value);
    };

    const handleCoffeeTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedType(e.target.value as 'iced' | 'hot');
    };

    const handleCoffeeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCoffee = coffeeData.find(coffee => coffee.id === Number(e.target.value));
        if (selectedCoffee) {
            onSelect(selectedCoffee);
        }
    };

    return (
        <div>
            <label>
                <input 
                    type="radio" 
                    value="iced" 
                    checked={selectedType === 'iced'} 
                    onChange={handleCoffeeTypeChange} 
                />
                Iced coffee
            </label>
            <label>
                <input 
                    type="radio" 
                    value="hot" 
                    checked={selectedType === 'hot'} 
                    onChange={handleCoffeeTypeChange} 
                />
                Hot coffee
            </label>
            <select style={{marginTop: "20px"}} onChange={handleCoffeeSelect}>
                {coffeeData.map(coffee => (
                    <option key={coffee.id} value={coffee.id}>
                        {coffee.title}
                    </option>
                ))}
            </select>
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

export default CoffeeSelector;
