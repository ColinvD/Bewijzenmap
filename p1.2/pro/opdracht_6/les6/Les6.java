import java.util.Scanner;
public class Les6{
  public static void main(String[] args) {
      Les6 les6 = new Les6();
  }
  public Les6(){
    showProblem();

  }
  Apple[] apples = new Apple [20];
  private void solveProblem(){
    for(int i = 0; i < apples.length; i++){
      apples[i] = new Apple();
    }
    for(int i = 0; i < apples.length; i++){
      apples[i].takeBite();
    }

  }
  private void showProblem(){
    //Met de onderstaande code kun je een appel eten.
    //Wat nu als je meer appels wil kunnen eten?
    //Moet ik dan de complete code kopieren?

    //Opdracht 1
    //Lees de onderstaande code regel voor regel door en zet per regel, in een comment erachter, wat de code doet
    //Als je een regel niet begrijpt zet je er een vraagteken achter.
    //Stel in de les vragen over regels die je niet begrijpt.

    //Opdracht 2
    //Pas de onderstaande code aan zodat je 3 appels tegelijk kunt eten.
    //Je hoeft nog niet te switchen tussen de appels met het "next" commando.

    Apple apple1 = new Apple(); // maakt een appel aan
    Apple apple2 = new Apple();
    Apple apple3 = new Apple();
    Scanner scanner = new Scanner(System.in); // maakt een nieuwe scanner aan

    while(true){ //terwijl het waar is voer dit uit
      System.out.println("eat, look, next or exit?"); //print de tekst uit
      String input = scanner.next(); //de scanner activeren zodra in de code staat de naam input

      if(input.equals("eat")){ //als de ingevoerde tekst eat is voer deze code uit
        solveProblem();
      }
      else if(input.equals("look")){ //als de ingevoerde tekst look is voer deze code uit
        for(int i = 0; i < apples.length; i++){
          apples[i].printAppleStatus(); //laat de informatie zien van de appel
        }

      }
      else if(input.equals("exit")){ //als de ingevoerde tekst exit is voer deze code uit
        break; //stop de codes
      }else if(input.equals("next")){ //als de ingevoerde tekst next is voer deze code uit
        //ga naar de volgende appel
        currentApple
        System.out.println("there is only one apple!"); //stuur een bericht dat er maar 1 appel is
      }else{ //als de ingevoerde tekst niet gelijk staat aan de stukjes tekst voer deze code uit
        System.out.println("i don't understand."); //print deze tekst uit
      }
    }

    //Opdracht 3
    //Maak een nieuwe functie aan met de naam solveProblem.
    //Plak de code voor het eten van de 3 appels erin.
    //Pas de code aan zodat je met behulp van een array 20 appels kunt eten met het "eat" commando.

    //Opdracht 4
    //Pas de code zo aan dat je ook 20 appels kunt bekijken met het "look" commando.

    //Extra opdracht 5
    //Verzin een manier om te switchen tussen de appels,
    //zodat je niet alle appels tegelijk eet maar dat je ze 1 voor 1 kunt eten en bekijken.
    //Gebruik hiervoor het "next" commando.


//bij next pak de volgende appel
//bij eat neem een hap uit de huidige appel
//bij look kijk naar de huidige appel
  }
}
