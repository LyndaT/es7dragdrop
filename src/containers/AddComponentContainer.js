import 'rc-collapse/assets/index.css';
import { connect } from 'react-redux'
import AddComponent from '../components/AddComponent'
import { addNewComponent } from '../actions'

/**
 * Add Button Container handles the Palette and adding of components to the project.
 * It links Palette to the Components panel as well.
 */

const mapStateToProps = (state, ownProps) => ({
  components: state.components,
  selectedScreen: state.selectedScreen
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComponent: (type, screenId) => {
    dispatch(addNewComponent(type, screenId))
  }
})

const AddComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComponent)

export default AddComponentContainer
