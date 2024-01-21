import React, { useState } from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'


let timer = null
let ss = 0
let mm = 0
let hh = 0


function App(){

    const [time, setTime] = useState(0)
    const [btnSwitch, setBtnSwitch] = useState("Iniciar")
    const [ultimoTempo, setUltimoTempo] = useState(null)

    function start() {

        if(timer !== null){
            clearInterval(timer)
            timer = null
            setBtnSwitch("Iniciar")
        }else{
            timer = setInterval(() => {
                ss++
                if(ss == 60){
                    ss = 0
                    mm++
                }if(mm == 60) {
                    mm = 0
                    hh++
                }

                let format = 
                (hh < 10 ? "0" + hh : hh) + ":"
                 + (mm < 10 ? "0" + mm : mm) + ":"
                 + (ss < 10 ? "0" + ss : ss) 

                 setTime(format)
                 
                 
                }, 1000)
                setBtnSwitch("Pausar")
                
        }
    }


    function clean() {
        if( timer !== null) {
            clearInterval(timer)
            timer = null
        }
        setUltimoTempo(time)
        setTime(0) 
        ss = 0
        mm = 0
        hh = 0
        setBtnSwitch("Iniciar")
    }

    return(
        <View style={styles.container}>
            <Image 
            source={require("./src/crono.png")} 
             />
             <Text style={styles.timer}> {time} </Text>
             
            <View style={styles.btnArea}>
                <TouchableOpacity onPress={start} style={styles.btn}>
                    <Text style={styles.btnTexto}>{btnSwitch}</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={clean} style={styles.btn}>
                    <Text style={styles.btnTexto}>Zerar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lastArea}>
                <Text style={styles.lastTime}> {ultimoTempo ? "Último tempo: " + ultimoTempo : " "} </Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00aeef"
    },
    timer: {
        marginTop: -160,
        fontSize: 45,
        fontWeight: "bold",
        color: "#fff"
    },
    btnArea:{
        flexDirection: "row",
        marginTop: 130,
        height: 40
    },
    btn:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: 40,
        margin: 17,
        borderRadius: 9
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00aeef"
    },
    lastArea:{
        marginTop: 40,
    },
    lastTime: {
        color: "#fff",
        fontSize: 20,
        fontStyle: "italic"

    }
})

export default App