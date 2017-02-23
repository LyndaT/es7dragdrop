import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import Tree from './s_Tree';

const style = {
	padding: '0.5em'
}

const source = {
	beginDrag(props) {
		return {
			id: props.id, 
			parent: props.parent, 
			items: (props.item.$Components ? props.item.$Components : [])
		}
	}, 

	isDragging(props, monitor) {
		return props.id == monitor.getItem().id
	}
}

const target = {
	canDrop() {
		return false
	},

	hover(props, monitor) {
		const {id: draggedId} = monitor.getItem()
		const {id: overId} = props 

		if (draggedId === overId || draggedId === props.parent) {
			return;
		}

		if (!monitor.isOver({shallow: true})) {
			return;
		}

		props.move(draggedId, overId, props.parent)
	}
}

@DropTarget('ITEM', target, connect => ({
	connectDropTarget: connect.dropTarget()
}))
@DragSource('ITEM', source, (connect, monitor) => ({
	connectDragSource: connect.dragSource(), 
	connectDragPreview: connect.dragPreview(), 
	isDragging: monitor.isDragging()
}))
export default class Item extends Component {
	static propTypes = {
		id: PropTypes.any.isRequired,
		parent: PropTypes.any, 
		item: PropTypes.object, 
		move: PropTypes.func, 
		find: PropTypes.func
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
		const {connectDropTarget, connectDragPreview, connectDragSource, 
			item: {Uuid, $Name, $Components}, parent, move, find} = this.props

		let children = $Components
		if ($Components === undefined) {
			children = []
		}

		let backgroundColor= 'white';
		if (this.state.isToggleOn) {
			backgroundColor = 'lightgreen'
		}

		const selectedComponent = this.props.selectedComponent 

		//console.log(Uuid,$Name, $Components, parent)
		let display = "block"
		if(children.length != 0) {
		  display = "block"
		} else {
		  display = "none"
		}

		return connectDropTarget(connectDragPreview(
			<div>
				{connectDragSource(
					<div onClick={this.handleClick} style={{...style, backgroundColor }}>
					{$Name}</div>
				)}
				<div style={{display:display}}>
				<Tree 
					parent={Uuid}
					items={children}
					move={move}
					find={find}
				/>
				</div>
			</div>
		))
	}
}