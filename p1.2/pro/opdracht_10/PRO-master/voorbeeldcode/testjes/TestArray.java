public class TestArray{
  public static void main(String[] args) {
    String mijnString = "hallo ik ben 1 string";

    String[] mijnStringArray = new String[100];

    mijnStringArray[0] = "iets voor in lade 1";
    mijnStringArray[1] = "iets anders";
    mijnStringArray[9] = "gooi dit maar weg";

    for(int i=2; i < mijnStringArray.length;i++){
      mijnStringArray[i] = "hallo ik ben altijd hetzelfde";
    }

    for(int i=mijnStringArray.length-1; i >= 0;i--){
        System.out.println("de waarde op positie "+i+" is "+ mijnStringArray[i]);
    }



  }
}
