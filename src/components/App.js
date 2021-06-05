import React, { Component } from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

import { VALUES_NAMES } from "../data/values";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleClick = (event) => {
    const { target } = event;

    this.setState((prevState) => ({
      [target.name]: prevState[target.name] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.state.good) {
      return Math.round((this.state.good * 100) / this.countTotalFeedback());
    } else {
      return 0;
    }
  }

  render() {
    const total = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={VALUES_NAMES}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiveFeedback={PositiveFeedbackPercentage}
            />
          )}
          {total === 0 && <Notification message="No feedback given" />}
        </Section>
      </>
    );
  }
}

export default App;
