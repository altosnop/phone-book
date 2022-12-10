const onNameCheck = (arr, value) => {
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i].name === value) {
			return true;
		}
	}
	return false;
};

export default onNameCheck;
