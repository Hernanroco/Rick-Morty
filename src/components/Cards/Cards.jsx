import Card from '../Card/Card.jsx';
import style from './Cards.module.css'


export default function Cards({characters}) {
  const onClose = () => window.alert('Emulamos que se cierra la card');
  return (
    <div className={style.cards}>
    {characters.map(({name, status, species, gender, image }) => {
        return (
          <Card
            name  = {name}
            status = {status}
            species = {species}
            gender = {gender}
            image = {image}
            onClose = {onClose}
          />
        );
      })}
    </div>
  );
}
