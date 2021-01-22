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
    const {arrayDetalleListadoTipos=[] } = {...props}
    console.log("arrayDetalleListadoTipos",arrayDetalleListadoTipos);
    return (
        <>
            { (arrayDetalleListadoTipos.length>0) && (
                arrayDetalleListadoTipos.map((value)=>(

                    (value.tipo !== undefined) ?
                        //Valido si viene texto
                        (value.tipo=='texto') ?
                            <View style={{margin: 10}}>
                                <Text>{value.valor}</Text>
                            </View>
                        :
                            //Valido si viene imagen
                            (value.tipo=='imagen') ? 
                                <Image
                                    source={{ uri: value.valor }}
                                    style={{
                                        width: Dimensions.get('window').width * 0.40,
                                        height: Dimensions.get('window').height * 0.11,
                                        borderRadius: 12,
                                        borderColor:'red',
                                    }}
                                />
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