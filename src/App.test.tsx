import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';

test("renders a todo", addTodo);

function addTodo () {
   render(<App />);
   const listEl = screen.getByRole('todosinfo');
   const btnElement = screen.getByText('Add');
   const inpEl = screen.getByRole('todosinput');

   fireEvent.change(inpEl, {
      target: {
         value: 'hello'
      }
   });

   fireEvent.click(btnElement);

   expect(listEl).toHaveTextContent('hello');
}

test('toggles todo', toggleTodo);

function toggleTodo () {
   render(<App />);
   const btnElement = screen.getByText('Add');
   const inpEl = screen.getByRole('todosinput');

   fireEvent.change(inpEl, {
      target: {
         value: 'zhopa'
      }
   });
   fireEvent.click(btnElement);

   const todo = screen.getByText('zhopa');
   const checkBoxes = screen.getAllByRole('toggleTodo');

   checkBoxes.forEach(checkBox =>  fireEvent.click(checkBox));


   expect(todo).toHaveClass('line-through');
}