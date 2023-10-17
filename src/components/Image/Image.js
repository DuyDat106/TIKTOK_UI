import { forwardRef } from 'react';
import images from '~/assets/images';
import { useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';
import propTypes from 'prop-types';
const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noIamge, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
Image.propTypes = {
    src: propTypes.string,
    alt: propTypes.string,
    className: propTypes.string,
    fallBack: propTypes.string,
};
export default Image;
