import React from 'react'
import { View ,StyleSheet} from 'react-native'
import Colors from '../../Constants/Color'


const Card = ({children}) => {
  return <View style={styles.inputContainer}>{children}</View>
}

const styles=StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        padding: 16,
        marginTop: 38,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, //for shadow ..only in andriod
      },
})
export default Card