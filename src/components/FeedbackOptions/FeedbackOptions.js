import React from "react";
import PropTypes from "prop-types";

import { FeedbackOptionsWrapper } from "./FeedbackOptionsStyled";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackOptionsWrapper>
      {options.map((elem) => {
        return (
          <button
            type="button"
            name={elem.toLowerCase()}
            onClick={onLeaveFeedback}
            key={elem}
            className="feedbackButton"
          >
            {elem}
          </button>
        );
      })}
    </FeedbackOptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
