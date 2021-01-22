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
            
                {arraytiposseguridad.length>0 && (
                    arraytiposseguridad.map((value,key)=>(

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    position: 'relative',
                                    height: ((Dimensions.get('window').height/2)-260),
                                    overflow: 'hidden',
                                    borderRadius: 5,
                                    margin: 10
                                    /* alignItems: 'center',
                                    padding: 10, */
                                },{backgroundColor: 'gray'}}
                                onPress={() =>abrirCategoria(value)}
                            >
                                <View style={{ flexDirection:'row' , alignItems:'center' }}>
                                    <View style={{ flex: 0.8, flexDirection: 'column'}}>
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
                                    <View style={{flex: 1,flexDirection: 'column'}}> 
                                        <View style={{  flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
                                            <Text >{value.nombre}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center' , alignItems: 'center'}}>
                                            <Text  sryle={{color:'gray'}} numberOfLines={3}>{value.descripcion}</Text>
                                        </View>
                                    </View>
                                    
                                </View>
                            </TouchableOpacity>

                    ))
                )}
            
        </>
    )
}

export default TiposSeguridad;