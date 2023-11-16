import React from 'react';

const InputForm = ({ label, name, register, type, placeholder, minLength, maxLength, pattern, errorMessage }) => {


  return (
    <div className="form-control">
      <label className="label font-bold">
        <span className="label-text">{label}</span>
      </label>
      <input
        minLength={minLength}
        maxLength={maxLength}
        {...register(name)}
        className="input input-bordered"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;