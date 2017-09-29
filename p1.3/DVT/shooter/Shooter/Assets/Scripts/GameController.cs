using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
//using UnityEngine.SceneManagement;

public class GameController : MonoBehaviour {

    public Text scoreText;
    public Text livesText;
    public Text timeText;
    public Text deathText;
    public Text endScoreText;
    public Text endTimeText;
    public GameObject deActivating;
    public GameObject deActivatingPick;
    public GameObject gettingActivated;
    public Canvas activate;
    private int lives;
    private int score;
    private float thetime;
    GameObject[] gameObjects;
    GameObject[] gameObjects2;
    private GameController valueController;
    private int endscore;
    private float endtime;
    public convertinfo script;

    void Start ()
    {
        thetime = 0.0f;
        score = 0;
        lives = 3;
        deathText.text = "";
        endScoreText.text = "";
        endTimeText.text = "";
        UpdateScore();
        UpdateLives();
    }

    public void LoseLive(int newDamageValue)
    {
        lives -= newDamageValue;
        UpdateLives();
    }

    void UpdateLives()
    {
        livesText.text = "Lives: " + lives;
    }

    void SurviveTime ()
    {
        thetime += Time.deltaTime;
        timeText.text = "Time: " + thetime.ToString("F1") + " seconds";
    }

    public void AddScore (int newScoreValue)
    {
        score += newScoreValue;
        UpdateScore();
    }

    void UpdateScore ()
    {
        scoreText.text = "Score: " + score;
    }

    void DestroyAllObjects()
    {
        gameObjects = GameObject.FindGameObjectsWithTag("Enemy");
        gameObjects2 = GameObject.FindGameObjectsWithTag("Pick Up");

        for(var i = 0; i < gameObjects.Length; i++)
        {
            Destroy(gameObjects[i]);
        }
        for (var i = 0; i < gameObjects2.Length; i++)
        {
            Destroy(gameObjects2[i]);
        }
    }
    
    void Update()
    {
        if (lives <= 0)
        {
            deActivating.SetActive(false);
            lives = 0;
            deathText.text = "Game Over!!!";
            endScoreText.text = "Your end score: " + score;
            endTimeText.text = "You survived: " + thetime.ToString("F1") + " seconds";
            gettingActivated.SetActive(true);
            DestroyAllObjects();
            endtime = thetime;
            endscore = score;
            script.escore = endscore;
            script.etime = endtime;
        }
        else
        {
            SurviveTime();
        }
    }
}
