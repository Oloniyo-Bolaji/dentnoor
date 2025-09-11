import React from "react";

const Metrics = () => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-29 gap-12 sm:px-27 px-10">
      <div className="flex-count">
        <h3 className="count">10,000+</h3>
        <span className="count-name">Users</span>
      </div>
      <div className="flex-count">
        <h3 className="count">250+</h3>
        <span className="count-name">Dental Professionals </span>
      </div>
      <div className="flex-count">
        <h3 className="count">24,678+</h3>
        <span className="count-name">AI-Powered Conversations</span>
      </div>
      <div className="flex-count">
        <h3 className="count">12</h3>
        <span className="count-name">Countries with Early Adoption</span>
      </div>
    </div>
  );
};

export default Metrics;
