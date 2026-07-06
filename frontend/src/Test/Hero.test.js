import React, { Component } from "react";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/HomePage/Hero";

//test-Suite
describe("HeroComponent",()=>{
    test("hero image",()=>{
        render(<Hero/>);
        const HeroImg= screen.getByAltText('Hero Image');
        expect(HeroImg).toBeInTheDocument();
        expect(HeroImg).toHaveAttribute("src","Media/landing.svg");
    })
})
