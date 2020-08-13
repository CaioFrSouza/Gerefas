import { StyleSheet } from 'react-native';

export const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
}


const defaultInputCardsModalStyles = StyleSheet.create( {
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000001aa',
        minHeight:200
        
    },
    
    content:{
        height:'100%',
        maxHeight:350,
        backgroundColor:'#ecf0f1',
        width:"90%",
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },

    headerContent:{
        top:20,
        zIndex:1,
        width:"90%",
        height:50,
        backgroundColor:'#2c3e50',
        flexDirection:'row',
        alignItems:'center',
        borderTopEndRadius:20,
        borderTopStartRadius:20,
        justifyContent:'space-around'
    },
    headerTitle:{
        marginLeft:'10%',
        color:'#ecf0f1',
        fontFamily:'lemonadaBold',
        fontSize:19
    },

    exitButton:{
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center'
    },

    InputContainer:{
        backgroundColor:'#bdc3c7',
        width:'90%',
        alignSelf:'center',
        borderRadius:10,
    },

    InputGroup:{
        marginBottom:25,
    },

    label:{
        color:'#2c3e50',
        fontSize:20,
        marginLeft:20
    },
    nameInput:{
        backgroundColor:'#2c3e50',  
        padding:10,
        borderRadius:10,
        width:'90%',
        alignSelf:'center',
        color:'#ecf0f1',

    },
    descriptionInput:{
        backgroundColor:'#2c3e50',  
        padding:10,
        borderRadius:10,
        width:'90%',
        alignSelf:'center',
        color:'#ecf0f1',
        
    },
    saveButton:{
        marginTop:10,
        width:'50%',
        height:50,
        backgroundColor:'#2c3e50',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:9
    },
    saveButtonText:{
        color:'#ecf0f1',
        fontSize:25,
        marginRight:20
    }
})

export default defaultInputCardsModalStyles