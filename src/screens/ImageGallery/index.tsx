import {FlatList, Text} from 'react-native';
import React, {useCallback} from 'react';
import {useGalleryQuery} from '../../hooks/useGalleryQuery';
import {Photo} from 'pexels';
import {styles} from './styles';
import GalleryItem from '../../components/GalleryItem';

const ImageGallery = () => {
  const {gallery, fetchMore, isLoading, error, refreshing, refreshList} =
    useGalleryQuery();

  const renderItem = useCallback(
    ({item}: {item: Photo}) => {
      return (
        <GalleryItem
          item={item}
          showLoading={
            isLoading && item?.id === gallery[gallery?.length - 1]?.id
          }
        />
      );
    },
    [gallery, isLoading],
  );
  const listEmptyComponent = useCallback(() => {
    if (isLoading && gallery?.length === 0) {
      return <Text style={styles.loading}>... loading images</Text>;
    }

    if (gallery?.length === 0 && !isLoading) {
      return <Text>we don't have any images</Text>;
    }

    if (error && !isLoading) {
      return <Text>{error}</Text>;
    }
  }, [gallery, error, isLoading]);

  return (
    <FlatList
      data={gallery}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.1}
      contentContainerStyle={styles.container}
      onRefresh={refreshList}
      refreshing={refreshing}
      ListEmptyComponent={listEmptyComponent}
    />
  );
};

export default ImageGallery;
