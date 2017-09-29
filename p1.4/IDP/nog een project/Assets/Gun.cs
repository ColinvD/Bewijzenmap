using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gun : MonoBehaviour {

    [SerializeField]
    private int ClipSize;
    [SerializeField]
    private int BulletsLeft;

    public virtual void Shoot()
    {
        if(BulletsLeft > 0)
        {
            BulletsLeft -= 1;
            Debug.Log("gunShoot");
        } else
        {
            Debug.Log("Out of ammo");
        }
        
    }

    public void Reload()
    {
        BulletsLeft = ClipSize;
        Debug.Log(ClipSize);
        Debug.Log(BulletsLeft);
    }
}
