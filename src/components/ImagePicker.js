import React, { PropTypes, Component } from 'react';
import simple_components from './simple_components'

export default class ImagePicker extends Component {
  render() {
    var currentState = this.props.components;
    var maximagewidth = 200;
    var defaultimagelocs = this.props.defaultImages;
    var uploadedimagelocs = this.props.uploadedImages;
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
			<div> Button Display </div>
			<div>  {defaultimagelocs.map((image, i) => {
					return <img src= {defaultimagelocs[i]} width = {maximagewidth} 
					onClick={() => this.props.selectImage()} />
				})} </div>
			<hr></hr>
			<div> {uploadedimagelocs.map((image, i) => {
					return <img src= {uploadedimagelocs[i]} width = {maximagewidth} 
					onClick={() => this.props.selectImage()} />
				})}</div>
			<div> <button onClick={() => this.props.uploadImage()}>Upload Image</button></div>
			</div>
		);
	}
}