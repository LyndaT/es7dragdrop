import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class Button extends Component {
	render() {
		var components = this.props.components;
		var buttonList = [];
		var simpleComponents = simple_components.simpleComponents;
		var defaultButtonComponent = simpleComponents.filter(function(component) {
			return component.name == "Button";
		})
		var propertiesArray = defaultButtonComponent[0].properties;
		var defaults = {};
		propertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var typefaceArray = ["", "sans-serif", "serif", "monospace"];
		var shapeArray = ["1px", "10px", "0px", "50px"];

		//Populating each button with default values if no values exist
		components.forEach(function(component){
			var buttonProps = {};

			if (component.componentType == "Button") {
				// var defaultProperties = defaultButtonComponent.properties;
				propertiesArray.forEach(function(property){
					if (component[property.name] == null) {
						if (property.name == "BackgroundColor") {
							//component["BackgroundColor"] = "&H00FFFFFF";
							buttonProps["BackgroundColor"] = "";
						} else if (property.name == "TextColor") {
							//component["TextColor"] = "&H00000000";
							buttonProps["TextColor"] = "";
						} else {
							buttonProps[property.name] = defaults[property.name];
						}
					} else {
						buttonProps[property.name] = component[property.name];
					}

					if (property.name == "Enabled") {
						if (buttonProps[property.name] == "True") {
							buttonProps["Disabled"] = false;
						} else {
							buttonProps["Disabled"] = "disabled";
						}
					}
				})


				// console.log(buttonProps);
				buttonList.push(buttonProps);
			}
		});


		return (
		<div>
		<div>Buttons List</div>
		<div>{buttonList.map((button, i) => {
				return <button style={{fontSize:buttonList[i].FontSize + "px", 
													backgroundColor: '#' + buttonList[i].BackgroundColor.substr(buttonList[i].BackgroundColor.length-6),
													color: '#' + buttonList[i].TextColor.substr(buttonList[i].TextColor.length-6),
													fontWeight: ((buttonList[i].FontBold == "False") ? "normal" : "bold"),
													fontStyle: ((buttonList[i].FontItalic == "False") ? "normal" : "italic"),
													fontFamily: typefaceArray[parseInt(buttonList[i].FontTypeface)],
													borderRadius: shapeArray[parseInt(buttonList[i].Shape)],
													backgroundImage: buttonList[i].Image,
													visibility: ((buttonList[i].Visible == "True") ? "visible" : "hidden"),
												    }} disabled = {buttonList[i].Disabled}>{buttonList[i].Text}</button>
		})}</div>
		</div>
		);
	}

}