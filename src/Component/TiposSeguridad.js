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
import Colors from "../Themes/Colors";

const TiposSeguridad = (props) => {
    console.log("props" , props);
    const { arraytiposseguridad = [] , buscar:abrirCategoria = undefined } = {...props};
    return (
        <>
            
                {arraytiposseguridad.length>0 && (
                    arraytiposseguridad.map((value,key)=>(
                            <View style={{marginTop:15,marginLeft:5,marginRight:5, borderTopRightRadius:30}} key={key}>
                                <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        position: 'relative',
                                        height: ((Dimensions.get('window').height/2)-260),
                                        overflow: 'hidden',
                                        
                                        margin: 90
                                    },{backgroundColor: Colors.secondary,  borderRadius: 20}}
                                    onPress={() =>abrirCategoria(value)}
                                >
                                    <View style={{ flexDirection:'row' , alignItems:'center' }}>
                                        <View style={{ flex: 0.8, flexDirection: 'column'}}>
                                            <Image
                                                source={{ uri: value.logo }}
                                                style={{
                                                width: Dimensions.get('window').width * 0.40,
                                                height: Dimensions.get('window').height * 0.11,
                                                borderTopLeftRadius:30,
                                                borderBottomRightRadius:30,
                                                borderColor:'red',
                                                
                                                
                                                }}
                                            />
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'column'}}> 
                                            <View style={{  flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
                                                <Text style={{color:Colors.helper,fontWeight: 'bold'}}>{value.nombre}</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
                                                <Text  style={{color: Colors.back}} numberOfLines={3}>{value.descripcion}</Text>
                                            </View>
                                        </View>
                                        
                                    </View>
                                </TouchableOpacity>
                            </View>
                    ))
                )}
            
        </>
    )
}

export default TiposSeguridad;