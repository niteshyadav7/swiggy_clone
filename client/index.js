import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <h1>Hello Nitesh !</h1>
    </>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App />);
