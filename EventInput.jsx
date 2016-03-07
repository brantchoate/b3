EventInput = React.createClass({

  render() {
    return (
      <form className="EventInput" onSubmit={this.handleSubmit} >
        <input
          type="text"
          ref="textInput"
          placeholder="Describe Event" />
        <input
          type="text"
          ref="timeInput"
          placeholder="Duration" />
        <input
          type="submit"
          ref="submitButton"
          value="submit" />
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
