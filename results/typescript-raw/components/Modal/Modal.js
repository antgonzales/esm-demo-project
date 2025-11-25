import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Modal = ({ isOpen, onClose, children, title, size = 'medium' }) => {
    if (!isOpen)
        return null;
    const modalClassName = `modal modal-${size}`;
    return (_jsx("div", { className: "modal-backdrop", onClick: onClose, children: _jsxs("div", { className: modalClassName, onClick: e => e.stopPropagation(), children: [_jsxs("div", { className: "modal-header", children: [_jsx("h2", { children: title }), _jsx("button", { onClick: onClose, className: "modal-close", children: "\u00D7" })] }), _jsx("div", { className: "modal-content", children: children })] }) }));
};
// Another default export - more "problematic" patterns
export default Modal;
//# sourceMappingURL=Modal.js.map