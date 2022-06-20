const { createApp } = Vue;

createApp({
  data() {
    return {
      picTrans: "pictures/IMG_004.png",
    };
  },

  methods: {
    // hover over the image, changing img using "mouseover" and "mouseleave"
    mouseover() {
      this.picTrans = "pictures/IMG_002.png";
    },
    mouseleave() {
      this.picTrans = "pictures/IMG_004.png";
    },
  },
}).mount("#eduApp");

function get(id) {
  return document.getElementById(id);
}

let menuLabel = get("menu-label");
let navBar = get("nav-bar");

navBar.style.display = "none";

menuLabel.onclick = function () {
  if (navBar.style.display == "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
};


let backToTop = get("back-top");

backToTop.onclick = function () {
  console.log("back");
  let timer = setInterval(function () {
    if (document.documentElement.scrollTop != 0) {
      document.documentElement.scrollTop -= 50;
    } else {
      clearInterval(timer); // stop the setInterval..
    }
  }, 10);
};