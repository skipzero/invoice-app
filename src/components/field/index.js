import "./field.css";

function Field({ fieldName, fieldState, handleClient, handleDate }) {
  console.log("field--", { fieldName, fieldState, handleClient });
  const handler = !handleClient ? handleDate : handleClient;
  let fieldType;
  let rOnly;
  if (fieldName === "email") {
    fieldType = "email";
  } else if (fieldName === "date" || fieldName === "due") {
    fieldType = "date";
    rOnly = fieldName === "due" ? true : false;
  } else {
    fieldType = "text";
  }
  return (
    <div className="md-form md-bg">
      <input type={fieldType} id={fieldName} readOnly={rOnly} onChange={handler} value={fieldState} name={fieldName} className="form-control " />
      <label htmlFor={fieldName} className="form-label">
        {fieldName}
      </label>
    </div>
  );
}

export default Field;
