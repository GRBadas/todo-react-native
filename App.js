import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';

export default function App() {
  const [task, setTask] = useState();
  const[taskItens, setTaskItens] = useState([]);

  const handleAddTask= () => {
    setTaskItens([...taskItens, task])
    setTask(null);
  }

  const completeTask =(index) => {
    let itemsCopy = [...taskItens];
    itemsCopy.splice(index, 1);
    setTaskItens(itemsCopy);
  }

  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas do dia</Text>
        <View style={styles.itens}>
          {/* Styles */}
          {
            taskItens.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style = {styles.writeTaskWrapper}
            >
        <TextInput style={styles.input} placeholder="Nova tarefa"
        value = {task}
        onChangeText={text=> setTask(text)}
        ></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFD9CD',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itens: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    borderRadius: 60,
    borderColor: '#55BCF6',
    borderWidth: 1,
    backgroundColor: '#D9E8E1',
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#55BCF6',
    borderWidth: 1,
    backgroundColor: '#D9E8E1',
  },
  addText: {},
});
