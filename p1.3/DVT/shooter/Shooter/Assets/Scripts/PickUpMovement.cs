using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PickUpMovement : MonoBehaviour {
    
    public float _speed;
    public float _tumble;

    private Rigidbody _rigidbody;

    void Awake()
    {
        _rigidbody = GetComponent<Rigidbody>();
    }

    void Start()
    {
        _rigidbody.velocity = transform.forward * _speed;
    }

    void FixedUpdate()
    {
        _rigidbody.angularVelocity = Random.insideUnitCircle * _tumble;
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("LoseLiveWall"))
        {
            Destroy(this.gameObject);
        }
    }
}
