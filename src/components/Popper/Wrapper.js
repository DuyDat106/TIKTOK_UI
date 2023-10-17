import classNames from 'classnames/bind';
import style from './Popper.module.scss';
import propTypes from 'prop-types';
const cx = classNames.bind(style);
function wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}
wrapper.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
};

export default wrapper;
