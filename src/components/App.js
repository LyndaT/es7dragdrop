import React from 'react'
import DragContainer from '../containers/DragContainer'
import PropertiesContainer from '../containers/PropertiesContainer'
import ComponentsContainer from '../containers/ComponentsContainer'
import AddComponentContainer from '../containers/AddComponentContainer'
import ExportContainer from '../containers/ExportContainer'
import ScreensContainer from '../containers/ScreensContainer'
import AddButtonContainer from '../containers/AddButtonContainer'
import ImagePickerContainer from '../containers/ImagePickerContainer'
import ColorPickerContainer from '../containers/ColorPickerContainer'

/**
 * Gives some style to the containers.
 */
const panel_style = {
	border: '1px dashed black',
	backgroundColor: 'lightblue',
	padding: '0.5em',
	marginRight: '1.5em',
	marginBottom: '1.5em',
	float: 'left',
	position: 'relative'
}

const screens_panel_style = {
	...panel_style,
	clear:'both',
	display:'block',
	width:'90%',
	margin: '0.5em'
}

/** 
 * Gives some style to the headings of each panel/container.
 */
const headings = {
	...panel_style,
	backgroundColor: 'turquoise',
	fontWeight: 'bold',
	borderBottom: '2px solid black',
	margin:'0.5em',
	float:'center'
}
			// <div style={headings}>Screens</div> 
/* Displays all the panels/containers.
 */
const App = () => (
	<div>
		<div style={screens_panel_style}>
			<ExportContainer />
		</div>

		<div style={screens_panel_style}>
			<ScreensContainer />
		</div>

		<div style={panel_style}>
			<div style={headings}>Palette</div>
			<AddComponentContainer />
		</div>

		<div style={panel_style}>
			<DragContainer />
		</div>
		
		<div style={panel_style}>
			<div style={headings}>Components</div> 
			<ComponentsContainer />
		</div>

		<div style={panel_style}>
			<div style={headings}>Properties</div>
			<PropertiesContainer />
		</div>

		<div style={panel_style}>
			<div style={headings}>ImagePicker</div>
			<ImagePickerContainer />
		</div>

		<div style={panel_style}>
			<div style={headings}>ColorPicker</div>
			<ColorPickerContainer />
		</div>


	</div>
)

export default App