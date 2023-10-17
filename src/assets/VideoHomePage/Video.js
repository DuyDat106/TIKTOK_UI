import classNames from 'classnames/bind';
import styles from './VideoHomePage.module.scss';
import { CommentIcon, LikeIcon, ShareIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function VideoResult({ data }) {
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('video-header')}>
                <div className={cx('video-info')}>
                    <div>
                        <Image className={cx('avatar')} src={data.avatar} alt="" key={data.id} />
                    </div>
                    <div className={cx('video-text')}>
                        <div className={cx('video-user')}>
                            <p className={cx('video-username')}>{data.nickname}</p>
                            <p className={cx('video-name')}>{`${data.first_name} ${data.last_name}`}</p>
                            <Button outline className={cx('follow-btn')}>
                                Follow
                            </Button>
                        </div>
                        <p className={cx('video-caption')}>{data.popular_video.description}</p>
                    </div>
                </div>
            </header>
            <div className={cx('video-body')}>
                <video className={cx('video-homepage')} controls src={data.popular_video.file_url}></video>
                <div className={cx('video-status')}>
                    <button className={cx('btn-icon')}>
                        <LikeIcon />
                    </button>
                    <strong className={cx('text-status')}>{data.likes_count}</strong>
                    <button className={cx('btn-icon')}>
                        <CommentIcon />
                    </button>
                    <strong className={cx('text-status')}>{data.popular_video.comments_count}</strong>
                    <button className={cx('btn-icon')}>
                        <ShareIcon />
                    </button>
                    <strong className={cx('text-status')}>{data.popular_video.shares_count}</strong>
                </div>
            </div>
        </div>
    );
}

export default VideoResult;
