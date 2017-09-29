using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestroyOnCollision : MonoBehaviour {

    public int scoreValue;
    private int damageValue = 1;
    private GameController gameController;

    void Start ()
    {
        GameObject gameControllerObject = GameObject.FindWithTag("GameController");
        if (gameControllerObject != null)
        {
            gameController = gameControllerObject.GetComponent<GameController>();
        }
        if (gameController == null)
        {
            Debug.Log("Cannot find 'GameController' script");
        }
    }
    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Bullet"))
        {
            Destroy(other.gameObject);
            Destroy(this.gameObject);

            gameController.AddScore(scoreValue);
        }
        if (other.gameObject.CompareTag("LoseLiveWall"))
        {
            Destroy(this.gameObject);

            gameController.LoseLive(damageValue);
        }
    }
}
