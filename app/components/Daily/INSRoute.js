import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Instruction from './Instruction';
import DailyReading from './DailyReading';
import ReadEcg from './ReadEcg';

const Stack = createNativeStackNavigator();

export default function INSRoute() {
    return (
        <Stack.Navigator initialRouteName='INs' screenOptions={{ headerShown: false }} >
          <Stack.Screen name="INs" component={Instruction} />
          <Stack.Screen name="Reading" component={DailyReading} />
          <Stack.Screen name="ReadEcg" component={ReadEcg} />
        
        </Stack.Navigator>
      );
}




