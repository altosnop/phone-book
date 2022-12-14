import React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const CustomAlert = ({ open, handleClose, type, message }) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
		>
			<Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default CustomAlert;
