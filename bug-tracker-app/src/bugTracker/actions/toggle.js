import axios from 'axios';
function toggle(bugToToggle){
	return function(dispatch){
		let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		axios.put('http://localhost:3030/bugs/' + toggledBugData.id, toggledBugData)
			.then(response => response.data)
			.then(toggledBug => dispatch({ type : 'TOGGLE', payload : {oldBug : bugToToggle, newBug : toggledBug}}));
	}
}
export default toggle;