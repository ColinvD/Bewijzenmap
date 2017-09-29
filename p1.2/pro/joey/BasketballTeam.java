public class BasketballTeam {
  private String club = "Quick Runners";
  private String team = "U18-2";
  private int aantalLeden = 8;
  private double gemiddeldeLeeftijd = 16.5;
  private boolean leukTeam = true;
  private boolean veelWinnen = false;

  public void setClub (String club){
    this.club = club;
  }
  public String getClub(){
    return club;
  }
  public void setAantalLeden (int aantalLeden){
    this.aantalLeden = aantalLeden;
  }
  public int getAantalLeden (){
    return aantalLeden;
  }
  public void setTeam (String team){
    this.team = team;
  }
  public String getTeam(){
    return team;
  }
}
