// reducers get state and acrtion as params
// all reducers get EVERY action. The action object is in the action param
var SelectedStudent = function(state = "No one", action){
	if(action.type == "PICK_STUDENT"){
		return action.payload;
	}else{
		return state;
	}
	
}

export default SelectedStudent;

