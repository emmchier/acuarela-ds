import { getRadius, getSize, getVariant } from '../../helpers';

import { ButtonProps } from '../../interfaces';
import { ProgressIcon } from '../icon/Icon';

import '../../styles/globals.css';
import '../../styles/theme.css';
import './button.css';

/**
 * @module Button
 * @description A reusable button component with multiple customization options.
 *
 * @typedef {Object} ButtonProps
 * @property {string} [type='button'] - Button type ('button', 'submit', 'reset').
 * @property {string} [variant='contained'] - Button variant ('contained', 'outlined', 'text', 'link', 'ghost').
 * @property {string} [iconLeft=''] - Icon on the left side of the button text (icon URL or React component).
 * @property {string} [iconRight=''] - Icon on the right side of the button text (icon URL or React component).
 * @property {boolean} [iconButton=false] - Indicates whether the button is an icon button.
 * @property {boolean} [loading=false] - Indicates whether the button is in a loading state.
 * @property {string} [children=''] - Button content (text or JSX).
 * @property {number} [tabIndex=0] - Value of the 'tabIndex' attribute.
 * @property {string} [ariaLabel=''] - Descriptive text for accessibility.
 * @property {number} [elevation=0] - Button elevation level.
 * @property {string} [textColor=undefined] - Text color of the button.
 * @property {string} [bgColor=undefined] - Background color of the button.
 * @property {number} [borderSize=undefined] - Button border size.
 * @property {string} [size='md'] - Button size ('sm', 'md', 'lg').
 * @property {string} [borderColor=''] - Button border color.
 * @property {string} [borderRadius='sm'] - Button border radius ('sm', 'md', 'lg', 'xl', 'full').
 * @property {string} [className=''] - Additional CSS classes for the button.
 * @property {Object} [style=undefined] - Additional inline CSS styles for the button.
 * @property {boolean} [disabled=false] - Indicates whether the button is disabled.
 * @property {function} [onClick] - Event handler for button click.
 * @property {function} [onMouseEnter] - Event handler for mouse enter.
 * @property {function} [onMouseLeave] - Event handler for mouse leave.
 * @property {function} [onKeyDown] - Event handler for key down.
 * @property {function} [onKeyUp] - Event handler for key up.
 *
 * @example
 * // Example usage:
 * import { Button } from 'acuarela-ds';
 *
 * const MyComponent = () => {
 *   return (
 *     <Button
 *       variant="contained"
 *       onClick={() => alert('You clicked the button')}
 *     >
 *       Click here
 *     </Button>
 *   );
 * }
 *
 * @see [Link to full documentation](https://github.com/emmchier/acuarela-ds)
 */

export const Button = ({
  type = 'button',
  variant = 'contained',
  iconLeft = null,
  iconRight = null,
  iconButton = false,
  loading = false,
  children,
  tabIndex = 0,
  ariaLabel,
  elevation = 0,
  textColor = undefined,
  bgColor = undefined,
  borderSize = undefined,
  size = 'md',
  borderColor = '',
  borderRadius = 'sm',
  className = '',
  style: additionalStyles = undefined,
  disabled = false,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onKeyDown = () => {},
  onKeyUp = () => {},
}: ButtonProps) => {
  const classes = () => {
    return [
      className,
      'acButton',
      getVariant(variant),
      getSize(size),
      getRadius(borderRadius),
      elevation ? `elevation${elevation}` : '',
      loading ? 'loading' : '',
      iconLeft ? 'iconLeft' : '',
      iconRight ? 'iconRight' : '',
      disabled ? 'disabled' : '',
      iconButton ? 'iconButton' : '',
    ]
      .filter(Boolean)
      .join(' ');
  };

  const inlineStyles = {
    color: textColor,
    backgroundColor: bgColor,
    border: `${borderSize}px solid ${borderColor}`,
    ...additionalStyles,
  };

  return (
    <button
      tabIndex={tabIndex}
      type={type}
      className={classes()}
      style={inlineStyles}
      aria-label={ariaLabel}
      aria-disabled={disabled ? 'true' : 'false'}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!iconRight && !iconLeft && (
        <ProgressIcon className={`acButton-loadingIcon ${loading && 'active'}`} color={textColor} />
      )}
      {!iconButton && iconLeft && iconLeft}
      <span className={`acButton-label ${loading && 'loading'}`}>{children}</span>
      {!iconButton && iconRight && iconRight}
    </button>
  );
};

export default Button;
