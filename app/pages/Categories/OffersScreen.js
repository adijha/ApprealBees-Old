import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text,Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ShopCard from '../../components/ShopCard';
import Card from '../../components/Card';
import StoryCard from '../../components/StoryCard';
import BestSeller from '../../components/BestSeller';
import TagCard from '../../components/TagCard';
const OffersScreen = () => {
  const [carouselItem, setCarouselItem] = useState([
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  function _renderItem({item, index}) {
    return (
        <Card
          img="https://source.unsplash.com/weekly?mobile"
          title="New Arrival"
          text="Summer's 16 Collection"
          btn="Shop Now"
        />
    );
  }
  return (
    <ScrollView style={styles.container}>
      <Carousel
        layout={'default'}
        // ref={ref => (this.carousel = ref)}
        data={carouselItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={300}
        renderItem={_renderItem}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <StoryCard
        img1="https://source.unsplash.com/weekly?electronics"
        img2="https://source.unsplash.com/weekly?home"
        img3="https://source.unsplash.com/weekly?kid"
        img4="https://source.unsplash.com/weekly?fashion"
        text1="Electronics"
        text2="Home"
        text3="Kids"
        text4="Fashion"
      />
      <ShopCard
        img="https://source.unsplash.com/weekly?mobile"
        title="New Arrival"
        text="Summer's 16 Collection"
        btn="Shop Now"
      />
      <TagCard
        icon="tag"
        title="Offers only for you"
        text="We have selected some products only for you"
      />
      <BestSeller title="BEST SELLER" />
    </ScrollView>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 13,
  },
});
