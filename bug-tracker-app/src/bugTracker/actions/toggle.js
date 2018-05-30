function toggle(bugToToggle){
	let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
	let toggleBugAction = { type : 'TOGGLE', payload : {oldBug : bugToToggle, newBug : toggledBug}};
	return toggleBugAction;
}
export default toggle;