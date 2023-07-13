import {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {createClient, Photos, Photo, ErrorResponse} from 'pexels';
import {PaginationObject} from '../types/gallery';

const client = createClient(
  'xYyoYPGMzSaSuRYlxTAPvjcgoa4MupZpWxWPdfnUgGh11Oir2zn2jsNo',
);

export const useGalleryQuery = () => {
  const [gallery, setGallery] = useState<Photo[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<PaginationObject>({
    page: 1,
    per_page: 11,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<undefined | string>(undefined);

  useEffect(() => {
    // first time fetch
    getGalley(paginationInfo.page);
  }, []);

  const cacheNewImages = (images: Photo[]) => {
    // loop through the images and cache them
    images.map(async (item: Photo) => {
      await Image.prefetch(item.src.medium);
      await Image.prefetch(item.src.large);
    });
  };

  const getGalley = async (page: number) => {
    setIsLoading(true);
    await client.photos
      .curated({page: page, per_page: paginationInfo.per_page})
      .then((photos: Photos | ErrorResponse) => {
        if ('error' in photos) {
          //return if it was an error
          return setError(photos.error);
        }

        const {photos: photosGallery, ...paginationRes} = photos;

        if (gallery?.length) {
          // append images if there were images already
          setGallery(prev => [...prev, ...photosGallery]);
        } else {
          //first time setting the images
          setGallery(photosGallery);
        }
        // update the pagination information every fetch
        setPaginationInfo(paginationRes);
        cacheNewImages(photosGallery);
      })
      .catch(() => setError('failed to get the gallery'));
    setIsLoading(false);
    setRefreshing(false);
  };

  const fetchMore = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const nextPage = paginationInfo.page + 1;

    getGalley(nextPage);
  };

  const refreshList = async () => {
    if (refreshing) {
      return;
    }
    setGallery([]);
    setRefreshing(true);
    setIsLoading(true);
    getGalley(1);
  };

  return {isLoading, gallery, error, refreshing, fetchMore, refreshList};
};
