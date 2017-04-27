import { connect } from 'react-redux'
import Button from '../../components/appinventorComponents/Button'


//Get state from the store, passes to props
const mapStateToProps = (state, ownProps) => ({
  components: state.components
})

//Dispatches new states to the store
const mapDispatchToProps = (dispatch, ownProps) => ({
})


const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ButtonContainer