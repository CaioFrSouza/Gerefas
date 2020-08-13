import React, { useState } from 'react';
import { View, Modal, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BorderlessButton, TextInput, RectButton } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import { DefaultModalProps } from './@types';

import defaultInputCardsModalStyles from './styles';

const DefaultInputModal: React.FC<DefaultModalProps> = ({ setVisible, component, ...rest}) => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');


    function handleExitModal () {
        setVisible(false)
    }

    async function handleSaveGrefa () {
        console.log('salvando...')
        if(!title || !description)
            return alert('Por favor preencha todos os campo')
      

        let lastedItems = await AsyncStorage.getItem('todo') 

        const ObjectForSave = {
            title,
            description
        }
        
        if(!lastedItems){
            const json = JSON.stringify([{...ObjectForSave,key:0}])
            return await (AsyncStorage.setItem('todo', json,(err) => console.log(err)))
        }
        
        const ArrayObject = JSON.parse(lastedItems)

        ArrayObject.push({...ObjectForSave, id:ArrayObject.length })


        const json = JSON.stringify(ArrayObject)

        await AsyncStorage.setItem('todo',json,err=> console.log(err))

        setVisible(false)
        setTitle('')
        setDescription(' ')
    }
   
    return (
    <Modal
    {...rest}
    
    >
        <StatusBar backgroundColor={'#000001aa'} />
        <View style={defaultInputCardsModalStyles.container} >
                <View style={defaultInputCardsModalStyles.headerContent}>
                    <Text style={ defaultInputCardsModalStyles.headerTitle } >Adicionar nova tarefa!</Text>
                    <BorderlessButton style={defaultInputCardsModalStyles.exitButton }>
                        <Ionicons 
                            name={ 'md-close-circle-outline' } 
                            size={30} 
                            color={ '#e74c3c' }
                            onPress={handleExitModal}
                            />
                        </BorderlessButton>
                </View>
                

            <View style={defaultInputCardsModalStyles.content}>

                <View style={defaultInputCardsModalStyles.InputContainer}>

                    <View style={defaultInputCardsModalStyles.InputGroup}>
                    <Text style={ defaultInputCardsModalStyles.label }>Titulo</Text>
                    <TextInput 
                        value={title}
                        onChangeText={text=>setTitle(text)}
                        placeholder={'Digite o titulo'}
                        style={defaultInputCardsModalStyles.nameInput}>
                    </TextInput>

                    </View>
                    
                    <View style={defaultInputCardsModalStyles.InputGroup}>
                    <Text style={ defaultInputCardsModalStyles.label }>Descrição</Text>

                    <TextInput 
                        value={description}
                        onChangeText={text=>setDescription(text)}
                        placeholder={'Digite uma descrição'}
                        style={defaultInputCardsModalStyles.descriptionInput}>
                    </TextInput>
                    </View>

            </View>


                    <TouchableOpacity
                        style={defaultInputCardsModalStyles.saveButton}
                        onPress={handleSaveGrefa}
                        >
                            <Text style={ defaultInputCardsModalStyles.saveButtonText }>Salvar</Text>
                            <Ionicons name={'md-save'} size={ 45 } color={ '#27ae60' } />
            </TouchableOpacity>
                </View>

        </View>

    </Modal>
    )
}

export default DefaultInputModal