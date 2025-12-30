import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Starting from '../../components/common/Starting';
import MainText from '../../components/common/MainText';

const StartingPage = () => {
  return (
    <View style={styles.outerContainer}>
      {/* <Starting>
        <Image 
          source={require('../../assets/images//PhotoOne.png')} 
          style={styles.image} 
        />
       <MainText style={styles.text}>Online Study Is The</MainText>
       <MainText style={styles.boldText}>Best choice for</MainText>
       <MainText style={styles.boldText}>Every One</MainText>
      </Starting> */}

{/* 
       <Starting>
        <Image 
          source={require('../../assets/images//PhotoTwo.png')} 
          style={[styles.image,{objectFit:"contain"}]} 
        />
       <MainText style={styles.boldText}>Find The Perfect Tutor</MainText>
       <MainText style={styles.boldText}>Near You</MainText>
      </Starting>  */}

      <Starting>
        <Image 
          source={require('../../assets/images//PhotoThree.png')} 
          style={[styles.image,{width:'100%'}]} 
        />
       <MainText style={styles.boldText}>Learn Anytime,</MainText>
       <MainText style={styles.boldText}>Anywhere. Accelerate</MainText>
       <MainText style={styles.boldText}>Your future And Beyond</MainText>
      </Starting>


{/* Buttons code  */}
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity><Text style={{fontSize:28,fontWeight:'400',borderBottomWidth:3,borderColor:'blue',borderRadius:5}}>Skip</Text></TouchableOpacity>
         <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
            <View style={{padding:15,borderRadius:50,backgroundColor:'blue'}}>
            <TouchableOpacity><Image source={require('../../assets/images//arrow.png')}/></TouchableOpacity>
         </View>
            </View>
         </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width:'100%',
    height:'100%'
  },
  image: {
    width: 400,
    height: 500,
    marginTop:20,
    marginBottom:10,

  },
  text: {
    fontSize: 25,
  },
  boldText: {
    fontSize: 25,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop:10
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems:'center', 
    width: '100%', 
    paddingHorizontal: 40,
  },
  outerCircle:{
    padding:5,
    backgroundColor:'blue',
    borderRadius:50
  },
  innerCircle:{
    padding:5,
    backgroundColor:'white',
    borderRadius:50
  }

});

export default StartingPage;
