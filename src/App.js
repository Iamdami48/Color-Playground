import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [r, setR] = useState(Math.floor(Math.random() * 255));
  const [g, setG] = useState(Math.floor(Math.random() * 255));
  const [b, setB] = useState(Math.floor(Math.random() * 255));
  const [a, setA] = useState(1);
  const styledBox = {
    backgroundColor: `rgba(${r},${g},${b},${a})`
  };
  const textAerea = useRef();
  const myFunction = () => {
    textAerea.current.select();
    navigator.clipboard.writeText(textAerea.current.value);
    window.alert("copied");
    document.querySelector("textarea").remove();
  };
  return (
    <div className="App">
      <textarea
        ref={textAerea}
        defaultValue={`background-color:${styledBox.backgroundColor}`}
        readOnly
        cols="30"
        rows="10"
      ></textarea>
      {/* Pallet Container */}
      <div className="pallet-container">
        {/* Color Display */}
        <div className="color-display" style={styledBox}></div>
        {/* Color Code Container */}
        <div className="color-code-container">
          RGBA: <span>{`rgba(${r},${g},${b},${a})`}</span>{" "}
          <button title="copy" onClick={myFunction}>
            Copy
          </button>
        </div>
        <div className="sliderDiv R">
          <div className="child-div">
            R: <span>{r}</span>
          </div>
          <div className="child-div">
            0
            <input
              type="range"
              min="0"
              max="255"
              defaultValue={r}
              onChange={(e) => setR(+e.target.value)}
            />
            255
          </div>
        </div>
        <div className="sliderDiv G">
          <div className="child-div">
            G: <span>{g}</span>
          </div>
          <div className="child-div">
            0
            <input
              type="range"
              min="0"
              max="255"
              defaultValue={g}
              onChange={(e) => setG(+e.target.value)}
            />
            255
          </div>
        </div>
        <div className="sliderDiv B">
          <div className="child-div">
            B: <span>{b}</span>
          </div>
          <div className="child-div">
            0{" "}
            <input
              type="range"
              min="0"
              max="255"
              defaultValue={b}
              onChange={(e) => setB(+e.target.value)}
            />
            255
          </div>
        </div>
        <div className="sliderDiv A">
          <div className="child-div">
            A: <span>{a}</span>
          </div>
          <div className="child-div">
            0
            <input
              type="range"
              min="0"
              max="1"
              onChange={(e) => setA(+e.target.value)}
            />
            1
          </div>
        </div>
      </div>
    </div>
  );
}
