import styles from './Programs.module.scss';
import Header from '../../components/Header';
import {useEffect, useState} from 'react';
import {useSpring, animated, useTrail} from 'react-spring';
import Player from '@vimeo/player';
import classnames from 'classnames';

function ProgramKouleKouleKoule() {
    const [videoPlaying, setVideoPlaying] = useState(false);
    useEffect(() => {
        const player = new Player('intro', {
            id: 547508949,
        });
        videoPlaying ? player.play() : player.pause();
    });

    const items = [
        <h1>Koule, koule, koule!</h1>,
        <p>
            Full-body tréninkový program s lehkým, středním a těžkým kettlebellem. Zaměřeno na sílu,
            kondici, budování svalů a pálení tuku. Vhodné pro začátečníky i pokročilé, náročnost se
            škáluje použitou váhou.
        </p>,
        <div className={styles['button']}>
            <button>Vybrat tento program</button>
        </div>,
    ];

    const fadeIn = (delay: number, duration: number, opacity: number) =>
        useSpring({
            config: {duration: duration},
            from: {opacity: 0},
            opacity: opacity,
            delay: delay,
        });

    const fadeInTrail = useTrail(items.length, {
        config: {duration: 1500},
        opacity: 1,
        from: {opacity: 0},
        delay: 1000,
    });

    return (
        <>
            <div className={styles['program']}>
                <animated.section style={fadeIn(0, 1000, 0.7)} className={styles['hero-image']} />
                <section className={styles['hero-container']} id="hero-container" style={{top: 0}}>
                    {fadeInTrail.map(({opacity}, index) => (
                        <animated.div key={index} className={styles.trailsText}>
                            <animated.div style={{opacity}}>{items[index]}</animated.div>
                        </animated.div>
                    ))}

                    <animated.div
                        style={fadeIn(2000, 2000, 1)}
                        className={styles['scroll-arrow-container']}
                    >
                        <div className={styles['scroll-arrow']}>
                            <svg viewBox="0 0 256 512">
                                <path d="M252.485 343.03l-7.07-7.071c-4.686-4.686-12.284-4.686-16.971 0L145 419.887V44c0-6.627-5.373-12-12-12h-10c-6.627 0-12 5.373-12 12v375.887l-83.444-83.928c-4.686-4.686-12.284-4.686-16.971 0l-7.07 7.071c-4.686 4.686-4.686 12.284 0 16.97l116 116.485c4.686 4.686 12.284 4.686 16.971 0l116-116.485c4.686-4.686 4.686-12.284-.001-16.97z"></path>
                            </svg>
                        </div>
                        <div className={styles['scroll-arrow-twin']} />
                    </animated.div>
                </section>

                <section className={styles['section--video']}>
                    <div
                        className={styles['wrapper']}
                        onClick={() => setVideoPlaying(!videoPlaying)}
                    >
                        <div className={styles['video__wrapper']}>
                            <div
                                className={styles['video__thumbnail']}
                                style={{opacity: videoPlaying ? '0' : '1'}}
                            />
                            <iframe
                                id="intro"
                                src="https://player.vimeo.com/video/547508949?title=0&byline=0&portrait=0&badge=0&autoplay=0&controls=0"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </div>
                    <p
                        className={styles['follow-link']}
                        onClick={() => setVideoPlaying(!videoPlaying)}
                    >
                        {!videoPlaying ? (
                            <>
                                Přehrát video{' '}
                                <svg viewBox="0 0 512 512">
                                    <path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path>
                                </svg>
                            </>
                        ) : (
                            <>
                                Pozastavit video{' '}
                                <svg viewBox="0 0 512 512">
                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"></path>
                                </svg>
                            </>
                        )}
                    </p>
                </section>

                <section className={styles['section--fullwidth']}>
                    <div className={styles['text-container']}>
                        <h2 className={styles['big-title']}>Co vás čeká?</h2>
                        <p>
                            Doporučujeme cvičit <strong>ideálně 3x týdně</strong>. Dvakrát týdně vás
                            čekají horní tlaky a tahy (kliky, přítahy, tlaky s kettlebellem, atd.) a
                            swingy s kettlebellem, jednou týdně se budete věnovat spodku (rozdělené
                            dřepy s KB, pozvedy na jedné noze, goblet dřepy).
                        </p>
                        <p>
                            Každý trénink se dělá TGU.{' '}
                            <strong>Techniky jednotlivých cviků se budete učit postupně</strong>,
                            program je škálovatelný použitou váhou jak pro začátečníky, tak i
                            pokročilé cvičence. Tréninkový program je opřen jak o symetrické cviky,
                            tak i o ty jednostranné, které mají super pozitivní vliv na sílu a
                            stabilitu středu těla.
                        </p>
                        <div className={classnames(styles['grid'], styles['grid--3'])}>
                            <div className={styles['grid__item']}>
                                <svg viewBox="0 0 512 512">
                                    <path d="M468.7 76.5C423.6 32.2 375 32 362.3 32c-12.7 0-61.5.2-106.3 44.4C211.3 32.3 162.5 32 149.7 32c-12.7 0-61.4.2-106.4 44.5C15.4 104 0 140.7 0 179.9 0 214.1 12.3 246 33.8 272h120.8l29.9-71.8 56.9 126.4c5.5 12.3 22.9 12.7 28.9.6l49.7-99.4 22.1 44.2h136c21.5-26 33.8-57.9 33.8-92.1.1-39.2-15.3-75.9-43.2-103.4zM462.5 240H361.9l-27.6-55.2c-5.9-11.8-22.7-11.8-28.6 0l-48.9 97.9-58.2-129.3c-5.8-12.8-24-12.5-29.4.4L133.3 240H49.5c-9.2-14.6-42.6-82.7 18.3-142.7C90.4 75.1 120 64 149.7 64c33.9 0 54.5 6.3 106.3 57.3C311 67.1 330.5 64 362.3 64c29.7 0 59.3 11.1 81.8 33.3 61 60.1 27.5 128.2 18.4 142.7zM268.7 443.4c-6.2 6.1-16.2 6.1-22.4 0L108.9 304H64l159.9 162.2c18.7 18.5 48.6 18.4 67.3 0L448 304h-44.5L268.7 443.4z"></path>
                                </svg>
                                <h4>2 - 4 tréninky týdně</h4>
                                <p>Program, co respektuje váš čas.</p>
                            </div>
                            <div className={styles['grid__item']}>
                                <svg viewBox="0 0 512 512">
                                    <path d="M468.7 76.5C423.6 32.2 375 32 362.3 32c-12.7 0-61.5.2-106.3 44.4C211.3 32.3 162.5 32 149.7 32c-12.7 0-61.4.2-106.4 44.5C15.4 104 0 140.7 0 179.9 0 214.1 12.3 246 33.8 272h120.8l29.9-71.8 56.9 126.4c5.5 12.3 22.9 12.7 28.9.6l49.7-99.4 22.1 44.2h136c21.5-26 33.8-57.9 33.8-92.1.1-39.2-15.3-75.9-43.2-103.4zM462.5 240H361.9l-27.6-55.2c-5.9-11.8-22.7-11.8-28.6 0l-48.9 97.9-58.2-129.3c-5.8-12.8-24-12.5-29.4.4L133.3 240H49.5c-9.2-14.6-42.6-82.7 18.3-142.7C90.4 75.1 120 64 149.7 64c33.9 0 54.5 6.3 106.3 57.3C311 67.1 330.5 64 362.3 64c29.7 0 59.3 11.1 81.8 33.3 61 60.1 27.5 128.2 18.4 142.7zM268.7 443.4c-6.2 6.1-16.2 6.1-22.4 0L108.9 304H64l159.9 162.2c18.7 18.5 48.6 18.4 67.3 0L448 304h-44.5L268.7 443.4z"></path>
                                </svg>
                                <h4>45 - 60 minut</h4>
                                <p>Do hoďky jste hotový!</p>
                            </div>
                            <div className={styles['grid__item']}>
                                <svg viewBox="0 0 640 512">
                                    <path d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z"></path>
                                </svg>
                                <h4>Cvičte kdekoliv</h4>
                                <p>Doma, venku, na hřišti.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles['section--image-grid']}>
                    <div className={styles['container']}>
                        <div className={styles['image-1']} />
                        <div className={styles['image-2']} />
                        <div className={styles['image-3']} />
                    </div>
                </section>

                <section className={styles['section--fullwidth']}>
                    <h2>Co získáte?</h2>
                    <div className={classnames(styles['grid'], styles['grid--4'])}>
                        <div className={styles['grid__item']}>
                            <svg viewBox="0 0 512 512">
                                <path d="M468.7 76.5C423.6 32.2 375 32 362.3 32c-12.7 0-61.5.2-106.3 44.4C211.3 32.3 162.5 32 149.7 32c-12.7 0-61.4.2-106.4 44.5C15.4 104 0 140.7 0 179.9 0 214.1 12.3 246 33.8 272h120.8l29.9-71.8 56.9 126.4c5.5 12.3 22.9 12.7 28.9.6l49.7-99.4 22.1 44.2h136c21.5-26 33.8-57.9 33.8-92.1.1-39.2-15.3-75.9-43.2-103.4zM462.5 240H361.9l-27.6-55.2c-5.9-11.8-22.7-11.8-28.6 0l-48.9 97.9-58.2-129.3c-5.8-12.8-24-12.5-29.4.4L133.3 240H49.5c-9.2-14.6-42.6-82.7 18.3-142.7C90.4 75.1 120 64 149.7 64c33.9 0 54.5 6.3 106.3 57.3C311 67.1 330.5 64 362.3 64c29.7 0 59.3 11.1 81.8 33.3 61 60.1 27.5 128.2 18.4 142.7zM268.7 443.4c-6.2 6.1-16.2 6.1-22.4 0L108.9 304H64l159.9 162.2c18.7 18.5 48.6 18.4 67.3 0L448 304h-44.5L268.7 443.4z"></path>
                            </svg>
                            <h4>Síla, mobilita, lepší figura</h4>
                            <p>Prostě budete hrozně fit.</p>
                        </div>
                        <div className={styles['grid__item']}>
                            <svg viewBox="0 0 384 512">
                                <path d="M336 256H96v-96c0-70.6 25.4-128 96-128s96 57.4 96 128v20c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-18.5C320 73.1 280.9.3 192.5 0 104-.3 64 71.6 64 160v96H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm16 208c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v160z"></path>
                            </svg>
                            <h4>Přístup ke všem článkům</h4>
                            <p>Protože naše články prostě číst chcete!</p>
                        </div>
                        <div className={styles['grid__item']}>
                            <svg viewBox="0 0 640 512">
                                <path d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z"></path>
                            </svg>
                            <h4>Přístup na všech zařízeních</h4>
                            <p>Desktop, laptop, tablet, mobil. Kdekoliv.</p>
                        </div>
                        <div className={styles['grid__item']}>
                            <svg viewBox="0 0 512 512">
                                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm168.766 113.176l-62.885 62.885a128.711 128.711 0 0 0-33.941-33.941l62.885-62.885a217.323 217.323 0 0 1 33.941 33.941zM256 352c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96zM363.952 68.853l-66.14 66.14c-26.99-9.325-56.618-9.33-83.624 0l-66.139-66.14c66.716-38.524 149.23-38.499 215.903 0zM121.176 87.234l62.885 62.885a128.711 128.711 0 0 0-33.941 33.941l-62.885-62.885a217.323 217.323 0 0 1 33.941-33.941zm-52.323 60.814l66.139 66.14c-9.325 26.99-9.33 56.618 0 83.624l-66.139 66.14c-38.523-66.715-38.5-149.229 0-215.904zm18.381 242.776l62.885-62.885a128.711 128.711 0 0 0 33.941 33.941l-62.885 62.885a217.366 217.366 0 0 1-33.941-33.941zm60.814 52.323l66.139-66.14c26.99 9.325 56.618 9.33 83.624 0l66.14 66.14c-66.716 38.524-149.23 38.499-215.903 0zm242.776-18.381l-62.885-62.885a128.711 128.711 0 0 0 33.941-33.941l62.885 62.885a217.323 217.323 0 0 1-33.941 33.941zm52.323-60.814l-66.14-66.14c9.325-26.99 9.33-56.618 0-83.624l66.14-66.14c38.523 66.715 38.5 149.229 0 215.904z"></path>
                            </svg>
                            <h4>Podpora ve FB skupině</h4>
                            <p>Poradíme, vynadáme, pochválíme!</p>
                        </div>
                    </div>
                </section>

                <section className={styles['section--text']}>
                    <div className={styles['block']}>
                        <div className={styles['block__content']}>
                            <h2>Co od toho můžete čekat?</h2>
                            <p>
                                Naučíte se dýchat, naučíte se zpevnit celé tělo a precizně se
                                naučíte <strong>technické provedení jednotlivých cviků</strong>.
                                Pracovat budete na síle a kondici, zbavíte se bolesti a budete se
                                cítit skvěle.
                            </p>
                        </div>
                        <div className={styles['block__image']}>
                            <svg viewBox="0 0 384 512">
                                <path
                                    d="M182.4,373.5c-38.3,0-69.3,31-69.3,69.3s31,69.3,69.3,69.3c38.3,0,69.3-31,69.3-69.3 C251.7,404.5,220.7,373.5,182.4,373.5z"
                                    fill="#fdc200"
                                ></path>
                                <path
                                    fill="#000"
                                    opacity="0.8"
                                    d="M367.9,153.6c0,116-125.3,117.8-125.3,160.6v5.8c0,13.3-10.7,24-24,24h-72.5c-13.3,0-24-10.7-24-24v-9.8 c0-61.8,46.9-86.5,82.3-106.4c30.4-17,49-28.6,49-51.2c0-29.8-38-49.6-68.8-49.6c-39.1,0-57.8,18.1-82.8,49.4 c-8.1,10.2-22.9,12-33.3,4.1l-43.1-32.7c-10.3-7.8-12.6-22.3-5.2-32.9C60.9,32.7,112.6,0,192.4,0C277.3,0,367.9,66.3,367.9,153.6z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </section>

                <section className={styles['section--text']}>
                    <div className={classnames(styles['block'], styles['block--reversed'])}>
                        <div className={styles['block__image']}>
                            <svg viewBox="0 0 448 512">
                                <path
                                    d="M296 96H152c-26.5 0-48 17.9-48 40v24a96 96 0 0 0 96 96h48a96 96 0 0 0 96-96v-24c0-22.1-21.5-40-48-40zm-108 76l-12 36-12-36-36-12 36-12 12-36 12 36 36 12zm-12 276a16 16 0 0 0-16 16v48h32v-48a16 16 0 0 0-16-16zm96 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16z"
                                    fill="#fdc200"
                                ></path>
                                <path
                                    fill="#000"
                                    opacity="0.8"
                                    d="M327.6 321.4a190.68 190.68 0 0 1-207.2 0C52.9 328.5 0 385 0 454.4v9.6a48 48 0 0 0 48 48h80v-64a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32v64h80a48 48 0 0 0 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM64 224h13.5a159.78 159.78 0 0 0 293 0H384a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16h-13.5a159.78 159.78 0 0 0-293 0H64a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24a96 96 0 0 1-96 96h-48a96 96 0 0 1-96-96z"
                                ></path>
                            </svg>
                        </div>
                        <div className={styles['block__content']}>
                            <h2>Co budete potřebovat?</h2>
                            <p>Lehký, střední a těžký kettlebell.</p>

                            <h6>Orientační váhy, které budete potřebovat:</h6>
                            <p>
                                <ul>
                                    <li>Začátečnice dáma: 4 / 12 / 16 kg</li>
                                    <li>Začátečník muž: 8 / 16 / 24 kg</li>
                                    <li>Pokročilá dáma: 12 / 20 / 28 kg</li>
                                    <li>Pokročilý muž: 16 / 24 / 32 kg</li>
                                </ul>
                                Dál budete potřebovat násadu od koštěte, hodí se i rubber band a
                                magnetické závaží na kettlebell.
                            </p>
                            <p className={styles['follow-link']}>
                                Pro víc informací si přečtěte náš článek na blogu
                                <svg viewBox="0 0 448 512">
                                    <path d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                                </svg>
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className={classnames(
                        styles['section--fullwidth'],
                        styles['section--fullwidth-black']
                    )}
                >
                    <h2 className={styles['light']}>
                        Nelíbí se ti tenhle program? Vyber si jinej!
                    </h2>
                    <p className={styles['follow-link']}>
                        Zobrazit všechny programy{' '}
                        <svg viewBox="0 0 448 512">
                            <path d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                        </svg>
                    </p>
                    <div className={styles['programs-more']}>
                        <a className={styles['program__preview']} href="#">
                            <div className={styles['preview__thumbnail']}></div>
                            <div className={styles['preview__content']}>
                                <h4>Ruke a nohe - Padawan</h4>
                                <p>Tréninkový program s vlastní vahou. Začátečnická úroveň.</p>
                            </div>
                        </a>

                        <a className={styles['program__preview']} href="#">
                            <div className={styles['preview__thumbnail']}></div>
                            <div className={styles['preview__content']}>
                                <h4>Ruke a nohe - Sokolík</h4>
                                <p>Tréninkový program s vlastní vahou. Pokročilá úroveň.</p>
                            </div>
                        </a>

                        <a className={styles['program__preview']} href="#">
                            <div className={styles['preview__thumbnail']}></div>
                            <div className={styles['preview__content']}>
                                <h4>Ruke a nohe - Ninja</h4>
                                <p>
                                    Tréninkový program s vlastní vahou. Jestli nejste nováčci v
                                    silovém tréninku, berte tenhle level!
                                </p>
                            </div>
                        </a>

                        <a className={styles['program__preview']} href="#">
                            <div className={styles['preview__thumbnail']}></div>
                            <div className={styles['preview__content']}>
                                <h4>Koule a kruhe</h4>
                                <p>Tréninkový program s kettlebellem a gymnastickými kruhy.</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
export default ProgramKouleKouleKoule;
