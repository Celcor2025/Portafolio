<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Contacto</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <header class="encabezado">
    <h1 class="titulo">Contacto</h1>
  </header>

  <main class="contenido">
    <section class="seccion">
      <div class="formulario-container">
        <form id="formulario-contacto" novalidate>
          <label for="nombre">Nombre completo:</label>
          <input type="text" id="nombre" name="nombre" required>

          <label for="correo">Correo electrónico:</label>
          <input type="email" id="correo" name="correo" required>

          <label for="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required>

          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>

          <button type="submit">Enviar</button>
          <p id="mensaje-error" class="error"></p>
        </form>
      </div>
    </section>
  </main>

  <footer class="pie">
    <p class="pie-texto">© 2025 Carlos </p>
    <a href="index.html" class="enlace-correo">Volver al inicio</a>
  </footer>

  <script src="script2.js"></script>
</body>
</html>


