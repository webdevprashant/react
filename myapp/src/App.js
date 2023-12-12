// export default function Button()  {
//     function handleClick()  {
//         alert('You clicked me!');
//     }

//     return (
//         // <button onClick={handleClick}>
//         //     Click Me
//         // </button>
//         // Function call immediately during rendering
//         // <button onClick={handleClick()}>        
//         //     Click Me
//         // </button>

//         // <button onClick={alert('You clicked me !!!')}>
//         <button onClick={() => alert('HI bro')}>
//             Click me
//         </button>
//     );
// }

// function AlertButton({ message, children })  {
//     return (
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     );
// }

// export default function ToolBar()  {
//     return (
//         <div>
//             <AlertButton message={"Playing..."}>
//                 Play Movie
//             </AlertButton>

//             <AlertButton message={"Uploading..."}>
//                 Upload Image
//             </AlertButton>
//         </div>
//     );
// }

// function Button({ onClick, children}) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// function PlayButton({ movieName})  {
//     function handlePlayClick() {
//         alert(`Playing ${movieName}!`);
//     }
//     return (
//         <Button onClick={handlePlayClick} >
//             Play "{movieName}"
//         </Button>
//     );
// }

// function UploadButton()  {
//     return (
//         <Button onClick={() => alert('Uploading...')}>
//             Upload Image
//         </Button>
//     );
// }

// export default function ToolBar()  {
//     return (
//         <div>
//             <PlayButton movieName="Kiki's Delivery Service" />
//             <UploadButton />
//         </div>
//     );
// }


function Button({ onSmash, children})  {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

export default function App()  {
    return (
        <div>
            <Button onSmash={() => alert('Playing !!!')}>
                Play Movie
            </Button>

            <Button onSmash={() => alert('Uplading !!!')}>
                Uplad Image
            </Button>
        </div>
    );
}