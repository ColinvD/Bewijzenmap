/**
 * Created by vanDo on 12-1-2017.
 */

import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.Group;
import javafx.scene.control.TextField;

public class Main extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage stage) {

        Group rootNode = new Group();

        Scene scene = new Scene(rootNode, 800, 600);

        stage.setScene(scene);

        Group group1 = new Group();
        rootNode.getChildren().add(group1);

        TextField tekstveld = new TextField("Hello World");
        tekstveld.relocate(50,80);
        group1.getChildren().add(tekstveld);

        stage.show();
    }
}
