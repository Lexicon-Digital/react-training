import { describe, expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "./App";
import * as dataFns from "./data/getPosts";


describe("component: App", () => {
  test("should display the header when loaded", async () => {

    vi.spyOn(dataFns, 'getPosts').mockImplementation(
      async () => new Promise(resolve => resolve([
        { author: "auth1", quote: "quote1" },
      ]))
    )

    render(<App />)
    expect(screen.getByRole("heading")).toHaveTextContent("The Board")
  })

  test("should display the cards when data is fetched", async () => {

    vi.spyOn(dataFns, 'getPosts').mockImplementation(
      async () => new Promise(resolve => resolve([
        { author: "auth1", quote: "quote1" },
      ]))
    )

    render(<App />)

    await waitFor(() => {
      expect(screen.getByText(/auth1/)).toBeInTheDocument();
      expect(screen.getAllByText(/auth1/).length).toEqual(1);
    });

  })

  test("should increment total likes when like button clicked", async () => {

    vi.spyOn(dataFns, 'getPosts').mockImplementation(
      async () => new Promise(resolve => resolve([
        { author: "auth1", quote: "quote1" },
      ]))
    )

    render(<App />)
    expect(screen.getByTestId("like-count")).toHaveTextContent("0");

    await waitFor(() => {
      expect(screen.getByText(/auth1/)).toBeInTheDocument();
    });

    screen.getByRole("button").click();

    await waitFor(() => {
      expect(screen.getByTestId("like-count")).toHaveTextContent("1");
    });
  })
})
