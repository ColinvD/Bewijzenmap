using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class scores : MonoBehaviour {

    public Text scorestext;
    public GameObject values;
    public convertinfo script;

    void Awake()
    {
        values = GameObject.FindGameObjectWithTag("SaveValues") as GameObject;
        script = values.GetComponent<convertinfo>();
    }

    void Update()
    {
        scorestext.text = "Your Score: " + script.escore + "\n You survived: " + script.etime.ToString("F1") + "Seconds";
    }
}
