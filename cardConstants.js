const CONDOM = 
{
    "name": "Condom",
    "path": "assets/kondom.svg",
    "effectiveness": 8.75,  // measured with Pearl-Index; atm source is https://de.wikipedia.org/wiki/Empf%C3%A4ngnisverh%C3%BCtung, using the mean of (2,12) & (7,14)
    "STI-protection": 10.0,
    "cost": 1.0,
    "accessibility": 3.0,
    "side-effects": 0.0
}


const INJECTION = 
{
    "name": "Injection",
    "effectiveness": 1.0,
    "STI-protection": 1.0,
    "cost": 1.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/spritze.svg"
}


const ANTI_BABY_PILL = 
{
    "name": "Anti-Baby Pill",
    "effectiveness": 1.0,
    "STI-protection": 1.0,
    "cost": 1.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/pille.svg"
}


const COPPER_COIL = 
{
    "name": "Copper Coil",
    "effectiveness": 1.0,
    "STI-protection": 1.0,
    "cost": 1.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/spirale.svg"
}

const DIAPHRAGMA = 
{
    "name": "Diaphragma",
    "effectiveness": 1.0,
    "STI-protection": 1.0,
    "cost": 1.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/vaginal-ring.svg"
}


const FERTILITY_CYCLE = 
{
    "name": "Fertility Cycle",
    "effectiveness": 1.0,
    "STI-protection": 1.0,
    "cost": 1.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    path: "assets/kalender.svg"
}

const COITUS_INTERRUPTUS = 
{
    "name": "Coitus Interruptus",
    "effectiveness": 1.0,
    "STI-protection": 1.0,
    "cost": 1.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
}


const STERILIZATION = 
{
    "name": "Sterilization",
    "effectiveness": 1.0,
    "STI-protection": 1.0,
    "cost": 1.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
}


// other methods: 
// copper chain,


export {CONDOM, ANTI_BABY_PILL, COITUS_INTERRUPTUS, COPPER_COIL,
        DIAPHRAGMA, STERILIZATION, FERTILITY_CYCLE, INJECTION}