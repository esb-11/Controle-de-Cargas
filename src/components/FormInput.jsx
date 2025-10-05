function FormInput({ name, value, setValue }) {
  const nameLowerCase = name.toLowerCase();

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <label htmlFor={nameLowerCase}>
        <span>{name}</span>
        <input
          type={nameLowerCase}
          name={nameLowerCase}
          id={nameLowerCase}
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
}

export default FormInput;
