import axios from 'axios';
function removeClosed(){
	return function(dispatch, getState){
		let bugsToRemove = getState().bugsData.filter(bug => bug.isClosed);
		bugsToRemove.forEach(bugToRemove => 
			axios.delete('http://localhost:3030/bugs/' + bugToRemove.id)
				.then(response => dispatch({type : 'REMOVE', payload : bugToRemove})));
	}
}
export default removeClosed;