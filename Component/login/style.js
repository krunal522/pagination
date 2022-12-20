/** login Screen detail page Style  */

import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00C8BC',
    flex: 1
  },
  loginHeader: {
    fontSize: 16,
  },
  finowiseimg: {
    width: 136,
    height: 141,
    alignSelf: 'center',
  },
  // loginContainer: {
  //   display: 'flex',
  // },
  mainlogo: {
    paddingVertical: 56,
    alignContent: 'flex-end',
    justifyContent: 'center',
  },
  loginDetails: {
    flex: 3,
    // height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  mobileNo: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 24,
    fontSize: 16
  },
  mainMobile: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  flagimg: {
    width: 26,
    height: 17,
    marginVertical: 16
  },
  mainMobileInput: {
    flexDirection: 'row',
    marginVertical: 16,
    borderColor: '#C4C4C4',

    // paddingVertical:12
    // backgroundColor:'red'
  },
  codeStyle: {
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    flexDirection: 'row',
    width: 94
  },
  countryCode: {
    marginLeft: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  countryMainPicker: {
    flexDirection: 'row'
  },
  downArrow: {
    marginHorizontal: 12,
    alignSelf: 'center'
  },
  phoneTextInput: {
    display: 'flex',
    flexDirection: 'row'
  },
  textInput: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
  },
  textInputMainDesign: {
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    flexDirection: 'row',
    marginHorizontal: 20,
    // width:'70%'
    // marginLeft: 20,
    width: screenWidth.width - 150,
  },
  signUp: {
    width: screenWidth.width - 20,
    height: 55,
    backgroundColor: '#02B0A6',
    // backgroundColor: '#00C8BC',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 24,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
  },
  signUpText: {
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins'
  },
  // withLine: {
  //   borderBottomWidth: 1,
  //   width: 124,
  //   marginVertical: 38,
  //   borderColor: '#C4C4C4',
  //   flexDirection: 'row'
  // },
  withMain: {
    marginTop: 29,
    // marginVertical: 29,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineHeight: {
    height: 1,
    width: '40%',
    backgroundColor: '#686868'
  },
  withText: {
    marginHorizontal: 11,
    fontWeight: '400',
    fontFamily: 'Proxima Nova',
    fontSize: 15,
    color: '#686868',
    lineHeight: 19
  },
  googleLogin: {
    backgroundColor: '#DC4E41',
    width: screenWidth.width - 20,
    // width: 335,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 38,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
  },
  googleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Poppins'
  },
  googleLogo:
  {
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    marginHorizontal: 13
  }
});

export default styles;