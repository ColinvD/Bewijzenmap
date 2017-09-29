using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SniperRifle : Gun
{
    public override void Shoot()
    {
        base.Shoot();
        Debug.Log("SniperRifle Shoot");
    }
}
