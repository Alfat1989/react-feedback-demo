import React from "react";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const props = Object.keys(options);
  const component = props.map((el) => {
    return (
      <li key={el}>
        <button type="button" onClick={onLeaveFeedback}>
          {el}
        </button>
      </li>
    );
  });
  return (
    <div>
      <ul>{component}</ul>
    </div>
  );
}

export default FeedbackOptions;
