import React from 'react';
import NavigationBar from './navbar';
import Jumbo from './jumbotron';
import Card from './card';
import Footer from './footer';

const Home = () => {
    return (
        <>
            <NavigationBar />
            <Jumbo />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <Card 
                            title="Vegan Shawarma" 
                            text="This Vegan Shawarma is JAMMED PACKED with flavor thanks to all the spices, not to mention the thick and fluffy TOUM as well!" 
                            imageUrl="https://theeburgerdude.com/wp-content/uploads/2024/06/Impossible-Shawarma-1-1024x1024.jpg" 
                            link="https://theeburgerdude.com/wprm_print/vegan-shawarma" 
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <Card 
                            title="Tofu Banh-Mi" 
                            text="Arguably the best sandwich in the world, let’s make a Vegan Banh Mi with Tofu! Complete with a Mushroom Pate!" 
                            imageUrl="https://theeburgerdude.com/wp-content/uploads/2024/04/Banh-Mi-Feature-01-1024x1024.jpg" 
                            link="https://theeburgerdude.com/wprm_print/tofu-banh-mi" 
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <Card 
                            title="Not Eggs Benedict" 
                            text="In 30 minutes you can have a rich and decadent hollandaise sauce, a runny “egg” yolk, and can enjoy this comfort food classic in style!" 
                            imageUrl="https://theeburgerdude.com/wp-content/uploads/2023/04/Eggs-Benny-Feature-1024x1024.jpg" 
                            link="https://theeburgerdude.com/wprm_print/vegan-eggs-benedict" 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <Card 
                            title="'Beef' Teriyaki" 
                            text="I used to hit up places like Yoshinoya when I was in my 20s all the time, and Beef Teriyaki was always on my plate! But this version made with Soy Curls is just as good, if not better than I remember!" 
                            imageUrl="https://theeburgerdude.com/wp-content/uploads/2024/06/Beef-Teriyaki-NEW-1-1024x1024.jpg" 
                            link="https://theeburgerdude.com/wprm_print/vegan-beef-teriyaki" 
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <Card 
                            title="Reese’s Peanut Butter Cups" 
                            text="Reese’s were one of my favorite candies growing up. I remember every Halloween, after I went trick or treating, gathering up those little orange squares and make sure I didn’t trade them for anything, they were the gold standard!" 
                            imageUrl="https://theeburgerdude.com/wp-content/uploads/2023/10/Reeses-Blog-3-1024x1024.jpg" 
                            link="https://theeburgerdude.com/wprm_print/vegan-reeses-peanut-butter-cups" 
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <Card 
                            title="Oyster Mushrooms" 
                            text="Oyster Mushrooms are Super MEATY, and perfect for the BBQ ! Eat ’em straight off the skewer or make a sandwich with ’em!" 
                            imageUrl="https://theeburgerdude.com/wp-content/uploads/2024/06/Skewer-3-1024x1024.jpg" 
                            link="https://theeburgerdude.com/wprm_print/oyster-mushroom-skewers" 
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
