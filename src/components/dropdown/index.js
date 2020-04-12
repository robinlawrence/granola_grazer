import React from "react";
import { Field } from "formik";

const DropDown = ({ name, options }) => (
  <>
    <label htmlFor={name}>{name}</label>
    <Field as="select" name={name}>
      <option value="">--Select --</option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </Field>
  </>
);

export default DropDown;
