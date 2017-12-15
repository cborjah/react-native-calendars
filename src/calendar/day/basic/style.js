import {StyleSheet, Platform, Dimensions} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';
const { height, width } = Dimensions.get('window');

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      flex: 1,
      alignItems: 'center',
      borderColor: 'rgb(217, 217, 217)',
      borderWidth: 1,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent'
    },
    button: {
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      padding: width * 0.026
    },
    text: {
      marginTop: height * 0.006,
      marginLeft: width * 0.005,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '400',
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    ...(theme[STYLESHEET_ID] || {}),
    firstWeek: {
      borderTopColor: 'transparent'
    },
    firstDay: {
      borderLeftColor: 'transparent'
    }
  });
}
