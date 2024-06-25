import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  const handleLowerCase = () => {
    let lowerText = text.toLocaleLowerCase();
    setText(lowerText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <div>
          <br />
          <br />
          <textarea
            className="form-control"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <br />

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpperCase}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLowerCase}
        >
          LowerCase
        </button>
      </div>

      <div className="container">
        <h1 className="my-4">Text Summary</h1>

        <p>
          {text.split(" ").length} Words <br />
          {text.length} Characters <br />
          {0.008 * text.split(" ").length} Minutes to read your text.
        </p>

        <h2>Text Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
