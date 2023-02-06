export const selectContacts = (state) => state.phonebook.items;

export const selectIsLoading = (state) => state.phonebook.isLoading;

export const selectError = (state) => state.phonebook.error;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUserName = (state) => state.auth.user.name;
