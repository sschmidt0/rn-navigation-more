import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          mollitia vel ratione beatae debitis autem quibusdam tenetur obcaecati.
          Voluptate consequatur nemo, labore quidem blanditiis excepturi qui ea
          non rem in. Quia facilis sint libero ex ullam deleniti cumque
          inventore necessitatibus, labore accusantium culpa eum ipsa harum
          soluta repellendus error maiores, nesciunt repudiandae? Magnam cum,
          aut neque sapiente accusantium nisi corporis? Inventore, a rem eaque
          libero dolores quisquam nobis fugit ipsa, quae earum vel tenetur
          ducimus. Nam, impedit cum? Vel rem molestiae facere velit nulla
          consectetur, impedit voluptatem quasi dolor animi?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    fontSize: 30,
    marginTop: 10,
  },
  text: {
    marginTop: 16,
  },
});
