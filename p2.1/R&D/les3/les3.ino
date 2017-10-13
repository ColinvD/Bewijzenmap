#include "math.h"
float diameter;
float hoogte;
 
void setup() {
  Serial.begin(9600);
}
 
void loop() {
  while(diameter == 0){
    Serial.println("Please enter a diameter: ");
    while (Serial.available()==0) {
    
    }
    diameter=Serial.parseFloat();
  }
  while(hoogte == 0){
    Serial.println("Please enter a height: ");
    while (Serial.available()==0)  {
    
    }
    hoogte=Serial.parseInt();
  }
  calculateVolume(diameter, hoogte);
  diameter = 0;
  hoogte = 0;
 
}

void calculateVolume(float diameter, float height){
  float volume = PI * pow((diameter / 2), 2)* height;
  Serial.print("Diameter: ");
  Serial.print(diameter);
  Serial.print("cm");
  Serial.print(", Height: ");
  Serial.print(height);
  Serial.print("cm");
  Serial.print(", Volume: ");
  Serial.print(volume);
  Serial.println("cm3");
  Serial.println("");
}

