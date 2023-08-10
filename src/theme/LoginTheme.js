import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');
const LoginTheme = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  loginContainer:{
    width:width/1.2,
    backgroundColor:'#f8f9fb',
    alignItems:'center',
    padding:20,
    borderRadius:3
  },
  logo:{
    height:100,
    width:100
  },
  logoText:{
    fontSize:16,
    fontWeight:'bold',
    marginTop:8
  },
  signText:{
    fontSize:13,
    fontWeight:'500',
    marginTop:3
  },
  labelText:{
    fontSize:15,
    fontWeight:'700',
    color:'#000',
    marginBottom:7,
    marginTop:10
  },
  inputText:{
    backgroundColor:'#FFF',
    width:width/1.4,
    borderColor:'gray',
    borderWidth:1,
    height:35,
    paddingLeft:8,
    borderRadius:3
  },
  loginBtn:{
    backgroundColor:'#136cf7',
    marginTop:20,
    width:width/1.4,
    padding:10,
    alignItems:'center',
    borderRadius:3
  },
  loginText:{
    color:'#FFF'
  },
  forgotSection:{
    marginTop:15,
    width:width/1.2,
    borderTopColor:'lightgray',
    borderTopWidth:1
  },
  forgotText:{
    padding:10,
    paddingBottom:0,
    fontSize:13,
    textAlign:'center',
    color:'#136cf7'
  }
});

export {LoginTheme};
