import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import onNameCheck from '../../service/onNameCheck';
import axios from 'axios';

const initialState = {
	items: [],
	filter: '',
};

export const getContacts = createAsyncThunk(
	'contacts/getContacts',
	async () => {
		const response = await axios.get(
			'https://638e13324190defdb755a833.mockapi.io/app/contacts'
		);
		return response.data;
	}
);

export const removeContact = createAsyncThunk(
	'contacts/removeContact',
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await axios.delete(
				`https://638e13324190defdb755a833.mockapi.io/app/contacts/${id}`
			);

			dispatch(deleteContact(id));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addNewContact = createAsyncThunk(
	'contacts/addNewContact',
	async (contact, { rejectWithValue, dispatch, getState }) => {
		try {
			const state = getState();
			const contain = onNameCheck(state.contacts.items, contact.name);

			if (!contain) {
				const response = await axios.post(
					'https://638e13324190defdb755a833.mockapi.io/app/contacts',
					contact
				);

				dispatch(createContact(response.data));
			} else {
				alert(`${contact.name} is already in contacts!`);
			}
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		createContact: (state, action) => {
			state.items = [...state.items, action.payload];
		},
		deleteContact: (state, action) => {
			state.items = state.items.filter(
				contact => contact.id !== action.payload
			);
		},
		filterContact: (state, action) => {
			state.filter = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(getContacts.fulfilled, (state, action) => {
			state.items = [...action.payload];
		});
	},
});

export const { createContact } = contactsSlice.actions;
export const { deleteContact } = contactsSlice.actions;
export const { filterContact } = contactsSlice.actions;

export default contactsSlice.reducer;
