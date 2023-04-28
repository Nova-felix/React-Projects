import React, { useState } from 'react';
import Recipe from './recipe.js';
import './recipelist.css';
import alooimg from './images/aloo-gobi.jpg'
import chanaimg from './images/chana-masala.jpg'
import chi65img from './images/chi65.jpg'
import chibiimg from './images/chicken-biryani.jpg'
import chillp from './images/chillp.jpg'
import chitkimg from './images/chicken-tikka.jpg'
import dalimg from './images/dalchawal.jpg'
import dosaimg from './images/dosa.jpg'
import koftaimg from './images/kofta.jpg'
import saagimg from './images/saag-paneer.jpg'
import raitaimg from './images/veganraita.jpg'
import vegbiimg from './images/veg-biryani.jpg'
import idliimg from './images/idli.jpg'

const RecipeList = () => {
   const [recipes,setrecipes] = useState([
      {
         id: 1,
         name: 'Aloo Gobi :',
         image: alooimg,
         description: 'Aloo gobi is a vegetarian Indian dish made with potatoes, cauliflower, and a blend of spices, including '+
         'turmeric, cumin, and coriander. It is typically served with rice or naan bread.Indian Spiced Cauliflower & Potato Curry '+
         '(Aloo Gobi) is a popular Indian vegetarian side dish originating from the North Indian Punjab region cooked with onions, '+
         'tomatoes, and a blend of spices.',
         dietaryRestrictions: ['vegetarian',',', 'vegan']
      },
      {
         id:2,
         name: 'Chana Masala :',
         image: chanaimg,
         description: ' Chana masala is a popular Indian dish made with chickpeas cooked in a spicy tomato-based sauce with '+
         'a blend of fragrant Indian spices. It is often served with rice or naan bread.This Chana Masala, also known as Chole Masala, '+
         'is an authentic North Indian style curry made with white chickpeas, freshly powdered spices, onions, tomatoes and herbs.' +
         'Naturally vegan and packed with healthy minerals, protein and fiber, this delicious vegetarian meal can be ready in '+
         'just 45 minutes minus the soaking time of chickpeas.',
         dietaryRestrictions: ['vegetarian']
      },
      {
         id:3,
         name:'Chicken 65:',
         image:chi65img,
         description:'Chicken 65 is bite size pieces of chicken coated in spicy masala marination consists of chilli powder, turmeric, '+
         'garam masala powder, lemon juice, ginger, garlic, eggs, rice flour. Marinated chicken is then deep fried till cooked and crispy. '+
         'Fried chicken is served as it is or tossed in a spicy sauce.',
         dietaryRestrictions:['non-vegetarian']
      },
      {
         id: 4,
         name:'Chicken Biriyani :',
         image: chibiimg,
         description:'Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together.'+
         ' The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns '+
         'out white and fluffy. Buried in the Biryani, you will find whole cuts of succulent chicken bursting with flavor from the potent '+
         'array of spices, herbs, and aromatics it is marinated in.',
         dietaryRestrictions: ['non-vegetarian']
      },
      {
         id:5,
         name:'Chicken lollipop:',
         image:chillp,
         description:'Chicken lollipop is nothing but legs of chicken cut in such a way it forms like a lollipop shape.'+
         'You can easily get pre cut chicken lollipop in most grocery store. These cuts of chicken lollipop marinated in masala and fried till crispy and juicy.',
         dietaryRestrictions: ['non-vegetarian']
      },
      {
         id: 6,
         name: 'Chicken Tikka Masala :',
         image: chitkimg,
         description: 'The BEST part about this recipe and just like our Butter Chicken — you may already have these ingredients'+
         ' in your kitchen. If not, they are so easy to find in any grocery store, you won’t need to go searching high and '+
         'low to find them! Authentic Chicken Tikka Masala is usually made with yogurt marinated chicken, skewered and'+
         ' chargrilled for incredible bbq flavours. For the sake of making this recipe much easier for us to make at home,'+
         ' we are using a skillet or pot to cook it all in, while still keeping those amazing flavours.',
         dietaryRestrictions: ['non-vegetarian']
      }, 
      {
         id:7,
         name:'dal chawal',
         image:dalimg,
         description:'Dal Chawal is a basic meal of a simple lentil curry, and basmati rice made with simple ingredients and pantry staples',
         dietaryRestrictions:['vegetarian',',','vegan']
      },
      {
         id:8,
         name:'Dosa:',
         image:dosaimg,
         description:'Dosa - a thin and crispy crepe made from rice and urad dal (black lentils), served with Coconut Chutney '+
         'and Vegetable Sambar is a match made in heaven! This popular breakfast item is not only healthy but also easy to prepare.'+
         ' There are many varieties of Dosa, e.g. Mysore Masala Dosa, Set Dosa, Ragi Dosa, Wheat Flour Dosa, Paper Dosa, etc.'+
         ' This simple Dosa Recipe explains how to make Plain or Paper Dosa from scratch with step by step photos and also '+
         'provides tips on preventing them from sticking to pan while cooking.',
         dietaryRestrictions: ['vegetarian']
      },{
         id:9,
         name:'idli',
         image:idliimg,
         description:'Idli is one of the most healthiest and popular South Indian breakfast dish. These are soft, light, fluffy steamed '+
         'round cakes made with a ground, fermented rice and lentil batter. Here I share my foolproof recipe with video and step-by-step photos '+
         'that will help you in making the best idli. This Idli recipe is one of the earliest recipe from the blog which has been tried'+
         ' and tested with great results by many of our readers. ',
         dietaryRestrictions:['vegetarian','vegan']
      },
      {
         id:10,
         name:'Kofta',
         image:koftaimg,
         description:'Kofta are meatballs, and there are variations of them from the Balkans and Middle East through South Asia.'+
         ' In this dish they are typically made with potatoes and paneer (a fresh farmer cheese). Malai simply means cream',
         dietaryRestrictions:['vegetarian']
      },
      {
         id: 11,
         name: 'Saag-paneer :',
         image:  saagimg,
         description: 'Saag refers to an Indian vegetable dish in which spinach or other dark greens are stewed with ginger, garlic,'+
         ' fresh chiles and spices until meltingly soft. As the name suggests, saag paneer includes paneer, a mild Indian cheese that '+
         'is firm enough to cook without melting. The heat of the serrano chiles balances the creamy richness, but for a milder dish,'+
         ' remove the seeds before mincing the chiles. The fresh greens are finely chopped before cooking, to help them break down faster '+
         'into a silky gravy. Thawed chopped frozen spinach can be used to save time, but make sure to drain well and squeeze out the excess'+
         ' liquid first. Finish the dish with a little heavy cream (or plain yogurt) to lend body and richness.',
         dietaryRestrictions: ['vegetarian']
      },
      {
         id:12,
         name:'Vegan raita',
         image:raitaimg,
         description:'Raita is an Indian yogurt sauce with cucumber and mint. My Vegan Raita is made with dairy free yogurt. It is a super simple vegan yogurt sauce and the perfect cooling condiment to serve with curry.',
         dietaryRestrictions:['vegetarian',',','vegan']
      },
      {
         id: 13,
         name:'Vegetable Biriyani :',
         image: vegbiimg,
         description:'Veg Biryani is an authentic Indian vegetarian recipe packed full of your favorite rice, veggies, and spices. Made with patience '+
         'and lots of love, this delicious veg dum biryani requires both care and attention to detail. The savory flavors in your first bite are well worth the '+
         'time and effort spent in the kitchen.',
         dietaryRestrictions: ['vegetarian']
      },
   ]);
   const [filterCriteria, setFilterCriteria] = useState('');
   const [searchCriteria, setSearchCriteria] = useState('');

   const handleFilterChange = (event) => {
      setFilterCriteria(event.target.value);
   };

   const handleSearchChange = (event) => {
      setSearchCriteria(event.target.value);
   };

   const handleFormSubmit = (event) => {
      event.preventDefault();
   };

   const filteredRecipes = recipes.filter(recipe => {
      if (filterCriteria === '' && searchCriteria === '') {
         return true;
      } else if (filterCriteria === '') {
         return recipe.name.toLowerCase().includes(searchCriteria.toLowerCase());
      } else {
         return recipe.dietaryRestrictions.includes(filterCriteria.toLowerCase()) && recipe.name.toLowerCase().includes(searchCriteria.toLowerCase());
      }
   });

   return (
      <div className="recipe-list">
         <h1>Recipes List</h1>
         <h3>“A recipe has no soul. You as the cook must bring soul to the recipe.” – Thomas Keller</h3>
         <form onSubmit={handleFormSubmit}>
            <label htmlFor="filter">Dietary restrictions:</label>
            <select id="filter" onChange={handleFilterChange} value={filterCriteria}>
               <option value="">All</option>
               <option value="non-vegetarian">Non-Vegetarian</option>
               <option value="vegetarian">Vegetarian</option>
               <option value="vegan">Vegan</option>
            </select>
            <br/>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" onChange={handleSearchChange} value={searchCriteria}/>
            <button type="submit" id='submit'>Submit</button>
         </form>  
         <br/>
         {filteredRecipes.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe} />
         ))}
      </div>
   );
};

export default RecipeList;