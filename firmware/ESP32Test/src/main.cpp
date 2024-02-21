#include <Arduino.h>

const int ledPin = 23;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(921600);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  Serial.println("LED is on");
  delay(1000);
  digitalWrite(ledPin, LOW);
  Serial.println("LED is off");
  delay(1000);
}
