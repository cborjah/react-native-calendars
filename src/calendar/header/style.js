import {StyleSheet, Platform, Dimensions} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.calendar.header';
const { height, width } = Dimensions.get('window');

export default function(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: 'center',
      marginTop: 7
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: '600',
      color: appStyle.monthTextColor,
      letterSpacing: -1,
      marginBottom: height * 0.015,
      marginTop: height * 0.023,
      marginHorizontal: 25
    },
    arrow: {
      padding: 10
    },
    arrowImage: {
      ...Platform.select({
        ios: {
          tintColor: appStyle.arrowColor
        },
        android: {
          tintColor: appStyle.arrowColor
        }
      })
    },
    week: {
      marginVertical: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      color: appStyle.textSectionTitleColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
