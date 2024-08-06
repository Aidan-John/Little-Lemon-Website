import Card from "./Card";

export default function Specials() {
    return(
        <>
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
        </>
    );
};