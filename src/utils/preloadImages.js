import heroImg from "../assets/images/hero-img3.png";
import aboutImg from "../assets/images/about-img.jpg";
import jumpyRunImg from "../assets/images/jumpyrun-img.jpg";
import streetBusterImg from "../assets/images/streetbuster-img.jpg";
import iconAcf from "../assets/images/icon-acf.png";

const imagesToPreload = [
  heroImg,
  aboutImg,
  jumpyRunImg,
  streetBusterImg,
  iconAcf
];

/**
 * Preloads critical images to improve user experience.
 * Simply instantiating Image objects in memory triggers browser cache fetching immediately.
 */
export function preloadAllImages() {
  if (typeof window === "undefined") return;

  imagesToPreload.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
