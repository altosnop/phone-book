import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterContact } from '../../store/contacts/contactsSlice';
import { filterSelector } from '../../store/contacts/contactsSelectors';

import TextField from '@mui/material/TextField';

class Filter extends Component {
	render() {
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
				value={this.props.value}
				onChange={this.props.onChange}
			/>
		);
	}
}

const mapStateToProps = state => ({
	value: filterSelector(state),
});

const mapDispatchToProps = dispatch => ({
	onChange: e => dispatch(filterContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
