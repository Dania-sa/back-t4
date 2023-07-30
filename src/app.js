

    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))


    


    app.set('view engine', 'hbs');

      const viewsDirectory = path.join (__dirname , "../temp1/views" )
      app.set( "views" , viewsDirectory)

      //////////////////////////////////////////////////////////////////

      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../temp1/partials")

      hbs.registerPartials(partialsPath)

      ///////////////////////////////////////////////////////////////////



      
      


    app.get('/' , (req , res) => {
        res.render('index' , {
            title: "Welcome to our website",
            desc : "this is home page, click on weather to show more details"
        })
    })

    app.get('/weather' , (req , res) => {
        res.render('weather' , {
            title : "weather",
            country : "Homs",
            latitude: 34.73,
            longitude: 36.72,
            current : "Sunny",
            temperature : 33.8
        })
    })



    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    