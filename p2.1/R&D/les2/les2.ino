int delaytime = 30;
void setup() {
  // put your setup code here, to run once:
  for(int i = 0; i < 9; i++){
    pinMode(i, OUTPUT);
  }
}

void loop() {
  // put your main code here, to run repeatedly:

  for(int i = 1; i < 9; i++){
    Blink(i, 30, 30);
  }
  for(int i = 8; i > 0; i--){
    Blink(i, 30, 30);
  }
  delay(1000);
  InsideOutside();
  InsideOutside();
  InsideOutside();
}

void InsideOutside(){
  TurnOn(4);
  TurnOn(5);
  delay(delaytime);
  TurnOff(4);
  TurnOff(5);
  TurnOn(3);
  TurnOn(6);
  delay(delaytime);
  TurnOff(3);
  TurnOff(6);
  TurnOn(2);
  TurnOn(7);
  delay(delaytime);
  TurnOff(2);
  TurnOff(7);
  TurnOn(1);
  TurnOn(8);
  delay(delaytime);
  TurnOff(1);
  TurnOff(8);
  delay(300);
}
void Blink(int poort, int aantijd, int uittijd){
  digitalWrite(poort, HIGH);
  delay(aantijd);

  digitalWrite(poort, LOW);
  delay(uittijd);
}
void TurnOn(int poort){
  digitalWrite(poort, HIGH);
}
void TurnOff(int poort){
  digitalWrite(poort, LOW);
}

