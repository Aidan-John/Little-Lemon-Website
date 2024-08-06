export default function Card({title, price, description, image}) {
    return(
        <div class="card">
            <img src={image} alt={title}/>
            <div class="card-content">
                <div class="card-title">
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
                <div class="card-description">
                    <p>{description}</p>
                
                </div>
                <div class="card-footer">
                    <h3>Order a delivery &gt;</h3>
                </div>
            </div>
        </div>
    );
};