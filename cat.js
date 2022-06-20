const { createApp } = Vue;

createApp({
  data() {
    return {
      pictureTrans: "pictures/IMG_002.png",
    };
  },

  methods: {
    // hover over the image, changing img using "mouseover" and "mouseleave"
    mouseover() {
      this.pictureTrans = "pictures/IMG_003.png";
    },
    mouseleave() {
      this.pictureTrans = "pictures/IMG_002.png";
    },
  },
}).mount("#app");

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
