import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "./App";

describe("component: App", () => {
    test("should display the header when rendering", () => {
        render(<App />)
        expect(screen.getByRole("heading")).toHaveTextContent("The Board")
    })
})
