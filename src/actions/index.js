// import simple_components from '../components/simple_components';

/** 
 * ACTIONS - includes:
 * add to Bin
 * addNewComponent - adds new component to list of components 
 * updateComponent - updates specific property of a component
 * selectComponent - updates which component is selected
 * toggleComponent - updates component if toggled
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

export function addNewComponent(compType, selectedScreen, afterId, dropZoneType) {
  var name = compType + nextId;
  var compProperties = {name:name, componentType: compType, Uuid:(nextId++).toString(), version:"1", screenId:selectedScreen};
  // console.log( compProperties)
  return Object.assign({type: 'ADD_NEW_COMPONENT'}, { compProperties, afterId, dropZoneType })
}

// updates specific property value to input value for a component - Properties Panel
export function updateComponent(componentId, propertyName, inputValue) {
  var info = {id: componentId, propertyName: propertyName, propertyInputValue: inputValue};
  return Object.assign({type: 'UPDATE_COMPONENT'}, info)
}

// updates selected component - Properties panel and Components Panel
export function selectComponent(componentId) {
  return Object.assign({type: 'SELECT_COMPONENT'}, {id: componentId})
}


// if toggled, subcomponents are shown/hidden, selectedComponents change if 
// current selectedComponent is hidden due to toggled parent
export function toggleComponent(componentId, hasSelectedSubcomp) {
  return Object.assign({type: 'TOGGLE_COMPONENT'}, {id: componentId, hasSelectedSubcomp:hasSelectedSubcomp})
}

export function selectScreen(screenId) {
  return Object.assign({type: 'SELECT_SCREEN'}, {id: screenId})
}

export function deleteComponent(compId, selScreen) {
  // return Object.assign({type: 'DELETE_COMPONENT'}, {id: compId, selectedScreen: selScreen, deleteScreen: delScreen})
  return Object.assign({type: 'DELETE_COMPONENT'}, {id: compId, selectedScreen: selScreen})
}

export function moveComponent(id, afterId, dropZoneType) {
  return Object.assign({type: 'MOVE_COMPONENT'}, {id, afterId, dropZoneType})
}

// update component
// id, property name, new property value
