using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerInput : MonoBehaviour {
    
    private PlayerMovement _playerMovement;
    private PlayerShoot _playerShoot;
    private float distance = 50f;
    public LayerMask layer_mask = 8;
    private float fireRate = 0.25f;
    private Rigidbody _rigidbody;

    private float nextFire;
    void Awake()
    {
        _rigidbody = GetComponent<Rigidbody>();
        _playerMovement = GetComponent<PlayerMovement>();
        _playerShoot = GetComponent<PlayerShoot>();

        //float layer_mask = LayerMask.GetMask("Player");
    }
    void Update()
    {
        //float moveLeft = Input.GetKey("left")? -0.25f : 0.0f;
        //float moveRight = Input.GetKey("right")? 0.25f : 0.0f;
        //float moveLeft2 = Input.GetKey("a") ? -0.25f : 0.0f;
        //float moveRight2 = Input.GetKey("d") ? 0.25f : 0.0f;
        float moveKey = Input.GetAxis("Horizontal")*0.25f;

        //Vector3 move = new Vector3(moveRight + moveLeft + moveLeft2 + moveRight2, 0.0f, 0.0f);
        Vector3 move = new Vector3(moveKey, 0.0f, 0.0f);
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

        RaycastHit hit;
        Debug.DrawRay(ray.origin, ray.direction * 100);

        _rigidbody.position += move;

        if (Physics.Raycast(ray, out hit, distance, layer_mask))
        {
            _playerMovement.LookAt(hit.point);
           // Vector3 moving = move;

        }
        
        if (Input.GetMouseButton(0) && Time.time > nextFire)
        {
            nextFire = Time.time + fireRate;
            _playerShoot.Shoot();
        }
        if (fireRate < 0.15)
        {
            fireRate = 0.15f;
        }
        if (fireRate > 0.5)
        {
            fireRate = 0.5f;
        } 
    }
    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Pick Up"))
        {
            Destroy(other.gameObject);
            fireRate -= 0.05f;
        }
        if (other.gameObject.CompareTag("Enemy"))
        {
            Destroy(other.gameObject);
            fireRate += 0.05f;
        }
    }
}
