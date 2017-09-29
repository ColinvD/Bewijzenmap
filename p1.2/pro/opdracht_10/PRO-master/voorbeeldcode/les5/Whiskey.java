public class Whiskey extends Alcohol{
  public Whiskey(){
    ml = 120;
    init();
  }
  public void burn(){
    if(ml > 0)
      System.out.println("And it burns burns burns "+this.getClass().getName());
      ml = 0;
  }

}
