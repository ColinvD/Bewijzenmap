using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawn : MonoBehaviour
{
    public GameObject Enemy;
    public Transform EnemySpawnPlace;
    private float SpawnTime = 0.50f;

    private float nextEnemy;

    void Update()
    {
        Vector3 position = new Vector3(Random.Range(-9.0f, 9.0f), EnemySpawnPlace.position.y + 1, EnemySpawnPlace.position.z);
        if (Time.time > nextEnemy)
        {
            nextEnemy = Time.time + SpawnTime;
            Instantiate(Enemy, position, EnemySpawnPlace.rotation);
        }
    }
}