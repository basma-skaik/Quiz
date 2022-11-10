import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

const SelectInput = ({options = [], label, handleChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label || 'Select :'}</Text>
      <SelectDropdown
        defaultValue={options[0].name}
        renderDropdownIcon={() => <Icon />}
        buttonStyle={styles.buttonST}
        rowTextStyle={{fontSize: 20}}
<<<<<<< HEAD
        buttonTextStyle={{fontSize: 20, color: 'white'}}
=======
        buttonTextStyle={{fontSize: 20, color: '#000'}}
        // selectedRowStyle={{backgroundColor: 'gray'}}
>>>>>>> 09b4a69bec891198fe2db7650aaae0c0f4161983
        data={options.map(opt => opt.name)}
        onSelect={selectedItem =>
          handleChange(options.find(opt => opt.name === selectedItem).value)
        }
      />
    </View>
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    marginBottom: 3,
<<<<<<< HEAD
=======
    // color:"#051A2D"
    color: '#92e4f1',

>>>>>>> 09b4a69bec891198fe2db7650aaae0c0f4161983
  },
  buttonST: {
    width: '100%',
    height: 40,
    padding: 0,
    margin: 0,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    borderRadius: 6,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});

const Icon = () => (
<<<<<<< HEAD
  <Text
    style={{transform: [{rotateX: '180deg'}], fontSize: 40, marginBottom: -10}}>
    ^
  </Text>
=======
  <Text style={{transform: [{rotateX: '180deg'}],  marginTop:10 ,fontSize:40,alignSelf:'center'}}>^</Text>
>>>>>>> 09b4a69bec891198fe2db7650aaae0c0f4161983
);
