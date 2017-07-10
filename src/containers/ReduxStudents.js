import React, { Component } from 'react';
// We need some glue between react and redux. This component/container
// needs to know about redux state. The connect method from the 
// react-redux module. The glue.
import { connect } from 'react-redux';


class ReduxStudents extends Component{
	render(){
		console.log(this.props.students)
		var studentArray = [];
		this.props.students.map((student,index)=>{
			studentArray.push(<li key={index}>{student}</li>)
		})
		return(
			<div>
				<h1>ReduxStudents</h1>
				{studentArray}
			</div>
		)
	}

}

// All containers need access to state will have this function.
// We are creating a mapping between redux state and this component's props.
function mapStateToProps(state){
	// mapStateToProps returns an object with each piece of state we need
	return{
		// From our master Reducer, we have a 'state' object
		// Inside that state object, we  have a property: students
		// This exists because we made it a property in the root reducer
		students: state.students

	}
}

// INSTEAD of exporting the class(component), we export connect
export default connect(mapStateToProps)(ReduxStudents);