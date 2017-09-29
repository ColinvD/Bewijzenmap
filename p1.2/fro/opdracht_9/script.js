var thumbnails = document.getElementById('thumbnails');
var imageholder = document.getElementById('imageholder');
var imageplace = ["http://www.tvenschedefm.nl/cwm/fm/userfiles/content/eyecatcher/normal/25697_4_lidl_2.jpg",
"http://www.directory-local.com/wp-content/uploads/2014/08/Lidl.jpg",
"http://static.panoramio.com/photos/large/116823248.jpg",
"http://marnan.eu/media/catalog/product/cache/3/image/0cf732f99ef01132ca56ab96cdaebad3/3/6/3662.jpg",
"http://static.panoramio.com/photos/large/43654278.jpg",
"http://progressive.bg/image/data/Newsletter/Newsletter%202013/Q4_2013/lidl-2_0.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Innenansicht_Lidl.jpg/1024px-Innenansicht_Lidl.jpg",
"http://photos1.blogger.com/x/blogger/1424/216/1600/479249/DSC00017.jpg",
"https://farm8.static.flickr.com/7472/15392303753_5a34865386_b.jpg",
"http://www.europeanceo.com/wp-content/uploads/2015/08/Lidl-and-Aldi.jpg"];

imageholder.src = imageplace[0];

for(let i=0; i<imageplace.length; i++){
  let img = document.createElement('img');
  let src = document.createAttribute('src');
  src.value = imageplace[i];
  img.setAttributeNode(src);
  thumbnails.appendChild(img);
  img.addEventListener('click',()=>{
    imageholder.src = imageplace[i];//i = de identiteit
      plaatje.style.borderColor = "black";
  })
}
