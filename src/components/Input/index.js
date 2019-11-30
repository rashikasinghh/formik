import React, { Fragment, PureComponent } from "react";

class Input extends PureComponent {
  componentDidUpdate = prevProps => {
    const { errors, value } = this.props;
    if (errors !== prevProps.errors || value !== prevProps.value) {
      this.props.validateField({ errors, value });
    }
  };

  render = () => {
    const { errors, label, name, touched, validateField, ...rest } = this.props;
    return (
      <Fragment>
        <label htmlFor={name} style={{ display: "block" }}>
          {label}
        </label>
        <input {...rest} name={name} />
        {errors && touched && (
          <div style={{ color: "red", marginTop: ".5rem" }}>{errors}</div>
        )}
      </Fragment>
    );
  };
}

export default Input;
