"use strict"

const ATTRIBUTES = ["effectiveness", "sti-protection", "cost", "accessibility", "side-effects"];

const N_ATTRIBUTES = 5;

const MISSING_CARD_PATH = "assets/cards/unknown.svg"
const HIDDEN_CARD_PATH = "assets/cards/card-backside.png"

const ATTRIBUTE_DEFAULT_TEXT = "There will be information displayed here, "
                             + "describing the attribute for the given contraceptive method. "
                             + "For example describing, why the pearl index amounts to this number or " 
                             + "which kind of side effects come with a given method."

const CONDOM =
{
    "name": "Condom",
    "path": "assets/cards/kondom.svg",
    "effectiveness": 13,  
    "sti-protection": 10.0,
    "cost": 1.0,
    "accessibility": 3.0,
    "side-effects": 0.0,
    "effectiveness-text": "Condom Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Condom STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Condom Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Condom Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Condom Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
}


const INJECTION = 
{
    "name": "Injection",
    "effectiveness": 0.2,
    "sti-protection": 1.0,
    "cost": 2,
    "accessibility": 1.0,
    "side-effects": 1.0,
    "effectiveness-text": "Drei-Monats-Spritze Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Drei-Monats-Spritze STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Drei-Monats-Spritze Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Drei-Monats-Spritze Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Drei-Monats-Spritze Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    path: "assets/cards/spritze.svg"
}


const MINI_PILL = 
{
    "name": "Mini Pill",
    "effectiveness": 7,
    "sti-protection": 1.0,
    "cost": 2,
    "accessibility": 1.0,
    "side-effects": 1.0,
    "effectiveness-text": "Die Mini Pille Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Die Mini Pille STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Die Mini Pille Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Die Mini Pille Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Die Mini Pille Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    path: "assets/cards/pille.svg"
}


const COPPER_COIL = 
{
    "name": "Copper Coil",
    "effectiveness": 0.8,
    "sti-protection": 1.0,
    "cost": 3,
    "accessibility": 1.0,
    "side-effects": 1.0,
    "effectiveness-text": "Die Spirale Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Die Spirale STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Die Spirale Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Die Spirale Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Die Spirale Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    path: "assets/cards/spirale.svg"
}

const DIAPHRAGMA = 
{
    "name": "Diaphragma",
    "effectiveness": 12,
    "sti-protection": 1.0,
    "cost": 1.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    "effectiveness-text": "Der Vaginalring Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Der Vaginalring STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Der Vaginalring Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Der Vaginalring Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Der Vaginalring Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    path: "assets/cards/vaginal-ring.svg"
}


const FERTILITY_CYCLE = 
{
    "name": "Fertility Cycle",
    "effectiveness": 12,
    "sti-protection": 1.0,
    "cost": 0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    "effectiveness-text": "Kalendermethode Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Kalendermethode STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Kalendermethode Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Kalendermethode Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Kalendermethode Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    path: "assets/cards/kalender.svg"
}

const VASECTOMY = 
{
    "name": "Vasectomy",
    "effectiveness": 0.1,
    "sti-protection": 0.5,
    "cost": 1,
    "accessibility": 2.0,
    "side-effects": 10.0,
    "effectiveness-text": "Vasektomie Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Vasektomie STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Vasektomie Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Vasektomie Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Vasektomie Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    path: "assets/cards/vasektomie.svg"
}

const PATCH = 
{
    "name": "Patch",
    "effectiveness": 6.9,
    "sti-protection": 0.0,
    "cost": 3.2,
    "accessibility": 4.8,
    "side-effects": 7.0,
    "effectiveness-text": "Verhütungspflaster Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Verhütungspflaster STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Verhütungspflaster Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Verhütungspflaster Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Verhütungspflaster Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    path: "assets/cards/pflaster.svg"
}

const PREP = 
{
    "name": "Prep",
    "effectiveness": 0.15,
    "sti-protection": 1.0,
    "cost": 3.0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    "effectiveness-text": "Sterilisation Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Sterilisation STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Sterilisation Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Sterilisation Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Sterilisation Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    path: "assets/cards/prep.svg"
}

const COITUS_INTERRUPTUS = 
{
    "name": "Coitus Interruptus",
    "effectiveness": 20.0,
    "sti-protection": 1.0,
    "cost": 0,
    "accessibility": 1.0,
    "side-effects": 1.0,
    "effectiveness-text": "Coitus Interruptus Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Coitus Interruptus STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Coitus Interruptus Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Coitus Interruptus Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Coitus Interruptus Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
}


// other methods: 
// copper chain,


export {CONDOM, MINI_PILL, COITUS_INTERRUPTUS, COPPER_COIL,
        DIAPHRAGMA, PREP, FERTILITY_CYCLE, INJECTION, 
        VASECTOMY, PATCH, ATTRIBUTES, N_ATTRIBUTES, MISSING_CARD_PATH, 
        HIDDEN_CARD_PATH, ATTRIBUTE_DEFAULT_TEXT}