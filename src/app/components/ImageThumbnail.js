import React, {Component, PropTypes} from 'react';
import {styles} from '../constants/styles';

class ImageThumbnail extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSelectThumbnail = this.handleSelectThumbnail.bind(this);
  }

  handleSelectThumbnail() {
    const {photo, selectThumbnail} = this.props;
    selectThumbnail(photo.id);
  }

  render() {
    const {photo, selected} = this.props;
    return (
      <div onClick={this.handleSelectThumbnail}><img style={selected ? styles.thumbnailSelected : styles.thumbnail} src={photo.imgSrc}/></div>
    );
  }
}

ImageThumbnail.propTypes = {
  photo: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  selectThumbnail: PropTypes.func.isRequired
};

export default ImageThumbnail;
