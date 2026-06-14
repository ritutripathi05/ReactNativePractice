import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
export default function Product() {
      const productsData = [
    'Apple',
    'Orange',
    'Banana',
    'Mango',
    'Pineapple',
  ];
  const [searchText,setSearchText]=useState('');
    const [filteredData,setFilteredData]=useState([]);
const [productValue,setProductValue]=useState([]);
    const fetchProducts = async()=>{
        try{
const response = await fetch('https://dummyjson.com/products?limit=100');
const jsonValue = await response.json();
setProductValue(jsonValue.products);
setFilteredData(jsonValue.products);
        }catch(error){
            console.log('error')
        }
    };
useEffect(()=>{
fetchProducts();
},[])    
const renderItem=({item})=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',borderWidth:1,margin:10,padding:10}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>{item.title}</Text>
            <Image
            source={{uri:item.thumbnail}}
            style={{width:100,height:100}}
            />
            <Text>{item.description}</Text>
        </View>
    )
}
const onChangeText =(text)=>{
    setSearchText(text);
    const filterData = productValue.filter((item)=> item.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filterData);
}
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Product Screen</Text>
      <TextInput
       placeholder='Search'
       value={searchText}
       onChangeText={onChangeText}
       style={{borderWidth:1,width:'80%',padding:10,margin:10}}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={2}
        style={{width:'100%'}}
        onEndReached={fetchProducts}
        onEndReachedThreshold={0.5}
        
      />
    </View>
  );
}