import React from 'react';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const App = () => {
	return (
		<>
			<AppBar position='static'>
				<Toolbar variant='dense'>
					<Typography variant='h6' color='inherit'>
						Phone Book
					</Typography>
				</Toolbar>
			</AppBar>
			<Form />

			<Container maxWidth=' '>
				<Typography variant='h4'>Contacts</Typography>
				<Filter />
				<ContactList />
			</Container>
		</>
	);
};

export default App;
