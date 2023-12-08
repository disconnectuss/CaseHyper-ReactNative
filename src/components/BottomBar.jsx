import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomBar = ({style}) => {
  return (
    <View style={style}>
      <Text style={styles.bottomBarTitle}>CONTACT US</Text>
    </View>
  )
}

export default  React.memo(BottomBar)

const styles = StyleSheet.create({
  bottomBarTitle: {
    fontWeight: 'bold',
    color: 'black',
    borderRadius: 5,
  },
})