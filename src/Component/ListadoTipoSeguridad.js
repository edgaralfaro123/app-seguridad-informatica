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

    return (
        <>
            {arrayListadoTipos.length>0 && (
                arrayListadoTipos.map((value)=>(
                
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            padding: 10,
                        }}
                        onPress={() =>abrirSubCategoria(value)}
                    >
                        <Image
                            source={{ uri: value.logo }}
                            style={{
                            width: Dimensions.get('window').width * 0.40,
                            height: Dimensions.get('window').height * 0.11,
                            borderRadius: 12,
                            borderColor:'red',
                            }}
                        />
                        <Text >{value.nombre}</Text>
                        <Text numberOfLines={3}>{value.descripcion}</Text>
                    </TouchableOpacity>
                    
                ))
            )}
        </>
    )
}

export default ListadoTiposSeguridad;