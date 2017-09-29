public class BurningAlcohol extends Alcohol{
public void burn(){
  if(ml > 0)
    System.out.println("And it burns burns burns "+this.getClass().getName());
    ml = 0;
}
}
