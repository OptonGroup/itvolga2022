import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Slide from '../comp/slides/slides.jsx';
import '@testing-library/jest-dom'

var slide = 0;
function nextSlide(double=1){
    if (double === 2) slide += 2;
    else slide += 1;
}

function chooseParam(param){
    slide += 1;
}

describe("slides tests", () => {
    it('slide 3 test-1', () => {
        // click "Yes" on 3.1 slide, then we must go on 3.2 slide
        slide = 3;
        render(<Slide slide={slide}/>);
        var button3 = screen.getByText("Yes");
        expect(button3).toBeInTheDocument();
        fireEvent.click(button3);
        expect(screen.getByTestId("slideF").classList.contains("d-none")).toBe(true);
        expect(screen.getByTestId("slideS").classList.contains("d-none")).toBe(false);
    });
    it('slide 3 test-2', () => {
        // click "No" on 3.1 slide, then we must go on 4 slide
        slide = 3;
        render(<Slide slide={slide} chooseParam={chooseParam}/>);
        var button3 = screen.getByText("No");
        expect(button3).toBeInTheDocument();
        fireEvent.click(button3);
        expect(slide).toBe(4);
    });

    it('slide 4 test-1', async () => {
        // choose Answer on 4.1 slide, then we must be animation
        render(<Slide slide={4} chooseParam={chooseParam}/>);
        var button4 = screen.queryByText("Small");
        expect(button4).toBeInTheDocument();
        fireEvent.click(button4);
        expect(screen.getByTestId("slideF").classList.contains("d-none")).toBe(true);
        expect(screen.getByTestId("anim").classList.contains("d-none")).toBe(false);    
    });
    it('slide 4 test-2', async () => {        
        // click "I don't know" on 4.1 slide, then we must go on 4.2 slide
        render(<Slide slide={4} chooseParam={chooseParam}/>);
        var button4 = screen.queryByText("I don’t know");
        expect(button4).toBeInTheDocument();
        fireEvent.click(button4);
        expect(screen.getByTestId("anim").classList.contains("d-none")).toBe(true);
        expect(screen.getByTestId("slideS").classList.contains("d-none")).toBe(false);  
    });

    it('slide 5 test-1', () => {
        // search eyeglasses
        var paramsE = [[0], [210]] 
        render(<Slide slide={5} params={paramsE}/>);
        expect(screen.getByTestId("slideF")).toBeInTheDocument();
        expect(screen.queryByTestId("slideS")).not.toBeInTheDocument();
    });
    it('slide 5 test-2', () => {
        // search sunglasses
        var paramsS = [[0], [211]] 
        render(<Slide slide={5} params={paramsS}/>);
        expect(screen.queryByTestId("slideF")).not.toBeInTheDocument();
        expect(screen.getByTestId("slideS")).toBeInTheDocument();
    });
    it('slide 5 test-3', () => {
        // search all types of glasses
        var paramsES = [[0], [undefined]] 
        render(<Slide slide={5} params={paramsES}/>);
        expect(screen.getByTestId("slideF").classList.contains("d-none")).toBe(false);
        expect(screen.getByTestId("slideS").classList.contains("d-none")).toBe(true); 
    });

    it('slide 6 test-1', () => {
        // men style of glasses
        var paramsM = [[5]] 
        render(<Slide slide={6} params={paramsM}/>);
        expect(screen.getByAltText("long face men")).toBeInTheDocument();
    });
    it('slide 6 test-2', () => {
        // women style of glasses
        var paramsW = [[4]]
        render(<Slide slide={6} params={paramsW}/>);
        expect(screen.getByAltText("long face women")).toBeInTheDocument();
    });
    it('slide 6 test-3', () => {
        // men and women style of glasses
        var paramsMW = [[undefined]]
        render(<Slide slide={6} params={paramsMW}/>);
        expect(screen.getByAltText("long face men, women")).toBeInTheDocument();
    });

    it('slide 9 test-1', () => {
        // click "Yes" on 9 slide, then we must go on 10 slide
        slide = 9;
        render(<Slide slide={slide} chooseParam={chooseParam} nextSlide={nextSlide}/>);
        var button9 = screen.getByText("Yes, I have some in mind");
        expect(button9).toBeInTheDocument();
        fireEvent.click(button9);
        expect(slide).toBe(10);
    });
    it('slide 9 test-2', () => {
        // click "No" on 9 slide, then we must go on 11 slide
        slide = 9;
        render(<Slide slide={slide} chooseParam={chooseParam} nextSlide={nextSlide}/>);
        var button9 = screen.getByText("No, brand isn't important");
        expect(button9).toBeInTheDocument();
        fireEvent.click(button9);
        expect(slide).toBe(11);
    });
})
