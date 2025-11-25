import { jsx, jsxs } from 'react/jsx-runtime';

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'medium'
}) => {
  if (!isOpen) return null;
  const modalClassName = `modal modal-${size}`;
  return jsx("div", {
    className: "modal-backdrop",
    onClick: onClose,
    children: jsxs("div", {
      className: modalClassName,
      onClick: e => e.stopPropagation(),
      children: [jsxs("div", {
        className: "modal-header",
        children: [jsx("h2", {
          children: title
        }), jsx("button", {
          onClick: onClose,
          className: "modal-close",
          children: "\u00D7"
        })]
      }), jsx("div", {
        className: "modal-content",
        children: children
      })]
    })
  });
};

export { Modal as default };
//# sourceMappingURL=Modal.js.map
