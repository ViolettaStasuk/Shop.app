import {StyleSheet} from 'react-native';
import {colors} from '../../contants/colors.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bottomContainer: {
    width: '100%',
    // position: 'absolute',
    // bottom: 10,
    marginBottom: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    paddingTop: 8,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmountTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    marginHorizontal: 12,
    marginBottom: 10,
  },
});
