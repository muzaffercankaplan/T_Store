import React from 'react';
import { View, Text, Image } from "react-native";
import styles from "./product_cards_style";

const ProductCard = ({ products }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: products.imgURL }} />
            <Text style={styles.title}>{products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            {!products.inStock && <Text style={styles.stock}>stokta yok</Text>}
        </View>
    )
};

export default ProductCard;