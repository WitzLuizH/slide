import { SlideNav } from "./slide.js";

/* const slide = new Slide(".slide", ".slide-wrapper");
slide.init(); */
const slideNav = new SlideNav(".slide", ".slide-wrapper");
slideNav.init();
slideNav.addArrow(".previous", ".next");
