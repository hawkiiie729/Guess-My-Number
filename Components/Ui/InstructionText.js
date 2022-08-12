import React, { Children } from 'react'
import { Text ,StyleSheet} from 'react-native'
import Colors from '../../Constants/Color'

const InstructionText = ({children}) => {
  return  <Text style={styles.instructionText}>{children}</Text>
}

const styles=StyleSheet.create({

  instructionText:{
    fontFamily:'open-sans',
    marginBottom:6,
    color:Colors.accent500,
    fontSize:20,
  },
})

export default InstructionText