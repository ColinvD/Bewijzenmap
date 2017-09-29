public class CommandLineArguments
{

  public static void main(String[] args)
  {
    System.out.println("??");
    if(args.length > 0){
      for(Object arg : args)
      {
        System.out.println(""+ arg);
      }

    }
  }
}
