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
        "name": "condom",
        "path": "assets/cards/kondom.svg",
        "effectiveness": 12,
        "sti-protection": 4.5,
        "cost": 0.73,
        "accessibility": 1.0,
        "side-effects": 0.1,
        "effectiveness-text": "Laut Pearl-Index werden von 100 Frauen die nur mit Kondom verhüten im Verlauf eines" +
            " Jahres <b>mindestens</b> 2 schwanger. Der Pearl-Index ist vergleichsweise hoch, da bei der Benutzung des Kondom" +
            " schnell Pannen passieren können, die die Schutzfunktion zunichte machen. Wichtig bei der Verwendung von" +
            " Kondomen ist bspw., dass man nie 2 Kondome übereinander geben darf und fetthaltige Gleitmittel können das" +
            " Kondom schnell beschädigen.",
        "sti-protection-text": "Bei stetigem und korrektem Gebrauch schützen Kondome bis zu 90% vor HIV," +
            " vor den restlichen STI’s nur bis zu 60%. Übertragungen müssen nicht nur auf analen oder vaginalen" +
            " Geschlechtsverkehr beschränkt sein, sondern können auch bei Hautverletzungen, Küssen oder oralem " +
            "Geschlechtsverkehr übertragen werden.",
        "cost-text": "Der durchschnittliche Preis in Österreich pro Kondom beträgt 0.73€.",
        "accessibility-text": "Condom Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Ca. 2% der Bevölkerung hat eine Latexallergie, für die es spezielle Kondome zu kaufen" +
            " gibt. Eventuell können bei manchen durch das beigefügte Gleitmittel Hautirritationen entstehen. "
    }

export const MORNING_AFTER_PILL =
    {
        "name": "morning-after-pill",
        "path": "assets/cards/pille-danach.svg",
        "effectiveness": 25,
        "sti-protection": 4.5,
        "cost": 3.0,
        "accessibility": 2.0,
        "side-effects": 0.1,
        "effectiveness-text": "Pille danach Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Pille danach STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Pille danach Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Pille danach Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Pille danach Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT,
    }

