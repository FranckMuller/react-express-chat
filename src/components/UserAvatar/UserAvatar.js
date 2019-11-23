import React from 'react';

import { generateAvatar } from '../../utils';

const UserAvatar = ({ user }) => {
  if (user.avatar) {
    return <img src={user.avatar} alt={`${user.name} avatar`} />;
  } else {
    const { color, lightenColor } = generateAvatar(user.id);
    const arrName = user.name.split(' ');

    const initials = arrName
      .map(str => str[0])
      .join('')
      .toUpperCase();
    return <span style={{ background: `linear-gradient(162deg,#${color}, #${lightenColor})` }}>{initials}</span>;
  }
};

export default UserAvatar;
