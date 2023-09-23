export const getVariant = (variant: string) => {
  if (variant === 'contained') return 'contained';
  if (variant === 'outlined') return 'outlined';
  if (variant === 'ghost') return 'ghost';
  if (variant === 'text') return 'text';
  if (variant === 'link') return 'link';
  if (variant === 'shadow') return 'shadow';
  if (variant === 'none') return 'noVariant';

  return '';
};

export const getRadius = (radius: string) => {
  if (radius === 'sm') return 'radiusSm';
  if (radius === 'md') return 'radiusMd';
  if (radius === 'lg') return 'radiusLg';
  if (radius === 'full') return 'radiusFull';
  if (radius === 'none') return 'radiusNone';

  return '';
};

export const getSize = (size: any) => {
  if (size === 'xs') return 'sizeXs';
  if (size === 'sm') return 'sizeSm';
  if (size === 'md') return 'sizeMd';
  if (size === 'lg') return 'sizeLg';

  return '';
};

export const getNumberSize = (size: string) => {
  if (size === 'xs') return '16';
  if (size === 'sm') return '20';
  if (size === 'md') return '24';
  if (size === 'lg') return '28';

  return '';
};

export const getStateColor = (state: any) => {
  if (state === 'success') return '#04c3b6';
  if (state === 'error') return '#e30918';
  if (state === 'info') return '#0985e3';
  if (state === 'warning') return '#ff8400';

  return '';
};
