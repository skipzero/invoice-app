import './field.css'

function Field({ fieldName, fieldState, handleClient }) {
  console.log('field--', { fieldName, fieldState, handleClient })

  return (
    <>
      <label htmlFor={fieldName}>
        <span>
          {   fieldName.toUpperCase() }
        </span>
        <input type="text" id={fieldName} onChange={handleClient} value={fieldState} name={fieldName} />
      </label>
    </>
  );
};

export default Field;