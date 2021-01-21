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
        detalle: "detalle criptografia",
        logo: "https://image.freepik.com/vector-gratis/criptomoneda-blockchain-mineria-bitcoins-pago-digital-dinero-virtual-finanzas-computadora-isometrica-computadora-portatil-moneda-token_284092-301.jpg",
        imagenes: ["rutaimagen"],
        descripcion: ["texto que se va a mostrar"]
    },{
        codigo: "2",
        nombre: "Testing",
        detalle: "detalle testing",
        logo: "https://image.freepik.com/vector-gratis/vector-isometrico-plano-intercambio-criptomonedas_109064-657.jpg",
        imagenes: ["rutaimagen"],
        descripcion: ["texto que se va a mostrar"]
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
            <Text>header</Text>
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