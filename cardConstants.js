"use strict"

const ATTRIBUTES = ["effectiveness", "sti-protection", "cost", "accessibility", "side-effects"];

const N_ATTRIBUTES = 5;

const CONDOM =
{
    "name": "Condom",
    "path": "assets/kondom.svg",
    "effectiveness": 13,  // measured with Pearl-Index; atm source is https://de.wikipedia.org/wiki/Empf%C3%A4ngnisverh%C3%BCtung, using the mean of (2,12) & (7,14)
    "sti-protection": 10.0,
    "cost": 1.0,
    "accessibility": 3.0,
    "side-effects": 0.0
}


const INJECTION = 
{
    "name": "Injection",
    "effectiveness": 0.2,
    "sti-protection": 1.0,
    "cost": 2,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/spritze.svg"
}


const ANTI_BABY_PILL = 
{
    "name": "Anti-Baby Pill",
    "effectiveness": 7,
    "sti-protection": 1.0,
    "cost": 2,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/pille.svg"
}


const COPPER_COIL = 
{
    "name": "Copper Coil",
    "effectiveness": 0.8,
    "sti-protection": 1.0,
    "cost": 3,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/spirale.svg"
}

const DIAPHRAGMA = 
{
    "name": "Diaphragma",
    "effectiveness": 12,
    "sti-protection": 1.0,
    "cost": 1.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/vaginal-ring.svg"
}


const FERTILITY_CYCLE = 
{
    "name": "Fertility Cycle",
    "effectiveness": 12,
    "sti-protection": 1.0,
    "cost": 0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/kalender.svg"
}

const COITUS_INTERRUPTUS = 
{
    "name": "Coitus Interruptus",
    "effectiveness": 20.0,
    "sti-protection": 1.0,
    "cost": 0,
    "accessibility": 1.0,
    "side-effects": 1.0,
}


const STERILIZATION = 
{
    "name": "Sterilization",
    "effectiveness": 0.15,
    "sti-protection": 1.0,
    "cost": 3.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
}


// other methods: 
// copper chain,


export {CONDOM, ANTI_BABY_PILL, COITUS_INTERRUPTUS, COPPER_COIL,
        DIAPHRAGMA, STERILIZATION, FERTILITY_CYCLE, INJECTION, ATTRIBUTES, N_ATTRIBUTES}