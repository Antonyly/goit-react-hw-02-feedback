import React, { Component } from 'react';

import FeedBackOptions from './FeedBack/FeedBackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const count = e.target.name;
    this.setState(prevState => ({
      [count]: prevState[count] + 1
    }))
}
  
  render() {
    const { good, neutral, bad } = this.state;
    
    return (
			<>

        <FeedBackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        <button>{good}</button>
        <button>{neutral}</button>
        <button>{ bad }</button>
			</>
		);
  }
}
