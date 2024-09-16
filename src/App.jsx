import React from "react";

const App = () => {
  return (
    <div className="bg-red-500">
      <h1>Hii react is working</h1>
      <h2>{import.meta.env.VITE_SECRET_KEY}</h2>
    </div>
  );
};

export default App;
