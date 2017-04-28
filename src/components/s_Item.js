import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import Tree from './s_Tree';
import { DragSourceTypes } from '../constants/DragSourceTypes';
import Dropzone from './Dropzone';
import { DropZoneTypes } from "../constants/DropZoneTypes";

const style = {
	padding: '0.5em'
}

const source = {
	beginDrag(props) {
		return {
			id: props.id, 
		}
	}, 

	endDrag(props, monitor, component) {
		if (monitor.getDropResult()) {
			const { uuid, dropZoneType } = monitor.getDropResult();
			const dropTargetUuid = monitor.getDropResult().uuid;
			//TODO (spefley) improve LOL 
			//debugger;
			if (props.id != dropTargetUuid) {
				component.props.move(props.id, dropTargetUuid, dropZoneType);
			}
		}
	}
}

@DragSource(DragSourceTypes.COMPONENT, source, (connect) => ({
	connectDragSource: connect.dragSource(), 
}))
export default class Item extends Component {
	static propTypes = {
		id: PropTypes.any.isRequired,
		parent: PropTypes.any, 
		item: PropTypes.object, 
		move: PropTypes.func, 
		find: PropTypes.func,
        onDrop: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {isToggleOn: false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		const {connectDragSource, selectedComponent,
			item, item: {Uuid, $Name, $Components}, parent, move, find} = this.props;
		let children = $Components
		if ($Components === undefined) {
			children = []
		}

		let backgroundColor= 'white';
		if (this.state.isToggleOn) {
			backgroundColor = 'lightgreen'
		}


		//console.log(Uuid,$Name, $Components, parent)
		let contentDropzoneStyle = {};
		if(this.hasContentDropzone(item.type)) {
		  contentDropzoneStyle["display"] = "block";
		} else {
		  contentDropzoneStyle["display"] = "none";
		}

		return (
			<div>
				{connectDragSource(
					<div onClick={this.handleClick} style={{...style, backgroundColor }}>
					{$Name}</div>
				)}
				<div style={contentDropzoneStyle}>
					<Dropzone
						item={this.props.item}
						dropZoneType={DropZoneTypes.CONTENT}
					/>
					<Tree 
						parent={Uuid}
						items={children}
						move={move}
						find={find}
					/>
				</div>
				<Dropzone
					item={this.props.item}
					dropZoneType={DropZoneTypes.AFTER}
				/>
			</div>
		)
	}

	hasAfterDropzone(type) {
		return type !== "Form";
	}

	hasContentDropzone(type) {
		return type === "HorizontalArrangement" ||
			type === "HorizontalScrollArrangement" ||
			type === "TableArrangement" ||
			type === "VerticalArrangement" ||
			type === "VerticalScrollArrangement" ||
			type === "Form";
		// TODO: jank begets jank
	}
}