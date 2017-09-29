import java.util.Date;
public class Les2
{
  public static void main(String[] args)
  {
    Les2 self = new Les2();
    self.explainVariables();
  }
  private void explainVariables()
  {
    System.out.println("These are examples of a primitive variable, these are sometimes stored on the STACK");
    byte b = 8; //1byte memory
    short s = 50; //2bytes memory
    int i = 4000; //4bytes memory
    long l = 600000000L; //8bytes memory
    char c = 'c'; //2bytes memory
    char u = '\u1234'; //unicode character
    float f = 83.65f; //4bytes memory
    double d = 37.22324;//8bytes memory
    boolean bool = true;//1byte memory

    System.out.println("Every primitive has a wrapper type, these have more methods (actions) to perform");
    Integer iw = new Integer(i);
    System.out.println("like finding the maximum range of an integer : "+ iw.MAX_VALUE);

    System.out.println("you can also 'parse' a value of one datatype to another. Like prsing a String to an int");
    int parsedInt = Integer.parseInt("1");//will parse the string value "1" into an int value;
    String parsedString = Integer.toString(12);//will parse the int value of 12 into a String;

    System.out.println("examples of a reference variable, these are always stored on the HEAP");
    String firstName = "erwin";
    String lastName = new String("Henraat");

    String camelCasing = "camelCasing means starting each word after the first with a Capital letter";
    String noncamelcasedvariablesarehardertoread = " ";
    String thanCamelCasedVariablesWhichAreEasier = " ";
    String _underscore = "you can start a variable name with _";

    //This is a linecomment, it comments a single line
    /*
    This is a block comment
    it comments multiple lines
    */

    //String 5tartingWithNumbers = "This is not allowed";
    //String %justLikeThis = "special characters are not allowed";

    //Most datatypes are are more complex than a primitive and need to be "instantiated"
    //These datatypes must be imported before use, imports are added tot the top of the script
    Date now = new Date();
    System.out.println("the current date and time should be : "+ now);

    //a CustomDataType does not need to be imported if you create it in the same folder
    CustomDataType customObject = new CustomDataType();
    customObject.repeat(10); // This code calls a 'Method' on the CustomDataType

    System.out.println("I hope you understand, please feel free to ask your questions");

    System.out.println("please create an object with the 'Assignment' datatype and call its 'showAssignment' method. Compile this code and run it to find out about your assignment!");

    //Create a new Assignment object here.
    //TIP: The Assignment datatype is a custom datatype just like 'CustomDataType'
    //call the showAssignment() method from the assignment object. Use the same syntax as with repeat() method for customObject

  }

}
