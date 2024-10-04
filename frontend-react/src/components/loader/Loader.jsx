// src/components/Loader.js
import "./Loader.scss"; // Create styles for the loader

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Fetching Data...</p>
    </div>
  );
};

export default Loader;
