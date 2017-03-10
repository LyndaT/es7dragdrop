/**
 * A REDUCER handling editorSettings 
 */

const editorSettings = (state = {}, action) => {
	switch(action.type) {
		case 'SELECT_IMAGE_PROPERTY':
			var newState = Object.assign({}, state);
			newState.selectedProperty = action.name;
			newState.selectedImage = null;
			newState.imagePickerVisible = true;
			newState.colorPickerVisible = false;
			return newState;
		case 'SELECT_COLOR_PROPERTY':
			var newState = Object.assign({}, state);
			newState.selectedProperty = action.name;
			newState.selectedImage = null;
			newState.imagePickerVisible = false;
			newState.colorPickerVisible = true;
			console.log(newState);
			return newState;
		case 'SELECT_IMAGE':
			var newState = Object.assign({}, state);
			newState.selectedImage = action.url;
			return newState;
		// case 'SELECT_COLOR':
		// 	var newState = Object.assign({}, state);
		// 	newState.selectedColor = action.color;
		// 	return newState;
		default:
			return state;
	}
}
export default editorSettings