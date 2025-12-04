// screens/HomeScreen.js (Güncellenmiş hali)
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Guide</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Paris"
          onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to London"
          onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  buttonContainer: { marginVertical: 10 } // Butonlar arası boşluk için
});