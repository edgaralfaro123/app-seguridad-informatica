import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Fragment,
  TouchableOpacity,
  StatusBar,
  Button
} from 'react-native';

function Header(props){
    const { titulo ='',retornar:retorno=undefined,validarpaginaprincipal=true} ={...props}
    return (
      <SafeAreaView style={[styles.statusBar]}>
        {/* <StatusBar barStyle="light-content" backgroundColor={Colors.primary}/> */}
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true}/>
        <View style={styles.container}>
          {/* LEFT BUTTON */}
          { (!validarpaginaprincipal) && (
                <TouchableOpacity 
                    onPress={retorno}
                    style={[{alignItems: 'flex-start',justifyContent: 'center', position: 'absolute', left: 0, padding: 15}]}>
                    <Image 
                    source={require('../../assets/icons/back-bk-ico.png')} 
                    style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'cover',
                    }}
                    />
                </TouchableOpacity>
           )}
            

          {/* CENTER BUTTON */}
          <View style={[styles.content, {alignItems: 'center', justifyContent: 'center', position: 'relative'}]}>
                <Text style={{color:'white',fontWeight: 'bold'}}>{titulo}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: '#0046ff',//
      position: 'relative'
    },
    statusBar:{
      ...Platform.select({
        ios: {
          height: 90 - 24,
        },
        android: {
          height: 90,
        },
      }),
      paddingTop: 30,
      backgroundColor: '#0046ff',
    },
    content: {
      flex: 1,
      // justifyContent:'center',
      // alignItems:'stretch',
      // alignContent: 'stretch'
    },
    title: {
        fontSize: 10,
        textAlign: 'center',
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 16
    }
})

export default Header;