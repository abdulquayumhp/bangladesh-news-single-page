

const newsPortalData = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data.data.news_category;
}

const displayNewsWebsite = async()=>{
    const items = await newsPortalData()
    
    const AllMenu = document.getElementById("All-Menu");

    items.forEach(item => {
        const {category_name}=item; 
        console.log(category_name)
        const li = document.createElement("li")
        li.innerHTML=`
        <a>${category_name}</a>
        
        `;
        AllMenu.appendChild(li);
    });


}


displayNewsWebsite()
