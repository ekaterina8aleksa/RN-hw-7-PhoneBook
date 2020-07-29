import React from "react";
import { connect } from "react-redux";
import { contactsSelectors, contactsActions } from "../../redux/redux-units";
import styles from "../Phonebook.module.css";

const Filter = ({ value, onChange, contacts }) =>
  contacts.length >= 2 && (
    <label className={styles.finder}>
      Finder
      <input
        type="text"
        value={value}
        placeholder="Search for..."
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
  contacts: contactsSelectors.getItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.filterContact(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
