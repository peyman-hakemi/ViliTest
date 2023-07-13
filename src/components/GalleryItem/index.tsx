import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {Photo} from 'pexels';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import {styles} from './styles';
import {sharedTransition} from '../../utils/SharedElementTransition';

interface IGalleryItem {
  item: Photo;
  showLoading: boolean;
}

const GalleryItem = ({item, showLoading}: IGalleryItem) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const goDetail = () => {
    navigation.navigate('DetailImage', {
      item: item,
    });
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={goDetail}
        style={styles.containerItem}>
        <Animated.Image
          source={{uri: item.src.medium}}
          style={styles.image}
          sharedTransitionTag={String(item.id)}
          sharedTransitionStyle={sharedTransition}
        />
        <View style={styles.containerDetail}>
          <Text style={styles.name}>
            <Text style={styles.title}>Author: </Text> {item.photographer}
          </Text>
          <Text style={styles.goDetail} onPress={goDetail}>
            Show Details
          </Text>
        </View>
      </TouchableOpacity>
      {showLoading && <ActivityIndicator />}
    </>
  );
};

export default GalleryItem;
