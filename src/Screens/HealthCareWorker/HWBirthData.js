import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";

export default function HWBirthData({route }) {
  const [count, setCount] = useState();
  const { id } = route.params;
  const fetchData = async () => {
  
    const resp = await fetch(`http://192.168.0.122:8000/searchchild/${id}`);
    const data = await resp.json();
    setCount(data);
    console.log(data)
 
  };
   fetchData()

  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };
  if(count==undefined)
  {
    myListEmpty()
  }
  else{
return (
  <View style={styles.container}>
    <Text style={styles.heading}>Birth Details</Text>
      <View style={styles.card}>
      <View>
      <Text>firstName:{count.firstName}</Text>
      <Text>lastName:{count.lastName}</Text>
      <Text>Father CNIC:{count.Father_CNIC}</Text>
      <Text>Contact:{count.Contact}</Text>
      <Text>Father Email:{count.Father_Email}</Text>
      <Text>Hospital Name:{count.Hospital_Name}</Text>
      <Text>Mother CNIC:{count.Mother_CNIC}</Text>
    </View>
      </View>
    </View>
  );
 }}
 
const styles = StyleSheet.create({
  heading:{
    marginTop: '20%',
    fontSize: 30,
    fontWeight: 'bold',
    color:'white'
  },
  Text:{
    marginTop:20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0f1a1e',
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#eee',
    marginTop: '20%',
    borderRadius: 40,
    // margin: '10%',
    paddingTop: '20%',
    paddingBottom: '100%',
    width: '100%',
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
  item: {
    textAlign:"center",
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },

});
