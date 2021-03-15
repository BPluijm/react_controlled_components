import React from 'react';
import './App.css';

function App() {
  const[messageValue,setMessageValue] = React.useState('');
  const[termsAndConditionsValue, toggleTermsAndConditionsValue] = React.useState(false);

  return (
  <>
    <h1>
      Controlled components!
    </h1>
    <form>
      <label htmlFor="form-message">
        Bericht:
        <input
            type="text"
            id="form-message"
            name="message"
            value={messageValue}
            placeholder="Laat hier een kort bericht achter"
            onChange={(e) => setMessageValue(e.target.value)}
        />
      </label>
      <label htmlFor="form-terms-and-conditions">
        <input
          type="checkbox"
          id="form-terms-and-conditions"
          name="terms-and-conditions"
          checked={termsAndConditionsValue}
          onChange={() => toggleTermsAndConditionsValue(!termsAndConditionsValue)}
        />
      Ik ga akkoord met de algemene voorwaarden
      </label>
    </form>
  </>
  );
}

export default App;
