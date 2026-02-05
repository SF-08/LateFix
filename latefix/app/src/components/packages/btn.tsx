import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Btn = ({ title, onPress }: { title: string; onPress: () => void }) => {
  return (
    <Pressable style={styles.button} onPress={onPress} android_ripple={{ color: '#bfbfbf', borderless: false }}>
      <Text style={{ color: 'white', fontSize: 25, }}>{title}</Text>
    </Pressable>
  )
}

export default Btn

const styles = StyleSheet.create({
  button: {
    height: 70,
    backgroundColor: '#802392',
    borderRadius: 10,
    borderTopEndRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})