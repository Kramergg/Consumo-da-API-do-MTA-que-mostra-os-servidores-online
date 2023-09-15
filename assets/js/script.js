function fetchApiData (){
    const searchInput = document.getElementById('search');
    const searchTerm = searchInput.value.toLowerCase();
    //  Feito por Kramer#0488 <- Discord / eu.kramer <- instagram 
    fetch('https://mtasa.com/api/')
        .then(response => response.json())
        .then(data => {
            const divContainer = document.getElementById('container');
            divContainer.innerHTML = ''; 

            data.forEach(item => {
                if (item.name.toLowerCase().includes(searchTerm)) {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.innerHTML = `
                        <h1>SERVIDOR: ${item.name}</h1>
                        <p>IP: ${item.ip} PORTA: ${item.port}</p>
                        <p>PLAYERS: ${item.players} / ${item.maxplayers}</p> <br>
                        <a  href="mtasa://${item.ip}:${item.port}">JOGAR</a>
                    `;
                    divContainer.appendChild(card);

                   
                }
            });
        });
}
//  Feito por Kramer#0488 <- Discord / eu.kramer <- instagram 