let spinnerActions = {
	increment(delta){
		let inc_action = { type : 'INCREMENT', payload : delta};
		return inc_action;
	},
	decrement(delta){
		let dec_action = { type : 'DECREMENT', payload : delta};
		return dec_action;
	}
}
export default spinnerActions;