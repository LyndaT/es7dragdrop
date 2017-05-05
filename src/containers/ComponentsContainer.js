import { connect } from 'react-redux'
import ComponentsPanel from '../components/ComponentsPanel'
import { deleteComponent } from '../actions'
import { create_tree } from '../utilFunctions/subcomponentUtils'

/**
 * ComponentsContainer.js handles the Components panel in AI, as well as 
 * the link between the Components panel and the Properties panel
 */

const mapStateToProps = (state, ownProps) => ({
  selectedComponent: state.selectedComponent,
  selectedScreen: state.selectedScreen,
  projectTree: create_tree(state.components, state.selectedScreen)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeComponent: (uuid, selectedScreen) => {
  	dispatch(deleteComponent(uuid, selectedScreen))
  }
})

const ComponentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentsPanel)

export default ComponentsContainer
