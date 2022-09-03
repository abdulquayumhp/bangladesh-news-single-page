
    // globali sniper addd 
    const sniper = document.getElementById("sniper").style.display="none"


    // menu category data api 
const newsPortalData = async()=>{
   
   try{
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data.data.news_category;
   }catch(error){
    console.log(error)

   }
    
   
}

    // dynamic menu cetegory fuction 
const displayNewsWebsite = async()=>{
    // category funtion all 
    const items = await newsPortalData()
    
    // all menu html id 
    const AllMenu = document.getElementById("All-Menu");
    
    

    items.forEach(item => {
        
        const {category_name,category_id}=item; 


        const li = document.createElement("li")
        li.innerHTML=`
        <button onclick="dynamicCart(${category_id})">${category_name}</button>

        `;
        AllMenu.appendChild(li);
        
    });
}
    // dynamic menu cetegory fuction end


    //dynamic fuction add
const dynamicCart = (id)=>{

    // fuction sniper id 
    const sniper = document.getElementById("sniper").style.display="block"

    try{
        fetch(`https://openapi.programming-hero.com/api/news/category/0${id}`)
        .then (res => res.json())
        .then (data => displyAllData(data.data)) 
    }catch(error){
        console.log(error)
    }
}



    //dynamic car fuciton
const displyAllData=(cards)=>{

    // for sorting arry to  heigest view persion 
    cards.sort((a, b) => b.total_view - a.total_view);

   
    //for card section none sniper add
    const sniper = document.getElementById("sniper").style.display="none"
   

   
    // total how much category have id 
    const lengthCount = document.getElementById("length-count").innerText=cards.length;
    
    // card body seciton id 
    const displayCard = document.getElementById("display-Card");
    displayCard.textContent=""




    //forEach For inviditual
    cards.forEach(card =>{


        // object distructuring 
        const {image_url,details,title,author,total_view,rating,_id}=card;
        const {img,name,published_date}=author;
        const {number,badge}=rating;
        const div = document.createElement("div");


        // card 
        div.innerHTML=`
        
                <div
                class="card card-side bg-base-100 shadow-xl w-9/12 mx-auto mb-20 md:flex-nowrap flex-wrap"
            >
                <img
                src="${image_url}"
                class="lg:w-1/4 md:w-2/4 object-cover"
                alt="Movie"
                />

                <div class="card-body py-10">
                <h2 class="card-title">${title}</h2>
                <p class="py-5">
                    ${details.length > 100 ? details.slice(0,100) + "..." : details}
                </p>
                <div class="flex justify-between content-center flex-wrap">
                    <div class="flex content-center justify-center">
                    <div class="flex content-center justify-center">
                        <img
                        src="${img}"
                        alt=""
                        class="w-10 h-10 rounded-full mt-2 mr-5"
                        />
                    </div>
                    <div>
                        <h1 class="font-medium">${name ? name : "N/A"}</h1>
                        <h1 class="font-medium">
                        ${published_date ? published_date : "N/A"}
                        </h1>
                    </div>
                    </div>
                    <div>
                    <div class="pt-3">
                        <i class="fa-regular fa-eye"></i>
                        <span>${total_view ? total_view : "N/A"}</span>
                    </div>
                    </div>
                    <div>
                    <p class="pt-2">${number} ${badge}</p>
                    </div>
                    <div class="pt-3">
                    <label
                        onclick="modalDynamicDataLoad('${_id}')"
                        for="my-modal-3"
                        class="cursor-pointer bg-neutral-100 py-2 px-4"
                        ><i class="fa-solid fa-arrow-right"></i
                    ></label>
                    </div>
                </div>
                </div>
            </div>
        
        `;
        displayCard.appendChild(div)



    });
    

}

dynamicCart(1)
displayNewsWebsite()




    // details section 
    // details section 
const modalDynamicDataLoad=(modalid)=>{

    try{
        fetch(`https://openapi.programming-hero.com/api/news/${modalid}`)
        .then (res => res.json())
        .then (data => displayModalData(data.data[0]))
    }catch(error){
        console.log(error)
    }
   

}


    // modal
const displayModalData=(modelData)=>{

    const{image_url,details,title}=modelData;
    console.log(modelData)
    
    const modalBody =document.getElementById("modalBody");
    modalBody.innerHTML=`
    <img src="${image_url}" alt="">
    
    <h3 class="text-lg font-bold">${title}</h3>
    <p class="py-4">${details}</p>
    
    `

}

