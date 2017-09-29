using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RocketLauncher : Gun
{
    public override void Shoot()
    {
        base.Shoot();
        Debug.Log("RocketLauncher Shoot");
    }
}
