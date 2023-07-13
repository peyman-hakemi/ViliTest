import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Animated from 'react-native-reanimated';
import {sharedTransition} from '../../utils/SharedElementTransition';
import {Photo} from 'pexels';
import {RouteProp, useRoute} from '@react-navigation/native';

const DetailImage = () => {
  const route: RouteProp<{
    params: {item: Photo};
  }> = useRoute();

  const {item} = route.params;

  return (
    <View>
      <Animated.Image
        source={{uri: item.src.large}}
        style={styles.image}
        sharedTransitionTag={String(item.id)}
        sharedTransitionStyle={sharedTransition}
      />
    </View>
  );
};

export default DetailImage;
