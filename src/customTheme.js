import {
  blue500, blue700,
  pinkA200,
  grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: blue500,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: white,
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
  textField: {
    textColor: white,
    focusColor: white
  }
};
