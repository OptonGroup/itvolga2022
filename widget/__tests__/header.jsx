import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../comp/header/header.jsx';
import '@testing-library/jest-dom'

describe("slides tests", () => {
    it("header on slide 0", ()=>{
        render(<Header slide={0}/>);
        expect(screen.getByTestId("header").classList.contains("startHeader")).toBe(true);
    });
    it("header on slide 1", ()=>{
        var slide = 1;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });
    it("header on slide 2", ()=>{
        var slide = 2;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });
    it("header on slide 3", ()=>{
        var slide = 3;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });
    it("header on slide 4", ()=>{
        var slide = 4;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });
    it("header on slide 5", ()=>{
        var slide = 5;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });
    it("header on slide 6", ()=>{
        var slide = 6;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });
    it("header on slide 7", ()=>{
        var slide = 7;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });
    it("header on slide 8", ()=>{
        var slide = 8;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });
    it("header on slide 9", ()=>{
        var slide = 9;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });
    it("header on slide 10", ()=>{
        var slide = 10;
        render(<Header slide={slide}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
        expect(screen.getByTestId("progress").classList[0]).toBe("slide"+slide);
    });

    it("header on slide 11", ()=>{
        render(<Header slide={11}/>);
        expect(screen.getByTestId("header").classList.contains("defineHeader")).toBe(true);
    });
})
