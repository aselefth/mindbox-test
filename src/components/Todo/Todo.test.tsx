import { render, screen } from "@testing-library/react";
import { Todo } from "./Todo";
import '@testing-library/jest-dom';

test("renders a todo", testRender);

function testRender () {
   render(<Todo todo={{id: '1', isCompleted: false, title: 'todo test'}} toggleTodo={function () {}}/>);
   const linkElement = screen.getByText(/todo test/i);
   expect(linkElement).toBeInTheDocument();
}