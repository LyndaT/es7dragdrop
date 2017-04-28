import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';
import { DragSourceTypes } from '../constants/DragSourceTypes';
import Button from './Button';

export default class AddButton extends Component {
	render() {
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
		return (
			<div style={{width: "600px", 'wordWrap': "break-word"}}>


				{categories.map((categoryName) => 
					<div key={categoryName}>
						<span>{categoryName}</span>
						<br/>
						{componentCategories[categoryName].map((compType) =>
							<Button
								compType={compType}
								onClick={this.props.addComponent}
								onDrop={this.props.addComponent}
								key={compType}
							/>
						)}
					</div>
				)}

				<br/>
				
			</div>
		);
	}
}
