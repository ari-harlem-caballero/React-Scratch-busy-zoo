import { useState } from 'react';
import './App.css';
import Sign from './components/Sign';
import Parade from './components/Parade';

function App() {
  const [crabSize, setCrabSize] = useState(10);
  const [squidSize, setSquidSize] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [animalParade, setAnimalParade] = useState(['hippo', 'rhino', 'hedgehog']);

  return (
    <div className="App">
      <h1>Welcome to the Zoo</h1>
      <section className='fight'>
        <h3>The Zoo&apos;s Underground Fight Club:</h3>
        <div className='crab'>
          <p style={{ fontSize:(crabSize * 5) }}>🦀</p>
          <button onClick={() => setCrabSize(crabSize + 1)}>Crab gains strength</button>
          <button onClick={() => setSquidSize(squidSize - 2)}>Crab attacks Squid</button>
        </div>
        <div className='squid'>
          <p style={{ fontSize:(squidSize * 5) }}>🦑</p>
          <button onClick={() => setSquidSize(squidSize + 1)}>Squid gains strength</button>
          <button onClick={() => setCrabSize(crabSize - 2)}>Squid attacks Crab</button>
        </div>
      </section>

      <section className='sign'>
        <Sign isOpen={isOpen} />
        <div>
          <button onClick={() => setIsOpen(false)}>Close Zoo</button>
          <button onClick={() => setIsOpen(true)}>Open Zoo</button>
        </div>
      </section>

      <section className='parade'>
        <Parade animals={animalParade} />
        <div className='animal-buttons'>
          <button onClick={() => setAnimalParade([...animalParade, 'hippo'])}>Add Hippo</button>
          <button>Add Rhino</button>
          <button>Add Hedgehog</button>
          <button>Add Reindeer</button>
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
