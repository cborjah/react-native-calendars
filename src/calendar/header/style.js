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
      alignItems: 'center',
      marginTop: 8,
      height: 45
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: '600',
      color: appStyle.monthTextColor,
      letterSpacing: -1,
      height: appStyle.textMonthFontSize
    },
    arrow: {
      justifyContent: 'center',
      paddingHorizontal: 35,
      alignSelf: 'stretch'
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
      marginTop: 10,
      marginBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      color: appStyle.textSectionTitleColor,
      height: appStyle.textDayHeaderFontSize,
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
