import classNames from 'classnames/bind';
import styles from './SidebarFooter.module.scss';
import { ImageIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
function SidebarFooter() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('image')}
                src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/045b2fc7c278b9a30dd0.png"
                alt=""
            />
            <ImageIcon />
        </div>
    );
}

export default SidebarFooter;
