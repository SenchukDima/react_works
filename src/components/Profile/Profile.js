import React from 'react';
import T from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="profile-label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="profile-label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="profile-label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: T.string.isRequired,
  tag: T.string.isRequired,
  location: T.string.isRequired,
  avatar: T.string.isRequired,
  stats: T.object.isRequired,
};

export default Profile;
