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

    let imagen='';
    let titulo='';
    let descripcion='';
    let valordatos ='';

    const asignarPar = (logo,nombre,descripcion,value) => {
        imagen=logo;
        titulo=nombre;
        descripcion=descripcion;
        valordatos=value;
    }
    
    return (
        <>
           
                {arrayListadoTipos.length>0 && (

                    arrayListadoTipos.map((value)=>(
                        <View style={{marginTop:-6,marginRight:3,marginBottom:1,flex:1,flexDirection:'row'}} >
                            {value.parimpar==="par" ?
                                asignarPar(value.logo,value.nombre,value.descripcion,value)
                            :
                                <>
                                    <View style={{flex:1,flexDirection:'column',marginLeft:-10,alignSelf:'flex-start', transform: [{ rotate: '5deg' }] }} >
                                        <TouchableOpacity
                                            style={{
                                                paddingTop: 15,
                                                flex: 1,
                                                flexDirection: 'column',
                                                /* justifyContent: 'space-between', */
                                                height: ((Dimensions.get('window').height/2)-260),
                                               
                                               /*  overflow: 'hidden' */
                                            }}
                                            onPress={() =>abrirSubCategoria(valordatos)}
                                        >
                                            
                                            <Image
                                                source={{ uri: imagen }}
                                                style={{
                                                    width: Dimensions.get('window').width * 0.53,
                                                    height: Dimensions.get('window').height * 0.15,
                                                    borderColor:'red',
                                                    borderTopRightRadius:150,
                                                    /* borderWidth:4 */
                                                }}
                                            />
                                            <Text style={{position:'absolute',marginTop:15,marginLeft:20,color:'white'}}>{value.nombre}</Text>
                                            <Text style={{position:'absolute',marginTop:30,marginLeft:20,color:'white'}} numberOfLines={3} numberOfLines={3}>par{value.descripcion}</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flex:1,flexDirection:'column',marginLeft:0,alignSelf:'flex-end',paddingTop:15, transform: [{ rotate: '5deg' }],width: Dimensions.get('window').width *1}} >
                                        <TouchableOpacity
                                            style={{
                                                paddingTop: 17,
                                                flex: 1,
                                                flexDirection: 'column',
                                                /* justifyContent: 'space-between', */
                                                height: ((Dimensions.get('window').height/2)-260),
                                                
                                               /*  overflow: 'hidden' */
                                            }}
                                            onPress={() =>abrirSubCategoria(value)}
                                        >
                                            <Image
                                                source={{ uri: value.logo }}
                                                style={{
                                                    width: Dimensions.get('window').width *0.55,
                                                    height: Dimensions.get('window').height * 0.15,
                                                    //borderRadius: 12,
                                                    borderColor:'red',
                                                    borderBottomLeftRadius: 150,
                                                    /* borderWidth: 4 */
                                                }}
                                            />
                                            <Text style={{position:'absolute',marginTop:15,marginLeft:20,color:'white'}}>{value.nombre}</Text>
                                            <Text style={{position:'absolute',marginTop:30,marginLeft:20,color:'white'}} numberOfLines={3} >impar{value.descripcion}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                                }
                            </View>
                    ))
                )} 
            
        </>
    )
}

export default ListadoTiposSeguridad;