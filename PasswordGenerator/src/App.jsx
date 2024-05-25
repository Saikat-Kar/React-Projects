import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  let [character, setCharacter] = useState(false);
  let [number, setNumber] = useState(false);
  let [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (character) {
      str += "`!@#$%^&*()_+{}[]";
    }

    if (number) {
      str += "1234567890";
    }

    for (let i = 0; i < length; i++) {
      let ind = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(ind);
    }

    setPassword(pass);
  }, [length, character, number, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, character, number, generatePassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto bg-gray-600 px-4 py-3 my-8 text-orange-500">
        <h1 className="text-center my-3 font-semibold">Password Generator</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="text-black w-full py-2 px-3"
          />
          <button className="bg-blue-700 mx-3 my-3 px-3 text-white ">
            copy
          </button>
        </div>

        <div>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="length">Length: {length}</label>

          <input
            type="checkbox"
            className="mx-2"
            value={character}
            onChange={() => {
              setCharacter((prv) => !prv);
            }}
          />
          <label htmlFor="character">Character</label>

          <input
            type="checkbox"
            className="mx-3"
            value={number}
            onChange={() => {
              setNumber((prv) => !prv);
            }}
          />
          <label htmlFor="number">Number</label>
        </div>
      </div>
    </>
  );
}

export default App;
