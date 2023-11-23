import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/Services/userService';
import * as userFollow from '~/Services/userFollow';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import FollowerAccount from '~/components/FollowerAccount';
import SidebarFooter from './SidebarFooter';
const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 15;
function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [followUser, setFollowUser] = useState([]);
    useEffect(() => {
        userService
            .getSuggested({ page: INIT_PAGE, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser(data);
            })
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        userFollow
            .getFollower({ page: INIT_PAGE })
            .then((data1) => {
                setFollowUser(data1);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                    to={config.routes.home}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                    to={config.routes.following}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                    to={config.routes.live}
                ></MenuItem>
            </Menu>
            <SuggestedAccounts label="Suggested accounts" data={suggestedUser} />
            {/* <FollowerAccount label="Following accounts" data1={followUser} /> */}
            <SidebarFooter />
        </aside>
    );
}

export default Sidebar;
