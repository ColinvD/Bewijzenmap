import java.util.Scanner;
public class Les6{
  public static void main(String[] args) {
      Les6 les6 = new Les6();
  }
  public Les6(){
    showProblem();
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

    Apple apple1 = new Apple();
    Scanner scanner = new Scanner(System.in);

    while(true){//
      System.out.println("eat, look, next or exit?");
      String input = scanner.next();

      if(input.equals("eat")){
        apple1.takeBite();
      }
      else if(input.equals("look")){
        apple1.printAppleStatus();
      }
      else if(input.equals("exit")){
        break;
      }else if(input.equals("next")){
        //ga naar de volgende appel
        System.out.println("there is only one apple!");
      }else{
        System.out.println("i don't understand.");
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

  }
}
