document.addEventListener('DOMContentLoaded', () => {
    // Load gallery images
    loadGallery();

    // Load testimonials
    loadTestimonials();

    // Load featured destinations
    loadFeaturedDestinations();

    // Load Catholic celebrations
    loadCatholicCelebrations();
    // Load organizers
    loadOrganizers();
});

function loadGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    const images = [
        'retreat.jpg',
        'mission.jpg',
        'pilgrimage.jpg',
        'community-service.jpg',
        'prayer-group.jpg',
        'youth-event.jpg'
    ];

    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `<img src="images/${image}" alt="MIFRARE activity">`;
        galleryContainer.appendChild(galleryItem);
    });
}

function loadTestimonials() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = [
        { name: 'María', text: 'MIFRARE cambió mi vida, encontré amigos y fortalecí mi fe.' },
        { name: 'Juan', text: 'Los viajes con MIFRARE son increíbles, ¡no puedo esperar por el próximo!' },
        { name: 'Ana', text: 'Gracias a MIFRARE, ahora tengo una conexión más profunda con Dios.' }
    ];

    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialSlider.innerHTML = `
            <blockquote>
                <p>${testimonials[index].text}</p>
                <footer>- ${testimonials[index].name}</footer>
            </blockquote>
        `;
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    showTestimonial(currentTestimonial);
    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
}

function loadFeaturedDestinations() {
    const destinationsGrid = document.querySelector('.destinations-grid');
    const destinations = [
        { name: 'Basílica del Voto Nacional', location: 'Quito', image: 'basilica.jpg' },
        { name: 'Santuario de la Virgen del Cisne', location: 'Loja', image: 'cisne.jpg' },
        { name: 'Catedral de la Inmaculada Concepción', location: 'Cuenca', image: 'catedral.jpg' }
    ];

    destinations.forEach(destination => {
        const destinationCard = document.createElement('div');
        destinationCard.classList.add('destination-card');
        destinationCard.innerHTML = `
            <img src="images/${destination.image}" alt="${destination.name}">
            <h4>${destination.name}</h4>
            <p>${destination.location}</p>
        `;
        destinationsGrid.appendChild(destinationCard);
    });
}

function loadCatholicCelebrations() {
    const celebrationsList = document.getElementById('celebrations-list');
    const celebrations = [
        { name: 'Semana Santa', date: 'Abril 2024', description: 'Conmemoración de la pasión, muerte y resurrección de Jesús.' },
        { name: 'Fiesta de San Francisco de Asís', date: '4 de Octubre, 2024', description: 'Celebración de nuestro santo patrono.' },
        { name: 'Navidad', date: '25 de Diciembre, 2024', description: 'Celebración del nacimiento de Jesús.' }
    ];

    celebrations.forEach(celebration => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h4>${celebration.name}</h4>
            <p><strong>Fecha:</strong> ${celebration.date}</p>
            <p>${celebration.description}</p>
        `;
        celebrationsList.appendChild(listItem);
    });
}

function loadOrganizers() {
    const organizersGrid = document.querySelector('.organizers-grid');
    const organizers = [
        { name: 'X', role: 'Director Espiritual', image: 'juan.jpg' },
        { name: 'X', role: 'Coordinadora General', image: 'maria.jpg' },
        { name: 'X', role: 'Líder de Misiones', image: 'carlos.jpg' },
        { name: 'X', role: 'Encargada de Eventos', image: 'ana.jpg' }
    ];

    organizers.forEach(organizer => {
        const organizerCard = document.createElement('div');
        organizerCard.classList.add('organizer-card');
        organizerCard.innerHTML = `
            <img src="images/${organizer.image}" alt="${organizer.name}">
            <h4>${organizer.name}</h4>
            <p>${organizer.role}</p>
        `;
        organizersGrid.appendChild(organizerCard);
    });
}

