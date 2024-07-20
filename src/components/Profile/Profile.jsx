import css from './Profile.module.css'
import PropTypes from 'prop-types';

export const Profile = (props) => {
    const {
        avatar, username, tag, location, stats: {
            followers, likes, views
        }
    } = props

    return <div className={css.profile}>
        <div className={css.description}>
            <div className={css.avatar}>
                <img
                src={avatar}
                alt="User avatar"
            />
            </div>
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.item}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
}

Profile.propTypes = {
    props: PropTypes.exact({
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    })
}