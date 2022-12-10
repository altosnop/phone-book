export const filterSelector = state => state.contacts.filter;
export const itemsSelector = state => state.contacts.items;

export const visibleContacts = state => {
	const filter = filterSelector(state);
	const items = itemsSelector(state);

	return items.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);
};
