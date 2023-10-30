import { useState, useEffect } from 'react';

const useCoffee = (type: 'hot' | 'iced') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${type}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [type]);

  return { data, loading };
}

export default useCoffee;
