// function Recipe({ drinkers }) {
//     return (
//         <ol>
//             <li>Boil {drinkers} cups of water.</li>
//             <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
//             <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//         </ol>
//     );
// }
let guest = 0;

// function Cup()  {
//     // Bad: changing a preexisting variable!
//     guest = guest + 1;
//     return <h2>Tea Cup for guest #{guest}</h2>
// }
function Cup({guest})  {
    return <h2>Tea Cup for guest #{guest}</h2>
}

export default function MyApp() {
    // return (
    //     <section>
    //     <h1>Spiced Chai Recipe</h1>
    //     <h2>For two</h2>
    //     <Recipe drinkers={2} />
    //     <h2>For a gathering</h2>
    //     <Recipe drinkers={4} />
    //     </section>
    // );
    // return (
    //     <>
    //     <Cup />
    //     <Cup />
    //     <Cup />
    //     </>
    // );

    let cups = [];
    for (let i = 1; i <= 12 ; i++)  {
        cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
}