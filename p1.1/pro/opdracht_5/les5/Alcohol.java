public class Alcohol
{
  protected int ml;
  private int refilML;
  protected void init(){
    refilML = ml;
  }
  public void drink()
  {
    String classname = this.getClass().getName();
    if(ml<=0)
    {
      System.out.println("The "+classname+" is empty");
    }else{
      System.out.println("*gluck "+classname+"*");
      ml-=10;
      System.out.println(ml + "ml left");
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
  public void refil(){
    ml = refilML;
    System.out.println("refils "+this.getClass().getName()+" to "+ml+"ml");
  }
}
