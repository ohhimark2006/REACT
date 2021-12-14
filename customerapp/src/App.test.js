import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Customer Application/i);
  expect(linkElement).toBeInTheDocument(); // assertion
});

it("renders customers", () => {
  render(<App />);
  let btns = screen.getAllByRole("button");
  expect(btns.length).toBe(6);
});

it("delete a customer", () => {
  render(<App />);
  let btns = screen.getAllByRole("button");
  fireEvent.click(btns[3]);
  btns = screen.getAllByRole("button");
  expect(btns.length).toBe(5);
});

it("filter customers", () => {
  render(<App />);
  let txtbox = screen.queryByPlaceholderText("search by name");
  fireEvent.change(txtbox, {"target": {"value": "Geller"}});
  screen.debug();
  let btns = screen.getAllByRole("button");
  expect(btns.length).toBe(2);
});
