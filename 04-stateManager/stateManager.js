var SM = (function(){	
	var _state = undefined,
		_listeners = [],
		_reducer = undefined,
		_init_action = '@@INIT_ACTION';


	function getState(){
		return _state;
	}

	function subscribe(listenerFn){
		_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var newState = _reducer(_state, action);
		if (newState === _state) return;
		_state = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_state = _reducer(_state, _init_action);
		return { getState, subscribe, dispatch }
	}
	return { createStore };
})();