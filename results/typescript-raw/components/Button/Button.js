import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ children, variant = 'primary', onClick, disabled = false }) => {
    const className = `btn btn-${variant} ${disabled ? 'disabled' : ''}`;
    return (_jsx("button", { className: className, onClick: onClick, disabled: disabled, type: "button", children: children }));
};
// Default export - claimed to be "problematic" for ESM
export default Button;
//# sourceMappingURL=Button.js.map