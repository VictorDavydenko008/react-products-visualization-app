import './App.css';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Types from './components/types';
import PaginationPanel from './components/pagination';
import Items from './components/items'

function App() {
    const [types, setTypes] = useState([]);
    const [items, setItems] = useState([]); // store all items of certain type
    const [selectedType, setSelectedType] = useState(null);
    const [page, setPage] = useState({
        current: 1,
        limit: 10
    });

    // fetch types categories from the database
    const fetchTypes = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_TYPES_API_URL, {
                method: "GET",
                mode: "cors",
            });
            const data = await response.json();
            // set unique id for each type element
            const types = data.map(type => ({ ...type, id: uuidv4() }));
            setTypes(types);
        } catch (error) {
            console.log(error.message);
        }
    };

    // fetch items of selected type from the database
    const fetchItems = async (type) => {
        try {
            const response = await fetch(process.env.REACT_APP_ITEMS_OF_TYPE_API_URL + type, {
                method: "GET",
                mode: "cors",
            });
            const data = await response.json();
            // set unique id for each item
            const items = data.map(item => ({ ...item, id: uuidv4() }));
            setItems(items);
            if (!items.length) {
                console.log("No items");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchTypes()
    }, []);

    useEffect(() => {
        if (selectedType) {
            fetchItems(selectedType);
        }
    }, [selectedType]);

    return (
        <main>
            <h1>Types</h1>
            <section className="types-section">
                <Types types={types} selectedType={selectedType} onTypeClick={setSelectedType} setPage={setPage} />
            </section>

            <h1>Items</h1>
            <section className="items-section">
                <Items items={items} page={page}/>
                <PaginationPanel items={items} page={page} setPage={setPage}/>
            </section>
        </main>
    );
}

export default App;
