import javax.swing.JFrame;
import javax.swing.JLabel;
import java.awt.BorderLayout;
import javax.swing.ImageIcon;
import java.net.URL;
import java.awt.Dimension;
public class AnimationTest extends JFrame{
  AnimationTest(){
    super("test");
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setVisible(true);

    try{
        String url = "http://www.motorstown.com/images/honda-vfr-vtec-02.jpg";
        ImageIcon image = new ImageIcon(new URL(url));
        JLabel label = new JLabel(image);
        getContentPane().add(label, BorderLayout.CENTER);
    }catch(Exception e)
    {
      System.out.println("image not found! Check URL or network connection");
    }
      setSize(new Dimension(800,600));
  }
  public static void main(String[] args) {
      AnimationTest test = new AnimationTest();

  }
}
