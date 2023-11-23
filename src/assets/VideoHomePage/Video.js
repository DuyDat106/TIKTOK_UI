import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useElementOnScreen } from '~/Hooks';

const cx = classNames.bind(styles);
function Video({ data }) {
    const [playing, setPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);
    const handlePlay = () => {
        try {
            if (playing) {
                videoRef.current.pause();
                setPlaying(!playing);
            } else {
                videoRef.current.play();
                setPlaying(!playing);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };
    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisibile]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-container')}>
                <video loop ref={videoRef} className={cx('video-homepage')} src={data.file_url}></video>
            </div>

            {!playing ? (
                <span className={cx('play-pause')} onClick={handlePlay}>
                    <FontAwesomeIcon icon={faPlay} />
                </span>
            ) : (
                <span className={cx('play-pause')} onClick={handlePlay}>
                    <FontAwesomeIcon icon={faPause} />
                </span>
            )}
            {!isMuted ? (
                <span className={cx('btn-mute')} onClick={handleMute}>
                    <FontAwesomeIcon icon={faVolumeHigh} />
                </span>
            ) : (
                <span className={cx('btn-mute')} onClick={handleMute}>
                    <FontAwesomeIcon icon={faVolumeXmark} />
                </span>
            )}
        </div>
    );
}

export default Video;
