import { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState();

  const keys = ["first_name", "last_name", "email"];

  const Search = (data) => {
    return data.filter((item) => 
    console.log(keys.some((key) => item[key].toLowerCase().includes(query)))
    )
    
  }
  

  return (
    <div className="app">
      <pre> {JSON.stringify({ query }, null, 2)}</pre>

      <input
        type="text"
        placeholder="Search.."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={Search(Users)} />
    </div>
  );
}

export default App;
