/**
 * A REDUCER handling selectedStore in the store, changed when:
 *			different screen is selected
 *			new screen is added
 */

const selectedScreen = (state = "", action) => {
	switch(action.type) {
		case 'ADD_NEW_COMPONENT':
			if (action.compProperties.componentType === "Form") return action.compProperties.Uuid;
			else return state;
		case 'SELECT_SCREEN':
			return action.screenId
		case 'DELETE_COMPONENT':
			if (state === action.componentId) return "0";
			else return state;
		default:
			return state
	}
}
export default selectedScreen