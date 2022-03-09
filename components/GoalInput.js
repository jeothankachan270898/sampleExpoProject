import react,{useState} from "react";
import { View ,TextInput,Button,StyleSheet} from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const GoalInputs = props =>{
    const [enteredGoal,setEnteredGoal]=useState('');

    const goalInputHandler =(enteredText)=>{
        setEnteredGoal(enteredText);
       };

    return(
        <View style={styles.container}>
        <TextInput 
        style={styles.inputView}
        placeholder='Goals'
        onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button
         title='ADD'
         onPress={props.onAddGoal.bind(this, enteredGoal)}/>
      </View>
    );
}
const styles =StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
      },
      inputView: {
        width: '80%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 3
      }
})
export default GoalInputs;