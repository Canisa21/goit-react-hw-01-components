import PropTypes from 'prop-types';
import css from "../css/profile.module.css"
export const Profile = ({username, tag, location, avatar, stats }) => {
    return <>
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                    <span className="quantity">{ stats.followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                    <span className="quantity">{ stats.likes}</span>
            </li>
        </ul>
    </div>
    </>
    
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};