import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";

import { StatisticsWrapper } from "./StatisticsStyled";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      {total > 0 && (
        <StatisticsWrapper>
          <ul className="statisticsList">
            <li className="statisticsListItem">Good: {good}</li>
            <li className="statisticsListItem">Neutral: {neutral}</li>
            <li className="statisticsListItem">Bad: {bad}</li>
            <li className="statisticsListItem">Total: {total}</li>
            <li className="statisticsListItem">
              Positive feedback: {positiveFeedback}%
            </li>
          </ul>
        </StatisticsWrapper>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
