import React, {Component, PropTypes} from 'react';
import ImageItem from '../components/ImageItem';
import ImageSlider from '../components/ImageSlider';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ContentSort from 'material-ui/svg-icons/content/sort';
import Divider from 'material-ui/Divider';
import {styles} from '../constants/styles';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: 1,
      querying: false,
      imageSliderOpened: false,
      selectedPhoto: 0,
      sortValue: 'date-posted-desc'
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleSliderOpen = this.handleSliderOpen.bind(this);
    this.handleSliderClose = this.handleSliderClose.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {
    //  Add infinite scroll to the component
    document.getElementById('photosContainer').addEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.photoResult);
    if (nextProps.selectedSite.id !== this.props.selectedSite.id || nextProps.searchText !== this.props.searchText) {
      this.setState({page: 1, selectedPhoto: 0, querying: true});
      this.props.actions.removePhotos();
      this.props.actions.getUserPhotos(nextProps.selectedSite.id, nextProps.searchText, 1, this.state.sortValue);
    }
    this.setState({querying: false});
  }

  //  Automatically search for the next page of search result when a user scrolls to the bottom of the page
  handleScroll() {
    const el = document.getElementById('photosContainer');
    const offset = 20;
    if (((el.scrollHeight - offset) < (el.scrollTop + el.clientHeight)) && !this.state.querying && (this.props.photoResult.photos.length !== this.props.photoResult.total)) {
      this.setState({
        querying: true,
        page: this.state.page + 1
      });
      this.props.actions.getUserPhotos(this.props.selectedSite.id, this.props.searchText, this.state.page, this.state.sortValue);
    }
  }

  handleSliderClose() {
    this.setState({imageSliderOpened: false});
  }

  handleSliderOpen(selectedPhoto) {
    this.setState({imageSliderOpened: true, selectedPhoto});
  }

  handleSortChange(event, index, value) {
    this.setState({sortValue: value});
    this.props.actions.removePhotos();
    this.props.actions.getUserPhotos(this.props.selectedSite.id, this.props.searchText, 1, value);
  }

  render() {
    const {photoResult} = this.props;
    return (
      <div style={styles.outer}>
        <div style={styles.filter}>
          <ContentSort style={styles.iconStyle}/>
          <DropDownMenu value={this.state.sortValue} onChange={this.handleSortChange}>
            <MenuItem value={'date-posted-desc'} primaryText="Date Posted Descending"/>
            <MenuItem value={'date-posted-asc'} primaryText="Date Posted Ascending"/>
            <MenuItem value={'date-taken-desc'} primaryText="Date Taken Descending"/>
            <MenuItem value={'date-taken-asc'} primaryText="Date Taken Ascending"/>
            <MenuItem value={'interestingness-desc'} primaryText="Interestingness Descending"/>
            <MenuItem value={'interestingness-asc'} primaryText="Interestingness Ascending"/>
            <MenuItem value={'relevance'} primaryText="Relevance"/>
          </DropDownMenu>
          <span style={styles.countInfo}>Showing {photoResult.photos.length}/{photoResult.total}</span>
        </div>
        <Divider/>
        <div style={styles.gridList} id="photosContainer">
          {photoResult.photos.map((image, i) => (
            <ImageItem key={i} image={image} itemIndex={i} onHandleClick={this.handleSliderOpen}/>
          ))}
          {this.state.imageSliderOpened ? <ImageSlider selectedPhoto={this.state.selectedPhoto} onHandleCloseSlider={this.handleSliderClose}/> : null}
        </div>
      </div>

    );
  }
}

MainSection.propTypes = {
  photoResult: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedSite: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    photoResult: state.photoResult
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
)(MainSection);
