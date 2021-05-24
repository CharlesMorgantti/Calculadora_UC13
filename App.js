import React from 'react';
import {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  // Mapeamento de teclas
  const buttons = ['LIMPAR', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '+/-', '=']

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")
  const[dot, setDot] = useState(false)
  useEffect( () => {
  }, [dot,currentNumber, result,operadorType]);

  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    let firstNumber = parseFloat(splitNumbers[0])
    let lastNumber = parseFloat(splitNumbers[2])
   if(operadorType!=='%'){
    setResult(parseFloat(eval(currentNumber)))
   }
   else{
   setResult((firstNumber * (lastNumber/100)).toString())
  }
   setCurrentNumber('')
  }

  function handleInput(buttonPressed){
    console.log(buttonPressed) // Mostra no Console a tecla pressionada
    
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" 
    | buttonPressed === "%"){
           
    if(myStr.charAt(myStr.length-1).includes('+')|
    myStr.charAt(myStr.length-1).includes('-')|
    myStr.charAt(myStr.length-1).includes('*')|
    myStr.charAt(myStr.length-1).includes('/')|
    myStr.charAt(myStr.length-1).includes('%')
    ){
    return
    } 
    }

    if(buttonPressed==='.'){
      if(dot){
        return
       }else{
        setDot(true)
       }
     }

     if(buttonPressed ===0 && currentNumber.length ===0
      |myStr.charAt(myStr.length-1).includes('+') 
      |myStr.charAt(myStr.length-1).includes('-') 
      |myStr.charAt(myStr.length-1).includes('*') 
      |myStr.charAt(myStr.length-1).includes('/') 
      |myStr.charAt(myStr.length-1).includes('%') 
      ){
      return
     }

     switch(buttonPressed){
      case'+':
        setOperadorType('+')
      break
      case'-':
        setOperadorType('-')
        break
      case'*':
      setOperadorType('*')
      break
    case'/':
    setOperadorType('/')
    break
    case'%':
    setOperadorType('%')
    break
    }

    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" 
    | buttonPressed === "%" && currentNumber===''){
    setCurrentNumber(result + " " + buttonPressed + " ")
    }else if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" 
        | buttonPressed === "%" &&currentNumber
         ){
          setCurrentNumber(currentNumber + " " + buttonPressed + " ")
          setDot(false)
          return
        }
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber("") 
        setCurrentNumber("") 
        setDot(false)
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculator()
        setDot(false)
        return
      case '+/-':
        return
    }

   if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" 
  | buttonPressed === "%"&& currentNumber===''){
setCurrentNumber(result + " " + buttonPressed + " ")
}
else{
  setCurrentNumber(currentNumber +''+ buttonPressed+'')
}
}


  return (
    <View style={styles.container}>

      {/* Area onde o resultado é exibido */}
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      {/* Area onde os botões são exibidos*/}
      <View style={styles.buttons}>

        {buttons.map((button) => 
          button === '=' ? // Mapeamento do botão =
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#3dd0e3'}]}>
          <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
        </TouchableOpacity>
          : // Mapeamento dos outros botões
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.button}>
            <Text style={[styles.textButton, {color: typeof(button) === 'number' ? 'black': '#0093a6'}]}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#f5f5f5"
  },
  resultText: {
    color: "#282F38",
    fontSize: 32,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right"
  },
  historyText:{
    color: "#7c7c7c",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90, 
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    color: "#7c7c7c",
    fontSize: 20,
  } 
});