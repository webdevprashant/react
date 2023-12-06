function Item({ name, isPacked}) {
    // if (isPacked)  {
    //     return null;
        // return <li className="item">{name} ✔</li>;
    // }
    // return <li className="item">{name} </li>;
    // return (
    //     <li className="item">
    //         {/* {isPacked ? name + ' ✔' : name } */}
    //         {/* {isPacked ? ( <del> name + ' ✔' </del>) : ( name ) }; */}
    //         { name } { isPacked && ' ✔' }
    //     </li>
    // );
    let itemContent = name;
    if (isPacked)  {
        itemContent = ( <del> {name + ' ✔'} </del>);
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList()  {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}