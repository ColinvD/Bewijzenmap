using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerShoot : MonoBehaviour {

    public GameObject shot;
    public Transform shotSpawn;

    public void Shoot()
    {
        Instantiate(shot,shotSpawn.position, shotSpawn.rotation);
    }
}
