import React from 'react'
import defaultAvatar from '../../images/anonym.png'

import './user-icon.sass'

export default function UserIcon({ avatar, username }) {
  return (
    <div className="user-icon">
      <img src={avatar} alt="Avatar" className="user-icon-avatar" onError={(e) => (e.target.src = defaultAvatar)} />
      <div className="user-icon-nickname">{username}</div>
    </div>
  )
}
