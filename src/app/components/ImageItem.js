import React, {Component, PropTypes} from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import {styles} from '../constants/styles';

class ImageItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onHandleClick(this.props.itemIndex);
  }

  render() {
    const {image} = this.props;
    return (
      <Card style={styles.card} onClick={this.handleClick}>
        <CardMedia mediaStyle={styles.image} overlayContentStyle={styles.overlay} overlay={<CardTitle titleStyle={styles.title} title={image.title}/>}>
          <img src={image.imgSrc}/>
        </CardMedia>
      </Card>
    );
  }
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  itemIndex: PropTypes.number.isRequired,
  onHandleClick: PropTypes.func.isRequired
};

export default ImageItem;
