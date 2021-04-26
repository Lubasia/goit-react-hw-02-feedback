import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positivePerc }) => {
  if (total) {
    return (
      <div>
        <p>Good: 😘 {good}</p>
        <p>Neutral: 😐 {neutral}</p>
        <p>Bad: 😡 {bad}</p>
        <p>Total: 👩‍💻 {total}</p>
        <p>Positive feedback: 👏 {positivePerc}%</p>
      </div>
    );
  } else return 'No feedback given';
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePerc: PropTypes.number.isRequired,
};

export default Statistic;
