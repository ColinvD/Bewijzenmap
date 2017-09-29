import java.util.Scanner;
import food.fruit.Apple;
import food.Food;

//met import kun je Classes importeren die in een package staan.
//zoals bijvoorbeeld food.fruit.Apple
//De Apple class Apple.java staat dus vanaf de root les7/src/
//in de map fruit die in de map food zit.
//dus het pad naar Apple is dus les7/src/food/fruit/

//Opdracht 1
//importeer de Class Banana door het juiste classpath aan te geven.
//Maak ook in plaats van 10 appels 10 bananen aan in de code hieronder.

//Opdracht 2
//Maak in de package "food" een nieuwe package "junkfood" aan

//Opdracht 3
//Maak in de package junkfood een class Junkfood die overerft van de class Food (net als de class Fruit)

//Opdracht 4
//Maak in de package junkfood een class Hamburger aan die overerft van junkfood
//zorg er voor dat de kleur van de hamburger "tasty" is.
//Pas de onderstaande code zo aan dat je 5 bananen en 5 hamburgers in de food array stopt.

//Opdracht 5
//Maak een nieuwe package aan in de package "food".
//verzin zelf een nieuwe voedselgroep net als "Fruit" of "Junkfood" maak hiervoor een package.
//Maak in die package een gelijknamige class aan die overerft van Food.
//Maak ook een class aan van een specifiek voedseltype zoals Apple Banana of Hamburger.
//zie laatste slide voor de nieuwe structuur.

//Opdracht 6
//Vergroot je food array naar 15 en voeg 5x je nieuwe voedselsoort toe.

public class Les7{
  public static void main(String[] args) {
      Les7 lesson = new Les7();
  }
  public Les7(){
    Food[] food = new Food[10];
    for(int i=0; i<food.length; i++){
      food[i] = new Apple();
    }
    Scanner scanner = new Scanner(System.in);
    int current = 0;
    while(true){
      System.out.println("eat, look, next or exit?");
      String input = scanner.next();
      if(input.equals("eat")){
        food[current].takeBite();
      }
      else if(input.equals("look")){
        food[current].printStatus();
      }
      else if(input.equals("exit")){
        break;
      }else if(input.equals("next")){
        //ga naar de volgende appel
        if(current < food.length-1){
          current++;
        }else{
          current = 0;
        }
        System.out.println("grab the next : #"+(current+1));
      }else{
        System.out.println("i don't understand.");
      }
    }
  }
}