export const COMBINED_PILL =
    {
        "name": "combined-pill",
        "path": "assets/cards/kombi-pille.svg",
        "effectiveness": 0.1,
        "sti-protection": 0.0,
        "cost": 2.19,
        "accessibility": 3.0,
        "side-effects": 4.5,
        "effectiveness-text": "Die Mini Pille Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Die Mini Pille STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Die Mini Pille Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Die Mini Pille Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Die Mini Pille Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const MINI_PILL =
    {
        "name": "mini-pill",
        "path": "assets/cards/pille.svg",
        "effectiveness": 0.5,
        "sti-protection": 0.0,
        "cost": 2.30,
        "accessibility": 3.0,
        "side-effects": 4.0,
        "effectiveness-text": "It’s quite effective in preventing pregnancy if taken correctly.",
        "sti-protection-text": "It gives zero protection against STIs. Always wear condoms.",
        "cost-text": "0.84€ per use",
        "accessibility-text": "Six-month supply with a required prescription",
        "side-effects-text": "nausea, fatigue, headaches, depression, lower sex drive, tender breasts, cysts on the " +
            "ovaries, weight gain or loss, bleeding between periods, skipped periods, mood swings, dizziness, thinning " +
            "hair. If you get pregnant while taking the minipill, it can cause problems. You’re more likely to have an " +
            "ectopic pregnancy. This is when a fertilised egg implants outside of the uterus, such as in a fallopian " +
            "tube. You won’t be able to continue with your pregnancy, and you may need surgery to remove the fetus."
    }

export const COITUS_INTERRUPTUS =
    {
        "name": "coitus-interruptus",
        "path": "assets/cards/coitus-interruptus.svg",
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
        "name": "patch",
        "path": "assets/cards/pflaster.svg",
        "effectiveness": 0.8,
        "sti-protection": 0.0,
        "cost": 3.0,
        "accessibility": 3.0,
        "side-effects": 4.0,
        "effectiveness-text": "It’s quite effective in preventing pregnancy if taken correctly.",
        "sti-protection-text": "It gives zero protection against STIs. Always wear condoms.",
        "cost-text": "in packs of nine for about 43€",
        "accessibility-text": "When you first get the contraceptive patch you will be given a 3-month supply, to see" +
            " how you get on with it. If there are no problems, you can be prescribed the patch for a year at a time." +
            " It requires a prescription every three months.",
        "side-effects-text": "skin irritation, itching and soreness; some women get mild temporary side effects when " +
            "they first start using the patch, such as headaches, sickness (nausea), breast tenderness and mood " +
            "changes – this usually settles down after a few months"
    }

export const PREP =
    {
        "name": "prep",
        "path": "assets/cards/prep.svg",
        "effectiveness": 85,
        "sti-protection": 3.0,
        "cost": 13.60,
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
        "name": "copper-coil",
        "path": "assets/cards/spirale.svg",
        "effectiveness": 0.8,
        "sti-protection": 0.0,
        "cost": 1.6,
        "accessibility": 4.5,
        "side-effects": 3.0,
        "effectiveness-text": "Die Kupferspirale ist ein sehr sicheres Verhütungsmittel.",
        "sti-protection-text": "Die Kupferspirale bietet keinen Schutz vor Krankheiten",
        "cost-text": "In Österreich betragen die Kosten für die Kupferspirale in der Regel zwischen 360 - 500€ " +
            "und halten bis zu 5 Jahre.",
        "accessibility-text": "Die Kupferspirale wird durch Gynäkologen eingesetzt. Der Eingriff läuft in den letzten" +
            " Tagen der Monatsblutung am besten ab. Die Kupferspirale kann bei Frauen jeden Alters eingesetzt werden," +
            " außer bei Frauen die sehr starke Monatsblutungen haben.",
        "side-effects-text": "In den ersten Monaten nach dem Eingriff kann es zu Zwischenblutungen kommen und das " +
            "Infektionsrisiko der Gebärmutter und Eileiter ist leicht erhöht. Durch die Kupferspirale wird meistens " +
            "die Monatsblutung stärker, manchmal werden auch Menstruationsschmerzen intensiver. Sehr selten wird beim " +
            "Eingriff die Gebärmutterwand verletzt."
    }

export const VASECTOMY =
    {
        "name": "vasectomy",
        "path": "assets/cards/vasektomie.svg",
        "effectiveness": 0.1,
        "sti-protection": 0,
        "cost": 2.96,
        "accessibility": 4.5,
        "side-effects": 0.1,
        "effectiveness-text": "Vasektomie Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Vasektomie STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Vasektomie Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Vasektomie Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Vasektomie Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const TUBENLIGATUR =
    {
        "name": "tubenligatur",
        "path": "assets/cards/tubenligatur.svg",
        "effectiveness": 0.1,
        "sti-protection": 0.0,
        "cost": 6.50,
        "accessibility": 5.0,
        "side-effects": 2.0,
        "effectiveness-text": "Tubenligatur Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Tubenligatur STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Tubenligatur Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Tubenligatur Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Tubenligatur Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const INJECTION =
{
    "name": "injection",
    "path": "assets/cards/spritze.svg",
    "effectiveness": 0.3,
    "sti-protection": 0.0,
    "cost": 2.30,
    "accessibility": 4.25,
    "side-effects": 5.0,
    "effectiveness-text": "Drei-Monats-Spritze Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
    "sti-protection-text": "Drei-Monats-Spritze STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
    "cost-text": "Drei-Monats-Spritze Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
    "accessibility-text": "Drei-Monats-Spritze Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
    "side-effects-text": "Drei-Monats-Spritze Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
}

export const FERTILITY_CYCLE =
    {
        "name": "calendar",
        "path": "assets/cards/kalender.svg",
        "effectiveness": 9,
        "sti-protection": 0,
        "cost": 0,
        "accessibility": 0,
        "side-effects": 0,
        "effectiveness-text": "Kalendermethode Pearl Index: " + ATTRIBUTE_DEFAULT_TEXT,
        "sti-protection-text": "Kalendermethode STI Schutz: " + ATTRIBUTE_DEFAULT_TEXT,
        "cost-text": "Kalendermethode Kosten: " + ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": "Kalendermethode Zugänglichkeit: " + ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": "Kalendermethode Nebenwirkungen: " + ATTRIBUTE_DEFAULT_TEXT
    }

export const DIAPHRAGMA =
{
    "name": "diaphragma",
    "path": "assets/cards/vaginal-ring.svg",
    "effectiveness": 0.5,
    "sti-protection": 0.0,
    "cost": 4.38,
    "accessibility": 3.0,
    "side-effects": 3.5,
    "effectiveness-text": "Vaginal Ring is quite an effective contraceptive method.",
    "sti-protection-text": "It does not protect you from STIs at all.",
    "cost-text": "19€ per piece with a prescription per month so about 4.50€ per use",
    "accessibility-text": "To be replaced every month; requires prescription",
    "side-effects-text": "Most common ones are headache, weight gain, nausea, breast tenderness, vaginal" +
        " irritation, increased yeast infections, chest tensions, water retention, mood swings, decreased libido." +
        " Might increase risks of blood clots, heart attack, stroke, toxic shock syndrome."
}