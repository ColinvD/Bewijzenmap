public class Alcohol
{
  private int ml = 200;//milliliter in de fles
  public void drink()
  {

    if(ml<=0)
    {
      System.out.println("it's is empty");
    }else{
      System.out.println("*gluck*");
      ml-=10;
    }
  }
  public boolean empty()
  {
    if(ml<=0){
      return true;
    }
    else
    {
      return false;
    }
  }

}
