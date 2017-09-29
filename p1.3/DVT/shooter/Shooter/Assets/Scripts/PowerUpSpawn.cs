using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PowerUpSpawn : MonoBehaviour
{
    public GameObject PowerUp;
    public Transform PowerUpSpawnPlace;
    //private float SpawnTime = 0.50f;

    private float nextPowerUp;
    void Update()
    {
        Vector3 position = new Vector3(Random.Range(-9.0f, 9.0f), PowerUpSpawnPlace.position.y + 1, PowerUpSpawnPlace.position.z);
        Quaternion spawnRotation = Quaternion.identity;
        if (Time.time > nextPowerUp)
        {
            nextPowerUp = Time.time + Random.Range(5,15);
            Instantiate(PowerUp, position, spawnRotation);
        }
    }
}