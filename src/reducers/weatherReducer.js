export default function(state = [], action){
	switch(action.type){
		case "GET_WEATHER":
			// COde will run if action.type  ="GET_WEATHER"
			return action.payload
		case "DoTheHokeyPokey":
			return state;
		default:
			return state;	
	}



	return state;
}







