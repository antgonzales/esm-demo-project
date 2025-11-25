import { jsx } from 'react/jsx-runtime';

const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger'
};
function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false
}) {
  const className = `btn btn-${variant} ${disabled ? 'disabled' : ''}`;
  return jsx("button", {
    className: className,
    onClick: onClick,
    disabled: disabled,
    type: "button",
    children: children
  });
}

export { BUTTON_VARIANTS, Button as default };
//# sourceMappingURL=Button.js.map
