import {StyleSheet} from 'react-native';
import {mvp} from '../../utils/makeValueResponsive';

export const styles = StyleSheet.create({
  container: {
    padding: mvp(16),
  },
  loading: {
    fontSize: mvp(18),
    fontWeight: '700',
  },
});
