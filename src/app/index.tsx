import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';


export default function Index() {
const [dataValue,setDataValue]= useState([]);
const displayData = async()=>{
try{
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await response.json();
setDataValue(data);
}catch(error){
console.log('error')
}
}

useEffect(()=>{
displayData();
},[])  
const renderItem=({item})=>{
  return (
<View style={{borderWidth:1,margin:10,padding:10}}>
  <Text>
   Name: {item?.name}
  </Text>
   <Text>
    Email: {item?.email}
  </Text>
  <Text>
    Company: {item?.company?.name}
  </Text>
</View>)
}
 const goToDetails = () => {
   console.log('clicked');
    router.push('/details');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:50
      }}
    >
      <Button
      title='Go to Details'
      onPress={goToDetails}
      />
<FlatList
data={dataValue}
keyExtractor={(item)=>item.id.toString()}
renderItem={renderItem}
/>
    </View>
  );
}