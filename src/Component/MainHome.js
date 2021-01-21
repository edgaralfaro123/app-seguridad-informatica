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
/* import {  Metrics } from "../Themes"; */
//manejo libreria skeleton
import SkeletonPlaceholder from "react-native-skeleton-placeholder";


import TiposSeguridad from './TiposSeguridad'

let tipo =  [{
    codigo: "1",
    nombre: "Criptografia",
    detalle: "detalle criptografia"
    },{
        codigo: "2",
        nombre: "Testing",
        detalle:"detalle testing"
    }
]

const MainHome = () => {
    const [isLoading,setisLoading]=useState(true);
    const [arrayTipos,setarrayTipos]=useState([]);

    useEffect(() => {
        setTimeout(function(){ 
            setisLoading(false);
            setarrayTipos(tipo);
        }, 3000);
        
    }, [])

    return (
        <>
            <Text>Hola</Text>
            {(isLoading) ? 
                (
                    <SkeletonPlaceholder>
                        <SkeletonPlaceholder.Item flexDirection="column" alignItems="center" >
                            <SkeletonPlaceholder.Item width={500} height={80} marginBottom={16} marginTop={25}/>
                            <SkeletonPlaceholder.Item width={500} height={80} marginBottom={16} />
                            <SkeletonPlaceholder.Item width={500} height={80} marginBottom={16} />
                            <SkeletonPlaceholder.Item width={500} height={80} marginBottom={16} />
                            <SkeletonPlaceholder.Item width={500} height={80} marginBottom={16} />
                            <SkeletonPlaceholder.Item width={500} height={80} marginBottom={16} />
                            <SkeletonPlaceholder.Item width={500} height={80} marginBottom={16} />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder>          
                )
                :
                (
                    <TiposSeguridad arraytiposseguridad={arrayTipos}></TiposSeguridad>
                )
             
            }
        </>
    )
}

export default MainHome;