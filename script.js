
// Loader

window.addEventListener("load",()=>{
   document.querySelector(".main").classList.remove("hidden");
   document.querySelector(".home-section").classList.add("active");

   document.querySelector(".page-loader").classList.add("fade-out");
   setTimeout(()=>{
      document.querySelector(".page-loader").style.display="none";
   },600);
}
);


// Toggle navbar
 const navToggler =document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
 });

 function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
 }


 function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
 }


// Active sec
 document.addEventListener("click",(e)=>{
        if(e.target.classList.contains("link-item") && e.target.hash !== ""){
            document.querySelector(".overlay").classList.add("active");
         navToggler.classList.add("hide")
            
            if(e.target.classList.contains("nav-item")){
               toggleNavbar();
            }
            else{
                  console.log("false");

            }
            setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
             navToggler.classList.remove("hide");
             document.querySelector(".overlay").classList.remove("active");
         },500);
    
          
        }
 });

//  fin









// about

const tabscontainer = document.querySelector (".about-tabs"),
aboutSection=document.querySelector(".about-section");

tabscontainer.addEventListener("click", (e) =>{
    console.log(e.target);
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabscontainer.querySelector(".active").classList.remove("active");
        e.target.classList.add ("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");

    }
});

// Nav bar

