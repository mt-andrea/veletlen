import React, { useState } from 'react'
import {Button, Image, Text, View} from 'react-native'
import { szinek, veletlen } from '../modules/seged';
import styles from '../modules/styles';

const kepek=[require('../assets/k1.png'),require('../assets/k2.png'),require('../assets/k3.png'),require('../assets/k4.png'),require('../assets/k5.png'),require('../assets/k6.png')]

const Kocka = () => {

    const [kep, setkep] = useState(kepek[5]);

    const dobas=()=>{
        setkep(kepek[veletlen(0,5)])
    }

  return (
    <View style={styles.page}>
        <Text>Kocka</Text>
        <Image
        source={kep}
        style={styles.size}/>
        <View style={styles.button}>
            <Button
            title='dobas'
            color={szinek.masodik}
            onPress={dobas}/>
        </View>
    </View>
  )
}

export default Kocka
