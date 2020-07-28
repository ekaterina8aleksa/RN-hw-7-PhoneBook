import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { connect } from "react-redux";
import contactsOperations from "./redux/contacts-operations";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner/Loader";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  formListener = ({ name, number }) => {
    this.addContact(name, number);
  };
  render() {
    return (
      <>
        <ContactForm onSubmit={this.formListener} />

        <Filter />

        <h3>Contacts</h3>

        <ContactList />

        {this.props.isLoading && <Spinner />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.contacts.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
