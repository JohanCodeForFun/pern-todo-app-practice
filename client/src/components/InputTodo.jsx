import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescrition] = useState('');

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body =  { description };
      const response = await fetch('http://localhost:5001/todos', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <h1 className="text-center mt-5">Pern Todo</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control"
        value={description}
        onChange={e => setDescrition(e.target.value)}/>
        <button className="btn btn-success">Add</button>
      </form>
    </>
  )
}

export default InputTodo;