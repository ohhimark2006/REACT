import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createContact, deleteContact} from './redux/ActionCreators';

import ContactView from './ContactView';

class App extends Component {
  nameRef = React.createRef();
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name : this.nameRef.current.value
    }
    this.nameRef.current.value = '';
    this.props.create(contact); // pending
  }

  delete(e, index) {
    e.preventDefault();
    this.props.deleteData(index);
  }
  render() {
    return <>
      <h1>Contact Application</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.nameRef} />
        <button type="submit">Add</button>
      </form>
      <hr />
      {
        <ul>
          {
          this.props.contacts.map((contact, i) => <ContactView 
              contact={contact} index= {i} 
              deleteContact={(e,index) => this.delete(e,index)} />
            )
          }
        </ul>
      }
    </>
  }
}

// state is from redux
// return value is given as props to react compoenent
const mapStateToProps = (state) => {
  return {
    contacts : state.contacts
  }
} 
// dispatch is a way to invoke reducer functions
const mapDispatchToProps = (dispatch) => {
  return {
    create: contact => dispatch(createContact(contact)), 
    deleteData: index => dispatch(deleteContact(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

