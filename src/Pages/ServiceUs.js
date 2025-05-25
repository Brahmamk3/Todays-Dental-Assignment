import React, { useState } from 'react';
import './Services.css';
import ServiceData from "../data/ServiceData";

function ServicesUs() {
  const [showMore, setShowMore] = useState({}); // key: index, value: boolean

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="services-section">
      <h2 className="section-title">Our Dental Services</h2>
      <div className="services-grid">
        {ServiceData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-title">{service.title}</h3>
            <img src={service.image} alt={service.title} className="service-image" />
            <p className="service-desc">
              {showMore[index]
                ? service.shortDesc
                : service.shortDesc.slice(0, 200) + '...'}
            </p>
            <button className="view-button" onClick={() => toggleShowMore(index)}>
              {showMore[index] ? 'Show Less' : 'Show More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesUs;