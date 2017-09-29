import java.util.Scanner;
public class Rps {

  public static void main(String[] args) {
    Rps main = new Rps();
    main.run();
  }

  public void run() {

    // RANDOMLY GENERATE A NUMBER 0, 1 OR 2
    int computerChoice = (int) (Math.random() * 3);

    // PROMPT THE USER TO ENTER A NUMBER 0, 1 OR 2
    Scanner input = new Scanner(System.in);
    int userChoice= -1;

    while (userChoice!=0 && userChoice!=1 && userChoice!=2) {
      System.out.println("Please pick a number:");
      System.out.println("0: Scissors");
      System.out.println("1: Rock");
      System.out.println("2: Paper");
      System.out.println("$ ");
      userChoice = input.nextInt();
    }

    // DECIDE WHO WON
de ingevoerde waarde > random waarde pc : gaat fout
de ingevoerde waarde = random waarde pc : gelijkspel
de ingevoerde waarde < random waarde pc : gaat fout
de ingevoerde waarde 1 tegen random waarde 2 : verloren
de ingevoerde waarde 2 tegen random waarde 0 : verloren
de ingevoerde waarde 0 tegen random waarde 1 : verloren

    // DISPLAY THE RESULT
}
}
