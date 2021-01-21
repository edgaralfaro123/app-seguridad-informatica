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
    ToastAndroid
} from 'react-native';

import TiposSeguridad from './TiposSeguridad'
    let arrayTipos=[1,2,3];

const MainHome = () => {

    return (
        <>
            <Text>Hola</Text>
            <TiposSeguridad arraytiposseguridad={arrayTipos}></TiposSeguridad>
        </>
    )
}

export default MainHome;