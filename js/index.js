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

//video section
const crrentVideo = document.getElementById("b_current_video")
const currentTitle = document.getElementById("title")
const videoList = document.getElementsByClassName("b_video")

for (let i = 0; i < videoList.length; i++) {
    const listSrc = videoList[i].children.item("div").children.item("div").children.item("video").src
    const text = videoList[i].children[1].children[0].innerText

    videoList[i].addEventListener("click", () => {
        crrentVideo.src = listSrc
        currentTitle.innerText = text
        crrentVideo.play()
    })
}

//creating array of objects
const ackoData = [{
    img: "/ackoCard1.svg",
    title: "Incredibly low premiums",
    description: "Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket."
},
{
    img: "/ackoCard2.svg",
    title: "Superquick and easy",
    description: "We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks."
},
{
    img: "/ackoCard3.svg",
    title: "Hassle-free claims",
    description: "We’re on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience cashless, speedy claim settlements."
},
]

//acko section
const ackoSection = document.getElementById("acko_section")

for (let i = 0; i < ackoData.length; i++) {
    //created div element
    const ackoCard = document.createElement("div")
    ackoCard.className = "col-12 col-lg-4"
    //adding attributes
    // ackoCard.setAttribute("class", "col-12 col-lg-4")
    // ackoCard.style.background = i % 2 == 0 ? "red" : "green"
    // ackoCard.style.color = i % 2 == 0 ? "white" : "black"

    //create img tag
    const img = document.createElement("img")
    //add src attributes
    img.src = "../images" + ackoData[i].img
    img.alt = "dynamic image"
    img.width = 120

    //create h4 tag
    const h4 = document.createElement("h4")
    h4.innerText = ackoData[i].title

    //create p tag
    const p = document.createElement("p")
    p.innerText = ackoData[i].description


    //adding child of ackoCard
    ackoCard.appendChild(img)
    ackoCard.appendChild(h4)
    ackoCard.appendChild(p)

    //adding child of ackoSection
    ackoSection.appendChild(ackoCard)
}


const footerNavData = [
    {
        title: "Products",
        navLinks: ["Motor Insurance", "Car Insurance", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },

]

//footer navbar 
const footerNavbar = document.getElementById("footer_navbar")

for (let i = 0; i < footerNavData.length; i++) {

    //create div and give class names col-12 col-lg-3
    const div = document.createElement("div")
    //there are 3 ways to add class with value
    // div.classList.add("col-12", "col-lg-3")
    // div.setAttribute("class", "col-12 col-lg-3")
    div.className = "col-12 col-lg-3 mt-4"

    //crerte h5
    const h5 = document.createElement("h5")
    
    //1)innerText
    //2)innerHTML
    h5.innerText = footerNavData[i].title
    //create ul element
    const ul = document.createElement("ul")
    ul.style.listStyle = "none"

    //loops start on the footerNavData[i].navLinks
    for (let link = 0; link < footerNavData[i].navLinks.length; link++) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.style.textDecoration = "none"
        a.style.color = "#000"
        a.classList.add("a_force_fontsize")
        a.href = "#"
        a.innerText = footerNavData[i].navLinks[link]
        //adding li to ul
        ul.appendChild(li)
        //adding a to li
        li.appendChild(a)
    }

    //going inside the div
    div.appendChild(h5)
    //adding ul
    div.appendChild(ul)

    //append the childs
    footerNavbar.appendChild(div)

}










