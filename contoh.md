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


       padding: 8rem 7% 1.4rem;







       <!DOCTYPE html <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ Section with Toggle</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-item">
            <h3 class="faq-question">What is your return policy? <span class="toggle">+</span></h3>
            <p class="faq-answer">Our return policy allows you to return items within 30 days of purchase for a full refund.</p>
        </div>
        <div class="faq-item">
            <h3 class="faq-question">How do I track my order? <span class="toggle">+</span></h3>
            <p class="faq-answer">You can track your order using the tracking link sent to your email after shipment.</p>
        </div>
        <div class="faq-item">
            <h3 class="faq-question">Do you ship internationally? <span class="toggle">+</span></h3>
            <p class="faq-answer">Yes, we offer international shipping to select countries.</p>
        </div>
        <div class="faq-item">
            <h3 class="faq-question">What payment methods do you accept? <span class="toggle">+</span></h3>
            <p class="faq-answer">We accept all major credit cards, PayPal, and bank transfers.</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>









<!-- css -->
/* Products Section */
.products .row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;
}

.products .product-card {
  text-align: center;
  border: 1px solid #666;
  padding: 2rem;
}

.products .product-icons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.products .product-icons a {
  width: 4rem;
  height: 4rem;
  color: #fff;
  margin: 0.3rem;
  border: 1px solid #666;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.products .product-icons a:hover {
  background-color: var(--primary);
  border: 1px solid var(--primary);
}

.products .product-image {
  padding: 1rem 0;
}

.products .product-image img {
  height: 25rem;
}

.products .product-content h3 {
  font-size: 2rem;
}

.products .product-stars {
  font-size: 1.7rem;
  padding: 0.8rem;
  color: var(--primary);
}

.products .product-stars .star-full {
  fill: var(--primary);
}

.products .product-price {
  font-size: 1.3rem;
  font-weight: bold;
}

.products .product-price span {
  text-decoration: line-through;
  font-weight: lighter;
  font-size: 1rem;
}



<!-- html -->
<!-- product section  -->
<section class="products" id="products">
    <h2><span>Produk Unggulan</span> Kami</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde eum, ab fuga possimus iste.</p>

    <div class="row">
      <div class="product-card">
        <div class="product-icons">
          <a href="#"><i data-feather="shopping-cart"></i></a>
          <a href="#" class="item-detail-button"><i data-feather="eye"></i></a>
        </div>
        <div class="product-image">
          <img src="img/products/1.jpg" alt="Product 1">
        </div>
        <div class="product-content">
          <h3>Coffee Beans 1</h3>
          <div class="product-stars">
            <i data-feather="star" class="star-full"></i>
            <i data-feather="star" class="star-full"></i>
            <i data-feather="star" class="star-full"></i>
            <i data-feather="star" class="star-full"></i>
            <i data-feather="star"></i>
          </div>
          <div class="product-price">IDR 30K <span>IDR 55K</span></div>
        </div>
      </div>
      <div class="product-card">
        <div class="product-icons">
          <a href="#"><i data-feather="shopping-cart"></i></a>
          <a href="#" class="item-detail-button"><i data-feather="eye"></i></a>
        </div>
        <div class="product-image">
          <img src="img/products/1.jpg" alt="Product 1">
        </div>
        <div class="product-content">
          <h3>Coffee Beans 1</h3>
          <div class="product-stars">
            <i data-feather="star"></i>
            <i data-feather="star"></i>
            <i data-feather="star"></i>
            <i data-feather="star"></i>
            <i data-feather="star"></i>
          </div>
          <div class="product-price">IDR 30K <span>IDR 55K</span></div>
        </div>
      </div>
      <div class="product-card">
        <div class="product-icons">
          <a href="#"><i data-feather="shopping-cart"></i></a>
          <a href="#" class="item-detail-button"><i data-feather="eye"></i></a>
        </div>
        <div class="product-image">
          <img src="img/products/1.jpg" alt="Product 1">
        </div>
        <div class="product-content">
          <h3>Coffee Beans 1</h3>
          <div class="product-stars">
            <i data-feather="star"></i>
            <i data-feather="star"></i>
            <i data-feather="star"></i>
            <i data-feather="star"></i>
            <i data-feather="star"></i>
          </div>
          <div class="product-price">IDR 30K <span>IDR 55K</span></div>
        </div>
      </div>
    </div>
  </section>
  <!-- Products Section end -->