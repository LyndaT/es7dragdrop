/**
 * A REDUCER handling editorSettings 
 */

const editorSettings = (state = {}, action) => {
	switch(action.type) {
		case 'SELECT_IMAGE_PROPERTY':
			return {
				selectedProperty: action.name,
				imagePickerVisible: true
			}
		default:
			return state
	}
}
export default editorSettings