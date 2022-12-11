import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeContact } from '../../store/contacts/contactsSlice';
import { visibleContacts } from '../../store/contacts/contactsSelectors';
import { getContacts } from '../../store/contacts/contactsSlice';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CustomAlert from '../CustomAlert';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ContactList = () => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const contacts = useSelector(visibleContacts);

	useEffect(() => {
		dispatch(getContacts());
	}, [dispatch]);

	const onContactDelete = id => {
		dispatch(removeContact(id));
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
					<TableBody>
						{contacts.map(({ id, name, phone }) => (
							<TableRow
								key={IdleDeadline}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell>
									<Avatar />
								</TableCell>
								<TableCell component='th' scope='row'>
									{name}
								</TableCell>
								<TableCell align='left'>{phone}</TableCell>
								<TableCell align='right'>
									<Button
										variant='outlined'
										color='error'
										onClick={() => onContactDelete(id)}
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<CustomAlert
				open={open}
				handleClose={handleClose}
				type='warning'
				message='Contact successfully deleted!'
			/>
		</>
	);
};

export default ContactList;
