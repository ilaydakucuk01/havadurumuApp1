var fetch = require("node-fetch");

module.exports = (app) => {
    let sehir_adi;


    app.get("/sehir-hava-durumu", (req,res) => {
        const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=ankara";
        const apiId = "&appid=da322ddf5726750717c44f2b86e614c0&units=imperial";

        var kullanici = (url1, url2, sehir_adi) => {
            let newUrl = url1 + sehir_adi + url2 ;
            return newUrl;
        };
        var apiUrl = kullanici(baseUrl, sehir_adi, apiId,);


        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.redirect('/error');
         });
    })
}