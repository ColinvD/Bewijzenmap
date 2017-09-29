var thumbnails = document.getElementById('thumbnails');
var imageholder = document.getElementById('imageholder');

var imageNames = ["1.jpg",
				"2.jpg",
				"3.jpg",
				"4.jpg",
				"5.jpg",
				"6.jpg",
				"7.jpg",
				"8.jpg",
				"9.jpg",
				"10.jpg",
				"11.jpg",
				"12.jpg",
				"13.jpg",
				"14.jpg",
				"15.jpg",
				"16.jpg",
				"17.jpg",
				"18.jpg",
				"19.jpg",
				"20.jpg",
				"21.jpg",
				"22.jpg",
				"23.jpg"
				];

imageholder.src = "big/" + imageNames[0];

for(let i=0; i<imageNames.length; i++){
  let img = document.createElement('img');
  let src = document.createAttribute('src');
  src.value = "small/" + imageNames[i];
  img.setAttributeNode(src);
  thumbnails.appendChild(img);
  img.addEventListener('click',()=>{
    imageholder.src = "big/" + imageNames[i];
  })
}
