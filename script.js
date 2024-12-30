let inputfld = document.querySelector("input");

let input = document.querySelector("input").value;
const imgfld = document.querySelector(".imagefield");

inputfld.addEventListener("change",() =>{
  imgfld.innerHTML ="";
})
let click = 0;
let pageno =1;
let pagevalue = 12;
const showmore = document.querySelector("#btn");
async function image() {
  

  let input = document.querySelector("input").value;
  console.log(input);
  
    
  
  
    let url = `https://api.unsplash.com/search/photos?page=${pageno}&query=${input}&client_id=1KS32C-gRVFWjhH50gDVm0P_qe93G9cpybG1qWGbMCw&per_page=${pagevalue}`;
  
  
    let response = await fetch(url);
    let data = await response.json();
    let maindata = data.results;
    
    
    for(let i = 0; i<=pagevalue ; i++){
      
  
      let image_url = maindata[i].urls.small;
  
    const imgdiv = document.querySelector(".image");
  
    const go = document.createElement("img");
  const a = document.createElement("a");
  a.href = maindata[i].links.html;
  a.target="_blank";
  
  
  
    go.src = image_url;
    
  
  
  a.appendChild(go);
  console.log(imgfld)
  imgfld.appendChild(a);
  click =1;
    }


if(click==1){
  imgfld.innerHTML = "";
}

}


const button = document.querySelector("button");

button.addEventListener("click", (e) =>{


    
  showmore.style.display = "block"

  e.preventDefault();
  image();
})

showmore.addEventListener("click", ()=>{
  pageno++;
  image();
})

const footer = document.querySelector("#footer_link");

footer.target ="_blank"