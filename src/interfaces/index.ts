import { CSSProperties, ChangeEvent, FocusEvent, ReactNode } from 'react';

export interface GlobalProps {
  /**
   * The order to navigate for one component to another by screen readers
   */
  tabIndex?: number;
  /**
   * The component ARIA label special for screen readers
   */
  ariaLabel?: string;
  /**
   * The component content
   */
  children?: string | ReactNode | ReactNode[];
  /**
   * The component size
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * The component text color
   */
  textColor?: string;
  /**
   * The component background color
   */
  bgColor?: string | undefined;
  /**
   * The component border color
   */
  borderColor?: string | undefined;
  /**
   * The component border size
   */
  borderSize?: number | undefined;
  /**
   * The component corner radius
   */
  borderRadius?: 'sm' | 'md' | 'lg' | 'full' | 'none';
  /**
   * Indicates if component has shadow elevation
   */
  elevation?: number;
  /**
   * Indicates if component is disabled
   */
  disabled?: boolean;
  /**
   * Additional styles for the component
   */
  style?: CSSProperties;
  /**
   * Additional CSS classes for the component
   */
  className?: string;
  /**
   * The component click handler function
   */
  onClick?: () => void;
  /**
   * The component mouseEnter handler function
   */
  onMouseEnter?: () => void;
  /**
   * The component mouseLeave handler function
   */
  onMouseLeave?: () => void;
  /**
   * The component keyDown handler function
   */
  onKeyDown?: () => void;
  /**
   * The component keyUp handler function
   */
  onKeyUp?: () => void;
}

export interface IconProps {
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
  size?: string;
  color?: string;
}

export interface ButtonProps extends GlobalProps {
  /**
   * The button type
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * The button variant
   */
  variant?: 'contained' | 'outlined' | 'ghost' | 'text' | 'link' | 'none';
  /**
   * The left icon of the button
   */
  iconLeft?: ReactNode;
  /**
   * The right icon of the button
   */
  iconRight?: ReactNode;
  /**
   * Indicates if component is an Icon Button
   */
  iconButton?: boolean;
  /**
   * Indicates if the button is in a loading state
   */
  loading?: boolean;
}

export interface InputProps extends GlobalProps {
  /**
   * The input type
   */
  type?: 'text' | 'number' | 'password' | 'submit' | 'reset' | 'email';
  /**
   * Indicates different input styled variants
   */
  variant?: 'contained' | 'outlined' | 'text' | 'underline' | 'shadow';
  /**
   * The input border radius
   */
  borderRadius?: 'sm' | 'md' | 'lg' | 'full' | 'none';
  /**
   * Indicates an specific input action with color and icon
   * Action only shows if "resetButton" prop is setting to false
   */
  state?: 'default' | 'success' | 'error' | 'warning' | 'info';
  /**
   * The helper text aligment on the right or left
   */
  helperTextAlign?: 'start' | 'end';
  /**
   * Indicates the border color when input is in focus state
   */
  focusColor?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /**
   * The asociated input label vital for screen readers
   */
  label: string;
  /**
   * The asociated input label className for additional CSS propieties
   */
  labelClassName?: string;
  /**
   * The input id
   */
  id?: number | string;
  /**
   * Gets an html input ref for different actions
   */
  ref?: any;
  /**
   * The input name important to form field references
   */
  name: string;
  /**
   * The input value for fill it
   */
  value?: number | string;
  /**
   * The input default value
   */
  defaultValue?: number | string;
  /**
   * Indicates the input field tematic
   */
  placeholder?: string;
  /**
   * The input maximum character length
   */
  maxLength?: number;
  /**
   * The input minimum character length
   */
  minLength?: number;
  /**
   * Indicates an specific character pattern to show the input content
   */
  pattern?: string;
  /**
   * The minimun number value admited
   */
  minValue?: number;
  /**
   * The maximum number value admited
   */
  maxValue?: number;
  /**
   * Indicates if input value is required to fill
   */
  required?: boolean;
  /**
   * Indicates if asociated input label is showing or not
   */
  hideLabel?: boolean;
  /**
   * Indicates if input is invalid to fill by read only state
   */
  readOnly?: boolean;
  /**
   * Indicates if input ready to fill in focus state
   */
  autoFocus?: boolean;
  /**
   * Action button for reset input values.
   * Is setting by default.
   */
  resetButton?: boolean;
  /**
   * The input character counter
   */
  charCounter?: boolean;
  /**
   * Indicates the value from start counter
   */
  charCounterMin?: number;
  /**
   * Indicates the value from end counter
   */
  charCounterMax?: number;
  /**
   * A small text to show additional input information as errors and others
   */
  helperText?: string;
  /**
   * An html element at the beginning of input text
   */
  prefix?: string | number | ReactNode | ReactNode[];
  /**
   * Icon actions as buttons or read only
   */
  action?: string | number | ReactNode | ReactNode[];
  /**
   * The action icon ARIA label special for screen readers
   */
  ariaLabelAction?: string;
  /**
   * The action icon onClick handler function
   */
  onClickAction?: () => void;
  /**
   * The input submit handler function
   */
  onSubmit?: (event: any) => void;
  /**
   * The input onFocus handler function
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  /**
   * The input onChange handler function
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The input onBlur handler function
   */
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
}
