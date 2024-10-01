import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../img/harry-potter.png")} style={styles.image} />
      <Text style={styles.title}>Welcome wizard!</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.btnText}>Kezdjük</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    verticalAlign: "top",
  },
  btn: {

  },
  btnText: {

  }
});

export default Welcome;
