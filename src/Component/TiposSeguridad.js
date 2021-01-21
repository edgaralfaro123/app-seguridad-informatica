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
    TouchableOpacity
} from 'react-native';

const TiposSeguridad = (props) => {
    console.log("props",props);
    const { arraytiposseguridad=[]}= props;

    const abrirCategoria = (value) => {
        console.log("valor seleccion",value)
    }

    return (
        <>

            {arraytiposseguridad.length>0 && (
                arraytiposseguridad.map((value)=>(
                    <TouchableOpacity
                        style={{
                        alignItems: 'center',
                        padding: 10,
                        }}
                        onPress={() => {
                            abrirCategoria(value);
                        }}
                        >
                        <Text >{value.nombre}</Text>
                    </TouchableOpacity>
                ))
            )}
        </>
    )
}

export default TiposSeguridad;