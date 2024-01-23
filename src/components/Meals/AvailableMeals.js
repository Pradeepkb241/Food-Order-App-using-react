import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Biryani',
    description: 'special chicken biryani',
    price: 299,
  },
  {
    id: 'm2',
    name: 'Non-veg Thali',
    description: 'chicken curry, chicken lapeta, naan , tanduri roti, raita',
    price: 200,
  },
  {
    id: 'm3',
    name: 'Veg Thali',
    description: 'special thali , raw, deserts',
    price: 199,
  },
  {
    id: 'm4',
    name: 'Mix-veg',
    description: 'Healthy...and green...',
    price: 180,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;