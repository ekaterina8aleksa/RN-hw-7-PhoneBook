import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getItems = (state) => state.contacts.items;

const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (allContacts, filtered) => {
    const preparedContacts = filtered.trim().toLowerCase();

    return allContacts.filter((contact) =>
      contact.name.trim().toLowerCase().includes(preparedContacts)
    );
  }
);

export default { getLoading, getFilter, getItems, getFilteredContacts };
