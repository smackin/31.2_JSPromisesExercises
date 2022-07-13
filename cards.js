baseURL = 'http://deckofcardsapi.com/api/deck';

$.getJSON(`${baseURL}/new/draw/`).then(data => {
    let { suit, value } = data.cards[0]; 
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`); 
}); 