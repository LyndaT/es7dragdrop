/**
 * Called in ComponentsContainer.js and Container.js
 * Given the data array of component objects, puts together the content
 * that will be in the Scheme file.
 * This is a nested object, where the Components for each component is
 * an array of its children objects
 * This tree is rooted at the screen object with ID = screenId
 * @return proj (object): JSON object that will be in the Scheme file
 */
export function create_tree(arr, screenId) {
	var allObjs = {}
	var proj = {};

	// Create an object containing all component objects
	// Keys are the component Ids, values are the objects
	allObjs = create_all_objects(arr);

	// for each component object
	for (var i = 0; i < arr.length; i++) 
	{
		var entry = arr[i];
		var entryId = entry["Uuid"];

		// if the component has subcomponents, 
		if (entry.hasOwnProperty("children") && entry["children"].length > 0)
		{
			allObjs[entryId]["$Components"] = []
			// add the subcomponent objects to a property called "$Components" (array)
			for (var k = 0; k < entry["children"].length; k++)
			{
				var childId = entry["children"][k];
				if (!allObjs.hasOwnProperty(childId))
				{
					allObjs[childId] = {};
				}
				allObjs[entryId]["$Components"].push(allObjs[childId])
			}
		}

		// if the component is a Screen/Form, set that as the root component.
		if (entry["Uuid"] === screenId) proj = allObjs[entryId];
	}

	// console.log(proj)
	return proj;
}

/** 
 * called by create_tree() above
 * Given the data array (of component objects), creates a dictionary
 * of JSON objects, which contain name and id values.
 * Dictionary maps the component's unique ID to its JSON object
 */
function create_all_objects(arr) {
	var objs = {}
	// FOR EACH ENTRY IN THE ARRAY...
	for (var i = 0; i < arr.length; i++)
	{
		var entry = arr[i];
		var obj = {};
		obj["$Name"] = entry["name"];
		obj["Uuid"] = entry["Uuid"];
		obj["type"] = entry["componentType"];
		
		var id = entry["Uuid"];
		objs[id] = obj;
	} 
	return objs;
}

// called by reducers/components.js and hasChildSelected() below
export function getAllSubcomponents(id, allComps, subComps={}) {
  subComps[id] = true;
  var idObj = findIdObj(id, allComps);
  if (idObj && idObj.children) {
    for (var j=0; j<idObj.children.length;j++) {
      getAllSubcomponents(idObj.children[j], allComps, subComps);
    }
  }
  return subComps;
}

// called by getAllSubcomponents() above
// given the component ID, returns its corresponding object
function findIdObj(id, comps) {
  for (var i=0; i<comps.length; i++) {
    if (comps[i].Uuid === id) {
      return comps[i]
    }
  }
  return null
}

// called by ComponentNodeContainer.js
// helper for toggleComponent - checks if a component has a subcomponent that is selected.
export function hasChildSelected(id, components, selected) {
  return getAllSubcomponents(id, components).hasOwnProperty(selected);
}