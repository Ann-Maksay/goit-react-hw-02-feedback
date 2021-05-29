import React, { Component } from "react";
import "./App.css";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
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
    return (
      <>
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={VALUES_NAMES}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
