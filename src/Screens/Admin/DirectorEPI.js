import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";



export default function DirectorEPI({navigation}) {
  const [count, setCount] = useState();
    
  const fetchData = async () => {
  
     const resp = await fetch("http://192.168.0.100:8000/showdepi");
     const data = await resp.json();
     setCount(data);
   };
   fetchData()
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
      data={count}
      renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('DirectorEPIData',{parakey:itemid,})}>
                                  <Text style={styles.item}>{item.id}. {item.directorEPIFirstname}</Text>
                                </TouchableOpacity>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold' }}>
          List of Registered Director EPI
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
