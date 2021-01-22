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

//componentes bases
import TiposSeguridad from './TiposSeguridad';
import ListadoTipoSeguridad from './ListadoTipoSeguridad';
import DetalleListadoTipoSeguirdad from './DetalleListadoTipoSeguridad';
import Header from './Header'

let tipo =  [{
        codigo: "1",
        nombre: "Criptografia",
        descripcion: "detalle criptografia",
        logo: "https://image.freepik.com/vector-gratis/criptomoneda-blockchain-mineria-bitcoins-pago-digital-dinero-virtual-finanzas-computadora-isometrica-computadora-portatil-moneda-token_284092-301.jpg",
        subcategorias: [
            { 
              nombre: 'Testeo' , 
              descripcion: 'Testeo',
              logo:"https://image.freepik.com/vector-gratis/criptomoneda-blockchain-mineria-bitcoins-pago-digital-dinero-virtual-finanzas-computadora-isometrica-computadora-portatil-moneda-token_284092-301.jpg",
              detalle: [
                {tipo:'texto' , valor : 'Texto texto que se va a mostrar'},
                {tipo:'imagen' , valor : 'https://image.freepik.com/vector-gratis/criptomoneda-blockchain-mineria-bitcoins-pago-digital-dinero-virtual-finanzas-computadora-isometrica-computadora-portatil-moneda-token_284092-301.jpg'},
                {tipo:'texto' , valor : 'Texto texto que se va a mostrar'},
                {tipo:'texto' , valor : 'Texto texto que se va a mostrar'}
            ]
            },
            { 
              nombre: 'Async' , 
              descripcion: 'Await' ,
              logo:"https://image.freepik.com/vector-gratis/criptomoneda-blockchain-mineria-bitcoins-pago-digital-dinero-virtual-finanzas-computadora-isometrica-computadora-portatil-moneda-token_284092-301.jpg",
              detalle: [
                {tipo:'texto' , valor : 'Texto texto que se va a mostrar'},
                {tipo:'imagen' , valor : 'https://image.freepik.com/vector-gratis/criptomoneda-blockchain-mineria-bitcoins-pago-digital-dinero-virtual-finanzas-computadora-isometrica-computadora-portatil-moneda-token_284092-301.jpg'},
                {tipo:'texto' , valor : 'Texto texto que se va a mostrar'},
                {tipo:'texto' , valor : 'Texto texto que se va a mostrar'}
                ]
            }
        ]
    },{
        codigo: "2",
        nombre: "Testing",
        descripcion: "detalle testing",
        logo: "https://image.freepik.com/vector-gratis/vector-isometrico-plano-intercambio-criptomonedas_109064-657.jpg",
        subcategorias: [
            { 
              nombre: 'Testeo' , 
              descripcion: 'Testeo',
              logo:"https://image.freepik.com/vector-gratis/vector-isometrico-plano-intercambio-criptomonedas_109064-657.jpg",
              detalle: [
                    {tipo:'texto' , valor : 'Texto texto que se va a mostrar'},
                    {tipo:'imagen' , valor : 'https://image.freepik.com/vector-gratis/vector-isometrico-plano-intercambio-criptomonedas_109064-657.jpg'},
                    {tipo:'texto' , valor : 'Texto texto que se va a mostrar'},
                    {tipo:'texto' , valor : 'Texto texto que se va a mostrar'}
                ]
            },
            { 
              nombre: 'Async' , 
              descripcion: 'Await' ,
              logo:"https://image.freepik.com/vector-gratis/vector-isometrico-plano-intercambio-criptomonedas_109064-657.jpg",
              detalle: [
                    {tipo:'texto' , valor : 'Texto texto que se va a mostrar'},
                    {tipo:'imagen' , valor : 'https://image.freepik.com/vector-gratis/vector-isometrico-plano-intercambio-criptomonedas_109064-657.jpg'},
                    {tipo:'texto' , valor : 'Texto texto que se va a mostrar'},
                    {tipo:'texto' , valor : 'Texto texto que se va a mostrar'}
              ]
            }
        ]
    }
]

const MainHome = () => {
    const [isLoading,setisLoading] = useState(true);
    const [arrayTipos,setarrayTipos] = useState([]);
    const [arrayListadoTipos,setarrayListadoTipos] = useState([]);
    const [arrayDetalleListadoTipos,setarrayDetalleListadoTipos] = useState([]);
    const [mostrarTiposSeguridad,setmostrarTiposSeguridad] = useState(true);
    const [mostrarListadoTiposSeguridad,setmostrarListadoTiposSeguridad] = useState(false);
    const [mostrarDetalleListadoTiposSeguridad,setmostrarDetalleListadoTiposSeguridad] = useState(false);
    const [titulo,settitulo] = useState('Seguridad informática');

    useEffect(() => {
        buscarTipoSeguridad();
    }, [])

    const buscarTipoSeguridad = () => {
        //Buscar tipos de seguridad o categorias 
        setTimeout(function(){ 
            setisLoading(false);
            setarrayTipos(tipo);
        }, 1000);
    }

    const abrirCategoria = (value) => {
        //Ingresar a categoria o tipo de seguridad y listar subcategorias asociadas a la categoria
        setarrayListadoTipos(value.subcategorias === undefined ? [] : value.subcategorias)
        setmostrarTiposSeguridad(false); 
        setmostrarListadoTiposSeguridad(true);
        setmostrarDetalleListadoTiposSeguridad(false);
        settitulo(value.nombre);
    }

    const abrirSubCategoria = (value) =>{
        //Ingresar a subcategoria o detalle tipo de seguridad y listar detalle asociadas a la subcategoria
        /* setarrayDetalleListadoTipos(value.subcategorias === undefined ? [] : value.subcategorias) */
        setmostrarTiposSeguridad(false); 
        setmostrarListadoTiposSeguridad(false);
        setmostrarDetalleListadoTiposSeguridad(true);
        settitulo(value.nombre);
    }

    const retorno = () =>{
        //Retornar a pantalla anterior
        console.log("entro a retorno");
        if (mostrarListadoTiposSeguridad) {
            setmostrarTiposSeguridad(true); 
            setmostrarListadoTiposSeguridad(false);
            setmostrarDetalleListadoTiposSeguridad(false);
        }else if (mostrarDetalleListadoTiposSeguridad){
            setmostrarTiposSeguridad(false); 
            setmostrarListadoTiposSeguridad(true);
            setmostrarDetalleListadoTiposSeguridad(false);
        }
    }

    return (
        <>
            <Header titulo={titulo} retornar={retorno} validarpaginaprincipal={mostrarTiposSeguridad} ></Header>
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
                    (mostrarTiposSeguridad) ?
                        <TiposSeguridad arraytiposseguridad={arrayTipos} buscar={abrirCategoria}></TiposSeguridad>
                    :
                        (mostrarListadoTiposSeguridad) ?
                            <ListadoTipoSeguridad arrayListadoTipos={arrayListadoTipos} buscar={abrirSubCategoria}></ListadoTipoSeguridad>
                        :
                            <DetalleListadoTipoSeguirdad></DetalleListadoTipoSeguirdad>
                )
             
            }
        </>
    )
}

export default MainHome;