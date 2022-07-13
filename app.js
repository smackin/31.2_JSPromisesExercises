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



// let url = 'http://numbersapi.com/22/trivia?json'
// axios.get(url)
//     .then(res => {
//         console.log(res.data.text)
//         return axios.get(res.data) 
//     })
//     .then(res => {
//         console.log(res.data)

//     })
//     .catch(err => console.log("REJECTEDD!!!", err))

favNumber = 3; 
faveNums = [5, 10, 15]; 
num_base_url = 'http://numbersapi.com/'; 

    $.getJSON(`${num_base_url}${favNumber}/trivia?json`).then((response) => {
    console.log(response);
    })

    $.getJSON(`${num_base_url}${faveNums}/trivia?json`).then((response) => {
        console.log(response);
    })

    Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${num_base_url}${faveNums}/json`);
    })
    ) .then((response) => {
    response.forEach((data) => $('body').append(`<p>${data.text}</p>`)); 
    }) ; 
    

    