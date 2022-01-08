import React, { Component } from "react";
import Profile from "../Profile/Profile";
import user from "../Profile/user.json";
import Statistics from "../Statistics/Statistics";
import statisticalData from "../Statistics/statistical-data.json";
import FriendList from "../FriendList/FriendList";
import friends from "../FriendList/friends.json";
import TransactionHistory from "../TransactionHistory/Transactions";
import transactions from "../TransactionHistory/transactions.json";
import Section from "../Feedback/section";
// import FeedbackOptions from "../Feedback/feedback";
// import FeedbackStatistics from '../Feedback/counter';

export default class App extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positivePercentage: 0,
    };
    this.goodFeedBack = this.goodFeedBack.bind(this)
    this.neutralFeedBack = this.neutralFeedBack.bind(this)
    this.badFeedBack = this.badFeedBack.bind(this)
  }

  goodFeedBack = () => {
    this.setState(
      prevState => ({visibility: true,
         good: ++prevState.good, 
        total: ++prevState.total, 
        positivePercentage: prevState.good*100/prevState.total, }),
      () => {
        console.log(this.state.good);
      },
    );
  };

  neutralFeedBack = () => {
    this.setState(
      prevState => ({ visibility: true,
        neutral: ++prevState.neutral, 
        total: ++prevState.total,
        positivePercentage: prevState.good*100/prevState.total,
       }),
      () => {
        console.log(this.state.neutral);
      },
    );
  };

  badFeedBack = () => {
    this.setState(
      prevState => ({
        visibility: true,
        bad: ++prevState.bad, 
        total: ++prevState.total,
        positivePercentage: prevState.good*100/prevState.total,
       }),
      () => {
        console.log(this.state.bad);
      },
    );
  };

  render() {


    return (
      <>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <Section title="Please leave feedback!"
         
            goodFeedBack={this.goodFeedBack}
            neutralFeedBack={this.neutralFeedBack}
            badFeedBack={this.badFeedBack}
        visibility= {this.state.visibility}
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.state.total}
        positivePercentage={this.state.positivePercentage} 
        />
      </>
    );
  }
}
