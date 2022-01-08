import React from 'react';
import T from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="friend-list_item" key={friend.id}>
          {friend.isOnline ? (
            <span className="status" style={{ backgroundColor: 'green' }} />
          ) : (
            <span className="status" style={{ backgroundColor: 'red' }} />
          )}
          <img
            className=" friend-list_avatar"
            src={friend.avatar}
            alt=""
            width="95"
          />
          <p className="friend-list_name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: T.array.isRequired,
};

export default FriendList;
