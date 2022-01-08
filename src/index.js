import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './components/Profile/Profile.css';
import './components/Statistics/Statistics.css';
import './components/FriendList/FriendList.css';
import './components/TransactionHistory/Transactions.css';


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'),
  );
