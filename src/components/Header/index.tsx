import styles from './Header.module.scss';
import UserAvatar from '../UserAvatar/';
import {useEffect, useState} from 'react';

function Header() {
    const [showRightCaret, setShowRightCaret] = useState(false);
    const [showLeftCaret, setShowLeftCaret] = useState(false);

    useEffect(() => {
        const resizeFunction = () => {
            let viewportWidth = window.innerWidth;
            let navigation = document.getElementById('secondary-navigation');
            navigation?.offsetWidth > viewportWidth
                ? setShowRightCaret(true)
                : setShowRightCaret(false);
        };

        window.addEventListener('resize', resizeFunction);

        resizeFunction();
    });

    return (
        <header className={styles['header']}>
            <div className={styles['main-navigation']}>
                <div className={styles['main-navigation__logo']}>
                    <a href="#">
                        <svg viewBox="0 0 792 792">
                            <path
                                d="m369 .424377c-22.82 2.996273-45.545 5.093023-68 10.474523-49.801 11.935-97.627 34.563-138.985 64.659-41.593 30.2661-76.6288 68.8011-103.6716 112.4421-62.54812 100.939-75.3195 229.177-36.0463 341 17.671 50.315 46.1361 96.452 81.8729 136 23.912 26.462 52.642 49.985 83 68.691 81.499 50.219 178.586 67.474 272.83 54.009 7.788-1.113 15.325-3.553 23-5.19 45.503-9.708 90.273-27.545 129-53.624 27.432-18.473 53.586-39.258 75.83-63.886 71.134-78.754 108.777-181.895 104.131-288-6.07-138.611-89.214-271.063-213.961-333.6296-38.502-19.3106-79.39-32.6286-122-38.79862-20.87-3.02198-40.903-4.57178-62-4.57178-8.249 0-16.811-.650818-25 .424377z"
                                fill="#ffcd00"
                            ></path>
                            <path
                                d="m445 112.424c10.876-1.428 22.144-.274 33 .487 14.352 1.005 28.288 2.449 42 7.168 28.165 9.692 55.194 34.213 64.405 62.921 8.004 24.944 4.617 53.671.131 79-3.499 19.757-10.103 39.578-17.963 58-2.3 5.389-4.722 10.752-7.326 16-1.157 2.331-3.169 5.263-2.582 8 .738 3.439 4.569 6.385 6.72 9 5.221 6.348 9.972 13.101 14.434 20 11.941 18.459 20.794 38.858 26.753 60 18.084 64.167 2.157 133.396-36.151 187-13.448 18.818-30.858 39.367-51.421 50.687-12.358 6.802-28.072 10.25-42 12.027-46.318 5.912-91.519 8.282-138 2.571-19.23-2.363-39.009-4.402-57-12.158-19.932-8.592-37.373-28.295-50.349-45.127-35.152-45.6-53.984-102.216-48.481-160 2.881-30.26 12.574-59.685 27.68-86 5.211-9.077 11.141-17.747 17.574-26 2.597-3.331 7.945-7.68 8.583-12 .493-3.337-2.366-7.141-3.749-10-3.092-6.393-5.83-13.185-7.834-20-7.259-24.69-13.232-49.137-10.139-75 1.34-11.197 4.698-21.795 9.407-32 31.734-68.774 115.467-83.596 183.308-91.714 12.924-1.547 26.128-1.171 39-2.862zm-43 74.823c-2.463424.410447-4.942018.811535-7.431624 1.210414l-2.136546.341523c-1.782541.284429-3.570093.568774-5.36114.855641l-2.150836.345617c-24.751674 3.992351-50.053348 8.663417-71.919854 20.861805-14.404 8.035-27.263 20.084-29.7 37.138-2.484 17.388 4.248 34.857 9.7 51 7.592-2.187 14.698-6.514 22-9.576 12.366-5.185 25.783-9.562 39-11.961 31.388-5.698 64.054-5.782 95 2.689 9.479 2.595 18.873 5.646 28 9.297 6.019 2.408 11.777 5.758 18 7.551 10.751-20.167 14.995-42.377 14.039-65-.634-15.013-3.378-28.7-16.039-38.471-8.987-6.935-20.92-9.573-32-10.604-19.698-1.833-39.522 1.077-59 4.322z"
                                fill="#000"
                            ></path>
                            <path
                                d="m588 443c2.865 5.387 3.37 12.967 4.05 19 1.178 10.456 1.95 20.463 1.95 31 0 48.825-21.303 98.162-54 134-9.553 10.471-20.309 22.185-33 28.954-15.154 8.083-35.223 9.536-52 11.215l-3.197884.319844c-27.185818 2.715416-54.468041 5.282156-81.802116 2.681156-4.599205-.437727-9.197238-.816043-13.790924-1.188684l-3.061779-.248175c-16.83586-1.366829-33.603797-2.817891-50.147297-7.002141-13.288-3.362-26.341-8.416-35-19.731 8.073 1.868 15.816 4.9 24 6.386 47.093 8.548 95.509 10.579 143 4.9 19.373-2.318 42.253-3.399 60-12.278 17.555-8.783 32.832-25.853 44.789-41.008 23.14-29.33 41.159-64.734 46.915-102 2.864-18.547 1.679-36.425 1.296-55zm-343-82c6.559 1.129 12.499 4.495 19 6-2.352216 5.044541-6.40073 9.509978-10.462354 13.913861l-1.106777 1.199922c-2.393239 2.598208-4.737626 5.191352-6.685869 7.886217-10.906 15.087-19.663 31.811-26.734 49-7.487 18.199-12.248 36.76-16.01 56-.564278 2.884778-.714627 6.133426-.854448 9.424117l-.060455 1.411932c-.207208 4.708766-.510541 9.409507-2.086097 13.163951-1.059-13.417-2.553-26.468-1.961-40 1.119-25.541 8.099-52.03 19.219-75 7.584-15.664 18.238-28.63 27.742-43zm76 13.465c18.308-3.296 40.977 3.799 41.544 25.535.096 3.662-.774 7.537-1.904 11-5.975 18.312-24.707 33.46-43.64 36.714-19.598 3.368-45.714-2.498-43.384-27.714.314-3.398.633-6.788 1.852-10 7.034-18.543 26.367-32.086 45.532-35.535zm105-36.855c7.546-1.946 18.379-.935 23.566 5.495 7.917 9.814-1.661 22.259-11.566 25.106-7.595 2.183-17.85 1.315-23.467-4.679-9.39-10.021.594-23.119 11.467-25.922zm102-115.61c6.2 6.889 7.25 18.131 8.075 27 1.344 14.459 1.501 28.77-1.973 43-2.032 8.32-5.866 16.113-9.102 24-3.604-1.837-12.182-5.924-13.173-10.185-.668-2.874 1.861-6.326 2.995-8.815 3.115-6.841 5.6-13.834 7.837-21 5.037926-16.142778 5.330666-32.280615 5.341685-48.897665l.000244-2.037168c-.000092-.339939-.000227-.680085-.000364-1.020443zm-125-88.13c25.275-3.524 51.535-5.465 77-3.04 8.413.801 18.331.086 26 4.17-5.372-.044-10.618-1.109-16-.985-51.358 1.175-105.202 9.719-154 25.985-30.934 10.311-60.35 24.858-78.655 53-11.482 17.652-17.194 39.198-19.175 60-.824 8.647 2.201 19.966-1.17 28-3.987-21.162-8.795-41.347-5.7-63 1.268-8.868 4.469-18.02 8.459-26 29.698-59.396 104.13-69.89 163.241-78.13z"
                                fill="#fff"
                            ></path>
                        </svg>
                    </a>
                </div>

                <nav className={styles['main-navigation__items']}>
                    <ul>
                        <li>
                            <a href="#">O kouli</a>
                        </li>
                        <li className={styles['active']}>
                            <a href="#">Programy</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Podcast</a>
                        </li>
                        <li>
                            <a href="#">E-shop</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles['main-navigation__user']}>
                    <UserAvatar />
                </div>
            </div>
            {/* <div className={styles['secondary-navigation']}>
                {showLeftCaret && (
                    <div className={styles['move-left']}>
                        <svg viewBox="0 0 192 512">
                            <path d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"></path>
                        </svg>
                    </div>
                )}
                {showRightCaret && (
                    <div className={styles['move-right']}>
                        <svg viewBox="0 0 192 512">
                            <path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"></path>
                        </svg>
                    </div>
                )}
                <nav>
                    <ul id="secondary-navigation">
                        <li className={styles['item--active']}>
                            <a href="/my-profile/">
                                <svg viewBox="0 0 576 512">
                                    <path
                                        d="M528 64H352v64h16a16 16 0 0 1 0 32H208a16 16 0 0 1 0-32h16V64H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h480a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM288 224a64 64 0 1 1-64 64 64 64 0 0 1 64-64zm93.3 224H194.7c-10.4 0-18.8-10-15.6-19.8A64 64 0 0 1 240 384h8.2a103 103 0 0 0 79.6 0h8.2a64.09 64.09 0 0 1 60.9 44.2c3.2 9.8-5.2 19.8-15.6 19.8z"
                                        opacity="0.4"
                                    ></path>
                                    <path d="M352 32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v96h128zm-64 320a64 64 0 1 0-64-64 64 64 0 0 0 64 64zm108.9 76.2A64.09 64.09 0 0 0 336 384h-8.2a103 103 0 0 1-79.6 0H240a64 64 0 0 0-60.9 44.2c-3.2 9.8 5.2 19.8 15.6 19.8h186.6c10.4 0 18.8-10 15.6-19.8z"></path>
                                </svg>
                                Velín
                            </a>
                        </li>
                        <li>
                            <a href="/my-profile/diary">
                                <svg viewBox="0 0 448 512">
                                    <path d="M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z"></path>
                                    <path
                                        opacity="0.4"
                                        d="M96 384h328a24 24 0 0 0 24-24V32a32 32 0 0 0-32-32H96A96 96 0 0 0 0 96v320a96 96 0 0 0 96 96h328a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zm53.8-274.9c24-20 59.7-16.4 81.6 5.8l8.6 8.7 8.6-8.7c22-22.2 57.7-25.8 81.6-5.8a60.65 60.65 0 0 1 4.3 89.1l-84.7 85.6a13.94 13.94 0 0 1-19.8 0l-84.7-85.6a60.74 60.74 0 0 1 4.5-89.1z"
                                    ></path>
                                </svg>
                                Deník
                            </a>
                        </li>
                        <li>
                            <a href="/my-profile/challenges">
                                <svg viewBox="0 0 448 512">
                                    <path
                                        d="M323.56 51.2a597.38 597.38 0 0 0-56.22 60C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 210 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-52-163.14-124.44-230.4zm-1.12 366.87A165.81 165.81 0 0 1 226.86 448c-43.93 0-84.43-14.89-114.06-41.92a146.18 146.18 0 0 1-35.88-50.39C68.35 335.82 64 314 64 290.75c0-59.43 42.8-106.39 104.3-180.12 30 34.59 18.49 19.78 100.7 124.59l62-70.74c24.32 40.25 27.78 45.59 34.84 59.1a157.93 157.93 0 0 1 15 104.62c-7.49 36.85-28.24 68.8-58.4 89.87z"
                                        opacity="0.4"
                                    ></path>
                                    <path d="M304.09 391.85A134.39 134.39 0 0 1 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 8 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 20 27.35 52.19 15.81 119-33.43 153.42z"></path>
                                </svg>
                                Výzvy
                            </a>
                        </li>
                        <li>
                            <a href="/my-profile/badges">
                                <svg viewBox="0 0 384 512">
                                    <path
                                        d="M382.78 448.69L324 304.23a40.63 40.63 0 0 1-22.23 15.62C280 325.78 278.26 324.44 263 340a39.72 39.72 0 0 1-49.73 5.82 39.68 39.68 0 0 0-42.53 0A39.73 39.73 0 0 1 121 340c-14.73-15-16.4-14-38.73-20.12a40.54 40.54 0 0 1-22.07-15.4L1.2 448.7a16 16 0 0 0 15.43 22l52.69-2 36.22 38.3a16 16 0 0 0 22.62.61A16.23 16.23 0 0 0 132 502l60.15-147.1L252 502a16 16 0 0 0 26.43 5l36.25-38.28 52.69 2A16 16 0 0 0 384 455.33a16.23 16.23 0 0 0-1.22-6.64zM192 240a64 64 0 1 0-64-64 64 64 0 0 0 64 64z"
                                        opacity="0.4"
                                    ></path>
                                    <path d="M366.62 152.72a41.51 41.51 0 0 0-10.42-39.59c-20.41-20.77-18.47-17.35-25.95-45.74a40.66 40.66 0 0 0-28.47-29c-27.88-7.61-24.52-5.62-45-26.41A39.79 39.79 0 0 0 218 1.39c-27.92 7.6-24 7.6-51.95 0A39.8 39.8 0 0 0 127.16 12c-20.41 20.78-17 18.8-44.94 26.41a40.66 40.66 0 0 0-28.47 29c-7.47 28.39-5.54 25-25.95 45.75a41.46 41.46 0 0 0-10.42 39.58c7.47 28.36 7.48 24.4 0 52.82a41.52 41.52 0 0 0 10.42 39.57c20.41 20.78 18.47 17.35 26 45.75a40.64 40.64 0 0 0 28.47 29C104.6 326 106.27 325 121 340a39.74 39.74 0 0 0 49.74 5.82 39.68 39.68 0 0 1 42.53 0A39.73 39.73 0 0 0 263 340c15.28-15.55 17-14.21 38.79-20.14a40.64 40.64 0 0 0 28.47-29c7.48-28.4 5.54-25 25.95-45.75a41.49 41.49 0 0 0 10.42-39.58c-7.48-28.36-7.49-24.4-.01-52.81zM192 272a96 96 0 1 1 96-96 96 96 0 0 1-96 96z"></path>
                                </svg>
                                Odznaky
                            </a>
                        </li>
                        <li>
                            <a href="/my-profile/friends">
                                <svg viewBox="0 0 640 512">
                                    <path
                                        d="M480 256a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592a48 48 0 0 0 48-48 111.94 111.94 0 0 0-112-112z"
                                        opacity="0.4"
                                    ></path>
                                    <path d="M192 256A112 112 0 1 0 80 144a111.94 111.94 0 0 0 112 112zm76.8 32h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 0 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 268.8 288z"></path>
                                </svg>
                                Přátelé
                            </a>
                        </li>
                        <li>
                            <a href="/my-profile/league">
                                <svg viewBox="0 0 576 512">
                                    <path
                                        d="M231.1 187.3l-9.4 54.6a12 12 0 0 0 17.4 12.6l49-25.8 49 25.8a12 12 0 0 0 17.4-12.6l-9.4-54.6 39.6-38.6c7.1-6.9 3.2-19-6.4-20.5l-54.8-8L299 70.6a12 12 0 0 0-21.5 0L253 120.2l-54.8 8a12 12 0 0 0-6.7 20.5zM384 432H192c-35.3 0-64 20.7-64 56v12a12 12 0 0 0 12 12h296a12 12 0 0 0 12-12v-12c0-35.3-28.7-56-64-56z"
                                        opacity="0.4"
                                    ></path>
                                    <path d="M552.12 64H448V24a23.94 23.94 0 0 0-23.88-24H152a23.94 23.94 0 0 0-24 23.88V64H24A23.94 23.94 0 0 0 0 87.88V144c0 66.5 77.9 131.7 171.9 142.4C203.3 338.5 240 360 240 360v72h96v-72s36.7-21.5 68.1-73.6C498.4 275.6 576 210.3 576 144V88a23.94 23.94 0 0 0-23.88-24zM64 144v-16h64.2a359 359 0 0 0 12.8 86.2c-47.5-16.4-77-49.9-77-70.2zm320.7 4.7l-39.6 38.6 9.4 54.6a12 12 0 0 1-17.4 12.6l-49-25.8-49 25.8a12 12 0 0 1-17.4-12.6l9.4-54.6-39.6-38.6a12 12 0 0 1 6.7-20.5l54.8-8 24.5-49.6a12 12 0 0 1 21.5 0l24.5 49.6 54.8 8c9.6 1.5 13.5 13.6 6.4 20.5zM512 144c0 20.2-29.4 53.8-77 70.2a359 359 0 0 0 12.8-86.2H512z"></path>
                                </svg>
                                Soutěž
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> */}
        </header>
    );
}
export default Header;