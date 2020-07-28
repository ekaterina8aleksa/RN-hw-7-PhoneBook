import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts-operations";
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

const getFilteredContacts = (allContacts, filter) => {
  const preparedContacts = filter.trim().toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.trim().toLowerCase().includes(preparedContacts)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
