// import simple_components from '../components/simple_components';

/** 
 * ACTIONS - includes:
 * addToBin
 * addNewComponent - adds new component to list of components 
 * updateComponent - updates specific property of a component
 * selectComponent - updates which component is selected
 * toggleComponent - updates component if toggled
 * selectScreen - updates which screen is selected
 * deleteComponent - deletes a component
 * moveComponent
 */
let nextId = 2

export function addToBin(item) {
	return {
		type: 'ADD_TO_BIN',
		item_type: item.type,
		item_name: item.name,
		id: nextId++
	}
}

// action with new component type, screen to add it to, and afterId/dropZoneType
export function addNewComponent(compType, selectedScreen, afterId, dropZoneType) {
  var name = compType + nextId;
  var compProperties = {name:name, componentType: compType, Uuid:(nextId++).toString(), version:"1", screenId:selectedScreen};
  return Object.assign({type: 'ADD_NEW_COMPONENT'}, { compProperties, afterId, dropZoneType })
}

// action with ID of component, specific property to be updated, and property's new value
export function updateComponent(compId, propertyName, inputValue) {
  var info = {componentId: compId, propertyName: propertyName, propertyInputValue: inputValue};
  return Object.assign({type: 'UPDATE_COMPONENT'}, info)
}

// action with the ID of the component to be selected
export function selectComponent(compId) {
  return Object.assign({type: 'SELECT_COMPONENT'}, {componentId: compId})
}

// action with ID of component to be toggled and
//        whether or not it has subcomponent that is currently selected.
// if toggled, subcomponents are shown/hidden, selectedComponents change if 
// current selectedComponent is hidden due to toggled parent
export function toggleComponent(compId, hasSelectedSubcomp) {
  return Object.assign({type: 'TOGGLE_COMPONENT'}, {componentId: compId, hasSelectedSubcomp:hasSelectedSubcomp})
}

// action with the ID of the screen to be selected
export function selectScreen(scrId) {
  return Object.assign({type: 'SELECT_SCREEN'}, {screenId: scrId})
}

// action with the ID of the component to be deleted and the screen it is in
export function deleteComponent(compId, selScreen) {
  return Object.assign({type: 'DELETE_COMPONENT'}, {componentId: compId, selectedScreen: selScreen})
}

export function moveComponent(id, afterId, dropZoneType) {
  return Object.assign({type: 'MOVE_COMPONENT'}, {id, afterId, dropZoneType})
}
