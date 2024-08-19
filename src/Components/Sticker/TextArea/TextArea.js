import "./TextArea.css";

export const TextArea = ({
  onChange,
  disabled,
  text,
  fullClassName,
  inputRef,
}) => {
  return (
    <textarea
      value={text}
      disabled={disabled}
      onChange={onChange}
      className={fullClassName}
      maxLength="500"
      ref={inputRef}
    />
  );
};
