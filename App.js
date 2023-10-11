import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollViewComponent, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  CustomDrawer  from './src/CustomDrawer';
import  Alert  from './Pages/Alert';
import  Checkbox  from './Pages/Checkbox';
import  Collapse  from './Pages/Collapse';
import  Divider from './Pages/Divider';
import  Dropdown  from './Pages/Dropdown';
import  HelperText  from './Pages/HelperText';
import InputText from './Pages/InputText';
import  Menu from './Pages/Menu';
import  Modal from './Pages/Modal';
import  ProgressBar from './Pages/ProgressBar';
import  RadioButton from './Pages/RadioButton';
import  ScrollView from './Pages/ScrollView';
import  SearchBar from './Pages/SearchBar';
import  SectionList from './Pages/SectionList';
import  SegmentedButtons from './Pages/SegmentedButtons';
import  SnackBar from './Pages/SnackBar';
import  Surface from './Pages/Surface';
import  Switch from './Pages/Switch';
import  TouchableRipple from './Pages/TouchableRipple';
import  VirtualizedList from './Pages/VirtualizedList';



const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Component" drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Alert" component={Alert} />
        <Drawer.Screen name="Checkbox" component={Checkbox} />
        <Drawer.Screen name="Collapse" component={Collapse} />
        <Drawer.Screen name="Divider" component={Divider}/>
        <Drawer.Screen name="Dropdown" component={Dropdown} />
        <Drawer.Screen name="HelperText" component={HelperText} />
        <Drawer.Screen name="InputText" component={InputText} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Modal" component={Modal} />
        <Drawer.Screen name="ProgressBar" component={ProgressBar} />
        <Drawer.Screen name="RadioButton" component={RadioButton} />
        <Drawer.Screen name="ScrollView" component={ScrollView}/>
        <Drawer.Screen name="SearchBar" component={SearchBar}/>
        <Drawer.Screen name="SectionList" component={SectionList}/>
        <Drawer.Screen name="SegmentedButtons" component={SegmentedButtons}/>
        <Drawer.Screen name="SnackBar" component={SnackBar}/>
        <Drawer.Screen name="Surface" component={Surface}/>
        <Drawer.Screen name="Switch" component={Switch}/>
        <Drawer.Screen name="TouchableRipple" component={TouchableRipple}/>
        <Drawer.Screen name="VirtualizedList" component={VirtualizedList}/>
        

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  txt: {
    flex: 1,
  },
});

