import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum((prevNum) => prevNum + 1);
    }, 2000);

    return () => clearInterval(timer); // Cleanup function to clear interval
  }, []);
  return (
    <>
      <div className="bg-slate-500 flex flex-col h-full items-center justify-center">
        <div className="text-center text-3xl">{num}</div>
        <div>
          <button
            onClick={() => {
              setNum(num + 1);
            }}
            className="px-4 border border-slate-950 bg-slate-100 m-3"
          >
            Increase
          </button>
          <button
            onClick={() => {
              setNum(num - 1);
            }}
            className="px-4 border border-slate-950 bg-slate-100"
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
