document
    .querySelectorAll('.term-card, .opportunities-card, .opportunities-card-border')
    .forEach(Card => {

        Card.addEventListener('click', () => {

            Card.classList.toggle('flipped');

        });

    });