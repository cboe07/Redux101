// This is our master reducer...the root reducer,
// the reducers hold pieces of state. The root reducer holds all the reducers.
// I.e., the rrotreducer holds ALL the pieces of state, or application state.

// We need to get the combineReducers method from redux, to make a rootReducer
// that the Provider can use
import { combineReducers } from 'redux';

// Import each reducer here
// First: imort the StudentReducer
import StudentReducer from './StudentReducer';
import SelectedStudentReducer from './SelectedStudentReducer';
import TimerReducer from './TimerReducer';

// create a rootReducer using the combineReducer method, so we can export it
// to the Store in index.js
const rootReducer = combineReducers({
	// Inside her, we pass ech reducer as a key/value
	// Each key will be available as a piece of state later
	students: StudentReducer,
	selectedStudent: SelectedStudentReducer,
	timer: TimerReducer
})

export default rootReducer;
