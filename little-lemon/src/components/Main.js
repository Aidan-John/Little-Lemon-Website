import Card from "./Card";
import TCard from "./TCard";

function Main() {
  return (
    <main>
      <div class="hero">
        <div class="hero-content">
          <div class="hero-position">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Reserve A Table</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="restaurantfood.jpg" alt="Restaurant Food" />
        </div>
      </div>

      <div class="specials">
        <h1>Specials</h1>
        <div class="menu-button">
          <button>Online Menu</button>
        </div>
      </div>
      <div class="specials-cards">
        <Card title="Greek Salad" price="$ 12.99" description="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." image="greek_salad.jpg" />

        <Card title="Bruchetta" price="$ 5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " image="bruchetta.svg" />

        <Card title="Lemon Dessert" price="$ 5.00" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." image="lemon_dessert.jpg"/>
      </div>

      <div class="testimonials">
        <h1>Testimonials</h1>
        <div class="testimonial-cards">
          <TCard name="Ashley James" image="ashley_james.jpg" reviewText="The food was amazing, the service was great, and the atmosphere was perfect." />
          <TCard name="John Smith" image="john_smith.jpg" reviewText="The food was amazing, the service was great, and the atmosphere was perfect." />  
          <TCard name="Jason Johnson" image="jason_johnson.jpg" reviewText="The food was amazing, the service was great, and the atmosphere was perfect." />
          <TCard name="Emily Blunt" image="emily_blunt.jpg" reviewText="The food was amazing, the service was great, and the atmosphere was perfect." />
        </div>
      </div>

      <div class="about">
        <div class="about-container">
          <div class="about-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div class="about-images">
            <img class="img1" src="restaurant.jpg" alt="Restaurant View" />
            <img class="img2" src="chefs.jpg" alt="Our Chefs" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
