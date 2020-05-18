import React from "react";
import {
  render,
  getByLabelText,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

test("renders Checkout Form without crashig", () => {
  render(<CheckoutForm />);
});

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  const header = getByText(/checkout form/i);
  expect(header).toBeVisible();
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByText, getByTestId } = render(<CheckoutForm />);
  const firstNameInput = getByLabelText(/first name:/i);
  const lastNameInput = getByLabelText(/last name:/i);
  const addressInput = getByLabelText(/address:/i);
  const cityInput = getByLabelText(/city:/i);
  const stateInput = getByLabelText(/state:/i);
  const zipInput = getByLabelText(/zip/i);

  expect(firstNameInput).toBeInTheDocument();
  fireEvent.change(lastNameInput, { target: { value: "Tolentino" } });
  fireEvent.change(addressInput, { target: { value: "1 Centre St." } });
  fireEvent.change(cityInput, { target: { value: "Quincy" } });
  fireEvent.change(stateInput, { target: { value: "Luis" } });
  fireEvent.change(zipInput, { target: { value: "02122*" } });

  const button = getByTestId(/checkout/i);
  fireEvent.click(button);

  const successMessage = getByText(/You have ordered some plants! Woo-hoo!/i);
  expect(successMessage).toBeInTheDocument();
});
