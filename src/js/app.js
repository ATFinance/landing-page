// Global Import
window.jQuery = window.$ = require("jquery");
import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
});

// import module
import { Scroll, Chart } from "./modules";

jQuery(function () {
  Scroll.init();
  Chart.init();
});
