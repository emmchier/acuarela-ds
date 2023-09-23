# Acuarela DS

An ultra-lightweight component library for React applications.
We only have a Button component, for now, but stay tuned as we'll keep adding more.

<!-- ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [License](#license)

## Installation

To install Acuarela DS, you can use npm or yarn:

```
npm install acuarela-ds
```

or

```
yarn add acuarela-ds
```

**Usage**

Import the `Button` component in your React application and use it as follows:

```
import React from 'react';
import { Button } from 'acuarela-ds';

/...
return (
  <>
    <Button
      iconLeft={<AddIcon />}
      ...rest props here
    >
      Agregar
    </Button>
  </>
)
```

```
const MyComponent = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Button
      loading={loading}
      onClick={handleClick}
    >
      {loading ? 'Loading...' : 'Send'}
    </Button>
  );
};
```

## Props

The `Button` component accepts the following props:

| Prop           | Type     | Default       | Description                                                                  |
| -------------- | -------- | ------------- | ---------------------------------------------------------------------------- |
| `type`         | `string` | `'button'`    | Type of the button (`'button'`, `'submit'`, `'reset'`).                      |
| `variant`      | `string` | `'contained'` | Button variant (`'contained'`, `'outlined'`, `'ghost'`, `'text'`, `'link'`). |
| `iconLeft`     | `node`   | `null`        | Icon on the left side of the button text (ReactNode).                        |
| `iconRight`    | `node`   | `null`        | Icon on the right side of the button text (ReactNode).                       |
| `iconButton`   | `bool`   | `false`       | Indicates whether the button is an icon button.                              |
| `loading`      | `bool`   | `false`       | Indicates if the button is in a loading state.                               |
| `children`     | `node`   | `''`          | Button content.                                                              |
| `tabIndex`     | `number` | `0`           | Tab index of the button.                                                     |
| `ariaLabel`    | `string` | `''`          | ARIA label for the button.                                                   |
| `elevation`    | `number` | `0`           | Button elevation.                                                            |
| `textColor`    | `string` | `''`          | Button text color.                                                           |
| `bgColor`      | `string` | `''`          | Button background color.                                                     |
| `borderSize`   | `number` | `0`           | Button border size.                                                          |
| `size`         | `string` | `'md'`        | Button size (`'sm'`, `'md'`, `'lg'`).                                        |
| `borderColor`  | `string` | `''`          | Button border color.                                                         |
| `borderRadius` | `string` | `'sm'`        | Button border radius (`'sm'`, `'md'`, `'lg'`).                               |
| `className`    | `string` | `''`          | Additional CSS classes for the button.                                       |
| `style`        | `object` | `{}`          | Additional inline styles for the button.                                     |
| `disabled`     | `bool`   | `false`       | Indicates if the button is disabled.                                         |
| `onClick`      | `func`   | `() => {}`    | Click handler for the button.                                                |
| `onMouseEnter` | `func`   | `() => {}`    | Mouse enter event handler.                                                   |
| `onMouseLeave` | `func`   | `() => {}`    | Mouse leave event handler.                                                   |
| `onKeyDown`    | `func`   | `() => {}`    | Keydown event handler.                                                       |
| `onKeyUp`      | `func`   | `() => {}`    | Keyup event handler.                                                         |

## Examples

Here are some examples of how to use the `Button` component:

```
import React from 'react';
import { Button } from 'acuarela-ds';

function MyComponent() {
  return (
    <div>

      <Button
        ariaLabel="send info"
        onClick={handleSubmit}
        loading={isLoading}>
          Send
      </Button>

      <Button
        ariaLabel="describe action"
        bgColor="success"
        textColor="white">
          Customized Button
      </Button>

      <Button
        ariaLabel="check button"
        iconButton>
          <i className="fas fa-check" />
      </Button>
    </div>
  );
}

export default MyComponent;
``` -->

### [DEMOS](https://emmchier.github.io/acuarela-ds/?path=/docs/button--docs&globals=backgrounds.grid:!false)

## License

This button component is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
