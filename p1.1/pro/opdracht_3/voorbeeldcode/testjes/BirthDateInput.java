
import java.util.Scanner;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;
public class BirthDateInput
{
  public static void main(String[] args)
  {
    boolean result;
    do
    {
      result = askInput();
    }
    while(!result);
  }
  public static boolean askInput()
  {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter your birthdate dd-mm-yyyy : ");
    String bdString = sc.next();
    SimpleDateFormat sdf = new SimpleDateFormat("dd-mm-yyyy");
    try
    {
      Date bd = sdf.parse(bdString);
      System.out.println("the date is " + bd);
      return true;
    }
    catch(ParseException e)
    {
      System.out.println(e.getMessage());
      System.out.println("please enter date using the 'dd-mm-yyyy' format");
      return false;
    }

  }
}
