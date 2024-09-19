import React from 'react';
import adidasModel1 from './../../assets/adidas/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import adidasModel2 from './../../assets/adidas/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'
import adidasModel3 from './../../assets/adidas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import { NavLink } from 'react-router-dom';

export type AdidasItem = {
  id: number
  model: string;
  collection: string;
  price: string;
  picture: string;
}
export const adidasArr: AdidasItem[] = [
  {
    id: 0,
    model: 'ADIDAS ADIFOM TRXN',
    collection: 'new collection1',
    price: '100200$',
    picture: adidasModel1,

  },
  {
		id: 1,
    model: 'ADIDAS ADIFOM SUPER',
    collection: 'new collection22',
    price: '200300$',
    picture: adidasModel2
  },
  {
		id: 2,
    model: 'ADIDAS SUPER SUPERSKI',
    collection: 'new collection333',
    price: '300400$',
    picture: adidasModel3
  }
]


export const Adidas = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Adidas</h2>
      {adidasArr.map((el, index) => {
        return <NavLink to={`/adidas/${el.id}`} key={index}>
          <img src={el.picture} alt={el.model} style={{ width: '300px', margin: '10px' }} />
        </NavLink>
      })
      }
      <p>
        what is lorem ipsum?
        lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the
        industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
        it has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
        it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and
        more recently
        with desktop publishing software like aldus pagemaker including versions of lorem ipsum.

        why do we use it?
        it is a long established fact that a reader will be distracted by the readable content of a page when
        looking at its layout.
        the point of using lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed
        to using 'content here,
        content here', making it look like readable english. many desktop publishing packages and web page
        editors now use lorem ipsum
        as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
        infancy. various versions
        have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        where does it come from?
        contrary to popular belief, lorem ipsum is not simply random text. it has roots in a piece of classical
        latin literature from 45 bc,
        making it over 2000 years old. richard mcclintock, a latin professor at hampden-sydney college in
        virginia, looked up one of the
        more obscure latin words, consectetur, from a lorem ipsum passage, and going through the cites of the
        word in classical literature,
        discovered the undoubtable source. lorem ipsum comes from sections 1.10.32 and 1.10.33 of "de finibus
        bonorum et malorum"
        (the extremes of good and evil) by cicero, written in 45 bc. this book is a treatise on the theory of
        ethics, very popular during the
        renaissance.
        the first line of lorem ipsum, "lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </p>
    </div>
  );
};
