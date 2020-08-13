import { StyleSheet } from 'react-native'

const height = 118
const boderRadius = height / 4

const shadow = {
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 8,
},
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
}

const DefaultCardsStyles = StyleSheet.create({
    container:{
        width:'95%',
        paddingLeft:1,
        height,
        borderRadius:boderRadius,
        flexDirection:'column',
        backgroundColor:'#ecf0f1',
        marginTop:10,

    },
    Header:{
        width:'100%',
        height:height/5,
        backgroundColor:'#16a085',
        borderTopStartRadius:boderRadius-2.5,
        borderTopEndRadius:boderRadius,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    Title:{
        fontSize:20,
        color:'#ecf0f1',
        fontFamily:'lemonadaBold'
        
    },
    content:{
        width:'100%',
        height: height - height/5, 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',

    },

    cardScrollContainer:{
    },

    description:{
        color:'#2c3e50',
        lineHeight:21,
        fontFamily:'UbuntuLight',
        fontWeight:'700'
    },

    OkayButtonContainer:{
        
        width:'25%',
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:1,
        marginRight:2.5,
        height:height - 23,
        backgroundColor:'#bdc3c7',
        borderBottomStartRadius:28,
        // borderTopLeftRadius:5,
    }
});

export default DefaultCardsStyles