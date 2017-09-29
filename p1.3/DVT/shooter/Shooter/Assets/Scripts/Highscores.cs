using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Highscores : MonoBehaviour
{
    public Text[] highscore;

    public GameObject theirscore;
    public GameObject currentHighscore;
    public convertinfo script;
    public Highscoreslist script2;

    void Start()
    {

        theirscore = GameObject.FindGameObjectWithTag("SaveValues") as GameObject;
        currentHighscore = GameObject.FindGameObjectWithTag("HighScoresList") as GameObject;
        script = theirscore.GetComponent<convertinfo>();
        script2 = currentHighscore.GetComponent<Highscoreslist>();
        
        for(var i = 0; i < script2.scorearray.Length; i++)
        {
            if(script.escore > script2.scorearray[i])
            {
                for(var j = script2.scorearray.Length-1; j != i; j--)
                {
                    script2.scorearray[j] = script2.scorearray[j-1];
                    script2.timearray[j] = script2.timearray[j-1];
                }
                script2.scorearray[i] = script.escore;
                script2.timearray[i] = script.etime;
                break;
            }
        }

        for (int i = 0; i < highscore.Length; i++)
        {
            highscore[i].text = "Score:" + script2.scorearray[i] + ", " + "Time: " + script2.timearray[i].ToString("F1") + " seconds";
        }
    }
}