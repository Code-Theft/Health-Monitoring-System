#include <ArduinoJson.h> // Include the ArduinoJson library

#define ADC_VREF_mV    3300.0 // in millivolt
#define ADC_RESOLUTION 4096.0
#define PIN_LM35       25  // ESP32 pin GIOP36 (ADC0) connected to LM35

#define MAX_BUFFER 100

uint32_t prevData[MAX_BUFFER];
uint32_t sumData = 0;
uint32_t maxData = 0;
uint32_t avgData = 0;
uint32_t roundrobin = 0;
uint32_t countData = 0;
uint32_t period = 0;
uint32_t lastperiod = 0;
uint32_t millistimer = millis();
double frequency;
double beatspermin = 0;
uint32_t newData;

void freqDetec() {
  if (countData == MAX_BUFFER) {
    if (prevData[roundrobin] < avgData * 1.5 && newData >= avgData * 1.5) { // increasing and crossing last midpoint
      period = millis() - millistimer; // get period from current timer value
      millistimer = millis(); // reset timer
      maxData = 0;
    }
  }
  roundrobin++;
  if (roundrobin >= MAX_BUFFER) {
    roundrobin = 0;
  }
  if (countData < MAX_BUFFER) {
    countData++;
    sumData += newData;
  } else {
    sumData += newData - prevData[roundrobin];
  }
  avgData = sumData / countData;
  if (newData > maxData) {
    maxData = newData;
  }
  
  prevData[roundrobin] = newData; // store previous value
}

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Read the ADC value from the temperature sensor
  int adcVal = analogRead(PIN_LM35);
  // Convert the ADC value to voltage in millivolt
  float milliVolt = adcVal * (ADC_VREF_mV / ADC_RESOLUTION);
  // Convert the voltage to the temperature in °C
  float tempC = milliVolt / 10;
  // Convert the °C to °F
  float tempF = tempC * 9 / 5 + 32;
  
  // Create a JSON object
  StaticJsonDocument<256> jsonDoc;
  JsonObject temperatureObj = jsonDoc.createNestedObject("temperature");
  temperatureObj["TempF"] = tempF;
  temperatureObj["TempC"] = tempC;
  
  newData = analogRead(34);
  freqDetec();
  if (period != lastperiod) {
    frequency = 1000 / (double)period; // timer rate/period
    if (frequency * 60 > 20 && frequency * 60 < 200) { // suppress unrealistic Data
      beatspermin = frequency * 60;
      lastperiod = period;
    }
  }
  
  // Add ECG data to the JSON object
  JsonObject ecgObj = jsonDoc.createNestedObject("ecg");
  ecgObj["newData"] = newData;
  ecgObj["avgData"] = avgData;
  ecgObj["avgDataMultiple"] = avgData * 1.5;
  ecgObj["maxData"] = maxData;
  ecgObj["beatspermin"] = beatspermin;
  
  // Serialize the JSON object to a string
  String jsonStr;
  serializeJson(jsonDoc, jsonStr);
  
  // Print the JSON string to the Serial Monitor
  Serial.println(jsonStr);
  
  delay(500);
}
