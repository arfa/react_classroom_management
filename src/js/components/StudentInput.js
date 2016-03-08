import React from "react";
import Formsy from "formsy-react";

export default React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue: function (event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },
  
  render: function () {

    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = 'form-group' + (this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
      <div class={className}>
        <label htmlFor={this.props.name} class="col-lg-2 control-label">{this.props.title}</label>
        <div class="col-lg-10">
          <input
            class="form-control"
            type={this.props.type || 'text'}
            name={this.props.name}
            placeholder={this.props.title}
            onChange={this.changeValue}
            value={this.getValue()}
            checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null} />
          <span>{errorMessage}</span>
        </div>
      </div>
    );
  }
});
