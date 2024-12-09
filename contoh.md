<!-- hal yang diperlukan saat penting di html -->

        <div class="bb-content">
          <h3>-WHAT IS BALL BREAKER?-</h3>
          <p >
            "Ball Breaker Is a Classic Arcade Game Was Released In 1984, Where
            Players Can Control a Paddle To Bounce a Ball And Destroy Bricks."
          </p>
        </div>
<!-- hal yang diperlukan saat penting di css -->

<!-- hal yang saya ingin html -->
<section class="hero" id="Home">
      <div class="container">
        <div class="content">
          <video src="assets/bg.mp4" autoplay muted loop></video>
          <svg viewBox="0 0 1320 300">
            <text x="45%" y="110%" z="50%"  fill="transparent" text-anchor="middle">
              WELCOME
            </text>
          </svg>
            <p>
              "Welcome to this website ,this website can using for playing "RetroGames" you can play 
              many games for satisfy the longing into console games"
            </p>
        </div>
      </div>
    </section>

<!-- hal yang saya ingin css -->
.hero {
    min-height: 100vh;
    position: relative;
    opacity: 0;
    animation: pageIn 4.5s forwards;
    animation-delay: 4.5s;
}

.hero .container .content {
    /* display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100vh; */
    padding: 1.4rem 7%;
    max-width: 60rem;
}

.hero .container .content video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    animation: pageIn 4.5s forwards;
    animation-delay: 4.5s;
    background: linear-gradient(0deg, rgba(1, 1, 52, 0.8) 8%, rgba(1, 1, 52, 0)50%);
}

.hero .container .content video {
    background: linear-gradient(0deg, rgba(1, 1, 52, 0.8) 8%, rgba(1, 1, 52, 0)50%);

}

.hero .container .content svg {
    z-index: 3;
    margin-bottom: -4rem;
    opacity: 0;
    animation: pageIn 4.5s forwards;
    animation-delay: 4.5s;
}

.hero .container .content svg text {
    text-transform: uppercase;
    font-family: "Shojumaru", system-ui;
    font-size: 15rem;
    animation: stroke 3.5s infinite alternate;
    stroke-width: 3;
    stroke: white;
}

/* .hero .container .content .about {
    display: flex;
    flex-direction: column;
    z-index: 3;
    width: 35%;
    position: relative;
    justify-content: center;
    align-items: center;
} */

.hero .container .content .about p {
    /* text-align: center;
    font-size: 1.1rem;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 4.5s;
    mix-blend-mode: difference; */
    font-size: 1.6rem;
    margin: 1rem;
    line-height: 1.4;
    font-weight: 100;
    text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
    line-height: 1.2;
    mix-blend-mode: difference;
    display: flex;
    justify-content:center;
    align-items: center;
    position: center;
    
}

.blend {
    background: linear-gradient(0deg, rgba(1, 1, 52, 0.8) 8%, rgba(1, 1, 52, 0)50%);
}

<!-- about html -->
<section class="about" id="about">
      <div class="container">
        <div class="content">
          <h2>What it's <span>RetroGames?</span></h2>
          <div class="row">
            <div class="about-img">
              <img src="assets/sesi-about.jpg" alt="RetroGames" />
            </div>
            <div class="definition">
              <h3>RetroGames</h3>
              <p>
                Retrogames are old-school video games that evoke nostalgia and
                provide classic entertainment. They often feature pixelated
                graphics, iconic characters, and challenging gameplay that
                defined the gaming experience of past decades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- list -->
<div class="bb-content">
  
  
  </div>





  <!--  -->
  <div class="bb-img">
       <a href="">
        <img src="assets/bb.png" alt="ball-breaker">
       </a>
      </div>
      <div class="Snake">
        <img src="assets/ular.png" alt="Snake">
       </div>
        <div class="snake-content">
        <h3>-DEFINITION OF SNAKE GAME-</h3>
        <p>Snake Is An Iconic Old-School Games Where You Navigate a Growing Snake
          To Eat Food, Avoid Walls And Itself, With Increasingly Challenging Speed And Length.
        </p>
      </div>
      <div class="space-invader">
        <img src="" alt="space-invader">
      </div>
        <div class="invader-content">

       </div>