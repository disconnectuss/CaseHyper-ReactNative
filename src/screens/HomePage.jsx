import {StyleSheet, Text, View,Pressable} from 'react-native';
import React from 'react';
import AppBar from '../components/HeaderComponent';
import CustomBody from '../components/CustomBody';
import BottomBar from '../components/BottomBar';
import {colors} from '../theme/colors';

const HomePage = (props) => {
const {navigation}=props
  return (
    <View style={styles.page}>
      <CustomBody style={styles.body} {...props} navigation={navigation}/>
     <BottomBar style={styles.bottomBar} /> 
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  appBar: {
    backgroundColor: colors.appbarColor,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  body: {
    flex: 1,
  },
  bottomBar: {
    backgroundColor: colors.bottomColor,
    minHeight:80,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
  },
});
