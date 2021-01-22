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
    console.log("props" , props);
    const { arraytiposseguridad = [] , buscar:abrirCategoria = undefined } = {...props};
    return (
        <>
            <View style={{ flexDirection:'row' , alignItems:'center' }}>
                {arraytiposseguridad.length>0 && (
                    arraytiposseguridad.map((value,key)=>(

                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                    padding: 10,
                                }}
                                onPress={() =>abrirCategoria(value)}
                            >
                                <View style={{ flexDirection: 'column'}}>
                                    <View style={{  justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                            source={{ uri: value.logo }}
                                            style={{
                                            width: Dimensions.get('window').width * 0.40,
                                            height: Dimensions.get('window').height * 0.11,
                                            borderRadius: 12,
                                            borderColor:'red',
                                            
                                            }}
                                        />
                                    </View>
                                
                                    <View style={{  justifyContent: 'center' , alignItems: 'center'}}>
                                        <Text >{value.nombre}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center' , alignItems: 'center'}}>
                                        <Text  sryle={{color:'gray'}} numberOfLines={3}>{value.descripcion}</Text>
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