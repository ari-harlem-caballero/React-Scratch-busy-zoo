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
      <header>
        <h1>Welcome to the Zoo</h1>
      </header>
      <section className='fight'>
        <h3>The Zoo&apos;s Underground Fight Club:</h3>
        <div className='action'>
          <div className='crab'>
            <p style={{ fontSize:(crabSize * 3) }}>🦀</p>
            <button onClick={() => setCrabSize(crabSize + 1)}>Crab gains strength</button>
            <button onClick={() => setSquidSize(squidSize - 2)}>Crab attacks Squid</button>
          </div>
          <div className='squid'>
            <p style={{ fontSize:(squidSize * 3) }}>🦑</p>
            <button onClick={() => setSquidSize(squidSize + 1)}>Squid gains strength</button>
            <button onClick={() => setCrabSize(crabSize - 2)}>Squid attacks Crab</button>
          </div>
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
        <h3>Welcome to the Parade!!</h3>
        <Parade animals={animalParade} />
        <div className='animal-buttons'>
          <button onClick={() => setAnimalParade([...animalParade, 'hippo'])}>Hippo</button>
          <button onClick={() => setAnimalParade([...animalParade, 'rhino'])}>Rhino</button>
          <button onClick={() => setAnimalParade([...animalParade, 'hedgehog'])}>Hedgehog</button>
          <button onClick={() => setAnimalParade([...animalParade, 'reindeer'])}>Reindeer</button>
          <button onClick={() => setAnimalParade([...animalParade, 'rabbit'])}>Rabbit</button>
          <button onClick={() => setAnimalParade([...animalParade, 'sheep'])}>Sheep</button>
          <button onClick={() => setAnimalParade([...animalParade, 'llama'])}>Llama</button>
          <button onClick={() => setAnimalParade([...animalParade, 'skunk'])}>Skunk</button>
        </div>
      </section>
    </div>
  );
}

export default App;
