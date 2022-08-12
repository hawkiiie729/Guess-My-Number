import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import Colors from '../../Constants/Color'

const NumberContainer = ({children}) => {
  return (
   <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
   </View>
  )
}

const styles=StyleSheet.create({
    container:{
     borderWidth:4,
     borderColor:Colors.accent500,
     padding:24,
     margin:24,
     borderRadius:8,
     justifyContent:'center',
     alignItems:'center',
    },
    text:{
      color:Colors.accent500,
      fontFamily:'open-sans',
      // fontWeight:'bold',
      fontSize:32,
    }
})

export default NumberContainer