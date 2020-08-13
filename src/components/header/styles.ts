import { StyleSheet } from 'react-native'

const height = 80

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:80,
        backgroundColor:'#ecf0f1',
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row'
    },

    title:{
        color:'#34495e',
        fontSize:30,
        marginTop:20,
        fontFamily:'lemonadaBold'
    },
    buttonsContainer:{
        marginTop: 20
    }
})

export default styles