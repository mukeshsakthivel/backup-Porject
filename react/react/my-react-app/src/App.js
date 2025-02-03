 
 
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import ToDoList from './ToDoList';
import React, { useState, useEffect } from "react";
import NewListItem from './NewListItem';
import Search from './Search';
import Map from './Map';
import apiRequest from './apiRequest';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [loadTime, setLoadTime] = useState(true);

  const APIUrl = "http://localhost:3500/items";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(APIUrl);
        if (!response.ok) throw Error("Data not Found");
        const listStore = await response.json();
        setItems(listStore);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoadTime(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 500);
  }, []);

  const addItem = async (newItem) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const details = { id, checked: false, item: newItem };
    const allDetails = [...items, details];
    setItems(allDetails);

    const postOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    };
    const postData = await apiRequest(APIUrl, postOption);
    if (postData) setFetchError(postData);
  };

  const handleCheck = async (id) => {
    const handleItem = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(handleItem);

    const updateId = handleItem.filter(item => item.id === id);
    const patchOption = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: updateId[0].checked })
    };
    const patchUrl = `${APIUrl}/${id}`;
    const patchData = await apiRequest(patchUrl, patchOption);
    if (patchData) setFetchError(patchData);
  };

  const handleDelete = async (id) => {
    const deleteItem = items.filter(item => item.id !== id);
    setItems(deleteItem);
    localStorage.setItem("todo_list", JSON.stringify(deleteItem));

    const deleteOption = {
      method: 'DELETE'
    };
    const deleteUrl = `${APIUrl}/${id}`;
    const deleteData = await apiRequest(deleteUrl, deleteOption);
    if (deleteData) setFetchError(deleteData);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className='App'>
      <Header />
      
      <NewListItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search
        search={search}
        setSearch={setSearch}
      />
      <main>
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {loadTime && <p>Loading items...</p>}
        {!fetchError && !loadTime && (
          <ToDoList
            items={items}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            length={items.length}
            search={search}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
