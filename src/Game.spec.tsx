import { render, fireEvent,cleanup } from "@testing-library/react";

import Game from "./Game";

afterEach(cleanup);

it("renders game headings", () => {
  const { getByText } = render(<Game />);
  getByText("TIC-TAC-LIVEN");
});

it("renders board and check for step counter update", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Expect "Current step: 0" to be found
  getByText("Current step: 0");

  const square0 = getByTestId(`square-0`);
  fireEvent.click(square0);

  // Expect "Current step: 1" to be found
  getByText("Current step: 1");
});

it("should able to play again after finish the game", () => {
  const { getByText, getByTestId, getByRole} = render(<Game />);

  for(var i=0;i<9;i++){
    fireEvent.click(getByTestId(`square-${i}`)) 
  }
  const playAgain = getByRole('button',{name:/play again/i});
  fireEvent.click(playAgain);

  expect(getByText("Current step: 0")).toBeTruthy();
})
it("should able to the X win the game", () => {
  const { getByText, getByTestId} = render(<Game />);

  for(var i=0;i<9;i++){
    fireEvent.click(getByTestId(`square-${i}`)) 
  }
 
  expect(getByText("Winner: ❌")).toBeTruthy();
})
it("should able to the O win the game", () => {
  const { getByText, getByTestId} = render(<Game />);

  for(var i=1;i<9;i++){
    fireEvent.click(getByTestId(`square-${i}`)) 
  }
 
  expect(getByText("Winner: ⭕")).toBeTruthy();
})
it("should able to have no winner", () => {
  const { getByText, getByTestId} = render(<Game />);

  for(var i=0;i<3;i++){
    fireEvent.click(getByTestId(`square-${i}`)) 
  }
  for(var i=6;i<9;i++){
    fireEvent.click(getByTestId(`square-${i}`)) 
  }
  for(var i=3;i<6;i++){
    fireEvent.click(getByTestId(`square-${i}`)) 
  }
 
  expect(getByText("Draw: Game over")).toBeTruthy();
})
it("should able to ensure no effects when double click in the same square", () => {
  const { getByText, getByTestId} = render(<Game />);
 
  fireEvent.click(getByTestId(`square-0`));
  fireEvent.click(getByTestId(`square-0`));

  // Expect "Current step: 1" to be found
  getByText("Current step: 1");
  getByText("Next player: ⭕");
})
