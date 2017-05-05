import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { DragSourceTypes } from '../constants/DragSourceTypes';
import AIComponent from './AIComponent';
import Collapse, {Panel} from 'rc-collapse';

// import simple_components from './simple_components'

/**
 * AddComponent creates the buttons for adding components to the project.
 * Buttons are categorized by component categories - listed below.
 * Clicking on a component adds an object (default) to the store, 
 * and also makes it a subcomponent of Screen1.
 */

export default class AddComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeKey : 'LAYOUT',
    };
  }

  render() {
    var currentState = this.props.components;
    var stateString = JSON.stringify(currentState);
    // var allComps = simple_components.simpleComponents;

    var componentCategories = {
    	"SENSORS":
    		["AccelerometerSensor","BarcodeScanner","Clock","GyroscopeSensor","LocationSensor","NearField","OrientationSensor","Pedometer","ProximitySensor"],
    	"CONNECTIVITY":
    		["ActivityStarter","BluetoothClient","BluetoothServer","Web"],
    	"ANIMATION":
    		["Ball","Canvas","ImageSprite"],
    	"USERINTERFACE":
    		["Button","CheckBox","DatePicker","Image","Label","ListPicker","ListView","Notifier","PasswordTextBox","Slider","Spinner","TextBox","TimePicker","WebViewer"],
    	"MEDIA":
    		["Camcorder","Camera","ImagePicker","Player","Sound","SoundRecorder","SpeechRecognizer","TextToSpeech","VideoPlayer","YandexTranslate"],
    	"SOCIAL":
    		["ContactPicker","EmailPicker","PhoneCall","PhoneNumberPicker","Sharing","Texting","Twitter"],
    	"LEGOMINDSTORMS":
    		["Ev3ColorSensor","Ev3Commands","Ev3GyroSensor","Ev3Motors","Ev3Sound","Ev3TouchSensor","Ev3UI","Ev3UltrasonicSensor","NxtColorSensor","NxtDirectCommands","NxtDrive","NxtLightSensor","NxtSoundSensor","NxtTouchSensor","NxtUltrasonicSensor"],
    	"STORAGE":
    		["File","FusiontablesControl","TinyDB","TinyWebDB"],
    	"EXPERIMENTAL":
    		["FirebaseDB"],
    	"LAYOUT":
    		["Form","HorizontalArrangement","HorizontalScrollArrangement","TableArrangement","VerticalArrangement","VerticalScrollArrangement"],
    	"INTERNAL":
    		["GameClient","MediaStore","PhoneStatus","Voting"]
    }
    var categories = ["USERINTERFACE", "LAYOUT", "SENSORS", "CONNECTIVITY", "ANIMATION", "MEDIA", "SOCIAL", "LEGOMINDSTORMS", "STORAGE", "EXPERIMENTAL", "INTERNAL"]


	// Creates buttons for creating type of each component and adding to store
    // Buttons categorized above
	return (
//<<<<<<< HEAD
		// <div>
		// 	{categories.map((categoryName) => 
		// 		<div key={categoryName}>
		// 			<button style={{backgroundColor: '#a3fff2', fontSize: '11pt'}}>{categoryName}</button>
		// 			<br/>
		// 			{componentCategories[categoryName].map((compType) =>
		// 				<AIComponent
		// 					compType={compType}
		// 					onClick={this.onClick}
		// 					onDrop={this.props.addComponent}
		// 					key={compType}
		// 					screen={selectedScreen}
		// 				/>
		// 			)}
		// 		</div>
		// 	)}
  //           <div style={{width:'500px', wordWrap:'break-word'}}>{stateString}</div>
		// </div>
//=======

        <div>
            <div style={{width:'240px', wordWrap:'break-word', display: 'none'}}>{stateString}</div>
            <Collapse accordion={true} defaultActiveKey={'USERINTERFACE'}>
            {categories.map((categoryName) => 
                <Panel header={categoryName} key={categoryName} style = {{fontSize: '11pt', fontWeight: 'bold', marginTop: '0.25em', 
                                marginBottom: '0.25em'}} onSelect={()=>alert('It works')}>
                {componentCategories[categoryName].map((compType) =>
                    // <div style = {{backgroundColor: '#FFFFFF'}}>
                    //     <button onClick={() => this.props.addComponent(compType, selectedScreen)}>
                    //         {compType}
                    //     </button>
                    //     <br/>
                    // </div>
                    <AIComponent
                            compType={compType}
                            onDrop={this.props.addComponent}
                            key={compType}
                    />
                )}
                </Panel>
            )}
            </Collapse>
        </div>

//>>>>>>> preshelbs
	);
	}
}
