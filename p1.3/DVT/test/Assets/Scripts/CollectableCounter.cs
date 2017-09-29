using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollectableCounter : MonoBehaviour {
    //berekenen hoeveel collectables er in de scene zijn
    private int _collectablesInScene;

    private int _collecatablesCollected = 0;

    void Start()
    {
        GameObject[] collectables = GameObject.FindGameObjectsWithTag("Collectable");
        _collectablesInScene = collectables.Length;
        print(_collectablesInScene);
    }
    //bijhouden hoeveel collectables zijn opgepakt
        void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Collectable")
        {
            _collecatablesCollected++;
            Destroy(other.gameObject);
            if (_collecatablesCollected == _collectablesInScene)
            {
                print("you win");
            }
        }
    }
    //als we een collectable oppakken, is dat 
}
