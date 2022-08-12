import React from 'react'
import { Text ,StyleSheet} from 'react-native'
import Colors from '../../Constants/Color'
const Title = ({children}) => {
  return  <Text style={styles.title}>{children}</Text>
}

const styles=StyleSheet.create({
    title:{
      marginTop:5,
      fontFamily:'open-sans-bold',  
        fontSize:24,
        // fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:'white',
        padding:12,
    },
})

export default Title