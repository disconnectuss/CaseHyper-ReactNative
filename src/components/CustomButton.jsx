import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  buttonTitle,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';

const CustomButton = props => {
  const {onPress, buttonTitle, valid, style} = props;
  return (
    <TouchableOpacity
      {...props}
      disabled={!valid}
      style={[styles.buttonBody, style]}>
      <Text style={styles.buttonTitle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
//

export default React.memo(CustomButton);

const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: colors.buttonColor,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: '#a9a9a9',
    minWidth: '30%',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
