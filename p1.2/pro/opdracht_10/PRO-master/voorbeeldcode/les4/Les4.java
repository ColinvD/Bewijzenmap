import java.util.Scanner;
import java.io.PrintWriter;
import java.net.URL;
import javax.sound.sampled.*;
public class Les4{
  //Deze variabelen zijn "global" dit betekent dat ze in alle functions van deze class beschikbaar zijn
  private String name;
  private int age;
  private String postcode;
  public static void main(String[] args) {
    Les4 self = new Les4();//deze variabele is "local" dit betekent dat deze alleen in de main function beschikbaar is
    self.assignments();//de function assignments wordt uitgevoerd
  }
  private void assignments()
  { //hier start de "body" van de function
    //Dit is een function definition met de naam assignments.
    //private betekent dat deze function alleen in deze class Les4 beschikbaar is.
    //void betekent dat de function geen resultaat teruggeeft
    //assignments is de naam van de function. Deze gebruik je als je de function wil uitvoeren

    //opdracht 1
    //de function writeData() zorgt dat je je naam, leeftijd en postcode in kan vullen
    //Roep hier deze function aan zodat dit ook echt gebeurt.

    //Opdracht 2
    //de funtion saveToFile() zorgt dat je de ingevulde gegevens op kunt slaan in een externe filename
    //roep deze functie aan en geef als argument de naam van het gewenste textbestand
    //.txt kun je hierbij weglaten

    //Opdracht 3
    //Compile de code, voer deze uit en check of de file die je verwacht ook gemaakt is.
    //Kloppen de gegevens ook die in de file staan?

    //Opdracht 4
    //Uncomment het volgende blok met code
    /*
    try{
      URL url = (URL) this.getClass().getResource("sound/sample.wav");
      AudioInputStream input = AudioSystem.getAudioInputStream(url);
      DataLine.Info info = new DataLine.Info(Clip.class, input.getFormat());
      Clip clip = (Clip) AudioSystem.getLine(info);
      clip.open(input);
      clip.start();
      int ms = ((int) clip.getMicrosecondLength())/1000;
      Thread.sleep(ms);
    }catch (Exception e) {
      System.out.println(e.toString());
    }
    */


    //Maak nu zelf een eigen function definition met de naam playSound();
    //Zet de geactiveerde code in de function en roep in plaats daarvan de function aan.
    //LET OP! dat je de function definieert na het eind van de "body" van de huidige function

    //Extra Opdracht 5
    //Het pad naar de soundfile is nu "sound/short_sample.wav" en kun je alleen aanpassen door hem in de function te wijzigen
    //Maar wat nu als je 2 verschillende geluiden af wil spelen?
    //vervang het pad met een String variabele die je als argument aan de function mee kunt geven.
    //Roep nu ook de playSound() function 2x aan.
    //1x met sample.wav en 1x met short_sample.wav.

    //Extra Opdracht 6
    //De function monthsToWholeYears() daarmee kun je van een aantal maanden berekenen hoeveel verstreken jaren dit zijn.
    //Bijvoorbeeld 23 maanden dat is 1 verstreken jaar.
    //24 maanden zijn 2 verstreken jaren etc....
    //De function geeft nu het aantal verstreken jaren als output naar de commandline met System.out.println
    //De bedoeling is dat je de function het resultaat terug laat geven met behulp van een return value
    //Vervang de regel met System.out.println met een return van je roundedDown variabele
    //pas ook de onderstaande regel code aan zodat je de uitkomst van 23 maanden op kunt tellen bij de variabele age
    monthsToWholeYears(23);

  }//hier is de "body" van de function afgelopen
  //hier kun je dus een nieuwe function aanmaken

  private void monthsToWholeYears(int maanden){
    float f = maanden / 12;
    int roundedDown = (int)(f-(f%1)); //afronden naar beneden met Modulo en omzetten van float naar int
    System.out.println(maanden + " maanden afegrond naar hele jaren is " + roundedDown + " jaar.");
  }
  private void writeData()
  { //start van body
    Scanner scanner = new Scanner(System.in);
    System.out.println("Vul je naam in:");
    name = scanner.next();
    System.out.println("Vul je leeftijd in:");
    age = scanner.nextInt();
    System.out.println("Vul je postcode in:");
    postcode = scanner.next();
  } //eind van de body
  //Ook hier mag je een nieuwe function aanmaken

  private void saveToFile(String filename)
  { //start van de body
    try{
      PrintWriter pw = new PrintWriter(filename+".txt");
      pw.println("name : "+name);
      pw.println("age : "+age);
      pw.println("postcode : "+postcode);
      pw.close();
    }
    catch(Exception e)
    {
      System.out.println("cannot create file "+ filename+".txt");
    }
  } //eind van de body
  //hier mag je een function aanmaken
}
