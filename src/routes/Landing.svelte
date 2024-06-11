<script>
  import { Link } from "svelte-routing";
  import logo from "/fiatlinux-red.svg";
  import { onMount } from "svelte";
</script>

<section class="flex-col">
  <header>
    <div class="logo">
      <Link to="/">
        <img src={logo} alt="fiatlinux" />
      </Link>
    </div>
    <nav>
      <div class="link">
        <Link to="/">Home</Link>
      </div>
      <a href="#about">About</a>
      <Link to="/frasi">Frasi</Link>
    </nav>
    <div class="login-btn">
      <Link to="/login">Login</Link>
    </div>
  </header>
  <main class="flex-col">
    <h1 class="title">fiatlinux</h1>
    <div class="circle"></div>
    <div class="cit">
      <div class="flex-col">
        <h2>"Giuro non lo rifaccio più il sito"</h2>
        <p>Simo, 2020 - 2024</p>
      </div>
    </div>
  </main>
</section>
<section class="info" id="about">
  <div class="image">
    <img src="/godo.png" alt="" />
  </div>
  <div class="flex-col">
    <h2>Made in FIATLinUX!</h2>
    <p>
      fiatlinux is more than just a project - it is a vision, a family of
      creators and innovators. This platform is an entry point, a launchpad for
      the many exciting projects we will build together. We don't confine
      ourselves to a single subject or domain. Instead, we embrace the full
      breadth of creativity, from web development to artificial intelligence and
      beyond. This is not just a project - it is a movement, a community of
      visionaries committed to pushing the boundaries of what can be achieved.
    </p>
  </div>
</section>
<footer>
  <p>© 2024 fiatlinux</p>
  <div class="squares">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </div>
</footer>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

  .squares {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .square {
    width: 20px;
    height: 20px;
    background-color: #e87461;
  }

  footer {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #131b23;
    color: #e9f1f7;
  }

  .image {
    width: 353px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .image img {
    width: 100%;
  }

  .cit {
    width: 100%;
    padding: 40px;
    display: flex;
  }

  .info {
    display: flex;
    justify-content: space-evenly;
    gap: 40px;
    align-items: center;
    padding: 40px;
  }

  .cit h2 {
    font-size: 28px;
    font-weight: 500;
  }

  .info h2 {
    font-size: 48px;
    font-weight: 500;
    color: #131b23;
  }

  .info .flex-col {
    width: 40%;
    padding: 40px;
  }

  .cit .flex-col {
    align-items: center;
  }

  .title {
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 128px;
    font-weight: 600;
    color: #131b23;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 27%;
  }

  .circle {
    width: 575px;
    height: 575px;
    border-radius: 50%;
    background-color: #e87461;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  section {
    width: 100%;
    height: 100vh;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
  }

  header {
    width: 100%;
    height: 101px;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .logo img {
    width: 100%;
    height: 100%;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav :global(a) {
    margin: 0 40px;
    text-decoration: none;
    color: #131b23;
    transition: 0.3s;
  }

  nav :global(a):hover {
    color: #e87461;
  }

  .login-btn :global(a) {
    padding: 10px 20px;
    background-color: #e87461;
    color: #e9f1f7;
    border-radius: 5px;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
  }

  .login-btn :global(a):hover {
    background-color: #e9f1f7;
    color: #e87461;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 101px);
  }
</style>
