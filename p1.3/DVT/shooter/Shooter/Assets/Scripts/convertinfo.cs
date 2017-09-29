using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class convertinfo : MonoBehaviour {

    public int escore;
    public float etime;

    void Awake()
    {
        DontDestroyOnLoad(this);
    }
}
