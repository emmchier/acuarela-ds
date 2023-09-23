import { ChangeEvent, useEffect, useState } from 'react';

import { getSize, getRadius, getVariant, getIconActionByState } from '../helpers';
import { InputProps } from '../interfaces';

import { CancelCircleIcon } from './Icon';
import Button from './Button';

import '../styles/globals.css';
import '../styles/theme.css';
import './input.css';

/**
 * @module Input
 * @description A versatile input field component with various customization options.
 *
 * @typedef {Object} InputProps
 * @property {string} [type='text'] - The type of input ('text', 'password', 'email', etc.).
 * @property {string} [variant='outlined'] - The input field variant ('outlined', 'filled', etc.).
 * @property {string} [state='default'] - The state of the input ('default', 'error', 'success', 'warning').
 * @property {string} [name=''] - The name attribute for the input.
 * @property {Object} [ref] - A reference to the input element.
 * @property {string} [value] - The value of the input field.
 * @property {number} [minValue] - The minimum value for numeric inputs.
 * @property {number} [maxValue] - The maximum value for numeric inputs.
 * @property {string} [defaultValue] - The default value for the input.
 * @property {string} [placeholder] - The placeholder text.
 * @property {number} [maxLength] - The maximum number of characters allowed.
 * @property {number} [minLength] - The minimum number of characters required.
 * @property {string} [pattern] - A regular expression pattern for validation.
 * @property {string} [label=''] - The label for the input field.
 * @property {string} [labelClassName=''] - Additional class name for the label.
 * @property {number} [charCounterMin] - Minimum character count for a character counter.
 * @property {number} [charCounterMax] - Maximum character count for a character counter.
 * @property {string} [prefix=''] - Text to display before the input field.
 * @property {element} [action=null] - Additional action element to display after the input field.
 * @property {string} [helperText=''] - Helper text to provide additional information.
 * @property {string} [helperTextAlign='end'] - Alignment of the helper text ('start', 'center', 'end').
 * @property {string} [focusColor='primary'] - Color when the input is in focus.
 * @property {boolean} [hideLabel=false] - Whether to hide the label.
 * @property {boolean} [required=false] - Whether the input is required.
 * @property {boolean} [readOnly=false] - Whether the input is read-only.
 * @property {boolean} [autoFocus=false] - Whether the input should automatically focus.
 * @property {boolean} [resetButton=true] - Whether to display a reset button.
 * @property {boolean} [charCounter=false] - Whether to display a character counter.
 * @property {number} [tabIndex=0] - The tabindex of the input element.
 * @property {string} [ariaLabel=''] - Descriptive text for accessibility.
 * @property {number} [elevation=0] - Elevation level.
 * @property {string} [textColor=''] - Text color of the input field.
 * @property {string} [bgColor=''] - Background color of the input field.
 * @property {number} [borderSize] - Border size of the input field.
 * @property {string} [size='md'] - Size of the input ('sm', 'md', 'lg').
 * @property {string} [borderColor=''] - Border color of the input field.
 * @property {string} [borderRadius='sm'] - Border radius of the input field.
 * @property {string} [className=''] - Additional CSS classes for the input component.
 * @property {Object} [style] - Additional inline CSS styles for the input component.
 * @property {boolean} [disabled=false] - Whether the input is disabled.
 * @property {string} [ariaLabelAction=''] - Descriptive text for the action element.
 * @property {function} [onClick=() => {}] - Event handler for input click.
 * @property {function} [onMouseEnter=() => {}] - Event handler for mouse enter.
 * @property {function} [onMouseLeave=() => {}] - Event handler for mouse leave.
 * @property {function} [onKeyDown=() => {}] - Event handler for key down.
 * @property {function} [onKeyUp=() => {}] - Event handler for key up.
 * @property {function} [onChange=() => {}] - Event handler for input value change.
 * @property {function} [onSubmit=() => {}] - Event handler for form submission.
 * @property {function} [onFocus=() => {}] - Event handler for input focus.
 * @property {function} [onBlur=() => {}] - Event handler for input blur.
 * @property {function} [onClickAction] - Event handler for action element click.
 *
 * @example
 * // Example usage:
 * import { Input } from 'your-input-component-package';
 *
 * const MyForm = () => {
 *   return (
 *     <Input
 *       type="text"
 *       label="Username"
 *       placeholder="Enter your username"
 *       onChange={(e) => console.log(e.target.value)}
 *     />
 *   );
 * }
 *
 * @see [Link to full documentation](https://github.com/emmchier/acuarela-ds)
 */

