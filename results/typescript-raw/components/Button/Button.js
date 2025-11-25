import { jsx as _jsx } from "react/jsx-runtime";
export const BUTTON_VARIANTS = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    DANGER: 'danger'
};
function Button({ children, variant = 'primary', onClick, disabled = false }) {
    const className = `btn btn-${variant} ${disabled ? 'disabled' : ''}`;
    return (_jsx("button", { className: className, onClick: onClick, disabled: disabled, type: "button", children: children }));
}
// Default export - comprehensive export pattern for ESM
export default Button;
//# sourceMappingURL=Button.js.map