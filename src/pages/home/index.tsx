import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import DefaultCards, {DefaultCardsProps, RemoveListProps} from '../../components/cards/defaultCards';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/header';

const HomePage = () => {
    const [realod,setReload] = useState(false)
    const [items,setItems] = useState([])

   async function getAllItemsAndSetAtHome () {
        const items = await AsyncStorage.getItem('todo')
        setReload(false)
        if(!items)
            return
        
        const obj = JSON.parse(items)

        setItems(obj)

        console.log(obj)

    }

    useEffect(() => {
        console.log('res')
        getAllItemsAndSetAtHome()
    },[realod])

    return (
        <>
    <Header setRealod={ setReload } ></Header>
        
    <View style={styles.container} >
        <ScrollView style={{marginBottom:20}} >

        <View style={styles.listContainer}>
            {items.map((value: DefaultCardsProps )  => {
                return (<DefaultCards removeFunction={(props:RemoveListProps) =>{
                    const {id} = props;

                    const arrForSave = items.filter((val: RemoveListProps)=> {
                        return val.id !== id
                    })

                    setItems(arrForSave)

                    const json = JSON.stringify(arrForSave)

                    AsyncStorage.setItem('todo',json)

                    setReload(true)

                }} id={value.id} description={value.description} title={value.title} ></DefaultCards>)
            })}
        </View>
        </ScrollView>
    </View>
    </>
    
    )
}

export default HomePage