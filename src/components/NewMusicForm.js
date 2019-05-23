import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

class NewMusicForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  this.name = null;
  this.location = null;
  this.date = null;
  this.handleNewMusicFormSubmission= this.handleNewMusicFormSubmission.bind(this);
  }

  handleNewMusicFormSubmission(e) {
    e.preventDefault();
    this.props.onNewMusicCreation({name: this.name.value, location: this.location.value, date: this.date.vaule});
    this.name.value = '';
    this.location.value = '';
    this.date.value = '';
  }
  render() {
  return(
    <div>
      <style jsx>{`
          width: 100%;
           form {
             font-size: 16px;
             border: 1px solid white;
             display: flex;
             flex-direction: column;
             justify-content: space-around;
             margin: auto;
             width:50%;
             padding: 2%;
             color: white;
           },
           h1 {
             align-self: center;
           },
           input {
             margin: 5px;
             padding: 5px;
           }
           button {
             width: 15%;
             font-size: 16px;
             border-radius: 5px;
             height: 30px;
             border: none;
           }
           `}</style>
         <form onSubmit={this.handleNewMusicFormSubmission}>
        <h1>Add New Events</h1>

        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {this.name = input}}/>
        <textarea
          type='text'
          id='location'
          placeholder='Location.'
          ref={(input) => {this.location = input}}/>
          <textarea
            type='text'
            id='date'
            placeholder='Date.'
            ref={(input) => {this.date = input}}/>
          <button type='submit'>Submit!</button>
      </form>
    </div>
  )
}
}

NewMusicForm.propTypes = {
  onNewMusicCreation: PropTypes.func,
}

export default NewMusicForm
