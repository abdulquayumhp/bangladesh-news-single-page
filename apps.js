

const newsPortalData = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data.data.news_category;
}

const displayNewsWebsite = async()=>{
    const items = await newsPortalData()
    
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

    
    const displayCard = document.getElementById("display-Card");
    displayCard.textContent=""

    cards.forEach(card =>{
        
        const {image_url,details,title,author,total_view}=card;
        const {img,name,published_date}=author;
        const div = document.createElement("div");

        div.innerHTML=`
        
        <div
          
            class="card card-side bg-base-100 shadow-xl w-9/12 mx-auto mb-20"
          >
            
              <img src="${image_url}" class="w-1/3" alt="Movie" />
           
            <div class="card-body py-10" >
              <h2 class="card-title">${title}</h2>
              <p class="py-5">${details.length > 100 ? details.slice(0,100) + "..." : details}</p>
              <div class="flex justify-between content-center ">
                <div class="flex content-center justify-center ">
                    <div class="flex content-center justify-center">
                        <img src="${img}" alt="" class="w-10 h-10 rounded-full mt-2 mr-5">
                    </div>
                    <div>
                        <h1>${name ? name : "N/A"}</h1>
                        <h1>${published_date}</h1>
                    </div>
                </div>
                <div>
                    <div class="pt-3">
                        <i class="fa-regular fa-eye"></i>
                        <span>${total_view}</span>
                    </div>
                </div>
                <div class="pt-3">
                    <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <!-- <div class="card-actions justify-end">
                <button class="btn btn-primary">Watch</button> -->
              </div>
            </div>
          </div>
        
        `;
        displayCard.appendChild(div)





    });
    

}


displayNewsWebsite()
