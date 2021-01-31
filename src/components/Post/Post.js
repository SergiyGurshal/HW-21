import React from 'react'

import commentIcon from '../../images/comment.svg'
import likeIcon from '../../images/like.svg'
import repostIcon from '../../images/share.svg'
import defaultAvatar from '../../images/anonym.png'

import './post.sass'

export default function Post({ name, avatar, username, content, image }) {
  return (
    <div className="post">
      <div className="infoPanel">
        <div className="avatar">
          <img
            src={avatar}
            alt="Avatar"
            width="100"
            height="100"
            className="avatarImg"
            onError={(e) => (e.target.src = defaultAvatar)}
          />
        </div>
        <div className="userInfo">
          <div className="namePanel">{name}</div>
          <div className="nickNamePanel">{username}</div>
        </div>
      </div>
      <div className="contentPanel">
        <div className="contentDiscription">{content}</div>
        <div className="contentImg">
          <img className="postImg" src={image} alt="ContentImg" />
        </div>
        <div className="likePanel">
          <img src={likeIcon} alt="like icon" />
          <img src={commentIcon} alt="comment icon" />
          <img src={repostIcon} alt="repost icon" />
        </div>
      </div>
    </div>
  )
}
