import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';

const CustomInput = ({inputTitle, onChangeText,value}) => {
  return (
    <TextInput
    value={value}
      onChangeText={onChangeText}
      style={styles.input}
      placeholder={inputTitle}
      placeholderTextColor={'#696969'}
    />
  );
};

export default React.memo(CustomInput);

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical:25,
    borderBottomColor:'#a9a9a9',
    borderBottomWidth:1,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputColor,
    margin:10
  },
});
