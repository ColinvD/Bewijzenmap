﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField]
    private float speed;

    private Rigidbody _rigidbody;
    private Vector3 _inputDirection;

    void Start()
    {
        _rigidbody = GetComponent<Rigidbody>();
    }

    void Update()
    {
        //retrieve input
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");
        float y = Input.GetAxis("Jump");
        _inputDirection = new Vector3(x, y, z);
    }

    void FixedUpdate()
    {
        //move the player using physics
        _rigidbody.AddForce(_inputDirection * speed);
    }
}