const Input = ({ label, id, error, ...props }) => {
    return (
        <div className="control-row">
            <div className="control no-margin">
                <label htmlFor={id}>{label}</label>
                <input id={id} {...props} />
                <div className="control-error">{error && <p>P{error} </p>}</div>
            </div>
        </div>
    );
};

export default Input;
