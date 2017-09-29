using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Highscoreslist : MonoBehaviour {
    public int [] scorearray/*= {200, 180, 167, 153, 136, 100, 96, 70, 57, 30}*/;
    public float[] timearray/* = {200.3f, 190.4f, 178.5f, 155.6f, 137.2f, 101.2f, 97.4f, 74.7f, 57.3f, 32.6f }*/;

    void Awake()
    {
        DontDestroyOnLoad(this);
    }
}
