import {blue500} from 'material-ui/styles/colors';

export const styles = {
  //  Header.js
  toolBar: {
    padding: '5px',
    height: '75px !important',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: '75px'
  },
  toolBarMainButton: {
    margin: '10px'
  },
  searchIcon: {
    width: '40px',
    height: '40px'
  },
  label: {
    color: 'white'
  },
  logo: {
    width: '70px',
    height: '70px',
    marginRight: '20px',
    marginLeft: '20px'

  },
  //  ImageThumbnail.js
  thumbnail: {
    width: '50px',
    height: '50px',
    margin: '5px',
    cursor: 'pointer'
  },
  thumbnailSelected: {
    width: '50px',
    height: '50px',
    margin: '5px',
    border: '2px solid cyan',
    cursor: 'pointer'
  },
  //  MainSection.js
  outer: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'hidden',
    height: '100%'
  },
  filter: {
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  countInfo: {
    fontSize: '16px',
    margin: '20px',
    fontWeight: '500'
  },
  gridList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    overflowY: 'auto',
    overflowX: 'hidden',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minHeight: '0px',
    paddingBottom: '10px',
    paddingTop: '10px'
  },
  iconStyle: {
    margin: '10px',
    color: blue500,
    width: '35px',
    height: '35px'
  },
  //  ImageItem.js
  card: {
    cursor: 'pointer',
    height: '320px',
    overflowY: 'hidden',
    margin: '5px'
  },
  overlay: {
    top: '-10px',
    background: 'rgba(0, 0, 0, 0.35)',
    height: '60px'
  },
  title: {
    fontSize: '18px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: 'white'
  },
  //  ImageSlider.js
  photoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  slider: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
    zIndex: '1050',
    backgroundColor: 'rgb(0,0,0)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  nextButton: {
    position: 'absolute',
    right: '50px',
    top: '40%'
  },
  beforeButton: {
    position: 'absolute',
    left: '0px',
    top: '40%'
  },
  closeButton: {
    position: 'absolute',
    right: '50px',
    top: '20px'
  },
  icon: {
    width: '60px',
    height: '60px'
  },
  sliderImageTitle: {
    fontSize: '18px',
    color: 'white',
    margin: '20px'
  }
};
