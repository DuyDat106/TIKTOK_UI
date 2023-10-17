import Button from '~/components/Button/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        seperate: data.seperate,
    });
    return (
        <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: propTypes.object.isRequired,
    onClick: propTypes.func,
};
export default MenuItem;
