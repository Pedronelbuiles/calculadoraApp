import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        armarNumero,
        positivoNegativo,
        handleDel,
        handleDividir,
        handleMultiplicar,
        handleRestar,
        handleSumar,
        calcular
    } = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && <Text style={styles.resultadoPequeno}> {numeroAnterior} </Text>
            }
            
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            > 
                {numero} 
            </Text>


            <View style={styles.fila}>
                <BotonCalc texto="C" color="gris" action={limpiar} />
                <BotonCalc texto="+/-" color="gris" action={positivoNegativo} />
                <BotonCalc texto="del" action={handleDel} />
                <BotonCalc texto="/" color="naranja" action={handleDividir} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="7" action={armarNumero}/>
                <BotonCalc texto="8" action={armarNumero}/>
                <BotonCalc texto="9" action={armarNumero}/>
                <BotonCalc texto="X" color="naranja" action={handleMultiplicar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="4" action={armarNumero} />
                <BotonCalc texto="5" action={armarNumero} />
                <BotonCalc texto="6" action={armarNumero} />
                <BotonCalc texto="-" color="naranja" action={handleRestar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="1" action={armarNumero} />
                <BotonCalc texto="2" action={armarNumero} />
                <BotonCalc texto="3" action={armarNumero} />
                <BotonCalc texto="+" color="naranja" action={handleSumar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="0" action={armarNumero} ancho />
                <BotonCalc texto="." action={armarNumero} />
                <BotonCalc texto="=" color="naranja" action={calcular} />
            </View>

        </View>
    )
}
