import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from './Title';
import {colors} from '../theme/colors';

const HeaderComponent = ({style,title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerComp}>{title}</Text>
    </View>
  );
};

export default React.memo(HeaderComponent);

const styles = StyleSheet.create({
  headerComp: {
    fontWeight: 'bold',
    color: '#191970',
    fontSize: 25,
    borderBottomWidth:1,
    borderBottomColor: '#000000',
    marginTop:20,
    

  },
  container:{
    minHeight:90,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.headerComp
  }
});
