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

const TiposSeguridad = (props) => {
    console.log("props",props);
    const { arraytiposseguridad=[]}= props;

    const abrirCategoria = (value) => {
        console.log("valor seleccion",value);
    }

    return (
        <>
                <View style={{ flex:1, flexDirection:'row',alignItems:'center'}}>
                {arraytiposseguridad.length>0 && (
                    arraytiposseguridad.map((value,key)=>(
                        
                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                    padding: 10,
                                }}
                                onPress={() =>abrirCategoria(value)}
                            >
                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={{ uri: value.logo }}
                                        style={{
                                        width: Dimensions.get('window').width * 0.11,
                                        height: Dimensions.get('window').height * 0.11,
                                        borderRadius: 12,
                                        borderColor:'red',
                                        
                                        }}
                                    />
                                </View>
                                
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
                                        <Text >{value.nombre}</Text>
                                    </View>
                                    <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
                                        <Text >{value.descripcion}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        
                    ))
                )}
            </View>
        </>
    )
}

export default TiposSeguridad;