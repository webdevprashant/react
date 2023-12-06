import { getImageUrl } from './utils.js';


export default function Avatar({person, size = 100}) {

    // let p = props.person;
    // let s = props.size;      // Destructuring
    return (
        <img
            className="avatar"
            // src="https://i.imgur.com/1bX5QH6.jpg"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}