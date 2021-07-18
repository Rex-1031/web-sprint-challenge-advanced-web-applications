import React from 'react';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import userEvent from '@testing-library/user-event'
const noColor = [];

const testColor ={
    color: "red",
    code: {hex: "#ff0000"}, 
    id: 1
}

test("Renders an empty list of colors without errors", () => {
    render(<ColorList color ={noColor} />)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList color={testColor} />)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
const toggleEdit = jest.fn()
render(<ColorList color={testColor} />)
let editing = screen.queryByTestId("color");
userEvent.click(editing)
expect(toggleEdit).toBeCalled()
});
