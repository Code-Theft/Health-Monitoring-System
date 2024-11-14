import React from 'react';
import { View, Button } from 'react-native';

const sendToESP32 = async () => {
  const apiUrl = 'http://esp32-ip-address/api';
  const dataToSend = { data: 'Hello from React Native' };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      console.log('Data sent successfully to ESP32');
      // Handle the response if needed
    } else {
      console.log('Failed to send data to ESP32');
      // Handle the error if needed
    }
  } catch (error) {
    console.log('Error sending data to ESP32:', error);
    // Handle the error if needed
  }
};

const App = () => {
  return (
    <View>
      <Button title="Send Data to ESP32" onPress={sendToESP32} />
    </View>
  );
};

export default App;
