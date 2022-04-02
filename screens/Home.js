import React from 'react'
import {Button, Text, View} from 'react-native'
import { szinek } from '../modules/seged'
import styles from '../modules/styles'

const Home = (props) => {
  return (
    <View style={styles.page}>
        <Text>Home</Text>
        <View style={styles.button}>
            <Button
            title='Penzfeldobas'
            color={szinek.elso}
            onPress={()=>props.navigation.navigate("Penzfeldobas")} />
        </View>
        <View style={styles.button}>
            <Button
            title='Kockadobas'
            color={szinek.masodik}
            onPress={()=>props.navigation.navigate("Kockadobas")} />
        </View>
    </View>
  )
}

export default Home

