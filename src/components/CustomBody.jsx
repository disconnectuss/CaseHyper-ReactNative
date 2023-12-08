import {Pressable, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import Title from './Title';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import {colors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

const Body = ({style, navigation}) => {
  const [form, setForm] = useState({
    inputName: '',
    inputSurname: '',
    inputDep: '',
    inputCompany: '',
  });
  const [valid, setValid] = useState(false);
  const onChangeInput = (key, value) => {
    setForm({...form, [key]: value});
    if (
      form.inputCompany &&
      form.inputCompany &&
      form.inputCompany &&
      form.inputCompany
    )
      setValid(true);
  };

  
  const handleSubmit = () => {
  
    
    navigation.navigate('Confirm', {
      name: form.inputName,
      surName: form.inputSurname,
    });
  };

  const onReset = () => {
  

    setForm({
      inputName: '',
      inputSurname: '',
      inputDep: '',
      inputCompany: '',
    });
  };
  return (
    <View style={style}>
      <Title />
      <CustomInput
        style={styles.customInput}
        value={form.inputName}
        inputTitle={'Fill Your Name..'}
        onChangeText={text => onChangeInput('inputName', text)}
      />
      <CustomInput
        value={form.inputSurname}
        inputTitle={'Fill your Surname..'}
        onChangeText={text => onChangeInput('inputSurname', text)}
      />
      <CustomInput
        value={form.inputDep}
        inputTitle={'Fill Your Department..'}
        onChangeText={text => onChangeInput('inputDep', text)}
      />
      <CustomInput
        value={form.inputCompany}
        inputTitle={'Fill Your Company..'}
        onChangeText={text => onChangeInput('inputCompany', text)}
      />
      <View style={styles.buttonsContainer}>
        <CustomButton
          buttonTitle={'RESET'}
          onPress={() => onReset()}
          style={styles.resetButton}
          valid={true}
        />
        <CustomButton
          buttonTitle={'SUBMIT'}
          onPress={() => handleSubmit(form)}
          style={valid ? styles.activeButton : styles.pasiveButton}

          valid={valid}
        />
      </View>
    </View>
  );
};
export default Body;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 20,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  customInput: {
    borderBlockColor: 'gray',
  },
  activeButton: {
    backgroundColor: colors.activeSub
  },
  pasiveButton: {
    backgroundColor: colors.pasiveBtn
  },
});
