using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Grid : MonoBehaviour {
    public GameObject[,] grid;
    public int lengte;
    public int hoogte;
    public Sprite[] sprites;
    private bool aanuit = true;

    // Use this for initialization
    void Start () {
        grid = new GameObject[lengte, hoogte];
        for (int i = 0; i < lengte; i++)
        {
            for (int j = 0; j < hoogte; j++)
            {
                grid[i, j] = new GameObject("object" + i + " , " + j);
                grid[i, j].gameObject.transform.position = new Vector2(this.gameObject.transform.position.x + 0.5f + i, this.gameObject.transform.position.y + 0.5f + j);
                grid[i, j].gameObject.transform.localScale = new Vector2(5, 5);
                grid[i, j].AddComponent<SpriteRenderer>().sprite = sprites[0];
                grid[i, j].AddComponent<ColorChange>();
                grid[i, j].AddComponent<BoxCollider>();
            }
        }
    }
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if(!aanuit)
            {
                StopAllCoroutines();
                aanuit = true;
            }
            else
            {
                StartCoroutine("Go");
                aanuit = false;
            }
        }
	}

    private IEnumerator Go()
    {
        List<ColorChange> changeList = new List<ColorChange>();
        while (true)
        {
            for (int i = 0; i < 60; i++)
            {
                yield return null;
            }

            changeList.Clear();
            for (int i = 0; i < lengte; i++)
            {     
                for (int j = 0; j < hoogte; j++)
                {
                    int amount = 0;
                    for (int l = -1; l <= 1; l++)
                    {
                        for (int m = -1; m <= 1; m++)
                        {
                            if (!(l == 0 && m == 0))
                            {
                                if ((i + l) >= 0 && (j + m) >= 0 && (i + l) < lengte && (j + m) < hoogte)
                                {
                                    if (grid[i + l, j + m].GetComponent<ColorChange>().alive == true)
                                    {
                                        amount++;
                                    }
                                }
                            }
                        }
                    }

                    if (amount == 3)
                    {
                        if (!grid[i, j].GetComponent<ColorChange>().alive)
                        {
                            changeList.Add(grid[i, j].GetComponent<ColorChange>());
                        }
                    }
                    else if (amount != 2)
                    {
                        if (grid[i, j].GetComponent<ColorChange>().alive)
                        {
                            changeList.Add(grid[i, j].GetComponent<ColorChange>());
                        }
                    }
                }
            }

            for (int i = 0; i < changeList.Count; i++)
            {
                changeList[i].Change();
            }
        }
        
    }
}
