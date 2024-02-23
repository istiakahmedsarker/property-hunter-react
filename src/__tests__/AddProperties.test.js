import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test , it} from "vitest";
import AddProperties from "../Pages/AddProperties/AddProperties";

describe("testing add property", () => {
    test("add properties testing", () => {
        render(<AddProperties/>);
        const text = screen.getByRole("textbox");
        expect(text).toBeInTheDocument();
    })
})