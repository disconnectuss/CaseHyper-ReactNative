import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import BottomBar from '../components/BottomBar'
import { colors } from '../theme/colors'

const Confirm = ({route}) => {
  const {name,surName}=route?.params
  return (
    <View style={{flex:1}}>
      <View style={styles.confirm}>
        <Text style={styles.text}> Dear {name} {surName}</Text>
        <Text style={styles.text}> Welcome to Hyper Company Team!</Text>
        <Text style={styles.text}> Stay Connected With Us! </Text>
      </View>
      <BottomBar style={styles.bottomBar} />
    </View>
  )
}

export default Confirm
const styles = StyleSheet.create({
  page: {
    flex: 1,
    borderWidth: 2,
  },
  headerComp: {
    backgroundColor: colors.headerComp,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  body: {
    flex: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    backgroundColor: colors.bottomColor,
    minHeight:80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirm: {
    backgroundColor:'white',
    borderBottomWidth:1,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding:10,
  },
  text:{
    color:'red',
    fontWeight:'bold',
    fontSize:20,
    lineHeight:20,
    textDecorationLines:'underline',
    writingDirections:'auto',
  }
  

  }
);