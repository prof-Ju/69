import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "../screens/SearchSreen";
import TransactionScreen from "../screens/TransactionScreen";

const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
     render(){
          return(
               <NavigationContainer>
                    <Tab.Navigator>
                         <Tab.Screen name="Transação" component={TransactionScreen}/>
                         <Tab.Screen name="Pesquisa" component={SearchScreen}/>
                    </Tab.Navigator>
               </NavigationContainer>
          )
     }
}
