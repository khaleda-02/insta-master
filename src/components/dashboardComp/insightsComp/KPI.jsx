import React from 'react';

const KPI = ({ label, value, trend }) => {
  return (
    <div className="KPI-container"> {/* Change the class name here */}
      <div className="KPI-label">{label}</div>
      <div className="KPI-value">{value}</div>
      <div className={`KPI-trend ${trend > 0 ? 'positive' : 'negative'}`}>
        {trend > 0 ? `+${trend}%` : `${trend}%`}
      </div>
    </div>
  );
};

export default KPI;
