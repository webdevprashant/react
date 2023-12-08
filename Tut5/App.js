// import { getImageUrl } from './utils';
import { Fragment } from "react";

// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
// ];

// const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//   }, {
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',  
//   }, {
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//   }];

const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];

  

export default function List() {
    // const chemists = people.filter(person =>
    //     person.profession === 'chemist'
    // );
    // const listItems = chemists.map(person =>
    // <li>
    //     <img
    //     src={getImageUrl(person)}
    //     alt={person.name}
    //     />
    //     <p>
    //     <b>{person.name}:</b>
    //     {' ' + person.profession + ' '}
    //     known for {person.accomplishment}
    //     </p>
    // </li>
    // );

    const listItems = people.map(person =>
        <Fragment key={person.id}>
            <h1>{person.name}</h1>
            <h1>{person.bio}</h1>
        </Fragment> 
    )
    return <ul>{listItems}</ul>;
}
