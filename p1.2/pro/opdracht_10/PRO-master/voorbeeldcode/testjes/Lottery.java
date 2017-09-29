import java.util.ArrayList<E>;
public class Lottery{
  //give number of results with commandline argument
  public static void main(String[] args) {
    int amount = (int)args[0];

    ArrayList<int> taken = new ArrayList<int>();

  //  int[] chosen = new int[amount];

    for (int i=0 ;i < amount ;i++ ) {
      int rand = Math.round(Math.random()*amount);
      taken.add(rand);
      System.out.println(" " + rand );
    }
  }

}
