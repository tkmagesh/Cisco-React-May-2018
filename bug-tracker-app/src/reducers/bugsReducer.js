export function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'TOGGLE'){
		let { oldBug, newBug } = action.payload;
		let newState = currentState.map(bug => bug.id === oldBug.id ? newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		let newState = currentState.filter(bug => bug.id !== bugToRemove.id);
		return newState;
	}
	return currentState;
}