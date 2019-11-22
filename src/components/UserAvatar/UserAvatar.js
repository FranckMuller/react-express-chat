import React from 'react';

const UserAvatar = ({ user }) => {
  if (user.avatar) {
    return <img src={user.avatar} alt={`${user.name} avatar`} />;
  } else {
    const arrName = user.name.split(' ');
    const initials = arrName
      .map(str => str[0])
      .join('')
      .toUpperCase();
    return <span>{initials}</span>;
  }
};

export default UserAvatar;
