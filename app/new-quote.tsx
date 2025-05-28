import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const NewQuote = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>New Quote</Text>
        <Text style={styles.text}>
          Add a new quote to your collection. You can add quotes from famous
          authors, books, or even your own thoughts. Quotes can be
          inspirational, motivational, or just something that resonates with
          you. To add a new quote, simply type it in the input field below and
          press the "Add Quote" button. You can also add the author's name and
          any additional notes you want to remember about the quote. Once added,
          the quote will be saved to your collection and you can view it later.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NewQuote;

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
