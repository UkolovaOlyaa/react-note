import "./Button.css";

export const Button = ({ main, disabled = true, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={main ? "main-botton" : "button-on-sticker"}
      disabled={!disabled}
    >
      {children}
    </button>
  );
};
