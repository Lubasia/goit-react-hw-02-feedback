import { Component } from 'react';
import Options from '../Options/Options';
import Section from '../Section/Section';
import Statistic from '../Statistic';
import styles from '../Feedback/Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  totalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  positiveFeedbackPers = () => {
    return Math.round((this.state.good * 100) / this.totalFeedback());
  };

  render() {
    return (
      <div className={styles.Feedback}>
        <h2 title={'Please leave feedback'}>
          <Options
            options={Object.keys(this.state)}
            handleIncrement={this.handleIncrement}
          />
        </h2>
        <Section title={'Statistics'} />
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalFeedback()}
          positivePerc={this.positiveFeedbackPers()}
        />
      </div>
    );
  }
}

export default Feedback;
