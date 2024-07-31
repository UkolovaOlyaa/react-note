import "./TextArea.css";

export const TextArea = ({ value, onChange, fullClassName, inputRef }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            className={fullClassName}
            ref={inputRef} 
        />
    );
};