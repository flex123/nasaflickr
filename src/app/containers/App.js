import 'babel-polyfill';
import React, {Component, PropTypes} from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
};

class App extends Component {

  constructor(context, props) {
    super(context, props);
    this.state = {selectedSite: {}, searchText: '', showHeader: true};
    this.handleSelectSite = this.handleSelectSite.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.handleToggleHeader = this.handleToggleHeader.bind(this);
  }

  handleSelectSite(selectedSite) {
    this.setState({selectedSite});
  }

  handleSearch(searchText) {
    this.setState({searchText});
  }

  handleErrorClose() {
    this.props.actions.resetError();
  }

  handleToggleHeader(showHeader) {
    console.log(showHeader);
    this.setState({showHeader});
  }

  render() {
    const {errors} = this.props;
    return (
      <div style={styles.root}>
        <Header onHandleSelectSite={this.handleSelectSite} onHandleSearch={this.handleSearch} showHeader={this.state.showHeader}/>
        <MainSection searchText={this.state.searchText} selectedSite={this.state.selectedSite} onHandleToggleHeader={this.handleToggleHeader}/>
        <Snackbar open={Object.keys(errors).length > 0} message={errors.message} autoHideDuration={5000} onRequestClose={this.handleErrorClose}/>
      </div>
    );
  }
}

App.propTypes = {
  errors: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    errors: state.errors
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
)(App);
