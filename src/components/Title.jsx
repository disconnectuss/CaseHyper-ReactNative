import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const Title = () => {
  return (
    <View style={styles.titleBody}>
      <Text style={styles.title}>Let Us Kow You</Text>
    </View>
  )
}

export default React.memo(Title)

const styles = StyleSheet.create({
  titleBody:{
    backgroundColor:colors.titleBackgroundColor,
    alignItems:'center',
    paddingVertical:10,
    borderRadius: 5,
    margin:10

  },
  title:{
    fontWeight:'bold',
    color:colors.titleColor
  }
})