import React, { useState } from 'react';

const TodoList = ({ list }) => (
    <div>
    {
        list.map((item) => {
            return <ul><li>{item}</li></ul>;
        })
    }
    </div>
);

const Control = ({ onAdd }) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }
    const addItem = (e) => {
        onAdd(value);
        setValue('');
    }

    return (
        <>
            <input value={value} onChange={onChange}/>
            <button onClick={addItem}>Add</button>
        </>
    );
};

const App = () => {
    const [list, setList] = useState([]);

    const onAdd = (value) => {
        const newArray = [...list, value];
        setList(newArray);
    }

    return (
        <>
            <Control onAdd={onAdd} />
            <TodoList list={list} />
            <div>Total: {list.length}</div>
        </>
    );
}

export default App;