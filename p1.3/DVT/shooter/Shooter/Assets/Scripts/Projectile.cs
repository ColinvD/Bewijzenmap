﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Projectile : MonoBehaviour
{
    [SerializeField]
    private float _speed;

    private Rigidbody _rigidbody;

    void Awake()
    {
        _rigidbody = GetComponent<Rigidbody>();
    }

    void FixedUpdate()
    {
        Vector3 velocity = transform.forward * _speed * Time.fixedDeltaTime;
        _rigidbody.MovePosition(_rigidbody.position + velocity);

         //DestroyImmediate(this, true);
         Destroy(this.gameObject, 3);
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Walls"))
        {
            Destroy(this.gameObject);
        }
    }
}
