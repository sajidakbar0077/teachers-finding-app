import {StyleSheet} from 'react-native';

const mainColor = '#1D61E7';
const secondaryColor = '#ffffff';
export const style = StyleSheet.create({
    mainBg:{
        backgroundColor:secondaryColor,
    },
    wrapper:{
      padding:14,
      paddingBottom:50,
      minHeight:"100%"
    },
  loginHeader: {
    backgroundColor: '#0000BD',
    paddingVertical: 48,
    paddingHorizontal: 42,
    position: 'relative',
  },
  logoStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },
  logoText: {
    color: secondaryColor,
    fontWeight: '400',
    fontSize: 32,
  },
  regesterPageName: {
    color: '#EEEEEE',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 36,
  },
  blur: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
  },
  label: {
    color: '#6C7278',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 10,
  },
  textField: {
    backgroundColor: secondaryColor,
    borderWidth: 1,
    borderColor: '#EDF1F3',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  mainBtn: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: mainColor,
  },
  mainBtnText: {
    color: secondaryColor,
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
  forgotBtn: {
    fontWeight: '600',
    fontSize: 12,
    color: mainColor,
    marginVertical: 20,
    marginTop: 10,
    textAlign: 'right',
  },
  signUpHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  signUpPageName: {
    color: secondaryColor,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
  signUptext: {
    color: secondaryColor,
    fontSize: 16,
    fontWeight: '500',
  },
  signUpLoginBtn: {
    color: '#4D81E7',
    fontSize: 16,
    fontWeight: '500',
  },
  homeHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  homeTitle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
  },
  highlitedText: {
    color: '#3D8FEF',
  },
  notificationBtn: {
    borderRadius: 14,
    padding: 5,
    width: 39,
    height: 39,
    backgroundColor: secondaryColor,
    elevation: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeSubHeading: {
    fontSize: 16,
  },
  muteText: {
    color: '#8C8C8C',
  },
  searchBox: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 32,
    elevation: 5,
    backgroundColor: secondaryColor,
    paddingVertical: 5,
    paddingHorizontal: 5,
    paddingLeft: 13,
  },
  carouselDot: {
    width: 13,
    height: 13,
    borderWidth: 2,
    borderColor: secondaryColor,
    borderRadius: 100,
    marginHorizontal: 5,
  },
  carouselDotActive: {
    width: 26,
    height: 13,
    backgroundColor: secondaryColor,
    borderRadius: 100,
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subHeading: {
    fontSize: 15,
    marginVertical: 10,
  },
  blueText: {
    color: mainColor,
  },
  checkBox: {
    padding: 7,
    height:40,
    borderWidth: 2,
    borderRadius: 19,
    borderColor: mainColor,
    marginRight: 10,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  checkBoxText: {
    color: '#8C8C8C',
    fontSize: 12,
  },
  tutorCard: {
    width: '48%',
    backgroundColor: secondaryColor,
    elevation: 5,
    borderRadius: 16,
    overflow: 'hidden',
    paddingBottom: 5,
  },
  tutorCardImage: {
    width: '100%',
    height: 170,
  },
  pageTitle: {
    fontSize: 21,
    color: '#000000',
  },
  smText: {
    color: '#000000',
    fontSize: 15,
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexBetween: {
    justifyContent: 'space-between',
  },
  mainHeading: {
    fontSize: 20,
    color: secondaryColor,
  },
  imageBtn: {
    backgroundColor: secondaryColor,
    borderWidth: 2,
    borderColor: mainColor,
    borderRadius: 10,
    padding: 7,
    width: '100%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginVertical: 20,
    position: 'relative',
  },
  smallUploadIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 99,
    borderRadius:10,
    backgroundColor:secondaryColor,
  },
  profileEditCircle:{
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#167F71',
    position:"relative",
    marginVertical:40
  },
  editIConProfile:{
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#167F71',
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    bottom:0,
    right:0
  },
  feedBackTutorImage:{
    width:"100%",
    objectFit:"contain",
    height:300,
  },
  commentCard:{
    backgroundColor:secondaryColor,
    borderRadius:10,
    elevation:5,
    padding:5,
    marginTop:10
  },
  profileMenuBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:30
  },
  profileMenuBtnText:{
    fontSize:17,
  },
  errorMsg:{
    color:"red",
    fontSize:10,
    fontFamily:"Poppins-Regular"
  }
});
