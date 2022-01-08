import React from "react";
import T from "prop-types";


const TransactionHistory = ({ items }) => {

  return (
    <table className="transaction-history">
  <thead className="transaction-history_head">
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  
  <tbody>
  {items.map(item => ( 
    <tr key={item.id}>
  <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
        ))}
</tbody>
</table>
  );
};


TransactionHistory.propTypes = {
    items: T.array.isRequired,
};

export default TransactionHistory;