import React, { Component } from 'react';

/**
 * Screens creates the bar of screen tabs at the top of the page.
 */

const screen_tab_style = {
	border: '1px solid black',
	backgroundColor: 'lightyellow',
	padding: '0.5em',
	float: 'left',
	position: 'relative',
	cursor: 'default'
}

export default class Screens extends Component {
	render () {
		var thisComponent = this;
		var screens = this.props.screens;
		var disableDelete = this.props.selectedScreen === "0";
		return (
			<div>
				<button onClick={() => this.props.addComponent("Form", null)}>Add Screen</button>
				<button onClick={() => this.props.removeScreen(thisComponent.props.selectedScreen)} disabled={disableDelete}>Remove Screen</button>
				<br/>
				{screens.map(({name, Uuid}) => {
					var tabColor = this.props.selectedScreen === Uuid ? 'pink' : 'lightyellow';
					
					return (
					<div style={{...screen_tab_style, backgroundColor:tabColor}}>
						<a onClick={() => thisComponent.props.chooseScreen(Uuid)}>{name}</a>
						<br/>
					</div>
					)
				})}
			</div>
		);
	}
}