import javafx.application.Application;
import javafx.event.EventHandler;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextArea;
import javafx.scene.input.MouseEvent;
import javafx.stage.Stage;

/**
 * Created by e.henraat on 11-1-2017.
 */
public class Main extends Application {

    public void start(Stage stage)
    {
        Group root = new Group();
        stage.setScene(new Scene(root, 800, 600 ));
        stage.setTitle("Testing event handlers");

        TextArea t = new TextArea("");

        Button[] buttons = new Button[5];

        //button with anonymous eventhandler which cannot be reused.
        buttons[0] = new Button("button 1");
        buttons[0].relocate(0,250);
        buttons[0].addEventHandler( MouseEvent.MOUSE_CLICKED, new EventHandler<MouseEvent>(){
            public void handle(MouseEvent event) {
                t.setText("anonymous handler activated!!");
            }
        });

        //creating a variable with a reusable eventhandler
        EventHandler<MouseEvent> handler1 = new EventHandler<MouseEvent>() {
            @Override
            public void handle(MouseEvent event) {
                t.setText("defined handler1 activated");
            }
        };
        //buttons with defined and reusable event handler
        buttons[1] = new Button("button 2");
        buttons[1].relocate(100,250);
        buttons[1].addEventHandler(MouseEvent.MOUSE_CLICKED, handler1);//using the eventhandler once
        buttons[2] = new Button("button 3");
        buttons[2].relocate(200,250);
        buttons[2].addEventHandler(MouseEvent.MOUSE_CLICKED, handler1);//using the same eventhandler again

        //button which uses a single line Lambda expression
        buttons[3] = new Button("button 4");
        buttons[3].relocate(300,250);
        buttons[3].addEventHandler(MouseEvent.MOUSE_CLICKED, (MouseEvent event) -> t.setText("single line lambda expression activated"));

        //button which uses a multiline lambda expression
        buttons[4] = new Button("button 5");
        buttons[4].relocate(400,250);
        buttons[4].addEventHandler(MouseEvent.MOUSE_CLICKED, (MouseEvent event) ->{
            t.setText("another lambda expression");
            t.appendText(" with more than one statement");
        });

        //Add all buttons to a group
        Group buttonGroup = new Group();
        for(int i=0;i<buttons.length;i++){
            buttonGroup.getChildren().add(buttons[i]);
        }

        //Adding an event handler to a group activates it for all buttons
        buttonGroup.addEventHandler(MouseEvent.MOUSE_EXITED, (MouseEvent m) -> {
            t.clear();
        });

        root.getChildren().add(t);
        root.getChildren().add(buttonGroup);

        stage.show();

    }
}
