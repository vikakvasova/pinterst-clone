'use strict'


const root = document.querySelector('#root');

createHeader()
createDesksactions()


import { createHeader } from "./header.js";
import { createDesksactions } from "./desks-action.js";

export let currentImg;
currentImg = document.createElement("img");
export let currentImage;
currentImage = document.createElement("img");
export let helper;
helper = document.querySelector(".helper");
export let imageOut;
imageOut = document.querySelector(".imageOut");
export let sizer;
sizer = document.querySelector(".sizer");

export function generateId() {
  return "_" + Math.random().toString(16).slice(2);
}