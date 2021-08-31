import classnames from 'classnames';
import {useState} from 'react';
import styles from './UserAvatar.module.scss';

function UserAvatar() {
    const [dropdownOpened, setDropdownOpened] = useState(false);
    return (
        <div className={styles['user-avatar']} onClick={() => setDropdownOpened(!dropdownOpened)}>
            <div className={styles['user-avatar__avatar']}></div>
            <div
                className={classnames(styles['user-avatar__dropdown'], {
                    [styles['user-avatar__dropdown--opened']]: dropdownOpened,
                })}
            >
                <svg viewBox="0 0 320 512">
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
                {dropdownOpened && (
                    <div className={styles['dropdown']}>
                        <div className={styles['dropdown__hero']}>
                            <h5>John Doe</h5>
                            <h6>13 934 XP</h6>
                        </div>
                        <ul>
                            <li>
                                <a href="#">
                                    <svg viewBox="0 0 640 512">
                                        <path
                                            fill="#000000"
                                            d="M32 288H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h16zm352-64H256v64h128zm240 0h-16v64h16a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                                            opacity="0.6"
                                        ></path>
                                        <path
                                            fill="#ffcd00"
                                            d="M232 32h-48a23.94 23.94 0 0 0-24 24v400a23.94 23.94 0 0 0 24 24h48a23.94 23.94 0 0 0 24-24V56a23.94 23.94 0 0 0-24-24zm224 0h-48a23.94 23.94 0 0 0-24 24v400a23.94 23.94 0 0 0 24 24h48a23.94 23.94 0 0 0 24-24V56a23.94 23.94 0 0 0-24-24zm128 64h-48a23.94 23.94 0 0 0-24 24v272a23.94 23.94 0 0 0 24 24h48a23.94 23.94 0 0 0 24-24V120a23.94 23.94 0 0 0-24-24zm-480 0H56a23.94 23.94 0 0 0-24 24v272a23.94 23.94 0 0 0 24 24h48a23.94 23.94 0 0 0 24-24V120a23.94 23.94 0 0 0-24-24z"
                                        ></path>
                                    </svg>
                                    Tělocvična
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg viewBox="0 0 576 512">
                                        <path
                                            fill="#000000"
                                            d="M528 64H352v64h16a16 16 0 0 1 0 32H208a16 16 0 0 1 0-32h16V64H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h480a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM288 224a64 64 0 1 1-64 64 64 64 0 0 1 64-64zm93.3 224H194.7c-10.4 0-18.8-10-15.6-19.8A64 64 0 0 1 240 384h8.2a103 103 0 0 0 79.6 0h8.2a64.09 64.09 0 0 1 60.9 44.2c3.2 9.8-5.2 19.8-15.6 19.8z"
                                            opacity="0.6"
                                        ></path>
                                        <path
                                            fill="#ffcd00"
                                            d="M352 32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v96h128zm-64 320a64 64 0 1 0-64-64 64 64 0 0 0 64 64zm108.9 76.2A64.09 64.09 0 0 0 336 384h-8.2a103 103 0 0 1-79.6 0H240a64 64 0 0 0-60.9 44.2c-3.2 9.8 5.2 19.8 15.6 19.8h186.6c10.4 0 18.8-10 15.6-19.8z"
                                        ></path>
                                    </svg>
                                    Můj profil
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg viewBox="0 0 448 512">
                                        <path
                                            fill="#000000"
                                            d="M80 0H48a16 16 0 0 0-16 16v80h64V16A16 16 0 0 0 80 0zm112 496a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-48h-64zm-160 0a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V192H32zM240 0h-32a16 16 0 0 0-16 16v336h64V16a16 16 0 0 0-16-16zm112 496a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V320h-64zM400 0h-32a16 16 0 0 0-16 16v208h64V16a16 16 0 0 0-16-16z"
                                            opacity="0.6"
                                        ></path>
                                        <path
                                            fill="#ffcd00"
                                            d="M112 96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm320 128h-96a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM272 352h-96a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                                        ></path>
                                    </svg>
                                    Preference
                                </a>
                            </li>
                            <li className={styles['divider']} />
                            <li>
                                <a href="#">
                                    <svg viewBox="0 0 512 512">
                                        <path
                                            fill="#000000"
                                            d="M180 448H96a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h84a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H96a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h84a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12z"
                                            opacity="0.6"
                                        ></path>
                                        <path
                                            fill="#ffcd00"
                                            d="M353 88.3l151.9 150.6a24 24 0 0 1 0 34.1l-152 150.8a24.08 24.08 0 0 1-33.9-.1l-21.9-21.9a24.07 24.07 0 0 1 .8-34.7l77.6-71.1H184a23.94 23.94 0 0 1-24-24v-32a23.94 23.94 0 0 1 24-24h191.5l-77.6-71.1a24 24 0 0 1-.7-34.6l21.9-21.9a24 24 0 0 1 33.9-.1z"
                                        ></path>
                                    </svg>
                                    Odhlásit se
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
export default UserAvatar;
