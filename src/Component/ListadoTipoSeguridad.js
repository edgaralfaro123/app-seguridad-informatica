import React, { useState, useEffect } from 'react';
import {  
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    SafeAreaView,
    KeyboardAvoidingView,
    BackHandler,
    StatusBar,
    ScrollView,
    ActivityIndicator,
    ToastAndroid,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const ListadoTiposSeguridad = (props) => {
    const {arrayListadoTipos = [] , buscar:abrirSubCategoria = undefined }={...props}

    const parImpar = (numero) => {
        if(numero % 2 == 0) {
          return "par";
        }
        else {
          return "impar";
        }
    }

    return (
        <>
            <View style={{marginTop:15,marginRight:5,flex:0.5,flexDirection:'row', borderTopRightRadius:30}} >     
                {arrayListadoTipos.length>0 && (

                    arrayListadoTipos.map((value)=>(
                            value.parimpar==="par" ?
                            <View style={{flex:1,flexDirection:'column'}} > 
                                <TouchableOpacity
                                    style={{
                                        padding: 10,
                                        flex: 1,
                                       
                                       
                                        height: ((Dimensions.get('window').height/2)-260),
                                        overflow: 'hidden'
                                    }}
                                    onPress={() =>abrirSubCategoria(value)}
                                >

                                    <Image
                                        source={{ uri: value.logo }}
                                        style={{
                                            width: Dimensions.get('window').width * 0.5,
                                            height: Dimensions.get('window').height * 0.15,
                                            //borderRadius: 12,
                                            borderColor:'red',
                                            
                                            transform: [{ rotate: '3deg' }]
                                        }}
                                    />
                                    <Text style={{position:'absolute',transform: [{ rotate: '5deg' }],marginTop:15,marginLeft:20,color:'white'}}>{value.nombre}</Text>
                                    <Text style={{position:'absolute',transform: [{ rotate: '5deg' }],marginTop:30,marginLeft:20,color:'white'}} numberOfLines={3} numberOfLines={3}>par{value.descripcion}</Text>
                                
                                </TouchableOpacity>
                                </View>
                            :
                            <View style={{flex:1,flexDirection:'column'}} >
                                    <TouchableOpacity
                                        style={{
                                            padding: 10,
                                            flex: 1,
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            height: ((Dimensions.get('window').height/2)-260),
                                            overflow: 'hidden'
                                        }}
                                        onPress={() =>abrirSubCategoria(value)}
                                    >

                                        <Image
                                            source={{ uri: value.logo }}
                                            style={{
                                                width: Dimensions.get('window').width * 0.5,
                                                height: Dimensions.get('window').height * 0.15,
                                                //borderRadius: 12,
                                                borderColor:'red',
                                                
                                                transform: [{ rotate: '3deg' }]
                                            }}
                                        />
                                        <Text style={{position:'absolute',transform: [{ rotate: '5deg' }],marginTop:15,marginLeft:20,color:'white'}}>{value.nombre}</Text>
                                        <Text style={{position:'absolute',transform: [{ rotate: '5deg' }],marginTop:30,marginLeft:20,color:'white'}} numberOfLines={3} numberOfLines={3}>impar{value.descripcion}</Text>
                                    
                                    </TouchableOpacity>
                                    <View style={{marginTop:15,marginRight:5,flex:0.5,flexDirection:'row', borderTopRightRadius:30}} ></View>
                            </View>
                    
                    ))
                )} 
            </View>
        </>
    )
}

export default ListadoTiposSeguridad;