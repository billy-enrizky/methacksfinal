import { useEffect, useState } from "react"

export default function MyApp() {
    const [restaurantList, setRestaurantList] = useState([])

    const [clickedRestaurant, setClickedRestaurant] = useState({})

    useEffect(() => {
        fetchRestaurantInfo()
    }, [])

    const fetchRestaurantInfo = async () => {
        const response = await fetch('http://localhost:3000/api/restaurants')
        const data = await response.json()
        setRestaurantList(data)
    }

    const onRestaurantClick = (restaurantInfo) => {
        setClickedRestaurant(restaurantInfo)
    }

    return (
        <h1>
            {
                restaurantList.length > 0 && restaurantList.map(restaurant => {
                    return (
                        <div>
                            <h2 onClick={() => onRestaurantClick(restaurant)}>{restaurant.name}</h2>
                            {
                                !!clickedRestaurant && clickedRestaurant._id === restaurant._id && clickedRestaurant?.foods?.map(food => {
                                    return (
                                        <h5>{food}</h5>)
                                })
                            }
                        </div>)
                })
            }

        </h1>

    )
}