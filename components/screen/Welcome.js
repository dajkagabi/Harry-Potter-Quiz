import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

const Welcome = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../img/welcome.jpg')}  
      style={styles.background}
      imageStyle={{ opacity: 1 }}  
    >
      <View style={styles.container}>
        <Text style={styles.title}>Harry Potter Quiz</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Quiz')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Esküszöm, hogy rosszban sántikálok!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
    fontSize: 26,  
    color: '#FFFFFF', 
    marginBottom: 20,
    textAlign: 'center',  
    paddingHorizontal: 20,  
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  
    borderRadius: 10,  
    },
    button: {
      backgroundColor: '#5f5f5f',  
      padding: 15,
      borderRadius: 10,
      borderColor: '#FFD700',  
      borderWidth: 2,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
        color: "#ffff",
        fontSize: 18,
        textAlign: "center",
        width: "90%",
        
    },
  });
  
  export default Welcome;