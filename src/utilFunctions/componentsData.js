// called by 
export function createComponentName(componentType, components) {
	var newNum = findHighestNumberInName(componentType, components) + 1;
	// console.log(newNum)
	var typeName = componentType == "Form" ? "Screen" : componentType;
	return typeName + newNum;
}

function findHighestNumberInName(type, components) {
	var maxNum = 0;
	for (var i = 0; i < components.length; i++) {
		if (components[i].componentType == type) {
			console.log(components[i])
			var name = components[i].name;
			var typeName = type == "Form" ? "Screen" : type;
			if (name.indexOf(typeName) == 0) {
				var number = parseInt(name.substring(typeName.length));
				if (number != NaN) {
					maxNum = Math.max(number, maxNum);
				}
			}
		}
	}
	console.log(maxNum)
	return maxNum;
}