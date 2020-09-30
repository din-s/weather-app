const axios = require('axios')
const fs = require('fs')
const chalk = require('chalk')
const dotenv = require('dotenv').config()

//credentials
const key = process.env.API_KEY


//function to getWeather for given location

const getWeather=(location)=>{
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`
  //using axios
  axios.get(url)
    .then((response)=>{
      // console.log(response)
      const res = response.data
      const { location:locationInfo, current:currentInfo} = res
      return { locationInfo ,
       currentInfo 
      }
      //for writing data to fileSystem

      // fs.writeFileSync('data.json',JSON.stringify(stream))
    }).then(({locationInfo,currentInfo})=>{
      console.log(chalk.cyan.inverse`In ${locationInfo.name},${locationInfo.country},
It's ${currentInfo.condition.text} and Temprature is ${currentInfo.temp_c} Degree Celcius`);
    }).catch((e)=>{
      console.log(e.message)
    })
  
    //for getting results stored from fileSystem
  /*
   const buffer = fs.readFileSync('data.json')
  const data = JSON.parse(buffer.toString()) 
  */
    
}

module.exports={
  getWeather
}