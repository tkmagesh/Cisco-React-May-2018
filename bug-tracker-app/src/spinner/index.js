import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import spinnerActions from './spinnerActions';

class Spinner extends Component{
	txtDelta = React.createRef();
	render(){
		let { value, increment, decrement } = this.props;
		return(
			<div>
				<input type="number" ref={this.txtDelta} />
				<br/>
				<input type="button" value="DECREMENT" onClick={() => decrement(this.txtDelta.current.valueAsNumber)} />
				<span>[ {value} ]</span>
				<input type="button" value="INCREMENT" onClick={() => increment(this.txtDelta.current.valueAsNumber)} />
			</div>
		)
	}
}

/*function mapDispatchToSpinnerProps(dispatch){
	return bindActionCreators(spinnerActions, dispatch);
}
function mapStateToSpinnerProps(state){
	let spinnerValue = state.spinnerData;
	return { value : spinnerValue};
}
export default connect(mapStateToSpinnerProps, mapDispatchToSpinnerProps)(Spinner);*/

export default connect(
	(state) => ({ value : state.spinnerData}),
	(dispatch) => bindActionCreators(spinnerActions, dispatch)
)(Spinner);

