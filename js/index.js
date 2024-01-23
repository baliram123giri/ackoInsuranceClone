var car = document.getElementById("car")
var bike = document.getElementById("bike")
var health = document.getElementById("health")
var life = document.getElementById("life")
var travel = document.getElementById("travel")

//banners
var carBanner = document.querySelector(".b_car_service_banner")
var bikeBanner = document.querySelector(".b_bike_service_banner")
var healthBanner = document.querySelector(".b_health_service_banner")
var lifeBanner = document.querySelector(".b_life_service_banner")
var travelBanner = document.querySelector(".b_travel_service_banner")


window.onload = function () {
    car.classList.add("active")
    //banner
    carBanner.classList.remove("d-none")
}

bike.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.add("active")
    //banner
    carBanner.classList.add("d-none")
    bikeBanner.classList.remove("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")

})
car.addEventListener("click", function (event) {
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    car.classList.add("active")
    //banner
    carBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
health.addEventListener("click", function (event) {
    car.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    health.classList.add("active")

    //banner
    healthBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
life.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    life.classList.add("active")

    //banner
    lifeBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
travel.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    life.classList.remove("active")
    travel.classList.add("active")

    //banner
    travelBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
})
// document.addEventListener("click", function (event) {
//     console.log(event.target)
// })