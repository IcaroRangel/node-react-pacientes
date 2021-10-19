import React from "react";

interface InitialValues {
  name: string;
  telephone: string;
  email: string;
  address: string;
}

const Form = () => {
  const [values, setValues] = React.useState({} as InitialValues);
  return (
    <div>
      <h3>Lista de pacientes</h3>
      <span>...</span>
    </div>
  );
};

export default Form;
