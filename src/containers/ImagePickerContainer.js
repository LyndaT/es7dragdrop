import { connect } from 'react-redux'
import ImagePicker from '../components/ImagePicker'
import { addNewComponent } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  defaultImages: state.defaultImages,
  uploadedImages: state.uploadedImages,
  visibility: state.editorSettings.imagePickerVisible
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComponent: (type) => {
    dispatch(addNewComponent(type))
  },
  uploadImage: () => {
  	dispatch({type: "UPLOAD_IMAGE", url: "http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/10-kitten-cuteness-1.jpg"})
  },
  selectImage: () => {
  	dispatch({type: "SELECT_IMAGE"})
  }
})

const ImagePickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagePicker)

export default ImagePickerContainer