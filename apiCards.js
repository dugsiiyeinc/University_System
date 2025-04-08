const containerCard = document.querySelector('.cards');

async function fetchData() {
    try {
        // Loading text ku dar
        containerCard.innerHTML = '<p>Loading...</p>';

        const response = await fetch('cards.json'); 
        
        console.log(response);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Si fiican u sug loading ka 2 seconds kadib
        setTimeout(() => {
            containerCard.innerHTML = ''; // Marka data yimaado, clear loading

            // Loop mid mid
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="crs-info">
                                <h1>${item.title}</h1>
                             <a href="#">See More ▶</a>
                            </div>
                `;

                containerCard.appendChild(card);
            });

        }, 2000); // 2 seconds delay

    } catch (error) {
        containerCard.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        console.log('error is', error);
    }
}

fetchData();
