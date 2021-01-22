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

const DetalleListadoTipoSeguirdad = (props) =>{
    const {arrayDetalleListadoTipos = [] } = {...props}
    console.log("arrayDetalleListadoTipos", arrayDetalleListadoTipos);
    return (
        <>
            { (arrayDetalleListadoTipos.length>0) && (
                arrayDetalleListadoTipos.map((value)=>(

                    (value.tipo !== undefined) ?
                        //Valido si viene un texto
                        (value.tipo == 'texto') ?
                            <View style={{marginBottom: 5,marginTop: 5}}>
                                <Text>{value.valor}</Text>
                            </View>
                        :
                            //Valido si viene una imagen
                            (value.tipo=='imagen') ? 
                                <View style={{marginBottom: 5,marginTop: 5}}>
                                    <Image
                                        source={{ uri: value.valor }}
                                        style={{
                                            width: Dimensions.get('window').width * 0.85,
                                            height: Dimensions.get('window').height * 0.20,
                                            borderRadius: 30,
                                            borderColor:'red',
                                        }}
                                    />
                                </View>
                            :
                                ''
                    :
                        ''
                ))
                
            )}
        </>
        
    )
}

export default DetalleListadoTipoSeguirdad;