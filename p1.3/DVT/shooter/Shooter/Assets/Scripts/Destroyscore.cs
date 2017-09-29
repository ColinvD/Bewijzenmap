using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Destroyscore : MonoBehaviour {
    public GameObject deleting;
    public GameObject[] olddeleting;

    void Awake()
    {
        deleting = GameObject.FindGameObjectWithTag("SaveValues") as GameObject;
        olddeleting = GameObject.FindGameObjectsWithTag("HighScoresList");
    }
    public void Delete()
    {
        Destroy(deleting);
        if(olddeleting.Length > 1)
        {
            Destroy(olddeleting[1]);
        }
    }
}
