import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "./components/product_cards";
import items_data from "./items_data.json";
import SearchBar from "./components/searchBar/searchBar";

const App = () => {
  const renderItems = ({ item }) => <ProductCard products={item} />
  const [product, setProduct] = useState(items_data)

  const handleSearch = (text) => {
    const filtered = items_data.filter(product => {
      const searchText = text.toLowerCase()
      const currentTitle = product.title.toLowerCase();
      currentTitle.indexOf(searchText) > -1
    })
    setProduct(filtered)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.title} >TIGER STORE</Text>
      <SearchBar onChange={handleSearch} />
      <FlatList
        data={product}
        renderItem={renderItems}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "white"
  },

  title: {
    margin: 5,
    fontSize: 30,
    color: "purple",
    fontWeight: "700"
  },
});

export default App;