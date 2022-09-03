const searchedCity={city:'Indore'}
Defalut()

function Defalut(){

// window.addEventListener('click', ()=>{
    // let long;
    // let lat;
    let temperaturDescription=document.querySelector(".description")
    let temperature=document.querySelector(".degree")
    let locationTimezone=document.querySelector(".location-timezone")

    // if(navigator.geolocation){
    //       navigator.geolocation.getCurrentPosition(position=>{
    //           console.log(position);
    //           long=position.coords.longitude
    //           lat=position.coords.latitude
    //           console.log(`${long}`)

              const api=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchedCity.city}?key=D4NZ58D2C2N6DZCHV88ZBLDE2`
            // D4NZ58D2C2N6DZCHV88ZBLDE2
            fetch(api)
            .then(data=>{
                return data.json()
            })
            .then(data=>{
  
                console.log(data)
                const {conditions,icon,temp }= data.currentConditions
                const { address}= data

                console.log(`${conditions}     ${icon}    ${temp}` )

                //setting DOM data to udated with the data from fetched from API

                temperature.textContent=temp
                temperaturDescription.textContent=conditions
                locationTimezone.textContent=address
                 setIcons(icon,document.querySelector(".icon"))
            
            })

        //   })

          function setIcons(icon, iconId){
              const skycons=new Skycons({color:"white"});
              const currentIcon=icon.replace(/-/g,"_").toUpperCase()
              skycons.play()
              return skycons.set(iconId, Skycons[currentIcon])
          }
    // }
    // else{
    //     h1.textContent="dont work allow location acces"
    // }
// })
}


//for searching remote location

let SearchButton= document.querySelector(".search-btn")
let input=document.querySelector("input")
// console.log(input.value)
 //onclick event

 SearchButton.addEventListener('click', searching)


 function searching(){

      const city=input.value
      searchedCity.city=city
      console.log(city)
      console.log(searchedCity.city)

      Defalut(searchedCity.city)
      input.value=""
 }