function removeClosed(bugs){
	let bugsToRemove = bugs.filter(bug => bug.isClosed);
	let removeClosedAction = { type : 'REMOVE', payload : bugsToRemove};
	return removeClosedAction;
}
export default removeClosed;