import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/redux-units";
import styles from "../Phonebook.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.length > 0 && (
        <ul className={styles.list}>
          {contacts.map(({ name, number, id }) => (
            <li key={id} className={styles.item}>
              <ContactItem
                id={id}
                number={number}
                name={name}
                onDelete={() => onDeleteContact(id)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
