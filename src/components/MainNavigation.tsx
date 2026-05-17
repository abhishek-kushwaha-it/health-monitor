import { FC, useState, useRef, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REDUX_ACTIONS } from '../store/index.ts';
import { RootState, User } from '../store/index.ts';
import './MainNavigation.css';

const MainNavigation: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const currentUserId = useSelector((state: RootState) => state?.auth?.currentUser);
    const users = useSelector((state: RootState) => state?.auth?.users || []) as User[];
    const currentUser = users.find(u => u.id === currentUserId);
    const [avatarImage, setAvatarImage] = useState<string>('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = (): void => {
        dispatch({ type: REDUX_ACTIONS.LOGOUT });
        setDropdownOpen(false);
        navigate('/auth');
    };

    const handleChangeAvatar = (): void => {
        fileInputRef.current?.click();
    };

    const handleAvatarImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                dispatch({
                    type: REDUX_ACTIONS.UPDATE_USER_AVATAR,
                    payload: result
                });
                setAvatarImage(result);
            };
            reader.readAsDataURL(file);
        }
        setDropdownOpen(false);
    };

    const getAvatarColor = (username: string | undefined): string => {
        const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];
        const charCode = username?.charCodeAt(0) || 0;
        return colors[charCode % colors.length];
    };

    const getInitials = (username: string | undefined): string => {
        return username
            ?.split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2) || 'U';
    };

    return (
        <header className="main-header">
            <nav className='main-nav'>
                <div className='nav-container'>
                    {/* Logo/Brand */}
                    <div className='nav-brand'>
                        <Link to="/" className='brand-link'>
                            <span className='brand-icon'>❤️</span>
                            <span className='brand-text'>Health Monitor</span>
                        </Link>
                    </div>

                    {/* Nav Links */}
                    <ul className='nav-list'>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" title="Dashboard">
                                <span className="nav-icon-wrapper">
                                    <span className="nav-icon">🏠</span>
                                </span>
                                <span className="nav-label">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/exercises" className="nav-link" title="Exercises">
                                <span className="nav-icon-wrapper">
                                    <span className="nav-icon">💪</span>
                                </span>
                                <span className="nav-label">Exercises</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/nutrition" className="nav-link" title="Nutrition">
                                <span className="nav-icon-wrapper">
                                    <span className="nav-icon">🥗</span>
                                </span>
                                <span className="nav-label">Nutrition</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bodycare" className="nav-link" title="Body Care">
                                <span className="nav-icon-wrapper">
                                    <span className="nav-icon">❤️</span>
                                </span>
                                <span className="nav-label">Body Care</span>
                            </Link>
                        </li>
                    </ul>

                    {/* User Menu */}
                    {currentUser && (
                        <div className="nav-user-menu">
                            <button
                                className="user-avatar-btn"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                title={currentUser.username}
                            >
                                <div className="user-profile-section">
                                    {avatarImage ? (
                                        <img
                                            src={avatarImage}
                                            alt={currentUser.username}
                                            className="avatar-image"
                                        />
                                    ) : (
                                        <div
                                            className="avatar-initials"
                                            style={{
                                                background: getAvatarColor(currentUser.username)
                                            }}
                                        >
                                            {getInitials(currentUser.username)}
                                        </div>
                                    )}
                                </div>
                                <span className="user-name-display">{currentUser.fullName || currentUser.username}</span>
                            </button>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    {/* User Profile Card */}
                                    <div className="user-profile-card">
                                        <div className="profile-avatar-section">
                                            {avatarImage ? (
                                                <img
                                                    src={avatarImage}
                                                    alt={currentUser.username}
                                                    className="profile-avatar-image"
                                                />
                                            ) : (
                                                <div
                                                    className="profile-avatar-initials"
                                                    style={{
                                                        background: getAvatarColor(currentUser.username)
                                                    }}
                                                >
                                                    {getInitials(currentUser.username)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="profile-info">
                                            <p className="profile-fullname">{currentUser.fullName || 'User'}</p>
                                            <p className="profile-username">@{currentUser.username}</p>
                                            <p className="profile-email">{currentUser.email}</p>
                                            <p className="profile-dob">📅 {new Date(currentUser.dateOfBirth).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <button
                                        className="dropdown-item"
                                        onClick={handleChangeAvatar}
                                    >
                                        <span className="dropdown-icon">📸</span>
                                        <span>Change Avatar</span>
                                    </button>
                                    <div className="dropdown-divider" />
                                    <button
                                        className="dropdown-item dropdown-item--danger"
                                        onClick={handleLogout}
                                    >
                                        <span className="dropdown-icon">🚪</span>
                                        <span>Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarImageChange}
                style={{ display: 'none' }}
            />
        </header>
    );
};



export default MainNavigation;