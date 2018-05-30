function addNew(bugName){
	let newBug = { name : bugName, isClosed : false};
	let addNewAction = { type : 'ADD_NEW', payload : newBug};
	return addNewAction;
}

export default addNew;