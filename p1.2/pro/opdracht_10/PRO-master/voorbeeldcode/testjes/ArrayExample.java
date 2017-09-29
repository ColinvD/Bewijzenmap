class ArrayExample{
  public static void main(String[] args) {
    ArrayExample object = new ArrayExample();
    object.showExample();
  }
  private void showExample(){

    int range = 50;
    int min = 20;
    int damage = min + (int)Math.round( Math.random() * range );
    System.out.println("damage : " + damage);




  }
}
