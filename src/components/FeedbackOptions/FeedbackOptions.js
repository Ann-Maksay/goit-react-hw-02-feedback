import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map((elem) => {
        return (
          <button
            type="button"
            name={elem.toLowerCase()}
            onClick={onLeaveFeedback}
            key={elem}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
