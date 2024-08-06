import TCard from "./TCard";

export default function CustomersSay() {
    return(
        <div class="testimonials">
            <h1>Testimonials</h1>
            <div class="testimonial-cards">
            <TCard name="Ashley James" image="ashley_james.jpg" reviewText="The food was amazing, the service was great, and the atmosphere was perfect." />
            <TCard name="John Smith" image="john_smith.jpg" reviewText="The food was amazing, the service was great, and the atmosphere was perfect." />  
            <TCard name="Jason Johnson" image="jason_johnson.jpg" reviewText="The food was amazing, the service was great, and the atmosphere was perfect." />
            <TCard name="Emily Blunt" image="emily_blunt.jpg" reviewText="The food was amazing, the service was great, and the atmosphere was perfect." />
            </div>
      </div>
    );
};