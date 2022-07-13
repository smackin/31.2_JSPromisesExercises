// let url = "https://swapi.dev/api/planets/1/"
// let ourfirstpromise = axios.get(url)
// console.log(ourfirstpromise) 

//1) 

// let url = 'http://numbersapi.com/3?json'
// let firstPromise = axios.get(url)
// firstPromise.then(response => console.log(response.data))
// firstPromise.catch(() => console.log("REJECTEDD!!!"))



// let url = 'http://numbersapi.com/3?json'
// axios.get(url)
//     .then(response => {
//         console.log(response)
//         axios.get(response.data.text)
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => {
//             console.log("ERROR!!", err)
//         })
//     })
//     .catch(() => console.log("REJECTEDD!!!"))

let url = 'http://numbersapi.com/22?json'
axios.get(url)
    .then(res => {
        console.log(res.data.text)
        return axios.get(res.data) 
    })
    .then(res => {
        console.log(res.data)

    })
    .catch(err => console.log("REJECTEDD!!!", err))

    

    