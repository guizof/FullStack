import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'

const MusicAppScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Link style={styles.buttonLink1} href='/perfil'>👥</Link>

        <TextInput
          style={styles.searchBar}
          placeholder="Artistas, playlists, podcasts..."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity>
          <Text style={styles.notification}></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentlyPlayed}>
        <Text style={styles.sectionTitle}>Tocados recentemente</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          <View style={styles.card}>
            <Image source={{uri: 'https://cdn-images.dzcdn.net/images/cover/03799fac0b6d12984ac8e1afefe54754/0x1900-000000-80-0-0.jpg'}} style={styles.image} />
            <Text style={styles.cardTitle}>Malvadinho</Text>
            <Text style={styles.cardDetails}>Mc Luuky</Text>
            <Link style={styles.buttonLink2} href='/player'>⏯️</Link>
          </View>
          <View style={styles.card}>
            <Image source={{uri: 'https://i.scdn.co/image/ab67616d0000b27346aa3d28a57a9b939485cde5'}} style={styles.image} />
            <Text style={styles.cardTitle}>A Gente Brigou</Text>
            <Text style={styles.cardDetails}>Mc Don Juan</Text>
            <Link style={styles.buttonLink2} href='/player'>⏯️</Link>
          </View>
        </ScrollView>
      </View>

      <View style={styles.musicYear}>
        <Text style={styles.sectionTitle}>Gêneros Favoritos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          <View style={[styles.card, styles.yearCard]}>
            <Text style={styles.yearText}>FUNK</Text>
          </View>
          <View style={[styles.card, styles.yearCard]}>
            <Text style={styles.yearText}>SERTANEJO</Text>
          </View>
          <View style={[styles.card, styles.yearCard]}>
            <Text style={styles.yearText}>TRAP</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  searchBar: {
    width: '70%',
    height: 40,
    backgroundColor: '#1f1f1f',
    color: '#fff',
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 16,
  },
  notification: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentlyPlayed: {
    marginTop: 20,
  },
  musicYear: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  horizontalList: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  card: {
    width: 150,
    marginRight: 10,
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDetails: {
    color: '#ccc',
    fontSize: 14,
  },
  yearCard: {
    backgroundColor: '#1f1f1f', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonLink1: {
     filter: "invert(1)",
     fontSize: 30,
  },
  buttonLink2: {
    fontSize: 30,
  },
});

export default MusicAppScreen;