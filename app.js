const apiCalls = require('./apiCalls.js')

const yargs = require('yargs')
const chalk = require('chalk')
yargs.command(
  'get',
  'gets to weather information for the location specified',
  (yargs)=>{
    yargs.option('location',{
      alias:'l',
      desc:'accepts locations and latest weather info',
      type : 'string',
      demandOption:true
    })
  },
  (argv)=>{

    if (argv.location){
      console.log(chalk.inverse.underline('Getting Weather info for',argv.location))
      apiCalls.getWeather(argv.location)
    }
    else{
      console.log(chalk.red.inverse`Location is required!!`)
    }
  }).argv


