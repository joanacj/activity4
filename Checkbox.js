import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, CheckBox } from 'react-native';

const Forms = () => {
  const [isCheckedSinging, setIsCheckedSinging] = useState(false);
  const [isCheckedActing, setIsCheckedActing] = useState(false);
  const [isCheckedDancing, setIsCheckedDancing] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Talents</Text>
      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedSinging}
            onValueChange={() => setIsCheckedSinging(!isCheckedSinging)}
          />
          <Text style={styles.checkBoxLabel}>Singing</Text>
        </View>

        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedActing}
            onValueChange={() => setIsCheckedActing(!isCheckedActing)}
          />
          <Text style={styles.checkBoxLabel}>Acting</Text>
        </View>

        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedDancing}
            onValueChange={() => setIsCheckedDancing(!isCheckedDancing)}
          />
          <Text style={styles.checkBoxLabel}>Dancing</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  label: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  checkBoxContainer: {
    flexDirection: 'column',
  },
  checkBoxItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxLabel: {
    marginLeft: 5,
    fontSize: 20,
  },
});

export default Forms;