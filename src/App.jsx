import Explore from './Explore.jsx'
import SearchBar from './SearchBar.jsx'
import Info from './Info.jsx'
import List from './List.jsx'

function App() {
  
    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1 className="sen-font">OMIKU</h1>
                <h2 style={{fontFamily: "inter", fontSize: "64px", fontWeight: "400"}}>Anime Database UI Concept</h2>
            </div>

            <div style={{}}>
                <SearchBar/>
                <div style={{display:"flex", flexDirection: "row"}}>
                    <List/>
                    <Explore/>
                    <Info/>
                </div>
            </div>
        </>
    )
}

export default App
