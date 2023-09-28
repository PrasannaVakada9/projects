let url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
//console.log(url);

const randomUser = async() => {
    try{
        const response = await fetch(url);
        const result = await response.json()
        const restaurant = result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log(restaurant)

    } catch(err){
        console.log("Error")
    }
}
randomUser();