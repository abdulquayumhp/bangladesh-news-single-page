

const newsPortalData = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data.data.news_category;
}

const displayNewsWebsite = async()=>{
    const items = await newsPortalData()
    console.log(items)
    
    const AllMenu = document.getElementById("All-Menu");

    
        
        

    items.forEach(item => {
        
        // console.log(item)
        const {category_name,category_id}=item; 

        
        

        
        const li = document.createElement("li")
        li.innerHTML=`
        <button onclick="dynamicCart(${category_id})">${category_name}</button>
        

        
        `;
        AllMenu.appendChild(li);
        
    });


}


const dynamicCart = (id)=>{
    fetch(`https://openapi.programming-hero.com/api/news/category/0${id}`)
    .then (res => res.json())
    .then (data => displyAllData(data.data)) 
}




const displyAllData=(cards)=>{
    console.log(cards)

    const box = item = async()=>{
        const xi = await newsPortalData()
        console.log(xi)
        const jily =  document.getElementById("find-cetegory").innerText=xi[0].category_name;
        
        
    }
   
    box()

   
    const lengthCount = document.getElementById("length-count").innerText=cards.length;
    

} 
   

    
    const displayCard = document.getElementById("display-Card");
    displayCard.textContent=""

    cards.forEach(card =>{
        
        const {image_url,details,title,author,total_view,rating}=card;
        const {img,name,published_date}=author;
        const {number,badge}=rating;
        const div = document.createElement("div");

        div.innerHTML=`
        
        <div
          
            class="card card-side bg-base-100 shadow-xl w-9/12 mx-auto mb-20 md:flex-nowrap flex-wrap"
          >
          
            <img src="${image_url}" class=" lg:w-1/4 md:w-2/4  object-cover" alt="Movie" />
            
           
            <div class="card-body py-10" >
              <h2 class="card-title">${title}</h2>
              <p class="py-5">${details.length > 100 ? details.slice(0,100) + "..." : details}</p>
              <div class="flex justify-between      content-center ">
                    <div class="flex content-center justify-center ">
                    <div class="flex content-center justify-center">
                        <img src="${img}" alt="" class="w-10 h-10 rounded-full mt-2 mr-5">
                    </div>
                    <div>
                        <h1 class="font-medium">${name ? name : "N/A"}</h1>
                        <h1 class="font-medium">${published_date}</h1>
                    </div>
                    </div>
                    <div>
                    <div class="pt-3">
                        <i class="fa-regular fa-eye"></i>
                        <span>${total_view}</span>
                    </div>
                    </div>
                    <div>
                    <p class="pt-2">${number} ${badge}</p>
                
                    </div>
                    <div class="pt-3">
                    <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    </div>
             
              </div>
            </div>
          </div>
        
        `;
        displayCard.appendChild(div)



    });
    




displayNewsWebsite()