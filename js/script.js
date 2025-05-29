const reviews = [
  {
    id: 1,
    name: "DANIAL HABIB",
    position: "CEO",
    img: "img/smiling.png",
    text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now",
  },

  {
    id: 2,
    name: "ESTELL",
    position: "CFO",
    img: "img/image 64.png",
    text: "It more shed went up is roof if loud case. Delay music in lived noise an.It more shed went up is roof if loud case. Delay music in lived noise an.",
  },

  {
    id: 3,
    name: "KASHIUD",
    position: "WEB DESIGNER",
    img: "img/13.jpg",
    text: "Never at water me might. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates ad eveniet possimus nulla, sapiente perferendis voluptatem quisquam repudiandae non. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly",
  },

  // {
  //     id:4,
  //     name: "COBRA",
  //     position: "WEB DEVELOPER",
  //     img: "img/bus3.jpg",
  //     text: "On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe.",
  // },

  {
    id: 5,
    name: "HELEN",
    position: "CONTENT CREATOR",
    img: "img/4.jpg",
    text: "Joy horrible moreover man feelings own shy.Request norland neither mistake for yet.Between the for morning assured.",
  },

  {
    id: 6,
    name: "BASIN",
    position: "SOCIAL MEDIA MANAGER",
    img: "img/7.jpg",
    text: "With lots of unique and useful features, you can easily manage your wallet easily without any problem.",
  },
];

// // first you need to get the targets being the img, the comment and the button
// const img = document.getElementById('img');
// const comment = document.getElementById('text')
// const prevBtn = document.querySelector('.butt-l')
// const nextBtn = document.querySelector('.butt-r')
// const name = document.getElementById('name')
// const position = document.getElementById('position')

// //set currentItem
// let currentItem = 0;

// //load initial item
// window.addEventListener('DOMContentLoaded', function() {
//     showPerson(currentItem)
// });

// //show person based on item
// function showPerson () {
//     const item = reviews[currentItem];
//     img.src = item.img
//     name.textContent = item.name
//     position.textContent = item.position
//     comment.textContent = item.text
// }

// //show person based on the button you click
// nextBtn.addEventListener('click', function(){
//     currentItem++;
//     if(currentItem > reviews.length - 1){
//         currentItem = 0
//     }

//     showPerson(currentItem);
// })

// prevBtn.addEventListener('click', function(){
//     currentItem--;
//     if (currentItem < 0){
//         currentItem = reviews.length - 1;
//     }
//     showPerson(currentItem)
// })

const img = document.getElementById("img");
const comment = document.getElementById("text");
const name = document.getElementById("name");
const position = document.getElementById("position");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

//show the initial one innit
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

let currentItem = 0;

//function to show person
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  comment.textContent = item.text;
  name.textContent = item.name;
  position.textContent = item.position;
}

//configuring the button to show each person and their position and comment and image
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
