import React from 'react'
import DragContainer from '../containers/DragContainer'
import PropertiesContainer from '../containers/PropertiesContainer'
import ComponentsContainer from '../containers/ComponentsContainer'
import AddComponentContainer from '../containers/AddComponentContainer'
import ExportContainer from '../containers/ExportContainer'
import ScreensContainer from '../containers/ScreensContainer'
//import AddButtonContainer from '../containers/AddButtonContainer'
import ImagePickerContainer from '../containers/ImagePickerContainer'
import ColorPickerContainer from '../containers/ColorPickerContainer'

//Appinventor Containers
import ButtonContainer from '../containers/appinventorContainers/ButtonContainer'

/**
 * Gives some style to the containers.
 */

const body_style = {
	fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
	color: '#222',
	// backgroundColor: '#DDDDDD',
	// width: '100%', 
	// height: '100%',
	// padding: '0px', 
	// margin: '0px', 
	// overflow: 'visible',
}

const panel_style = {
	border: '1px groove',
	borderColor:'#d2d2d2',
	backgroundColor: 'rgba(102, 153, 0, 0.3)',
	padding: '0.0em',
	position: 'relative',
}

const screens_panel_style = {
	...panel_style,
	clear:'both',
	display:'block',
	width:'100%',
	verticalAlign: 'top'
}

const fixed_style = {
	...panel_style,
	width: '240px',
	minWidth: '240px',
	display: 'table-cell',
	padding: '0em',
	verticalAlign: 'top'
}

const flexible_style = {
	...panel_style,
}


const body_holder_style = {
	display: 'table',
	width: '100%',
	borderSpacing: '.5em',
}

/** 
 * Gives some style to the headings of each panel/container.
 */
const headings = {
	...panel_style,
	backgroundColor: 'rgba(102, 153, 0, 0.3)',
	fontWeight: 'bold',
	borderBottom: '2px solid black',
	marginRight: '0.0em',
	padding: '0.5em',

}
			// <div style={headings}>Screens</div> 
/* Displays all the panels/containers.
 */
const App = () => (
	<div style = {body_style}>
		<div style={screens_panel_style}>
			<ExportContainer />
		</div>

		<div style={screens_panel_style}>
			<ScreensContainer />
		</div>

		<div style = {body_holder_style}>
			<div style={fixed_style}>
				<div style={headings}>Palette</div>
				<AddComponentContainer />
			</div>

			<div style={flexible_style}>
				<DragContainer />
			</div>
			
			<div style={fixed_style}>
				<div style={headings}>Components</div> 
				<ComponentsContainer />
			</div>

			<div style={fixed_style}>
				<div style={headings}>Properties</div>
				<PropertiesContainer />
			</div>
		</div>

		<div style={panel_style}>
			<div style={headings}>ImagePicker</div>
			<ImagePickerContainer />
		</div>

		<div style={panel_style}>
			<div style={headings}>Buttons</div>
			<ButtonContainer />
		</div>



	</div>
)

export default App