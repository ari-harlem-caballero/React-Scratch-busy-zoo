import { useState } from 'react';
import './App.css';

function App() {
  const [crabSize, setCrabSize] = useState(1);
  const [squidSize, setSquidSize] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [animalParade, setAnimalParade] = useState(['hippo', 'rhino', 'hedgehog']);

  return (
    <div className="App">
      <section className='fight'>
        <div className='crab'>
          <p>🦀</p>
          <button>Crab gains strength</button>
          <button>Crab attacks Squid</button>
        </div>
        <div className='squid'>
          <p>🦑</p>
          <button>Squid gains strength</button>
          <button>Squid attacks Crab</button>
        </div>
      </section>

      <section className='sign'>
        <div>
          <button>Close Zoo</button>
          <button>Open Zoo</button>
        </div>
      </section>

      <section className='parade'>
        <div>
          <button>Add Hippo</button>
          <button>Add Rhino</button>
          <button>Add Hedgehog</button>
          <button>Add Deer</button>
          <button>Add Rabbit</button>
          <button>Add Sheep</button>
          <button>Add Llama</button>
          <button>Add Skunk</button>
        </div>
      </section>
    </div>
  );
}

export default App;
