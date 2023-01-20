import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry} placeholderTextColor={"black"} style={styles.input}/>
    </View>
  )
}
const styles=StyleSheet.create({
container:{
    backgroundColor:'white',
    width:"100%",
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    color:"black",
    paddingHorizontal:10,
    marginVertical:5
},
input:{
    color:"black"
}
});
export default CustomInput;