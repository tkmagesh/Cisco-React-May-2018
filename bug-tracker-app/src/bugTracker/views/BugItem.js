import React, { Component } from 'react';

class BugItem extends Component{
	constructor(props){
		super(props);
		this.onBugNameClick = this.onBugNameClick.bind(this);
	}
	onBugNameClick(){
		this.props.toggle(this.props.bug);
	}
	render(){
		let bug = this.props.bug,
			bugElement = bug.isClosed ? (<span className="bugname closed" onClick={this.onBugNameClick}>{bug.name}</span>) : (<span className="bugname" onClick={this.onBugNameClick}>{bug.name}</span>)
		return(
			<li>
				{bugElement}
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}
export default BugItem;