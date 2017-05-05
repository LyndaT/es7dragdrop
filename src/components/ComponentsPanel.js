import React, { Component } from 'react';
import ComponentNodeContainer from '../containers/ComponentNodeContainer'

/**
 * ComponentsPanel creates the Components panel with the nested components
 * and their buttons.  The buttons will change the Properties panel 
 * when clicked.
 */

export default class ComponentsPanel extends Component {
	render () {
		var thisComponent = this;

		// creates nested tree of components and their subcomponents
		var nestedTree = this.props.projectTree;

		var name= nestedTree["$Name"];
		var id = nestedTree["Uuid"];
		var subs = nestedTree["$Components"];
		var disableDelete = (this.props.selectedComponent === this.props.selectedScreen);

		return (
			<div>
				<button onClick={() => thisComponent.props.removeComponent(thisComponent.props.selectedComponent, thisComponent.props.selectedScreen)} disabled={disableDelete}>Delete</button>

				<ComponentNodeContainer name={name} id={id} subcomponents={subs}/>
			</div>
		);
	}
}