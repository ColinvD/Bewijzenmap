using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ArrayListLes : MonoBehaviour {

    public GameObject[] mijnArray;
    public List<GameObject> mijnList;
	// Use this for initialization
	void Start () {

        mijnArray = new GameObject[4];
        for (int i = 0; i < mijnArray.Length; i++)
        {
            mijnArray[i] = new GameObject (i.ToString());
            print(mijnArray[i].name);
            print(mijnArray.Length);
        }

        for (int i = 0; i < 4; i++)
        {
            mijnList.Add(new GameObject(i.ToString()));
            print("naam" + mijnList[i].name);
            print("aantal" +mijnList.Count);
        }
    }
	
	// Update is called once per frame
	void Update () {
		
	}
}
