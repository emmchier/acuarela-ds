import { CSSProperties, ReactNode } from 'react';

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
  children?: ReactNode | ReactNode[];
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
