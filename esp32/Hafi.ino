#include <esp32-hal-gpio.h>

long instance1 = 0, timer;
double hrv = 0, hr = 72, interval = 0;
int value = 0, count = 0;
bool flag = false;

#define shutdown_pin 5  // Replace with the desired GPIO pin

#define threshold 100 // to identify R peak

#define timer_value 10000 // 10 seconds timer to calculate hr

void setup() {
  Serial.begin(9600);

  pinMode(8, INPUT); // Replace with the GPIO pin for leads off detection LO +
  pinMode(9, INPUT); // Replace with the GPIO pin for leads off detection LO -
}

void loop() {
  if ((digitalRead(8) == HIGH) || (digitalRead(9) == HIGH)) {
    Serial.println("leads off!");
    digitalWrite(shutdown_pin, LOW); // standby mode
    instance1 = micros();
    timer = millis();
  } else {
    digitalWrite(shutdown_pin, HIGH); // normal mode
    value = analogRead(A0); // Replace A0 with the desired ADC pin

    // Flattening the ECG values
    value = map(value, 250, 400, 0, 100);

    if ((value > threshold) && (!flag)) {
      count++;
      Serial.println("in");
      flag = true;
      interval = micros() - instance1; // RR interval
      instance1 = micros();
    } else if ((value < threshold)) {
      flag = false;
    }

    if ((millis() - timer) > timer_value) {
      hr = count * 6;
      timer = millis();
      count = 0;
    }

    hrv = hr / 60 - interval / 1000000;

    Serial.print(hr);
    Serial.print(",");
    Serial.print(hrv);
    Serial.print(",");
    Serial.println(value);

    delay(1);
  }
}