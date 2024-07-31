import React from 'react';
import newArrivalsData from './newArrivalsData';
import './NewArrivals.css'; // Import the CSS file for styling

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="new-arrivals-container">
        {newArrivalsData.map(item => (
          <div key={item.id} className="new-arrival-item">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
