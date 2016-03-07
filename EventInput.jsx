EventInput = React.createClass({

  render() {
    return (
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit} >
        <input
          type="text"
          ref="textInput"
          placeholder="Describe Event" />
        <input
          type="text"
          ref="timeInput"
          pattern="\d*"
          placeholder="Duration"
          noValidate />
        <button
          type="submit"
          className="pure-button pure-button-primary">SUBMIT!!!!!</button>
      </form>
    )
  },
  handleSubmit(event) {
    console.log(event);
    event.preventDefault();

    // Find the text field via the React rref
    var text = React.findDOMNode(this.refs.textInput).value.trim();
    var duration = React.findDOMNode(this.refs.timeInput).value.trim();

    Tasks.insert({
      text: text,
      duration: duration,
      createdAt: new Date() // current time
    });

    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
    React.findDOMNode(this.refs.timeInput).value = "";
  }

});
