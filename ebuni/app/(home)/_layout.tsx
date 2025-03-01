import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { blue } from "react-native-reanimated/lib/typescript/Colors";

const HomeRootLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#34967C',
        headerShown: false
    }} >
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
      }} />
      <Tabs.Screen name="sell" options={{
        title: 'Sell',
        headerShown: true,
        tabBarIcon: ({ color }) => <AntDesign name="plussquare" size={24} color={color} />,
      }} />
      <Tabs.Screen name="saved" options={{
        title: 'Saved',
        headerShown: true,
        tabBarIcon: ({ color }) => <FontAwesome name="heart" size={24} color={color} />
      }} />
        <Tabs.Screen name="messages" options={{
        title: 'Messages',
        headerShown: true,
        tabBarIcon: ({ color }) => <MaterialIcons name="message" size={24} color={color} />
      }} />
        <Tabs.Screen name="profile" options={{
        title: 'Profile',
        headerShown: true,
        tabBarIcon: ({ color }) => <MaterialIcons name="manage-accounts" size={24} color="black" />
      }} />
    </Tabs>
  )
}

export default HomeRootLayout;