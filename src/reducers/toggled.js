// import { getAllSubcomponents } from '../components/helperFunctions'

/**
 * A REDUCER handling toggled in the store, changed when:
 * 		component is toggled (Components panel)
 *		new component is added - additional component to keep track of (Add Components panel)
 */

const toggled = (state = {}, action) => {
	var newState = Object.assign({}, state);
	switch(action.type) {
		case 'TOGGLE_COMPONENT':
			newState[action.componentId] = !newState[action.componentId]
			return newState
		case 'ADD_NEW_COMPONENT':
			newState[action.compProperties.Uuid] = true;
			return newState;
		case 'DELETE_COMPONENT':
			delete newState[action.componentId];
			return newState;
		default:
			return state
	}
}
export default toggled