import React, { useRef } from "react";

function ShoppingListForm(): JSX.Element {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='Product name' />
      <button type='submit'>Add Item</button>
      {/* <button
        onClick={() => {
          inputRef.current?.focus();
        }}
      ></button> */}
    </form>
  );
}

export default ShoppingListForm;
