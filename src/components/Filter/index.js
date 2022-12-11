import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterContact } from '../../store/contacts/contactsSlice';
import { filterSelector } from '../../store/contacts/contactsSelectors';

import TextField from '@mui/material/TextField';

const Filter = () => {
	const dispatch = useDispatch();
	const filterValue = useSelector(filterSelector);
	return (
		<TextField
			margin='normal'
			fullWidth
			id='name'
			label='Filter'
			type='text'
			name='filter'
			autoComplete='name'
			autoFocus
			pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
			value={filterValue}
			onChange={e => dispatch(filterContact(e.currentTarget.value))}
		/>
	);
};

export default Filter;
