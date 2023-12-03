import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {sWidth, scale, vScale} from '../../themes/Scale';

const HomeSlider = () => {
  return (
    <View>
      <Carousel
        width={sWidth}
        height={vScale(160)}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: 'https://previews.123rf.com/images/elenabsl/elenabsl2001/elenabsl200100005/137269692-grocery-shopping-promotional-sale-banner-fast-shopping-cart-full-of-fresh-colorful-food.jpg',
            }}
          />
        )}
      />
    </View>
  );
};

export default HomeSlider;

const styles = StyleSheet.create({
  image: {
    width: scale(367),
    height: vScale(115),
    borderRadius: vScale(8),
    alignSelf: 'center',
    marginTop: vScale(20),
  },
});
