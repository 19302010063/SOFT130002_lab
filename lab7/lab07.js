const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

var element = document.getElementsByClassName("flex-container")[0];
//human
var item = document.createElement("div");
item.setAttribute("class","item");

var h3 = document.createElement("h3");
h3.innerHTML= "Genre : Human";
item.appendChild(h3);

var innerbox = document.createElement("div");
innerbox.setAttribute("class","inner-box");

var h31 = document.createElement("h3");
h31.innerHTML = "Micheal Jackson";
h31.style.display = "inline";
innerbox.appendChild(h31);

var h5 = document.createElement("h5");
h5.innerHTML = ("lifetime: 1022-1055");
h5.style.display = "inline";
h5.style.margin="0 0 0 1em";
innerbox.appendChild(h5);

item.appendChild(innerbox);

var innerbox1 = document.createElement("div");

innerbox1.setAttribute("class","inner-box");
var h32 = document.createElement("h3");
h32.innerHTML = "Popular photos";
innerbox1.appendChild(h32);

var img1 = document.createElement("img");
img1.setAttribute("class","photo");
img1.src="human1.jpg";
innerbox1.appendChild(img1);

var img2 = document.createElement("img");
img2.setAttribute("class","photo");
img2.src="human2.jpg";
innerbox1.appendChild(img2);

var img3 = document.createElement("img");
img3.setAttribute("class","photo");
img3.src="human3.jpg";
innerbox1.appendChild(img3);

item.appendChild(innerbox1);

var button = document.createElement("button");
button.innerHTML = "Visit";
item.appendChild(button);

element.appendChild(item);


//classical
var item1 = document.createElement("div");
item1.setAttribute("class","item");
var h3 = document.createElement("h3");
h3.innerHTML= "Genre : Classical";
item1.appendChild(h3);

var innerbox = document.createElement("div");
innerbox.setAttribute("class","inner-box");

var h31 = document.createElement("h3");
h31.innerHTML = "Maria JK";
h31.style.display = "inline";
innerbox.appendChild(h31);

var h5 = document.createElement("h5");
h5.innerHTML = ("lifetime: 1920-2001");
h5.style.display = "inline";
h5.style.margin="0 0 0 1em";
innerbox.appendChild(h5);

item1.appendChild(innerbox);

var innerbox1 = document.createElement("div");

innerbox1.setAttribute("class","inner-box");
var h32 = document.createElement("h3");
h32.innerHTML = "Popular photos";
innerbox1.appendChild(h32);

var img1 = document.createElement("img");
img1.setAttribute("class","photo");
img1.src="classical1.jpg";
innerbox1.appendChild(img1);

var img2 = document.createElement("img");
img2.setAttribute("class","photo");
img2.src="classical2.jpg";
innerbox1.appendChild(img2);

item1.appendChild(innerbox1);

var button = document.createElement("button");
button.innerHTML = "Visit";
item1.appendChild(button);

element.appendChild(item1);

//abstract
var item2 = document.createElement("div");
item2.setAttribute("class","item");
var h3 = document.createElement("h3");
h3.innerHTML= "Genre : Abstract";
item2.appendChild(h3);

var innerbox = document.createElement("div");
innerbox.setAttribute("class","inner-box");

var h31 = document.createElement("h3");
h31.innerHTML = "John Herry UY";
h31.style.display = "inline";
innerbox.appendChild(h31);

var h5 = document.createElement("h5");
h5.innerHTML = ("lifetime: 1894-1928");
h5.style.display = "inline";
h5.style.margin="0 0 0 1em";
innerbox.appendChild(h5);

item2.appendChild(innerbox);

var innerbox1 = document.createElement("div");

innerbox1.setAttribute("class","inner-box");
var h32 = document.createElement("h3");
h32.innerHTML = "Popular photos";
innerbox1.appendChild(h32);

var img1 = document.createElement("img");
img1.setAttribute("class","photo");
img1.src="abstract1.jpg";
innerbox1.appendChild(img1);

var img2 = document.createElement("img");
img2.setAttribute("class","photo");
img2.src="abstract2.jpg";
innerbox1.appendChild(img2);

var img3 = document.createElement("img");
img3.setAttribute("class","photo");
img3.src="abstract3.jpg";
innerbox1.appendChild(img3);

var img4 = document.createElement("img");
img4.setAttribute("class","photo");
img4.src="abstract4.jpg";
innerbox1.appendChild(img4);

var img5 = document.createElement("img");
img5.setAttribute("class","photo");
img5.src="abstract5.jpg";
innerbox1.appendChild(img5);

item2.appendChild(innerbox1);

var button = document.createElement("button");
button.innerHTML = "Visit";
item2.appendChild(button);

element.appendChild(item2);

//beauty
var item3 = document.createElement("div");
item3.setAttribute("class","item");
var h3 = document.createElement("h3");
h3.innerHTML= "Genre : Abstract";
item3.appendChild(h3);

var innerbox = document.createElement("div");
innerbox.setAttribute("class","inner-box");

var h31 = document.createElement("h3");
h31.innerHTML = "John Herry UY";
h31.style.display = "inline";
innerbox.appendChild(h31);

var h5 = document.createElement("h5");
h5.innerHTML = ("lifetime: 1894-1928");
h5.style.display = "inline";
h5.style.margin="0 0 0 1em";
innerbox.appendChild(h5);

item3.appendChild(innerbox);

var innerbox1 = document.createElement("div");

innerbox1.setAttribute("class","inner-box");
var h32 = document.createElement("h3");
h32.innerHTML = "Popular photos";
innerbox1.appendChild(h32);

var img1 = document.createElement("img");
img1.setAttribute("class","photo");
img1.src="abstract1.jpg";
innerbox1.appendChild(img1);

var img2 = document.createElement("img");
img2.setAttribute("class","photo");
img2.src="abstract2.jpg";
innerbox1.appendChild(img2);

var img3 = document.createElement("img");
img3.setAttribute("class","photo");
img3.src="abstract3.jpg";
innerbox1.appendChild(img3);

var img4 = document.createElement("img");
img4.setAttribute("class","photo");
img4.src="abstract4.jpg";
innerbox1.appendChild(img4);

var img5 = document.createElement("img");
img5.setAttribute("class","photo");
img5.src="abstract5.jpg";
innerbox1.appendChild(img5);

item3.appendChild(innerbox1);

var button = document.createElement("button");
button.innerHTML = "Visit";
item3.appendChild(button);

element.appendChild(item3);



















