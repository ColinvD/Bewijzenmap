import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;
import java.io.File;
import java.io.IOException;
import javax.sound.sampled.LineListener;
import javax.sound.sampled.LineEvent;
import java.net.URL;
//Class that loads and plays a soundfile.
public class SoundTest{
  //private boolean done = false;
  public static void main(String[] args) {
      SoundTest self = new SoundTest();
      if(args.length == 0){
        System.out.println("Please provide the filename of the .wav as a commandline argument.");
      }
      else{
        self.test(args[0]);
      }
  }
  public void test(String filename){
    //create soundfile .mp3 files are not supported.
    //File soundFile = new File(filename + ".wav");
    URL url = (URL) this.getClass().getResource(filename+".wav");
    //use url to find AudioInputStream
    try{
      //Get input from soundFile
      AudioInputStream inputStream = AudioSystem.getAudioInputStream(url);
      DataLine.Info info = new DataLine.Info(Clip.class, inputStream.getFormat());

      try{
        //Get Clip from the AudioSystem
        Clip line = (Clip)AudioSystem.getLine(info);
        try {
            //Open input in the Clip
            line.open(inputStream);
              //Check if Clip is finished
/*
            line.addLineListener(new LineListener(){
              public void update(LineEvent le){
                System.out.println("check end of sound");
                if(le.getType() == LineEvent.Type.STOP){
                  System.out.println("sound finished");
                  le.getLine().close();
                  System.exit(0);
                  done = true;
                }
              }
            });
*/
            //start the sound
            line.start();

            //must keep current thread alive but sleeping until soundThread is finished
            int ms = ((int) line.getMicrosecondLength())/1000;
            Thread.sleep(ms);

        }//Exception when failing to open input stream
        catch (IOException e) {
          System.out.println(e.toString());
        }
      //exception when failing to get the Clip from the AudioSystem
      }catch(LineUnavailableException e)
      {
        System.out.println(e.toString());
      }
    }
    //Exception when failing to get the inputStream from the AudioSystem through te filepath
    catch(Exception e){
      System.out.println(e.toString());
    }
  }
}
