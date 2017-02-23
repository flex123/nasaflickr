import React, {Component, PropTypes} from 'react';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import {white} from 'material-ui/styles/colors';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import ImageThumbnail from '../components/ImageThumbnail';
import {styles} from '../constants/styles';

class ImageSlider extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      fullSizePhoto: {url: ''},
      selectedPhoto: 0
    };
    this.handleNavigateNext = this.handleNavigateNext.bind(this);
    this.handleNavigateBefore = this.handleNavigateBefore.bind(this);
    this.selectThumbnail = this.selectThumbnail.bind(this);
  }

  componentDidMount() {
    const {photoResult, fullSizePhotos, selectedPhoto} = this.props;
    if (find(fullSizePhotos, {id: photoResult.photos[selectedPhoto].id})) {
      this.setState({fullSizePhoto: find(fullSizePhotos, {id: photoResult.photos[selectedPhoto].id}), selectedPhoto});
    } else {
      this.setState({selectedPhoto});
      this.props.actions.getFullSizePhoto(photoResult.photos[selectedPhoto].id);
    }
  }

  handleNavigateBefore() {
    this.handleNavigate(true);
  }

  handleNavigateNext() {
    this.handleNavigate(false);
  }

  handleNavigate(before) {
    const {photoResult, fullSizePhotos} = this.props;
    let selectedPhoto = this.state.selectedPhoto;
    if (before) {
      selectedPhoto -= 1;
    } else {
      selectedPhoto += 1;
    }
    if (!find(fullSizePhotos, {id: photoResult.photos[selectedPhoto].id})) {
      this.props.actions.getFullSizePhoto(photoResult.photos[selectedPhoto].id);
    }
    this.setState({selectedPhoto});
  }

  selectThumbnail(photoId) {
    const {photoResult, fullSizePhotos} = this.props;
    if (!find(fullSizePhotos, {id: photoId})) {
      this.props.actions.getFullSizePhoto(photoId);
    }
    const selectedPhoto = findIndex(photoResult.photos, {id: photoId});
    this.setState({selectedPhoto});
  }

  render() {
    const {onHandleCloseSlider, photoResult, fullSizePhotos} = this.props;
    let imgElement = '';
    if (find(fullSizePhotos, {id: photoResult.photos[this.state.selectedPhoto].id})) {
      imgElement = (<img style={styles.photo} src={find(fullSizePhotos, {id: photoResult.photos[this.state.selectedPhoto].id}).url}/>);
    }

    const subset = photoResult.photos.slice((this.state.selectedPhoto < 5 ? 0 : this.state.selectedPhoto - 5), (this.state.selectedPhoto + 5 < photoResult.photos.length ? this.state.selectedPhoto + 5 : photoResult.photos.length));

    return (
      <div style={styles.slider}>
        <IconButton iconStyle={styles.icon} style={styles.closeButton} tooltip="Close" onTouchTap={onHandleCloseSlider}>
          <NavigationClose color={white}/>
        </IconButton>
        <IconButton disabled={this.state.selectedPhoto === 0} iconStyle={styles.icon} style={styles.beforeButton} tooltip="Before" onTouchTap={this.handleNavigateBefore}>
          <ImageNavigateBefore color={white}/>
        </IconButton>
        <IconButton disabled={this.state.selectedPhoto === (photoResult.photos.length - 1)} iconStyle={styles.icon} style={styles.nextButton} tooltip="Next" onTouchTap={this.handleNavigateNext}>
          <ImageNavigateNext color={white}/>
        </IconButton>
        <div>
          <div style={styles.photoContainer}>
            {imgElement}
          </div>
          <div style={styles.thumbnails}>
            {subset.map(photo => (
              <ImageThumbnail selectThumbnail={this.selectThumbnail} key={photo.id} photo={photo} selected={photo.id === photoResult.photos[this.state.selectedPhoto].id}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

ImageSlider.propTypes = {
  selectedPhoto: PropTypes.number.isRequired,
  onHandleCloseSlider: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  photoResult: PropTypes.object.isRequired,
  fullSizePhotos: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    photoResult: state.photoResult,
    fullSizePhotos: state.fullSizePhotos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageSlider);
