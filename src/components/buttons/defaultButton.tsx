import React from 'react';
import { RectButton } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

import { defaultButtonProps } from './@types'

import buttonContainer from './styles'

const DefaultButton: React.FC<defaultButtonProps>   = ({BackGroundColor, iconColor, iconName, size, ...rest}) => {
    return (
    <RectButton 
    {...rest}
    style={{ 
        width:size,
        height:size,
        borderRadius:Number(size/2),
        backgroundColor:BackGroundColor,
        ...buttonContainer.container
     }} >
         <Ionicons 
            name={ iconName } 
            color={ iconColor }
            size={size}
            />
    </RectButton>)
}

export default DefaultButton