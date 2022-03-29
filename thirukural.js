let pardiv=document.getElementById("div1")
pardiv.classList.add("col-sm-12","col-md-12","col-lg-12","col-xl-12","col-xxl-12")
let searchdiv=document.createElement("div")
searchdiv.classList.add("text-success","fs-4","fw-bold")
pardiv.appendChild(searchdiv)
let heading=document.createElement("h1")
heading.innerHTML="Enter the number between 1 to 1330 and Get the Thirukkural for that Number"
heading.classList.add("text-center","text-primary")
searchdiv.appendChild(heading)
form=document.createElement("form")
form.classList.add("mt-4","text-center")
searchdiv.appendChild(form)

let search=document.createElement("input")
search.setAttribute("type","text")
form.appendChild(search)

searchbtn=document.createElement("Button")
searchbtn.setAttribute("type","button")
searchbtn.setAttribute("onclick","searchfunc(search.value)")
searchbtn.innerText="Submit"
form.appendChild(searchbtn)


chap=document.createElement("p")
chap.innerText=""
sect=document.createElement("p")
sect.innerText=""
no=document.createElement("p")
no.innerText=""
adhigaram=document.createElement("p")
adhigaram.innerText=""
line1=document.createElement("p")
line1.innerText=""
line2=document.createElement("p")
line2.innerText=""
tamexpl=document.createElement("p")
tamexpl.innerText=""
eng=document.createElement("p")
eng.innerText=""
expl=document.createElement("p")
expl.innerText=""

 function searchfunc(y)
{
    if(y>0&&y<1331){
    let x=parseInt(y)
    
 fetch(`https://api-thirukkural.vercel.app/api?num=${x}`)
.then((data)=>data.json())
.then((res)=>
{
    chap.innerHTML=`<span id="style">Group:</span>${res.chapgrp_tam}<br>`
    searchdiv.appendChild( chap)
    
    sect.innerHTML=`<span id="style">Section:</span>${res.sect_tam}<br>`
    searchdiv.appendChild(sect)
    
    no.innerHTML=`<span id="style">Kural Number:</span>${res.number}<br>`
    searchdiv.appendChild(no)
  
    adhigaram.innerHTML=`<span id="style">Adhigaram:</span>${res.chap_tam}<br>`
    searchdiv.appendChild(adhigaram)
    
    line1.innerHTML=`<span id="style">Kural:</span><br>${res.line1}<br>`
    searchdiv.appendChild(line1)
    
   line2.innerHTML=`${res.line2}<br>`
    searchdiv.appendChild(line2)
    
    tamexpl.innerHTML=`<span id="style">Tamil Explanation:</span>${res.tam_exp}<br>`
    searchdiv.appendChild(tamexpl)
    
    eng.innerHTML=`<span id="style">Kural in English:</span>${res.eng}<br>`
    searchdiv.appendChild(eng)

    expl.innerHTML=`<span id="style">English Explanation:</span>${res.eng_exp}<br>`
    searchdiv.appendChild(expl)
})
    }
else
alert("please enter number between 1 - 1330")
    
}