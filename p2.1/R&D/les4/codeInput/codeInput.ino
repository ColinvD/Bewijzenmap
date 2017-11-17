#include <Keypad.h>
const byte ROWS = 4;
const byte COLS = 4;

char keys[ROWS][COLS] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};
byte rowPins[ROWS] = {9,8,7,6};
byte colPins[COLS] = {5,4,3,2};

Keypad kpd = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

#define ledpin 13

char myCode[] = "0000";
char invoerCijfers[4];
int goedeIngevoerd = 0;
int geel = 12;
int groen = 10;
int rood = 11;
byte incomingByte;
bool goedfout = false;
bool imReady = true;
int fieldIndex = 0;
int values[3];

void setup() {
  // put your setup code here, to run once:
  pinMode(ledpin,OUTPUT);
  digitalWrite(ledpin, HIGH);
  Serial.begin(9600);
  pinMode(geel,OUTPUT);
  pinMode(groen,OUTPUT);
  pinMode(rood,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println("Login: f. Change password: j");
  digitalWrite(groen, LOW);
  digitalWrite(rood, LOW);
  digitalWrite(geel, HIGH);
  imReady = true;
  goedeIngevoerd = 0;
  while (Serial.available() == 0) {
                
        }
  incomingByte = Serial.read();
  if(incomingByte == 102){
    Serial.println("Put your code in:");
    CodeInput();
    if(goedfout){
      Serial.println("your code is right but there is nothing to do here so your automaticly are logged out");
    } else if(!goedfout){
      Serial.println("your code is wrong");
    }
  } else if (incomingByte == 106){
    Serial.println("first put your old code in:");
    CodeInput();
    if(goedfout){
      Serial.println("your code is right so what do you want to change it to?");
      while(imReady == true){
        if(Serial.available()){
          char ch = Serial.read();
          if(ch >= '0' && ch <= '9'){
            values[fieldIndex] = (values[fieldIndex]*10) + (ch - '0');
            Serial.println(values[fieldIndex]);
            imReady = false;
          }
        }
      }
    } else if(!goedfout){
      Serial.println("your code is wrong");
    }
  }

  Serial.println("");
  delay(4000);
  }

void CodeInput(){
  for(int i=0; i<sizeof(invoerCijfers); i++){
    char key;
    do{
      key = kpd.getKey();
    }while(key == NO_KEY);
      invoerCijfers[i] = key;
      Serial.println(invoerCijfers[i]);
  }

  for(int i=0; i<sizeof(invoerCijfers);i++){
    if(invoerCijfers[i] == myCode[i]){
      goedeIngevoerd++;
    }
  }
  if(goedeIngevoerd == 4){
    digitalWrite(geel, LOW);
    digitalWrite(groen, HIGH);
    goedfout = true;
  }else if(goedeIngevoerd <4){
    digitalWrite(geel, LOW);
    digitalWrite(rood, HIGH);
    goedfout = false;
  }
}

