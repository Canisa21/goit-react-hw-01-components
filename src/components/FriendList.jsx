import css from '../css/friends.module.css'
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => { 
    return (<>
        <ul className={css.ulCss}>
            {friends.map(friend => (
            <li className={css.item} key={friend.id}>
                    <span
                        className={
              friend.isOnline ? css['statusOnline'] : css['statusOffline']
            }
                    ></span>
                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </li >    
            ))}

    </ul>

</>)
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOline: PropTypes.bool,
  id: PropTypes.number,
};