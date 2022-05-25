"use strict"

export const ATTRIBUTES = ["effectiveness", "sti-protection", "cost", "accessibility", "side-effects"];
export const N_ATTRIBUTES = 5;

export const MISSING_CARD_PATH = "assets/cards/unknown.svg"
export const HIDDEN_CARD_PATH = "assets/cards/card-backside.png"

export const ATTRIBUTE_DEFAULT_TEXT = "There will be information displayed here, "
                             + "describing the attribute for the given contraceptive method. "
                             + "For example describing, why the pearl index amounts to this number or " 
                             + "which kind of side effects come with a given method."

export const CONDOM =
    {
        "name": "Condom",
        "effectiveness": 12,
        "sti-protection": 4.5,
        "cost": 0.73,
        "accessibility": 5.0,
        "side-effects": 1.0,
        "effectiveness-text": "Condom Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Condom STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Condom Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Condom Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Condom Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const FEMALE_CONDOM =
    {
        "name": "Female Condom",
        "path": "",
        "effectiveness": 25,
        "sti-protection": 4.5,
        "cost": 3.0,
        "accessibility": 2.0,
        "side-effects": 0.1,
        "effectiveness-text": "Condom Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Condom STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Condom Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Condom Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Condom Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    }

export const COMBINED_PILL =
    {
        "name": "Combined Pill",
        "path": "",
        "effectiveness": 0.1,
        "sti-protection": 0.0,
        "cost": 10,
        "accessibility": 3.5,
        "side-effects": 4.5,
        "effectiveness-text": "Die Mini Pille Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Die Mini Pille STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Die Mini Pille Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Die Mini Pille Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Die Mini Pille Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const MINI_PILL =
    {
        "name": "Mini Pill",
        "path": "assets/cards/pille.svg",
        "effectiveness": 0.5,
        "sti-protection": 0.0,
        "cost": 22,
        "accessibility": 3.0,
        "side-effects": 5.0,
        "effectiveness-text": "Die Mini Pille Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Die Mini Pille STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Die Mini Pille Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Die Mini Pille Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Die Mini Pille Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const COITUS_INTERRUPTUS =
    {
        "name": "Mini Pill",
        "path": "",
        "effectiveness": 25,
        "sti-protection": 0.0,
        "cost": 0,
        "accessibility": 0.0,
        "side-effects": 0,
        "effectiveness-text": "Die Mini Pille Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Die Mini Pille STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Die Mini Pille Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Die Mini Pille Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Die Mini Pille Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }


export const PATCH =
    {
        "name": "Patch",
        "path": "assets/cards/pflaster.svg",
        "effectiveness": 0.8,
        "sti-protection": 0.0,
        "cost": 3.0,
        "accessibility": 3.5,
        "side-effects": 4.0,
        "effectiveness-text": "Verhütungspflaster Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Verhütungspflaster STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Verhütungspflaster Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Verhütungspflaster Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Verhütungspflaster Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const PREP =
    {
        "name": "Prep",
        "path": "assets/cards/prep.svg",
        "effectiveness": 85,
        "sti-protection": 3.0,
        "cost": 14,
        "accessibility": 4.0,
        "side-effects": 1.0,
        "effectiveness-text": "Sterilisation Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Sterilisation STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Sterilisation Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Sterilisation Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Sterilisation Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const COPPER_COIL =
    {
        "name": "Copper Coil",
        "path": "",
        "effectiveness": 0.8,
        "sti-protection": 0.0,
        "cost": 1.6,
        "accessibility": 4.5,
        "side-effects": 3.0,
        "effectiveness-text": "Die Spirale Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Die Spirale STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Die Spirale Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Die Spirale Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Die Spirale Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const VASECTOMY =
    {
        "name": "Vasectomy",
        "path": "assets/cards/vasektomie.svg",
        "effectiveness": 0.1,
        "sti-protection": 0,
        "cost": 600,
        "accessibility": 4.5,
        "side-effects": 0.3,
        "effectiveness-text": "Vasektomie Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Vasektomie STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Vasektomie Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Vasektomie Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Vasektomie Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const TUBENLIGATUR =
    {
        "name": "Tubenligatur",
        "path": "assets/cards/tubenligatur.svg",
        "effectiveness": 20.0,
        "sti-protection": 0.0,
        "cost": 999,
        "accessibility": 4.7,
        "side-effects": 0.5,
        "effectiveness-text": "Tubenligatur Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Tubenligatur STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Tubenligatur Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Tubenligatur Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Tubenligatur Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const INJECTION =
{
    "name": "Injection",
    "path": "assets/cards/spritze.svg",
    "effectiveness": 0.3,
    "sti-protection": 0.0,
    "cost": 30,
    "accessibility": 3.0,
    "side-effects": 4.5,
    "effectiveness-text": "Drei-Monats-Spritze Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Drei-Monats-Spritze STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Drei-Monats-Spritze Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Drei-Monats-Spritze Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Drei-Monats-Spritze Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
}


export const FERTILITY_CYCLE =
    {
        "name": "Fertility Cycle",
        "path": "assets/cards/kalender.svg",
        "effectiveness": 12,
        "sti-protection": 1.0,
        "cost": 0,
        "accessibility": 1.0,
        "side-effects": 1.0,
        "effectiveness-text": "Kalendermethode Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Kalendermethode STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Kalendermethode Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Kalendermethode Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Kalendermethode Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }


export const DIAPHRAGMA =
{
    "name": "Diaphragma",
    "path": "assets/cards/vaginal-ring.svg",
    "effectiveness": 12,
    "sti-protection": 0.0,
    "cost": 60.0,
    "accessibility": 4.5,
    "side-effects": 0.1,
    "effectiveness-text": "Der Vaginalring Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Der Vaginalring STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Der Vaginalring Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Der Vaginalring Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Der Vaginalring Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
}