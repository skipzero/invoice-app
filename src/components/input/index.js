import { useState } from 'React';

function Field({ fieldName, setFieldState }) {
    const handleChange = (e) => {
        const val = e.target.value;
        setFieldState(val)
    }

    return (
        <div>
            <label for={fieldName}>
                <input name={fieldName} type="text" id={fieldName} onChange={handleChange} />
            </label>
        </div>
    );
};

export default Field;