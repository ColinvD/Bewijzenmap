using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ColorChange : MonoBehaviour {

    public bool alive;

    void Start()
    {
        if (alive == true)
        {
            this.gameObject.GetComponent<SpriteRenderer>().color = Color.red;
        }
        else if (alive == false)
        {
            this.gameObject.GetComponent<SpriteRenderer>().color = Color.white;
        }
    }

    public void Change()
    {
        alive = !alive;
        if (alive == true)
        {
            this.gameObject.GetComponent<SpriteRenderer>().color = Color.red;
        }
        else if (alive == false)
        {
            this.gameObject.GetComponent<SpriteRenderer>().color = Color.white;
        }
    }
}
