export const selectContacts = (state) => state.phonebook.items;

export const selectIsLoading = (state) => state.phonebook.isLoading;

export const selectError = (state) => state.phonebook.error;
