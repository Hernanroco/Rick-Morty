import style from "./Card.module.css";

function Card({ 
   name, 
   status,
   species, 
   gender, 
   image, 
   onClose }) {
   return (
      <div className={style.card}>
         <button onClick={onClose} className={style.closebutton}>X</button>
         <ul>
            <li>
               <figure>
                  <img  src={image} alt="Imagen_Rick" />
                  <figcaption>
                     <h2>Name: {name}</h2>
                     <h2>Status: {status}</h2>
                     <h2>Species: {species}</h2>
                     <h2>Gender: {gender}</h2>
                  </figcaption>
               </figure>  
            </li>
         </ul>
      </div>
   );
}

export default Card;
