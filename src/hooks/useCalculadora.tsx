import { useRef, useState } from "react"

enum Operadores {
    suma, resta, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')
    const ultimaOperacion = useRef<Operadores>()
    
    const limpiar = () => {
        setNumeroAnterior('0')
        setNumero('0')
    }

    const armarNumero = (numTexto: string) => {

        //punto decimal
        if(numero.includes('.') && numTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            
            //es el primer punto decimal
            if (numTexto === '.') {
                setNumero(numero + numTexto)
                //si es otro 0 y hay un punto
            }else if (numTexto === '0' && numero.includes('.')) {
                setNumero(numero + numTexto)
                //si es diferente de 0 y no tiene un punto
            }else if (numTexto !== '0' && !numero.includes('.')) {
                setNumero(numTexto)
                //evitar 0000.0
            }else if (numTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            }else {
                setNumero(numero + numTexto)    
            }

        }else {
            setNumero(numero + numTexto)
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-',''))
        }else {
            setNumero('-'+numero)
        }
    }
    
    const handleDel = () => {
        if (numero.includes('-') && numero.length <= 2) {
            setNumero('0')
        } else if (numero.length > 1) {
            setNumero(numero.substring(0, numero.length - 1))
        } else {
            setNumero('0')
        }
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0,-1))
        }else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const handleDividir = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.dividir
    }
    const handleMultiplicar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }
    const handleRestar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.resta
    }
    const handleSumar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.suma
    }

    const calcular = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.suma:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.resta:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.dividir:
                if (num1 !== 0) {
                    setNumero(`${num2 / num1}`)
                } else {
                    setNumero(`0`)
                }
                break;
        
            default:
                break;
        }

        setNumeroAnterior('0')
    }

    return {
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
    }
}
