/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: Navigation
*/

/*
Purpose: 
1. Component to create navigation stack for the app using @react-navigation/native library https://reactnavigation.org/docs/getting-started/
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//importing all other JavaScript screens for navigation to handle
//NOTE: IF YOU ADD A NEW SCREEN TO THE APP, MAKE SURE TO PUT IT IN A FOLDER IN THE 'screens' FOLDER WITH AN 'index.js' FILE AND IMPORT IT BELOW. 
//IT ALSO NEEDS TO BE ADDED WITHIN THE 'Navigation' LAMBDA FUNCTION BELOW!
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Dashboard from '../screens/Dashboard';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import VisualizationScreen from '../screens/VisualizationScreen/VisualizationScreen';
import CreateSurveyScreen from '../screens/CreateSurveyScreen';
import AdminToolsScreen from '../screens/AdminToolsScreen';
import UpdateUserScreen from '../screens/UpdateUserScreen';
import CreateTeamScreen from '../screens/CreateTeamScreen';
import Profile from '../screens/Profile';
import AssignTeamMemberScreen from '../screens/AssignTeamMemberScreen';
import AddMemberScreen from '../screens/AddMemberScreen';
import UserSearchScreen from '../screens/UserSearchScreen';
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

const Stack = createStackNavigator(); //create the navigation stack

//define a constant lambda function called Navigation to handle the navigation stack, and add all screens to the Stack.
//NOTE: IF YOU ADD A NEW SCREEN, MAKE SURE TO ADD IT BELOW WITH ITS OWN UNIQUE NAME
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  >
             <Stack.Group screenOptions={{headerShown: false}} > 
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> 
                <Stack.Screen name="Chatroom" component={ChatRoomScreen} />         
                <Stack.Screen name="UpdateUser" component={UpdateUserScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{title: "Yes"}} /> 
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="AssignTeamMember" component={AssignTeamMemberScreen} />
                <Stack.Screen name="AddMemberScreen" component={AddMemberScreen} /> 
                <Stack.Screen name="UserSearch" component={UserSearchScreen} /> 
             </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;