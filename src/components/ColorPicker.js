import React, { PropTypes, Component } from 'react';
import simple_components from './simple_components';

export default class ColorPicker extends Component {
  render() {
  	var defaultColors = this.props.defaultColors;
  	var selectedColor = this.props.selectedColor;
    var property = this.props.property;
    var component = this.props.component;
    var visible = this.props.visibility;
    let display = "block"
    if (visible) {
    	display = "block";
    } else {
    	display = "none";
    }
    


	// Creates buttons for creating type of each component and adding to store
		return (
			<div style={{width: "600px", 'wordWrap': "break-word", display: display}}>
			<div>  {defaultColors.map((color, i) => {
					return <span style={{fontSize: "30px", paddingLeft: "30px", backgroundColor: '#' + defaultColors[i].substr(defaultColors[i].length-6)}}
          onClick={()=> this.props.selectColor(component, property, defaultColors[i])}>&nbsp;</span>
				})} </div>
			</div>
		);
	}
}