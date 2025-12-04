// screens/DetailsScreen.js (Güncellenmiş hali)
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // Parametreleri parçala (Destructuring)
  const { place, rating } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {place}</Text>
      <Text style={styles.text}>Rating: {rating} Stars</Text>
      
      {/* Challenge Kısmı */}
      {rating === 5 ? (
        <Text style={styles.highlight}>Wow! Top Rated Destination! ⭐</Text>
      ) : (
        <Text style={styles.text}>A great place to visit.</Text>
      )}

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 18, marginBottom: 10 },
  highlight: { fontSize: 18, color: 'gold', fontWeight: 'bold', marginBottom: 20 }
});