export const Input = ({
  type = 'text',
  variant = 'outlined',
  state = 'default',
  name = '',
  ref,
  value,
  minValue,
  maxValue,
  defaultValue,
  placeholder,
  maxLength,
  minLength,
  pattern,
  label = '',
  labelClassName = '',
  charCounterMin,
  charCounterMax,
  prefix = '',
  action = null,
  helperText = '',
  helperTextAlign = 'end',
  focusColor = 'primary',
  hideLabel = false,
  required = false,
  readOnly = false,
  autoFocus = false,
  resetButton = true,
  charCounter = false,
  tabIndex = 0,
  ariaLabel = '',
  elevation = 0,
  textColor = '',
  bgColor = '',
  borderSize,
  size = 'md',
  borderColor = '',
  borderRadius = 'sm',
  className = '',
  style: additionalStyles,
  disabled = false,
  ariaLabelAction = '',
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onKeyDown = () => {},
  onKeyUp = () => {},
  onChange = () => {},
  onSubmit = () => {},
  onFocus = () => {},
  onBlur = () => {},
  onClickAction = undefined,
}: InputProps) => {
  const [localValue, setLocalValue] = useState(value || '');

  // Efecto para actualizar el valor local cuando cambian las props externas
  useEffect(() => {
    setLocalValue(localValue as string); // Puedes establecer otro valor predeterminado si lo deseas
  }, [localValue]);

  useEffect(() => {
    setLocalValue(value || ''); // Actualiza "localValue" cuando cambia "value"
  }, [value]);

  // Función para manejar el cambio interno
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  // Función para borrar el input
  const handleClearInput = () => {
    setLocalValue('');
  };

  const classes = () => {
    return [
      className,
      'acInput',
      getSize(size),
      getRadius(borderRadius),
      getVariant(variant),
      state ? state : '',
      elevation ? `elevation${elevation}` : '',
      disabled ? 'disabled' : '',
      resetButton || action || state ? 'adjustRightPadding' : '',
      prefix ? 'adjustLeftPadding' : '',
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
    <div className="inputGroup">
      <label
        htmlFor={name}
        className={`inputFieldLabel ${labelClassName} ${
          hideLabel && 'hideLabel'
        } ${state} ${getSize(size)} ${getRadius(borderRadius)}`}
      >
        {label}
      </label>
      <div className={`inputField ${getSize(size)}`}>
        <input
          type={type}
          ref={ref}
          id={name}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          min={minValue}
          max={maxValue}
          required={required}
          readOnly={readOnly}
          autoFocus={autoFocus}
          autoComplete="off"
          tabIndex={tabIndex}
          className={classes()}
          style={inlineStyles}
          aria-label={ariaLabel}
          aria-disabled={disabled ? 'true' : 'false'}
          value={localValue}
          onChange={(e) => {
            handleInputChange(e);
            onChange(e);
          }}
          onSubmit={onSubmit}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <div className="prefix">{prefix}</div>
        <div className="actions">
          {resetButton ? (
            localValue && (
              <Button
                onClick={handleClearInput}
                className="resetBtn"
                ariaLabel={localValue ? 'Reset value' : ''}
                variant="ghost"
                borderRadius="full"
                size="xs"
                iconButton
              >
                <CancelCircleIcon size="xs" />
              </Button>
            )
          ) : (
            <Button
              onClick={onClickAction}
              className={`inputAction ${
                action && typeof onClickAction === 'function' && onClickAction !== undefined
                  ? ''
                  : 'disableAction'
              }`}
              ariaLabel={ariaLabelAction}
              variant={
                action && typeof onClickAction === 'function' && onClickAction !== undefined
                  ? 'ghost'
                  : 'none'
              }
              borderRadius="full"
              size="xs"
              iconButton
            >
              {action ? action : getIconActionByState(state)}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
