import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";

const persons = [
  {
	id: "1",
	name: "Earnest Green",
  cnic: "2347823462946248",
  email: "medsup@mail.com",
  phone: "0322342342341",
  hId: "231d",
  hName: "Jinnah Hospital"
  }
];

export default function MedicalSup({navigation}) {

  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };
  
return (
  <View style={styles.container}>
      <ImageBackground source={require('../Admin/assets/funky-lines.png')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.card}>
      <FlatList
      data={persons}
      renderItem={({ item }) => <Text style={styles.item}>id: {item.id}{'\n'}{'\n'}name: {item.name}{'\n'}{'\n'}cnic: {item.cnic}{'\n'}{'\n'}email: {item.email}{'\n'}{'\n'}phone: {item.phone}{'\n'}{'\n'}hId: {item.hId}{'\n'}{'\n'}hName: {item.hName}</Text>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold' }}>
          Medical Superintendent Details
        </Text>
      )}
      ListFooterComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginBottom:20,fontWeight:'bold' }}></Text>
      )}
    />
      </View>
      </ImageBackground>
    </View>
  );
 }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    textAlign:"center",
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
  heading:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  Text:{
    marginTop:20,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#eee',
    marginTop: '45%',
    margin: '10%',
    paddingTop: '10%',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
