import classes from './Burger.module.css';
import React  from 'react';
import BurgerIngredents from './BurgerIngredents/BurgerIngredents.module'
const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {

        return [...Array( props.ingredients[igKey]) ].map((_, i) => {
            return <BurgerIngredents key={igKey + i} type={igKey}/>;
         });
    })
    .reduce((arr,el) => {
return arr.concat(el)

    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients=<p>Pls Start Adding Ingredients !</p>
    }
    return ( 
       <div className={classes.Burger}>
<BurgerIngredents type="bread-top"/>
  {transformedIngredients}
<BurgerIngredents type="bread-bottom"/>
       </div>
    );
};
export default Burger;