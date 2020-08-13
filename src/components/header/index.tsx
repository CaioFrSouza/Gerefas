import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles'
import DefaultButton from '../buttons/defaultButton';
import DefaultInputModal from '../modals/defaultInputCardsModal';

interface headerProps {
    setRealod:any,
}

const Header: React.FC<headerProps> = ({ setRealod }) => {
    const [ inputModalVisible, setInputModalVisible ] = useState(false);

    useEffect(() => {
        setRealod(true)
    }, [inputModalVisible])

    function handleApperModal () {
        setInputModalVisible(true)
    }

    return (
    <View style={styles.container}>

        <Text style={styles.title}>Gerefas</Text>
        <View style={styles.buttonsContainer}>
            <DefaultButton 
                    onPress={handleApperModal}
                    iconName={'md-add-circle'}
                    BackGroundColor={'#ecf0f1'} 
                    iconColor={'#282A29'} 
                    size={50}   />
        </View>
        <DefaultInputModal
        setVisible={setInputModalVisible}
        visible={inputModalVisible}
        transparent={true}
        animationType={'slide'}
        />
    </View>)
}

export default Header