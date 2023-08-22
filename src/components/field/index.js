import './field.css'

function Field({ fieldName, fieldState, handleClient }) {
  console.log('field--', { fieldName, fieldState, handleClient })

  return (
    <>
      <label htmlFor={fieldName} className="control-label" >
        <span>
          { fieldName.toUpperCase() }
        </span>
        <input type="text" id={fieldName} onChange={handleClient} value={fieldState} name={fieldName} className="form-control "/>
      </label>
    </>
  );
};  

export default Field;