import {ModalBaseProps} from 'react-native'
import { ReactNode } from 'react';

export interface DefaultModalProps extends ModalBaseProps {
    component?:ReactNode,
    setVisible:Function
}