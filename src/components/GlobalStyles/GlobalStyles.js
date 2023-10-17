import './GlobalStyles.scss';
import propTypes from 'prop-types';
function GlobalStyles({ children }) {
    return children;
}
GlobalStyles.propTypes = { children: propTypes.node.isRequired };
export default GlobalStyles;
