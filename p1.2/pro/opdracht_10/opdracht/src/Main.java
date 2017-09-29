/**
 * Created by vanDo on 19-1-2017.
 */

import javafx.application.Application;
import javafx.event.EventHandler;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.Group;
import javafx.scene.shape.Rectangle;
import javafx.scene.control.Button;
import javafx.scene.input.MouseEvent;
import javafx.scene.transform.Rotate;
import javafx.scene.transform.Scale;
import javafx.scene.paint.Color;
import javafx.scene.paint.Paint;

public class Main extends Application{

public static void main(String[]args){
        launch(args);
        }

@Override
    public void start(Stage stage){

        Group rootNode = new Group();

        Scene scene = new Scene (rootNode, 800, 600);

        stage.setScene(scene);

        Group group1 = new Group();
        rootNode.getChildren().add(group1);

    Group group2 = new Group();
    rootNode.getChildren().add(group2);

    Rectangle vierkant1 = new Rectangle(100,100);
    Paint paint1 = Color.AQUA;
    vierkant1.setFill(paint1);
    vierkant1.relocate(200,200);
    group1.getChildren().add(vierkant1);

    Rectangle vierkant2 = new Rectangle(100,100);
    Paint paint2 = Color.LIGHTCORAL;
    vierkant2.setFill(paint2);
    vierkant2.relocate(400,200);
    group1.getChildren().add(vierkant2);

    Rectangle vierkant3 = new Rectangle(100,100);
    Paint paint3 = Color.BLACK;
    vierkant3.setFill(paint3);
    vierkant3.relocate(300,300);
    group1.getChildren().add(vierkant3);

    Rectangle vierkant4 = new Rectangle(100,100);
    Paint paint4 = Color.PERU;
    vierkant4.setFill(paint4);
    vierkant4.relocate(200,400);
    group1.getChildren().add(vierkant4);

    Rectangle vierkant5 = new Rectangle(100,100);
    Paint paint5 = Color.TEAL;
    vierkant5.setFill(paint5);
    vierkant5.relocate(400,400);
    group1.getChildren().add(vierkant5);

        Button links = new Button("links draaien");
        links.relocate(0,50);
        group2.getChildren().add(links);
    EventHandler<MouseEvent> draail = new EventHandler<MouseEvent>() {
        @Override
        public void handle(MouseEvent m) {
            group1.getTransforms().add(new Rotate(30,350,350));
            vierkant1.getTransforms().add(new Rotate(30,50,50));
            vierkant2.getTransforms().add(new Rotate(30,50,50));
            vierkant3.getTransforms().add(new Rotate(30,50,50));
            vierkant4.getTransforms().add(new Rotate(30,50,50));
            vierkant5.getTransforms().add(new Rotate(30,50,50));
        }
    };
    links.addEventHandler(MouseEvent.MOUSE_PRESSED, draail);

    Button rechts = new Button("rechts draaien");
    rechts.relocate(150,50);
    group2.getChildren().add(rechts);
    EventHandler<MouseEvent> draair = new EventHandler<MouseEvent>() {
        @Override
        public void handle(MouseEvent m) {
            group1.getTransforms().add(new Rotate(-30,350,350));
            vierkant1.getTransforms().add(new Rotate(-30,50,50));
            vierkant2.getTransforms().add(new Rotate(-30,50,50));
            vierkant3.getTransforms().add(new Rotate(-30,50,50));
            vierkant4.getTransforms().add(new Rotate(-30,50,50));
            vierkant5.getTransforms().add(new Rotate(-30,50,50));
        }
    };
    rechts.addEventHandler(MouseEvent.MOUSE_PRESSED, draair);

    Button groot = new Button("groter maken");
    groot.relocate(300,50);
    group2.getChildren().add(groot);
    EventHandler<MouseEvent> groter = new EventHandler<MouseEvent>() {
        @Override
        public void handle(MouseEvent m) {
            group1.getTransforms().add(new Scale(1.5,1.5, 350,350));
            vierkant1.getTransforms().add(new Scale(1.5,1.5, 50, 50));
            vierkant2.getTransforms().add(new Scale(1.5,1.5, 50, 50));
            vierkant3.getTransforms().add(new Scale(1.5,1.5, 50, 50));
            vierkant4.getTransforms().add(new Scale(1.5,1.5, 50, 50));
            vierkant5.getTransforms().add(new Scale(1.5,1.5, 50, 50));
        }
    };
    groot.addEventHandler(MouseEvent.MOUSE_PRESSED, groter);

    Button klein = new Button("kleiner maken");
    klein.relocate(450,50);
    group2.getChildren().add(klein);
    EventHandler<MouseEvent> kleiner = new EventHandler<MouseEvent>() {
        @Override
        public void handle(MouseEvent m) {
            group1.getTransforms().add(new Scale(1/1.5,1/1.5, 350, 350));
            vierkant1.getTransforms().add(new Scale(1/1.5, 1/1.5, 50,50));
            vierkant2.getTransforms().add(new Scale(1/1.5, 1/1.5, 50,50));
            vierkant3.getTransforms().add(new Scale(1/1.5, 1/1.5, 50,50));
            vierkant4.getTransforms().add(new Scale(1/1.5, 1/1.5, 50,50));
            vierkant5.getTransforms().add(new Scale(1/1.5, 1/1.5, 50,50));
        }
    };
    klein.addEventHandler(MouseEvent.MOUSE_PRESSED, kleiner);
        stage.show();

    }
}
