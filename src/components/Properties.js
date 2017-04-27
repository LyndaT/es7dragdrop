import React, { Component } from 'react';
import simple_components from './simple_components';
import EditorTypes from './EditorTypes';

/**
 * Properties component creates the Properties panel by listing out all the
 * properties of the selected Component and their editor Types.
 * It also sets the editor Types to the values for the component's properties,
 * or the default values if selectedComponent does not include those properties.
 */

export default class Properties extends Component {
	render() {
		var thisComponent = this;
		var selectedComponent = this.props.selectedComponent;

		// Get the list of property objects for the selected component
		// Use simple_components to get list
		var allComponents = simple_components.simpleComponents;
		var componentProperties = [];
		for (var j=0; j<allComponents.length;j++) {
			if (allComponents[j].name===selectedComponent.componentType) {
				componentProperties = allComponents[j]["properties"];
			}
		}

		// Object where key is name of editor type and value is its React Class
		var typeToHTML = {
			"textArea": EditorTypes.TextArea,
			"horizontal_alignment": EditorTypes.HorizontalAlignment,
			"vertical_alignment": EditorTypes.VerticalAlignment,
			"string": EditorTypes.StringInput,
			"color": EditorTypes.ColorInput,
			"asset": EditorTypes.Asset,
			"screen_animation": EditorTypes.ScreenAnimation,
			"screen_orientation": EditorTypes.ScreenOrientation,
			"boolean": EditorTypes.BooleanInput,
			"sizing": EditorTypes.Sizing,
			"non_negative_integer": EditorTypes.NonNegativeInteger,
			"accelerometer_sensitivity": EditorTypes.AccelerometerSensitivity,
			"float": EditorTypes.Float,
			"typeface": EditorTypes.Typeface,
			"button_shape": EditorTypes.ButtonShape,
			"textalignment": EditorTypes.TextAlignment,
			"visibility": EditorTypes.Visibility,
			"non_negative_float": EditorTypes.NonNegativeFloat,
			"BluetoothClient": EditorTypes.BluetoothClient,
			"lego_ev3_color_sensor_mode": EditorTypes.LegoEv3ColorSensorMode,
			"lego_ev3_sensor_port": EditorTypes.LegoEv3SensorPort,
			"lego_ev3_gyro_sensor_mode": EditorTypes.LegoEV3GyroSensorMode,
			"lego_ev3_ultrasonic_sensor_mode": EditorTypes.LegoEv3UltrasonicSensorMode,
			"FirbaseURL": EditorTypes.FirbaseURL, //******
			"sensor_dist_interval": EditorTypes.SensorDistInterval,
			"sensor_time_interval": EditorTypes.SensorTimeInterval,
			"toast_length": EditorTypes.ToastLength,
			"lego_nxt_generated_color": EditorTypes.LegoNxtGeneratedColor,
			"lego_nxt_sensor_port": EditorTypes.LegoNxtSensorPort,
			"countries": EditorTypes.Countries,
			"languages": EditorTypes.Languages,
			"text_receiving": EditorTypes.TextReceiving
		};

		// Function that returns the HTML for the specified editor type
		// HTML includes function that allows update of specific property
		// If editor type is not here, return null
		var getEditorTypeHTML = function(editorType, inputValue, componentId, propertyName) {
			var EdType = typeToHTML[editorType];
			if (EdType) {
				return <EdType value={inputValue} componentId={componentId} propertyName={propertyName} 
				onChangeFunction={thisComponent.props.updateComponentProperty} selectFunction = {thisComponent.props.chooseProperty}/>
			}
			else return null;
		}

		var editorTypeArr = [];
		// for each property object
		for (var i=0; i<componentProperties.length; i++) {
			var compPropty = componentProperties[i];

			// set property value to most updated value, else set it to default value
			if (selectedComponent[compPropty.name]) {
				var editorTypeHTML = getEditorTypeHTML(compPropty.editorType, selectedComponent[compPropty.name], selectedComponent.Uuid, compPropty.name)
			}
			else {
				editorTypeHTML = getEditorTypeHTML(compPropty.editorType, compPropty.defaultValue, selectedComponent.Uuid, compPropty.name)
			}

			// if editor type returns valid HTML, add property object to array
			// else add Hi button (for color and upload input types)
			if (editorTypeHTML) {
				editorTypeArr.push({"name":compPropty.name, "editorType":editorTypeHTML});
			}
			else {
				editorTypeArr.push({"name":componentProperties[i].name, "editorType":<button type="button">Hi</button>, "defaultValue": "Hi"});
			}
		}

		// for each property object in the editorTypeArr array,  
		// show the property name and the editor Type.
		return (
			<div>
				<span style={{fontWeight:'bold'}}>{selectedComponent.name}</span>
				<hr/>
				{editorTypeArr.map(({name, editorType}) =>
					<span key={name}> {name} 
						<br/>
						{editorType}
					<br/>
					</span>
				)}
			</div>
		);
	}

}