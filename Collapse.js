import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AccordionItem = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text>{isCollapsed ? '+' : '-'}</Text>
      </TouchableOpacity>
      {!isCollapsed && <Text style={styles.content}>{content}</Text>}
    </View>
  );
};

const Accordion = () => {
  return (
    <View style={styles.container}>
      <AccordionItem
        title="JEREMIAH 33:3"
        content="Call to me and I will answer you, and will tell you great and hidden things that you have not known. Ask me and I will tell you remarkable secrets you do not know about things to come."
      />
      <AccordionItem
        title="PROVERBS 10:9"
        content="Whoever walks in integrity walks securely, but he who makes his ways crooked will be found out."
      />
      <AccordionItem
        title="PSALMS 103:5"
        content="Lord renew my energy when I feel tired and weak."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default Accordion;