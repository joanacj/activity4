import React from 'react';
import { StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
     StatusBar,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
        What is information technology?
        Information technology (IT) is the use of any computers, storage, 
        networking and other physical devices, infrastructure and processes to 
        create, process, store, secure and exchange all forms of electronic data. 
        Typically, IT is used in the context of business operations, as opposed to
         technology used for personal or entertainment purposes. The commercial use
          of IT encompasses both computer technology and telecommunications.
     The Harvard Business Review coined the term information technology to make a 
     distinction between purpose-built machines designed to perform a limited scope 
     of functions, and general-purpose computing machines that could be programmed for
      various tasks. As the IT industry evolved from the mid-20th century, computing 
      capability increased, while device cost and energy consumption decreased, a cycle 
      that continues today when new technologies emerge.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 40,
  },
});

export default App;
