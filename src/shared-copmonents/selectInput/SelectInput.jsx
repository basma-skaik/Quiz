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
        // rowStyle={{height: 25, backgroundColor: '#CEDFCC'}}
        rowTextStyle={{fontSize: 20}}
        buttonTextStyle={{fontSize: 20, color: 'white'}}
        // selectedRowStyle={{backgroundColor: 'gray'}}
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
    // color:"#051A2D"
  },
  buttonST: {
    width: '100%',
    height: 40,
    padding: 0,
    margin: 0,
    backgroundColor: '#7FACD6',
    justifyContent: 'flex-start',
    borderRadius: 6,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});

const Icon = () => (
  <Text style={{transform: [{rotateX: '180deg'}], fontSize: 50}}>^</Text>
);
