import Route from '@ember/routing/route';

export default Route.extend({
 
  model() {

    const data = [
      {
       name: 'Massaman curry',
       calories: 690,
       type: 'Thai',
       ingredients: ['Curry', 'Chicken Breast', 'Sugar', 'Peanut Butter'],
       meal: 'Dinner'
     },
     {
      name: 'Neapolitan pizza',
      calories: 470,
      type: 'Italian',
      ingredients: ['Dough', 'Tomatoes', 'Olive Oil', 'Salt', 'Basil'],
      meal: 'Dinner'
     },
     {
      name: 'Chocolate',
      calories: 160,
      type: 'Mexican',
      ingredients: ['Cocoa Bean', 'Cacoa Tree Seeds', 'Sugar', 'Cocoa Butter'],
      meal: 'Dessert'
    },
     {
      name: 'Sushi',
      calories: 310,
      type: 'Japanese',
      ingredients: ['Sushi Seaweed', 'Rice', 'Fish', 'Cream Cheese','Avocado'],
      meal: 'Lunch'
 
    },
     {
      name: 'Peking duck',
      calories: 725,
      type: 'Chinese',
      ingredients: ['Duck', 'Cinammon', 'Ginger', 'Nutmeg', 'White Pepper', 'Soy Sauce'],
      meal: 'Dinner'

    },
     {
      name: 'Hamburger',
      calories: 550,
      type: 'German',
      ingredients: ['Buns', 'Meat', 'Toppings'],
      meal: 'Lunch'

    },
     {
      name: 'Penang assam laksa',
      calories: 725,
      type: 'Malaysian',
      ingredients: ['Broth', 'Noodles', 'Mackerel', 'Herbs'],
      meal: 'Breakfast'
    },
     {
      name: 'Tom yum goong',
      calories: 890,
      type: 'Thailand',
      ingredients: ['Shrimp', 'Water', 'Galangal', 'Lemongrass', 'Lime Leaves', 'Mushrooms'],
      meal: 'Lunch'

    },
     {
      name: 'Ice cream',
      calories: 450,
      type: 'Global',
      ingredients: ['Sugar', 'Milk', 'Flavoring'],
      meal: 'Dessert'

    },
     {
      name: 'Chicken muamba',
      calories: 1000,
      type: 'Gabon',
      ingredients: ['White Pepper', 'Garlic', 'Paprika', 'Chicken Bouillon Powder', 'Thyme', 'Lemon'],
      meal: 'Dinner'
    }
    ];
    return data;
  },

});
