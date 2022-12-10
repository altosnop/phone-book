import React, { Component } from 'react';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { addNewContact } from '../../store/contacts/contactsSlice';

class Form extends Component {
	state = {
		name: '',
		phone: '',
	};

	onNameInput = event => {
		const { name, value } = event.currentTarget;
		this.setState({ [name]: value });
	};

	onFormSubmit = event => {
		event.preventDefault();

		const contact = {
			id: 0,
			name: this.state.name,
			phone: this.state.phone,
		};

		this.props.onSubmit(contact);

		this.setState({ name: '', phone: '' });
	};

	render() {
		return (
			<Container component='main' maxWidth='xs'>
				<Box
					component='form'
					onSubmit={this.onFormSubmit}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						margin='normal'
						required
						fullWidth
						id='name'
						label='Name'
						name='name'
						autoComplete='name'
						autoFocus
						value={this.state.name}
						onChange={this.onNameInput}
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
						value={this.state.phone}
						onChange={this.onNameInput}
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Add contact
					</Button>
				</Box>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onSubmit: contact => dispatch(addNewContact(contact)),
});

export default connect(null, mapDispatchToProps)(Form);
