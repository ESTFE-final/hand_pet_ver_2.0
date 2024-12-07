import './User.scss';
import defaultProfile from '../../assets/images/default-profile.png';

interface UserProps {
    profileImage?: string;
    username: string;
    introduction: string;
    onUserClick?: () => void;
};

const User = ({ 
    profileImage = defaultProfile,
    username,
    introduction,
    onUserClick 
}: UserProps) => {
    return (
        <article className='user'>
            <a
                href="#"
                aria-label={`${username}의 프로필로 이동`}
                onClick={onUserClick}
            >
                <img
                    src={profileImage}
                    alt=""
                    aria-hidden='true'
                    className='user-img'
                />
            </a>
            <div className='user-info'>
                <a
                    href="#"
                    aria-label={`${username}의 프로필로 이동`}
                    onClick={onUserClick}
                >
                    <h2 className='user-name'>{username}</h2>
                </a>
                <p className='user-introduction'>{introduction}</p>
            </div>
        </article>
    )
};

export default User;