import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {DefaultCardsProps,RemoveListProps } from './@types'
import DefaultCardsStyles from './styles';
import DefaultButton from '../buttons/defaultButton';
import { ScrollView } from 'react-native-gesture-handler';

const DefaultCards: React.FC<DefaultCardsProps>  = ({ description, title, id, removeFunction }) =>{
    return(
    <View style={ DefaultCardsStyles.container }>
        <View style={ DefaultCardsStyles.Header }>
            <Text style={ DefaultCardsStyles.Title }>{title}</Text>
        </View>

        <View style={ DefaultCardsStyles.content } >
            <TouchableOpacity
                onPress={() => removeFunction&&removeFunction({id})}
            
                style={ DefaultCardsStyles.OkayButtonContainer }>
            <Text style={{textAlign:'center',fontSize:14,maxWidth:'99%'}}>Finalizado ?</Text>
            <DefaultButton 
                iconName={'md-checkmark-circle'} 
                BackGroundColor={'#2c3e50'} 
                iconColor={'#27ae60'} 
                size={30} 
                />

            </TouchableOpacity>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={ DefaultCardsStyles.cardScrollContainer }
                contentContainerStyle={{alignItems:'center'}}
                >
            <Text style={DefaultCardsStyles.description} >{description}</Text>            
            </ScrollView>
        </View>
    </View>)
}

export default DefaultCards;

export {DefaultCardsProps, RemoveListProps}