import Avatar from "./Avatar";

function Card({children})  {
    return (
        <div className="card">
            {children}
        </div>
    );  
}

export default function Profile()  {
    // export default function Profile({ person, size, isSepia, thickBorder })  {
        return (
    
            <Card>
            <Avatar 
            person={{name: 'Lin Lanying' , imageId: '1bX5QH6'}}  // props
            size={100}
            />
            </Card>            
        );
    }