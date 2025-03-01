import { Text, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* COMPANY LOGO */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* TEXT GROUPS */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>
                Electronics, Property, Cars
              </Text>
              <Text style={styles.textSmall}>and more!</Text>
              <Text style={styles.textLarge}></Text>
              <Text style={styles.textLarge}></Text>
            
            </View>

            <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Run business online</Text>
            <Text style={styles.textSmall}>Sell brand new or used goods</Text>
            </View>
              
            

            <View style={{ position: "absolute", bottom: 60, width: "100%" }}>
              {/* BUTTON GROUP */}
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}
                onPress={() => router.push("/join")}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>
                    Sign up
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.transparentButton}
                onPress={() => router.push("/signin")}>
                  <Text style={styles.textSmall}>Log in</Text>
                </TouchableOpacity>
              </View>

              
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },

  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },

  textGroup: {
    alignItems: "center",
  },

  textLarge: {
    color: "#fff",
    fontSize: 40,
    fontWeight: 800,
    textAlign: "center",
    marginBottom: 12,
  },

  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },

  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },

  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },

  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});