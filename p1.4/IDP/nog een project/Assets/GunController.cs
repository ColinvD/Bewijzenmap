using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GunController : MonoBehaviour {

    public Gun gun;

	// Update is called once per frame
	void Update () {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            gun.Shoot();
        }
        if (Input.GetKeyDown(KeyCode.R))
        {
            gun.Reload();
        }
    }
}
