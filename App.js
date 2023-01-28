import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appConrtainer}>
      <View>
        <TextInput placeholder='Your course goal!'/>
        <Button title='Add Goal'/>
      </View>
      <View>
        <Text>Goal List here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appConrtainer: {
    paddingTop: 50,
    paddingHorizontal: 16
  }
});
