import './App.css';
import { useEffect, useState } from 'react'
import Basictable from './Basictable'
import { Search } from './Search'

function App() {

  const [data, setData] = useState([]);
  const [filterKeys, setfilterKeys] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const url = fetch("https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setFilteredData(data)
      })
  }, [])


  useEffect(() => {
    if (filterKeys) {
      const filteredArray = data.filter((obj) => obj.year === parseInt(filterKeys));
      console.log("filtered data", filteredArray);
      setFilteredData(filteredArray);
    } else {
      setFilteredData(data);
    }

  }, [filterKeys])


  return (
    <div className="App">
      <h1> Search Movies By Year</h1>
      < Search filterKeys={filterKeys} setfilterKeys={setfilterKeys} />
      <Basictable filteredData={filteredData} />
    </div>
  );
}

export default App;
