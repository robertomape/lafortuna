<template>
  <div class="landing-page">
    <header class="header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo de la empresa" />
      </div>
      <nav class="navigation">
        <ul>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#reviews">Reseñas</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <section class="hero">
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
        <p>"¡Excelente servicio y muy buena atención!"</p>
        <span>- Juan Pérez</span>
      </div>
      <div class="review">
        <p>"He ganado varias veces gracias a sus boletos."</p>
        <span>- María López</span>
      </div>
      <div class="review">
        <p>"Muy confiable y seguro."</p>
        <span>- Carlos Sánchez</span>
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
  name: "LandingPage",
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
}

.logo img {
  height: 50px;
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

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #ffffff;
  border-bottom: 2px solid #4CAF50;
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
.footer {
  padding: 2rem 2rem;
  text-align: center;
}

.about h2,
.reviews h2,
.footer h2 {
  color: #4CAF50;
  margin-bottom: 1rem;
}

.review {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
}

.review p {
  font-style: italic;
}

.review span {
  display: block;
  margin-top: 0.5rem;
  color: #555;
}

.footer p {
  margin: 0.5rem 0;
}
</style>
