import { Gallery } from "react-grid-gallery";
 
const images = [
   {
      src: "img/gallery-1.jpeg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
   },
   {
      src: "img/gallery_2.jpeg",
      width: 320,
      height: 212,
      tags: [
         { value: "meeting", title: "Parent Meetings" },
         { value: "2023", title: "2023" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "img/gallery-3.jpeg",
      width: 320,
      height: 212,
   },
   {
    src: "img/gallery_4.jpeg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
 },
 {
    src: "img/gallery_6.jpeg",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)",
 },
 {
    src: "img/gallery_7.jpeg",
    width: 320,
    height: 212,
 },
 {
    src: "img/gallery_8.jpeg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
 },
 
];
function Gallery1(){ 
return <center><div className="container"><Gallery images={images}/></div></center>
}
export default Gallery1;