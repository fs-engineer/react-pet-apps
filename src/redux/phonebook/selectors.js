export const selectContacts = (state) => state.phonebook.items;

export const selectIsLoading = (state) => state.phonebook.isLoading;

export const selectError = (state) => state.phonebook.error;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;
