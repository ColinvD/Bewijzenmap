using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Jump : MonoBehaviour {
    public float JumpSpeed = 100.0f;
    void JumpHigh()
    {
        rigidbody.AddForce(Vector3.up * JumpSpeed);
    }
    void Update()
    {
        
    }
}
