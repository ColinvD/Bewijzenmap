import java.util.Scanner;

public class Assignment{
  public void showAssignment(){
    System.out.println("Assignment 1: Jay you just completed your first assignment");
    System.out.println("Assignment 2: create 3 variables here, one for your name, age and one for your postal code. Print the values to the commandline!");
    String naam = new String("Colin");
    System.out.println(naam);
    int leeftijd = 15;
    System.out.println(leeftijd);
    String postcode = "1273KB";
    System.out.println(postcode);
    System.out.println("Assignment 3: Use the Scanner datatype to allow a user to enter the values for name, age, and postal code. ");
    System.out.println("Assignment 4: Parse the Scanner output to an int when entering the age value. This way the user will get an error if numbers arent used. ");
    System.out.println("Note: Find out about datatypes at the Application Programming Interface(API) reference https://docs.oracle.com/javase/7/docs/api/allclasses-noframe.html. Select the Scanner link.");

    Scanner scanner = new Scanner(System.in);
    System.out.println("Vul je naam in");
    String name = scanner.next();
    System.out.println("Ik ben "+name);

    System.out.println("Hoe oud ben je");
    int age = scanner.nextInt();
    System.out.println("Ik ben " + age + " jaar");

    System.out.println("War is je postcode");
    String postcode = scanner.next();
    System.out.println("Mijn postcode is "+postcode);

  }
}
