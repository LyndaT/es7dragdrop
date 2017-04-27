import { connect } from 'react-redux'
import Item from '../components/s_Item'


//Get state from the store, passes to props
const mapStateToProps = (state, ownProps) => ({
  component: state.components.filter(function(component) {
    return component.Uuid == ownProps.id;
  })[0]
})

//Dispatches new states to the store
const mapDispatchToProps = (dispatch, ownProps) => ({
})


const ItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)

export default ItemContainer