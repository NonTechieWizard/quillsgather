import { useState } from 'react';
import './InterestForm.css';

function InterestForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://formspree.io/f/xjgegbvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    });
    
    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    alert('Something went wrong. Please try again!');
  }
};
  if (submitted) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Thank You! 🎉</h2>
          <p>We'll update you with more information soon.</p>
          <p>Thanks for showing interest in Quills Gather!</p>
          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Join Quills Gather</h2>
        <p>Enter your email and we'll keep you updated!</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-input"
          />
          <button type="submit" className="submit-button">I'm Interested</button>
        </form>
        
        <button onClick={onClose} className="cancel-button">Cancel</button>
      </div>
    </div>
  );
}

export default InterestForm;