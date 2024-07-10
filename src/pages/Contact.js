import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container contact">
      <h1>Contact</h1>
      <p>You can contact the customer support and report your issues at any time. The customer support and customer well being is our top-most priority.We are available for you 24x7</p>
      <form>
        <label>Enter your query:
          <input type="text" name="query" placeholder="Enter your query" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
