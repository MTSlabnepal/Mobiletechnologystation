function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
// filter array 
let filterarray =[];

// gallery card array

let galleryarray = [
    {
        id:1,
        name : "iphone 13 pro max",
        src: "./img/iphone 13 pro max.jpg",
        desc : "Price- Rs 15000"
    },
    {
        id:2,
        name : "iphone 12 /pro",
        src: "./img/iphone 12.jpg",
        desc : "Price - Rs 11000"
    },
    {
        id:3,
        name : "ipad air 2",
        src: "./img/ipad air 2.jpg",
        desc : "Price - Rs 5500"
    },
    {
        id:4,
        name : "samsung note 10+",
        src: "./img/samsung note 10.jpg",
        desc : "Price - Rs 10000"
    },
    {
        id:5,
        name : "samsung m20",
        src: "./img/Samsung m-20.jpg",
        desc : "Price - Rs 1300"
    },
    {
        id:6,
        name : "samsung s9",
        src: "./img/s9.jpg",
        desc : "Price - Rs 5500"
    },
    {
        id:7,
        name : "iphone 6",
        src: "./img/iphone 6.jpg",
        desc : "Price - Rs 1300"
    },
    {
        id:8,
        name : "iphone 6+",
        src: "./img/iphone 6+.jpg",
        desc : "Price - Rs 1300"
    },
    {
        id:9,
        name : "iphone 6s",
        src: "./img/iphone 6s.jpg",
        desc : "Price - Rs 1300"
    },
    {
        id:10,
        name : "iphone 7",
        src: "./img/iphone 7.jpg",
        desc : "Price - Rs 1300"
    },
    {
        id:11,
        name : "iphone 8",
        src: "./img/Iphone 88.jpg",
        desc : "Price - Rs 1300"
    },
    {
        id:12,
        name : "iphone x",
        src: "./img/iphone x.jpg",
        desc : "Price- Rs 5000"
    },
    {
        id:13,
        name : "iphone xs",
        src: "./img/iphone xs.jpg",
        desc : "Price - Rs 5000"
    },
    {
        id:14,
        name : "iphone xs max",
        src: "./img/iphone x s max.jpg",
        desc : "Price - Rs 7500"
    },
    {
        id:15,
        name : "iphone xr",
        src: "./img/iphone xr.jpg",
        desc : "Price - Rs 7500"
    },
    {
        id:16,
        name : "iphone 11",
        src: "./img/iphone 11.jpg",
        desc : "Price - Rs 7500"
    },
    {
        id:17,
        name : "iphone 11 pro",
        src: "./img/iphone 11 pro.jpg",
        desc : "Price - Rs 7500"
    },
    {
        id:18,
        name : "iphone 11 pro max",
        src: "./img/iphone 11 pro max.jpg",
        desc : "Price - Rs 9500"
    },
    {
        id:19,
        name : "iphone 12 pro max",
        src: "./img/iphone 12 pro max.jpg",
        desc : "Price - Rs 14500"
    },
    {
        id:20,
        name : "samsung s8",
        src: "./img/s8.jpg",
        desc : "Price - Rs 4000"
    }
   ];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra){
   document.getElementById("card").innerText = "";
   for(var i=0;i<curarra.length;i++){
       document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
               <h4 class="text-capitalize text-center">${curarra[i].name}</h4>

        <div class= "tablet"><img src="${curarra[i].src}" width="100%" height="300px"/> </div>
          <p class="mt-2">${curarra[i].desc}</p>
       <button class="btn btn-primary w-100 mx-auto">Repair Now</button>
       
          </div>
          </div>
       `
   }

}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }

   });
   if(this.value==""){
       showgallery(galleryarray);
   }
   else{
       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }
       else{

           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});


