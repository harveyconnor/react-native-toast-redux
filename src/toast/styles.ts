import { StyleSheet } from 'react-native';

const colors = {
  black: '#000',
  transparent: 'transparent',
  gray: '#D7D7D7',
};

export default StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    top: 64,
    zIndex: 999,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageContainer: {
    backgroundColor: colors.gray,
    borderRadius: 9,
    marginHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: 'stretch'
  },
  shadow: {
    elevation: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 5
  }
});
