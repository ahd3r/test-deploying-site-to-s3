import axios from "axios";
import { useState, useEffect } from 'react';

function Joke() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/random').then(({data})=>{
      console.log(data.value);
      setJoke(data.value);
    });
  }, []);

  return <p>{joke}</p>
}

export default Joke;
