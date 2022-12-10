import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeContact } from '../../store/contacts/contactsSlice';
import { visibleContacts } from '../../store/contacts/contactsSelectors';
import { getContacts } from '../../store/contacts/contactsSlice';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

class ContactList extends Component {
	componentDidMount() {
		this.props.getContacts();
	}

	render() {
		return (
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{this.props.contacts.map(({ id, name, phone }) => {
					return (
						<ListItem key={id}>
							<ListItemAvatar>
								<Avatar />
							</ListItemAvatar>
							<ListItemText primary={name} secondary={phone} />
							<Button
								variant='outlined'
								color='error'
								onClick={() => this.props.onDelete(id)}
							>
								Delete
							</Button>
						</ListItem>
					);
				})}
			</List>
		);
	}
}

const mapStateToProps = state => ({
	contacts: visibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
	onDelete: id => dispatch(removeContact(id)),
	getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
