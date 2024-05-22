<template>
  <div class="landing-page">
    <header class="header">
      <div class="logo">
        <img src="@/assets/clovernb.png" alt="Logo de la empresa" />
        
      </div>
      <div class="title">
        <h1>La Fortuna</h1>
      </div>
      <nav class="navigation">
        <ul :class="{ 'nav-open': menuOpen }">
          <li><a href="#about" @click="toggleMenu">Sobre Nosotros</a></li>
          <li><a href="#reviews" @click="toggleMenu">Reseñas</a></li>
          <li><a href="#map" @click="toggleMenu">Ubicación</a></li>
          <li><a href="#socials" @click="toggleMenu">Redes Sociales</a></li>
          <li><a href="#contact" @click="toggleMenu">Contacto</a></li>
        </ul>
        <button class="menu-button" @click="toggleMenu">
          <span v-if="!menuOpen">☰</span>
          <span v-else>✖</span>
        </button>
      </nav>
    </header>

    <section class="hero">
      <picture>
        <source media="(min-width: 768px)" srcset="@/assets/oldmen.jpg">
        <img class="imageninicial" src="@/assets/heartnb.png" alt="Imagen de lotería">
      </picture>
      <h1>Bienvenido a Loterías y Juegos del Estado</h1>
      <p>La suerte te espera, compra tu boleto hoy mismo.</p>
    </section>

    <section id="about" class="about">
      <h2>Sobre Nosotros</h2>
      <p>Somos una empresa dedicada a la venta de loterías y juegos del estado con años de experiencia.</p>
    </section>

    <section id="reviews" class="reviews">
      <h2>Reseñas de nuestros clientes</h2>
      <div class="review">
        <img class="review-image" src="@/assets/person1.jpg" alt="Persona 1" />
        <div class="review-text">
          <p>"¡Excelente servicio y muy buena atención!" 😊</p>
          <span>- Juan Pérez</span>
        </div>
      </div>
      <div class="review">
        <img class="review-image" src="@/assets/person2.jpg" alt="Persona 2" />
        <div class="review-text">
          <p>"He ganado varias veces gracias a sus boletos." 🎉</p>
          <span>- María López</span>
        </div>
      </div>
      <div class="review">
        <img class="review-image" src="@/assets/person3.jpg" alt="Persona 3" />
        <div class="review-text">
          <p>"Muy confiable y seguro." 🔒</p>
          <span>- Carlos Sánchez</span>
        </div>
      </div>
    </section>

    <section id="map" class="map">
      <h2>Nuestra Ubicación</h2>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7330017882473!2d-3.617644424503295!3d40.679851539583964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43d1989e1086c9%3A0xf9fd2ef2fe11356f!2sAdministraci%C3%B3n%20de%20Loterias%20n%C2%BA%202%2C%20LA%20FORTUNA!5e0!3m2!1sen!2ses!4v1716414169592!5m2!1sen!2ses"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>

    <section id="socials" class="socials">
      <h2>Síguenos en Redes Sociales</h2>
      <div class="social-icons">
        <a href="https://www.instagram.com" target="_blank">
          <img src="@/assets/insta.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <img src="@/assets/face.png" alt="Facebook" />
        </a>
      </div>
    </section>

    <footer id="contact" class="footer">
      <h2>Contacto</h2>
      <p>Ubicación: Calle Falsa 123, Ciudad</p>
      <p>Email: contacto@loteria.com</p>
      <p>Teléfono: +123 456 7890</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.landing-page {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #ffffff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 2px solid #4CAF50;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo img {
  height: 100px;
}

@import url('https://fonts.googleapis.com/css?family=Varela+Round');
.title{
  font-family: 'Varela Round', sans-serif;
  flex: 1; 
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.title h1 {
  font-size: 2rem; 
  margin: 0; 
}


.navigation {
  position: relative;
}

.navigation ul {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

.navigation ul li a {
  text-decoration: none;
  color: #4CAF50;
  font-weight: bold;
}

.menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #4CAF50;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #ffffff;
  border-bottom: 2px solid #4CAF50;
}

.hero picture img {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 0 auto 2rem;
  border-radius: 10px;
}

.hero h1 {
  color: #4CAF50;
  font-size: 2.5rem;
}

.hero p {
  color: #333;
  font-size: 1.25rem;
}

.about,
.reviews,
.map,
.socials,
.footer {
  padding: 2rem 2rem;
  text-align: center;
}

.about h2,
.reviews h2,
.map h2,
.socials h2,
.footer h2 {
  color: #4CAF50;
  margin-bottom: 1rem;
}

.review {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
}

.review-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.review-text {
  flex: 1;
}

.review p {
  font-style: italic;
}

.review span {
  display: block;
  margin-top: 0.5rem;
  color: #555;
}

.map iframe {
  width: 100%;
  max-width: 600px;
  height: 450px;
  border: none;
  border-radius: 10px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icons img {
  width: 40px;
  height: 40px;
}

.footer p {
  margin: 0.5rem 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .navigation ul {
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #ffffff;
    width: 200px;
    border: 1px solid #ddd;
    display: none;
    padding: 10px;
  }
  .navigation ul.nav-open {
    display: flex;
  }
  .menu-button {
    display: block;
  }
}
</style>
