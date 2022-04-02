import React, { useState } from 'react'
import { Button, Image, Text, View } from 'react-native'
import { szinek, veletlen } from '../modules/seged'
import styles from '../modules/styles'

const fej = require('../assets/euro-fej.gif')
const iras = require('../assets/euro-iras.gif')

const Penz = () => {
    const [kep, setkep] = useState(fej)

    const dobas = () => {
        const v = veletlen(1, 2)
        if (v == 1) {
            setkep(fej)
        } else {
            setkep(iras)
        }
    }
    return (
        <View style={styles.page}>
            <Text>Penz</Text>
            <Image
                source={kep}
                style={styles.size} />
            <View style={styles.button}>
                <Button
                    title='dobas'
                    color={szinek.elso}
                    onPress={dobas} />
            </View>
        </View>
    )
}

export default Penz

