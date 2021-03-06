import React from 'react';
import {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  // Mapeamento de teclas
  const buttons = ['LIMPAR', 'DEL', '%', '/', 7, 8, 9, "*", 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '+/-', '=']
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")
const[dot, setDot] = useState(false)
const[operadorType,setOperadorType]=useState('+')
const[result,setResult]=useState(0)

useEffect( () => {
}, [dot, currentNumber, result,operadorType]);

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
    let myStr=currentNumber.trim() 
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
      case 'LIMPAR': // Limpa todo o conte??do
        setLastNumber("") 
        setCurrentNumber("") 
        setDot(false)
        setResult(0)
        setOperadorType('+')
        return
      case '=':
        setLastNumber(currentNumber + " = ")
          calculator()
          setDot(false)
        return
      case '+/-':
      let myStr=currentNumber.trim()
      
        if(myStr.charAt(myStr.length-1).includes('*')){return}
        if(myStr.charAt(myStr.length-1).includes('/')){return}

        switch(operadorType){
          case '+':
            if(myStr===''&&result.toString().includes('-')){
             myStr=result.toString()
             myStr=  myStr.split('').reverse().join('').replace('-', '').split('').reverse().join('')
            setCurrentNumber(myStr)  
              return
            }
            if(myStr.length===1){
              setCurrentNumber('-' +myStr)
              setOperadorType('-')
              return
            }
            if(myStr===''&&result!==0){
              setCurrentNumber('- '+ result)
              setOperadorType('-')
              return
            }
            
            let lIndex  = myStr.lastIndexOf("+");
            let last = myStr.substring(lIndex+1,currentNumber.length)
            myStr=myStr.substring(0,lIndex)+'-'+last
            setCurrentNumber(myStr)
            setOperadorType('-')
            return
            case '-':
              if(myStr.length===1&&myStr.includes('-')){
                setCurrentNumber('+')
              }
              if(myStr===''&&result!==0){
               let result1 =result.toString().trim()
                lIndex  = result1.lastIndexOf("-");
                last = result1.substring(lIndex+1,result1.length)
                setCurrentNumber(last)
                setOperadorType('+')
                return
              }
               lIndex  = myStr.lastIndexOf("-");
                 last = myStr.substring(lIndex+1,currentNumber.length)
                myStr=myStr.substring(0,lIndex)+'+'+last
                setCurrentNumber(myStr)
                setOperadorType('+')
                return
                case '*':
                  if(myStr===''&&result.toString().charAt(0).includes('-')){
                     myStr=result.toString()
                     myStr=myStr.replace('-','')
                     setCurrentNumber(myStr)
                     setOperadorType('+')
                     return
                   }
                   if(myStr===''&&!result.toString().charAt(0).includes('-')){
                    myStr=result.toString()
                    setCurrentNumber('- '+myStr)
                    setOperadorType('-')
                    return
                  }
                  lIndex  = myStr.lastIndexOf("*");
                    last = myStr.substring(lIndex+1,currentNumber.length)
                 if(myStr.charAt(myStr.length-1).includes(')')){
                myStr=  myStr.split('').reverse().join('')
                 .replace('-', '').replace('(','').replace(')','')
                 .split('').reverse().join('')
                }else{
                  myStr=myStr.substring(0,lIndex)+'*(-'+last+')'
                }
                    setCurrentNumber(myStr)
                   return
                   case '/':
                    if(myStr===''&&result.toString().charAt(0).includes('-')){
                         myStr=result.toString()
                         myStr=myStr.replace('-','')
                         setCurrentNumber(myStr)
                         setOperadorType('+')
                         return
                       }
                       if(myStr===''&&!result.toString().charAt(0).includes('-')){
                        myStr=result.toString()
                        setCurrentNumber('- '+myStr)
                        setOperadorType('-')
                        return
                      }
                    lIndex  = myStr.lastIndexOf("/");
                      last = myStr.substring(lIndex+1,currentNumber.length)
                    if(myStr.charAt(myStr.length-1).includes(')')){
                      myStr=  myStr.split('').reverse().join('')
                      .replace('-', '').replace('(','').replace(')','')
                      .split('').reverse().join('')
                   }else{
                     myStr=myStr.substring(0,lIndex)+'/(-'+last+')'
                   }
                     setCurrentNumber(myStr)
                     return   
        }
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

      {/* Area onde o resultado ?? exibido */}
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber||result}</Text>
      </View>

      {/* Area onde os bot??es s??o exibidos*/}
      <View style={styles.buttons}>

        {buttons.map((button) => 
          button === '=' ? // Mapeamento do bot??o =
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#190142'}]}>
          <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
        </TouchableOpacity>
          : // Mapeamento dos outros bot??es
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.button}>
            <Text style={[styles.textButton,
              {color: typeof(button) === 'number' ? 'white': 'gray'}]}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// Estiliza????o
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor:'#190142'
  },
  resultText: {
   color:'white',
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
  backgroundColor:'#441d78',
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