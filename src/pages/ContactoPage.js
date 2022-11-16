const ContactoPage = (props) => {
  return (
    <main class="holder contacto">
      <section>
        <h2>Contacto Rápido</h2>
        <form action="" class="formulario">
          <p>
            <label for="">Nombre</label>
            <input type="text" />
          </p>
          <p>
            <label for="">Email</label>
            <input type="text" />
          </p>

          <p>
            <label for="">Telefono</label>
            <input type="text" />
          </p>
          <p>
            <label for="">Mensaje</label>
            <textarea></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </section>
      <section class="datos">
        <h2>Otras vias de comunicación</h2>
        <p>
          Tambien podes contactarte con nosotros usuando los siguientes medios
        </p>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=HrX3v1CAbHk&list=RDRKV8QQXlFFc&index=16&ab_channel=AIRBAGOficial/" target = "_blank">
              Instagram
            </a>
          </li>
          <li>Instagram</li>
          <li>Instagram</li>
          <li>Instagram</li>
          <li>Instagram</li>
        </ul>
      </section>
    </main>
  );
};

export default ContactoPage;
