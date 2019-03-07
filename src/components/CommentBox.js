import React, {Component} from 'react';

class CommentBox extends Component {
  state = {
    comment: ''
  };
  handleChange = event => {
    this.setState({comment: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({comment: ''})
    //call the action creator And save the comment
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea id="text" onChange={this.handleChange} value={this.state.comment}/>
        <div>
          <button className="button">Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentBox;