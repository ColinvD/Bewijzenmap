using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CreateRay : MonoBehaviour {
    
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;
        Debug.DrawRay(ray.origin, ray.direction * 100, Color.red);

        if (Physics.Raycast(ray, out hit, 50f) && Input.GetMouseButtonDown(0))
        {
            hit.collider.GetComponent<ColorChange>().Change();
        }
            
    }
}
