import { jsx } from 'react/jsx-runtime';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false
}) => {
  const className = `btn btn-${variant} ${disabled ? 'disabled' : ''}`;
  return jsx("button", {
    className: className,
    onClick: onClick,
    disabled: disabled,
    type: "button",
    children: children
  });
};

export { Button as default };
//# sourceMappingURL=Button.js.map
