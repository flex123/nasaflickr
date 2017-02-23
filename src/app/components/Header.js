import React, {Component, PropTypes} from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import {white} from 'material-ui/styles/colors';
import {styles} from '../constants/styles';

class Header extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {selectedSite: {}, searchText: ''};
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.setState({selectedSite: this.props.sites[0]});
    this.props.onHandleSelectSite(this.props.sites[0]);
  }

  handleSelectChange(event, index, value) {
    this.setState({selectedSite: value});
    this.props.onHandleSelectSite(value);
  }

  handleSearchTextChange(event) {
    this.setState({searchText: event.target.value});
  }

  handleSearch() {
    this.props.onHandleSearch(this.state.searchText);
  }

  render() {
    const {sites} = this.props;
    const centers = [];
    sites.forEach(site => {
      centers.push(<MenuItem value={site} key={site.id} primaryText={site.name}/>);
    });
    const widget = (<SelectField labelStyle={styles.label} floatingLabelText="NASA Site" value={this.state.selectedSite} autoWidth onChange={this.handleSelectChange}>
      {centers}
    </SelectField>);

    return (
      <div>
        <Toolbar style={styles.toolBar}>
          <ToolbarGroup firstChild>
            <img style={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/928px-NASA_logo.svg.png"/>
            {widget}
          </ToolbarGroup>
          <ToolbarGroup >
            <TextField floatingLabelText="Search" value={this.state.searchText} onChange={this.handleSearchTextChange}/>
            <IconButton tooltip="Search" onTouchTap={this.handleSearch} iconStyle={styles.searchIcon}>
              <ActionSearch color={white}/>
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

Header.propTypes = {
  onHandleSelectSite: PropTypes.func.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  sites: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    sites: state.sites
  };
}

export default connect(
  mapStateToProps
)(Header);
