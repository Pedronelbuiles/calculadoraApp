import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

const COLORS = {
    'gris': '#9B9B9B',
    'naranja': '#FF9427',
    'negro': '#2D2D2D'
}

interface props {
    texto: string;
    color?: 'gris' | 'naranja' | 'negro';
    ancho?: boolean;
    action: (numeroTexto:string) => void;
}

export const BotonCalc = ({texto, color, ancho = false, action}: props) => {
    return (
        <TouchableOpacity 
            onPress={() => action(texto)}
        >
            <View style={
                    [
                        styles.boton,
                        (color && {backgroundColor: COLORS[color] }),
                        (ancho && {width: 180})
                    ]
                }>
                <Text style={{
                        ...styles.botonTexto,
                        color: ((color === 'gris') ? 'black' : 'white')
                    }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
