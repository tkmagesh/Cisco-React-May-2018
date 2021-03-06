import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import bugActions from './actions';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, toggle, addNew, removeClosed } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}
/*
function mapDispatchToBugTrackerProps(dispatch){
	return bindActionCreators(bugActions, dispatch);
}
function mapStateToBugTrackerProps(state){
	let bugs = state.bugsData;
	return { bugs : bugs };
}
export default connect(mapStateToBugTrackerProps, mapDispatchToBugTrackerProps)(BugTracker);
*/


/*export default connect(
	(state) => ({ bugs : state.bugsData.filter((bug, index) => index % 2 === state.spinnerData % 2)}),
	(dispatch) => bindActionCreators(bugActions, dispatch)
)(BugTracker);*/

export default connect(
	(state) => ({ bugs : state.bugsData}),
	(dispatch) => bindActionCreators(bugActions, dispatch)
)(BugTracker);
