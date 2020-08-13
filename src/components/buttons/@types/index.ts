import { RectButtonProperties } from 'react-native-gesture-handler'
export interface defaultButtonProps extends RectButtonProperties  {
    size:number,
    BackGroundColor?:string,
    iconColor:string,
    iconName:string
}