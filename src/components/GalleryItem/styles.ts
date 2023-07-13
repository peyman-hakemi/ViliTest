import {StyleSheet} from 'react-native';
import {height, mvp} from '../../utils/makeValueResponsive';

export const styles = StyleSheet.create({
  containerItem: {
    marginBottom: mvp(16),
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: mvp(height / 3),
  },
  containerDetail: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    paddingHorizontal: mvp(4),
    paddingVertical: mvp(6),
  },
  name: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  title: {
    fontWeight: '400',
  },
  goDetail: {
    color: 'white',
    textAlign: 'center',
    fontSize: mvp(12),
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});
