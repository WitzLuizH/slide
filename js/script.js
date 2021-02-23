import SlideNav from "./slide.js";

/* const slide = new Slide(".slide", ".slide-wrapper");
slide.init(); */
const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".previous", ".next");
slide.addControl(".custom-controls");
