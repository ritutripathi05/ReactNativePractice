import { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
export default function Details() {
      const productsData = [
    'Apple',
    'Orange',
    'Banana',
    'Mango',
    'Pineapple',
  ];
  const [fruits,setFruits]=useState([]);
    const [filteredFruits,setFilteredFruits]=useState(productsData);

const renderItem=({item})=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',borderWidth:1,margin:10,padding:10}}>
            <Text>{item}</Text>
        </View>
    )
}
const onChangeText =(text)=>{
    setFruits(text);
    const filterData = productsData.filter((item)=> item.toLowerCase().includes(text.toLowerCase()));
    setFilteredFruits(filterData);
}
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Details Screen</Text>
      <TextInput
       placeholder='Search'
       value={fruits}
       onChangeText={onChangeText}
       style={{borderWidth:1,width:'80%',padding:10,margin:10}}
      />
      <FlatList
        data={filteredFruits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}