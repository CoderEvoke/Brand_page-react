const Hero = () =>{
    return (
        <main className="hero">
            <div className="rightSide">
                <h1>Your feet deserve the best</h1> 
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero_button">
                <button>Shop Now</button>
                <button className="cat_button">Category</button>
            </div>
            <div className="shopping">
                <p>Also avialable on </p>
            </div>
            <div className="brand_icons">
                <img src="/images/flipkart.png" alt="flipkart" />
                <img src="/images/amazon.png" alt="amazon " />
            </div>
            </div>
            <div className="leftSide">
                <img src="/images/shoe_image.png" alt="Shoes" />
            </div>
        </main>
    );
};
export default Hero;