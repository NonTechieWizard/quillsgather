import './App.css';
import { useState } from 'react';
import InterestForm from './InterestForm';

function App() {const [showForm, setShowForm] = useState(false);
  return (
    <div className="App">
      <header>
     <h1>Quills Gather</h1>
  <p className="tagline">Write a Chapter, Not a Whole Book</p>
  <p>Collaborate with other writers to create a book, one chapter at a time.</p>
<button onClick={() => setShowForm(true)} className="cta-button">I'm Interested</button></header>
{showForm && <InterestForm onClose={() => setShowForm(false)} />}
      <section>
<section className="vision-mission">
  <div className="vision-box">
    <h3>Our Vision</h3>
    <p>To unlock untold stories by making book creation a collaborative journey, one chapter at a time.</p>
  </div>
  <div className="mission-box">
    <h3>Our Mission</h3>
    <p>To democratize storytelling by making published authorship accessible to anyone with a story to tell.</p>
  </div>
</section>    
        <h2>How It Works</h2>
        <div>
          <div>
            <h3>📖 Plan Together</h3>
            <p>An editorial planning committee creates the story outline and narrative map</p>
          </div>
          <div>
            <h3>✍️ Write Your Chapter</h3>
            <p>Contribute one chapter following the established storyline</p>
          </div>
          <div>
            <h3>🗳️ Community Selects</h3>
            <p>The best version moves forward in the collaborative book</p>
          </div>
          <div>
            <h3>📚 Get Published</h3>
            <p>See your name in a real, published book</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Why Write With Us?</h2>
        <ul>
          <li>✨ Low commitment - just one chapter, not an entire book</li>
          <li>💰 Earn money from your contribution</li>
          <li>📖 Physical book with your name on it</li>
          <li>🤝 Join a creative community of writers</li>
          <li>🎯 Discover your writing strengths and passion</li>
        </ul>
      </section>
          </div>
  );
}

export default App;