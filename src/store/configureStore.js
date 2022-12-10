import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contactsSlice';

const store = configureStore({
	reducer: {
		contacts: contactsSlice,
		devTools: process.env.NODE_ENV === 'development',
	},
});

export default store;
