import { React } from "react";
import { Header } from "/components/header";
import { Footer } from "/components/footer";
import { Note } from "/components/note";

function createNotes(noteItem){
    return( 
    <Note
    key={noteItem.key}
        name={noteItem.name}
        description={noteItem.description}
    />
    );
}
function App(){
    return <div>
        <Header/>
        {note.map(createNotes)}
        <Footer/>
    </div>
}
export default App;