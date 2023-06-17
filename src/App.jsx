import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import FeedbackButtons from "./components/FeedbackButtons";
import Statistics from "./components/Statistics";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const handleReset = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    if (total === 0) {
      return "Brak opinii";
    }
    return Math.round((good / total) * 100) + "%";
  };

  return (
    <>
      <Header handleReset={handleReset} />
      <h1>Proszę zostawić opinię</h1>
      <FeedbackButtons handleFeedback={handleFeedback} />
      <Statistics
        state={state}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </>
  );
};

App.propTypes = {
  handleReset: PropTypes.func.isRequired,
};


export default App;
