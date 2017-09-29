import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.Group;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.GridPane;
import javafx.scene.image.Image;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;
import javafx.scene.text.Text;
import javafx.scene.text.Font;
import javafx.scene.shape.Rectangle;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
import javafx.geometry.Insets;
import java.util.List;
import javafx.animation.RotateTransition;
import javafx.util.Duration;
import javafx.animation.Timeline;
import javafx.scene.paint.Color;

public class Main extends Application{
  public void start(Stage stage){
    stage.setTitle("Test application");
    //Image image = new Image("http://www.ducati.ms/forums/attachments/sport-touring/100707d1320734419-honda-vfr800-vtec-vs-st4s-vf.jpg");
    /*
    Button btn = new Button();
    btn.setText("hello");
    btn.setOnAction(new EventHandler<ActionEvent>(){

      public void handle(ActionEvent event)
      {
        System.out.println("YO!!");
      }
    });
    */
    Group root = new Group();
/*
    GridPane grid = new GridPane();
    grid.setAlignment(Pos.TOP_LEFT);
    grid.setHgap(2);
    grid.setVgap(2);
    grid.setPadding(new Insets(2,2,2,2));
*/
    stage.setScene(new Scene(root, 800, 600));

    Button btn = new Button();
    btn.setText("click me");
    Color c = Color.rgb(124,23,200);
    Rectangle rect = new Rectangle(100,100, c);
    rect.setX(200);
    rect.setY(200);

    root.getChildren().add(btn);

    RotateTransition rt = new RotateTransition(Duration.millis(1200),btn);
    rt.setToAngle(90);
    rt.setCycleCount(5);

    root.getChildren().add(rect);

    rt.play();
    Group labelGroup = new Group();

    Label label = new Label("hallo ik ben een label");
    labelGroup.getChildren().add(label);
    //label.setX(200);
    root.getChildren().add(labelGroup);

  //  TextField text = new TextField("hallo");
    //text.setX(300);
    //root.getChildren().add(text);

    stage.show();
  }
  private void checkFonts(){
    List<String> sysfonts = Font.getFamilies();
    for(String f : sysfonts){
        System.out.println(f);
    }
  }
}
