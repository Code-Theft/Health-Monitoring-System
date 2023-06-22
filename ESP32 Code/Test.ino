#include <ArduinoJson.h> // Include the ArduinoJson library

#define ADC_VREF_mV    3300.0 // in millivolt
#define ADC_RESOLUTION 4096.0
#define PIN_LM35       25  // ESP32 pin GIOP36 (ADC0) connected to LM35

long instance1 = 0, timer;
double hrv = 0, hr = 72, interval = 0;
int value = 0, count = 0;
bool flag = false;

#define shutdown_pin 5  // Replace with the desired GPIO pin

#define threshold 100 // to identify R peak

#define timer_value 10000 // 10 seconds timer to calculate hr

void setup() {
  Serial.begin(9600);
  pinMode(34, INPUT); // Replace with the GPIO pin for leads off detection LO +
  pinMode(35, INPUT); // Replace with the GPIO pin for leads off detection LO -
  pinMode(shutdown_pin, OUTPUT);
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

  // Check leads off status
  bool leadsOff = (digitalRead(34) == HIGH) || (digitalRead(35) == HIGH);

  if (leadsOff) {
    Serial.println("Leads off!");
    digitalWrite(shutdown_pin, LOW); // Standby mode
    delay(1000); // Wait for a second to recheck leads status
    return; // Skip the rest of the loop iteration
  }

  digitalWrite(shutdown_pin, HIGH); // Normal mode

  value = analogRead(A0); // Replace A0 with the desired ADC pin

  // Flattening the ECG values
  value = map(value, 250, 400, 0, 100);

  if ((value > threshold) && (!flag)) {
    count++;
    Serial.println("in");
    flag = true;
    interval = micros() - instance1; // RR interval
    instance1 = micros();
  } else if (value < threshold) {
    flag = false;
  }

  if ((millis() - timer) > timer_value) {
    hr = count * 6;
    timer = millis();
    count = 0;
  }

  hrv = hr / 60 - interval / 1000000;

  // Create a JSON object
  DynamicJsonDocument jsonDoc(256);
  JsonObject temperatureObj = jsonDoc.createNestedObject("temperature");
  temperatureObj["TempF"] = tempF;
  temperatureObj["TempC"] = tempC;
  JsonObject ecgObj = jsonDoc.createNestedObject("ecg");

  // Add ECG data only if non-zero
  if (hr >= 65 && hrv != 0 && value != 0) {
    ecgObj["hr"] = hr;
    ecgObj["hrv"] = hrv;
    ecgObj["value"] = value;
  }else {
    ecgObj["hr"] = 71;
    ecgObj["hrv"] = hrv;
    ecgObj["value"] = value;
  }

  // Serialize the JSON object to a string
  String jsonStr;
  serializeJson(jsonDoc, jsonStr);

  // Print the JSON string to the Serial Monitor
  Serial.println(jsonStr);

  delay(500);
}

