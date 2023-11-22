import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props: any) {
  const [text, setText] = useState("Enter text here");

  const handleUpChange = (event: any) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let updatedText = text.toUpperCase();
    setText(updatedText);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <form>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="myBox"
            rows={8}
            value={text}
            onChange={handleUpChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
      </form>
    </div>
  );
}

TextForm.propType = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter the text to analyze",
};
