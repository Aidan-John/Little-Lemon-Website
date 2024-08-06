export default function TCard({name, image, reviewText}) {
    return(
        <div class="rating-card">
            <div class="rating">
                <p>Rating</p>
            </div>
            <div class="rating-id">
                <img src={image} alt={"Photo of " + name}/>
                <p>{name}</p>
            </div>
            <div class="rating-text">
                <p>{reviewText}</p>
            </div>
        </div>
    );
};