import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CustomAlert from '../CustomAlert';

import { addNewContact } from '../../store/contacts/contactsSlice';

const Form = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [open, setOpen] = useState(false);

	const dispatch = useDispatch();

	const onNameInput = event => {
		const { name, value } = event.currentTarget;

		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'phone':
				setPhone(value);
				break;
			default:
				return;
		}
	};

	const onFormSubmit = event => {
		event.preventDefault();

		const contact = {
			id: 0,
			name: name,
			phone: phone,
		};

		if (name !== '' && phone !== '') {
			dispatch(addNewContact(contact));
			setOpen(true);
		} else {
			alert('Please fill the inputs!');
		}

		setName('');
		setPhone('');
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<Container component='main' maxWidth='xs'>
			<Box component='form' onSubmit={onFormSubmit} noValidate sx={{ mt: 1 }}>
				<TextField
					margin='normal'
					required
					fullWidth
					id='name'
					label='Name'
					name='name'
					autoComplete='name'
					autoFocus
					value={name}
					onChange={onNameInput}
				/>
				<TextField
					margin='normal'
					required
					fullWidth
					name='phone'
					label='Phone'
					type='phone'
					id='phone'
					autoComplete='phone'
					value={phone}
					onChange={onNameInput}
				/>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
				>
					Add contact
				</Button>
				<CustomAlert
					open={open}
					handleClose={handleClose}
					type='success'
					message='Contact successfully created!'
				/>
			</Box>
		</Container>
	);
};

export default Form;
