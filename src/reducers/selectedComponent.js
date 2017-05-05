
/**
 * A REDUCER handling selectedComponent in the store, changed when:
 *			component is selected (Components panel)
 * 			component or ancestor is toggled (Components panel)
 */

const selectedComponent = (state = "", action) => {
	switch(action.type) {
		case 'SELECT_COMPONENT':
			return action.componentId
		case 'TOGGLE_COMPONENT':
			if (action.hasSelectedSubcomp) return action.componentId;
			else return state;
		case 'ADD_NEW_COMPONENT':
			if (action.compProperties.componentType === "Form") {
				return action.compProperties.Uuid;
			}
			else return state;
		case 'SELECT_SCREEN':
			return action.screenId
		case 'DELETE_COMPONENT':
			return action.selectedScreen;
		default:
			return state
	}
}
export default selectedComponent