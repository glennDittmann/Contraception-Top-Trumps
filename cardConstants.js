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
        "effectiveness-text": "Die Pille ist eine sehr zuverlässige Verhütungsmethode, allerdings nur, wenn sie immer regelmäßig und nach Vorschrift eingenommen wird. Von 1000 Frauen, die ein Jahr lang die Pille ohne Fehler einnehmen, wird nur eine einzige Frau schwanger. Verschiedene Einnahmefehler, wie vergessene Pillen, Durchfall, Erbrechen oder Wechselwirkungen mit Medikamenten können die Pille weniger sicher machen. Die verschiedenen Kombinationspräparate unterscheiden sich nicht in ihrer Sicherheit, sie sind alle gleich zuverlässig.",
        "sti-protection-text": "Die Pille bietet keinen Schutz.",
        "cost-text": "Eine Dreimonatspackung kostet etwa zwischen 20 und 40 €, Sechsmonatspackungen sind in der Regel im Verhältnis günstiger.",
        "accessibility-text": "Es kann sein, dass Sie mehrere Präparate ausprobieren müssen, bis Sie eines gefunden haben, das für Sie geeignet ist.",
        "side-effects-text": "Die meisten Frauen vertragen niedrig dosierte Pillen ohne Probleme. Manchmal kann es aber - besonders in den ersten drei Monaten - zu Nebenwirkungen kommen, denn die Hormone greifen in den Zyklus der Frau ein. Wenn diese sehr unangenehm sind und länger anhalten, sollten Sie Ihre Ärztin oder Ihren Arzt nach einer Alternative fragen. Unter der Pilleneinnahme kann sich Ihre Blutung verändern: Sie können Zwischenblutungen haben oder die Blutung bleibt ganz aus. In der Regel wird die Blutung kürzer und deutlich schwächer. Manchmal können Übelkeit und Schwindel auftreten. Manche Frauen bekommen auch Brustspannen, Bauchschmerzen, Kopfschmerzen oder depressive Verstimmungen. Auch Veränderungen – meist Abnahme – der sexuellen Lust sind möglich. Viele Frauen befürchten, dass sie von der Pille dick werden. Tatsächlich nehmen nur wenige Frauen zu, wenn sie die Pille nehmen. Meist sind es nur zu Anfang zwei bis fünf Kilo, das geht häufig nach der Eingewöhnungszeit wieder weg. Bei den meisten Frauen ändert sich das Gewicht nur leicht oder gar nicht. Spezielle „Schlankheitspillen“ gibt es nicht. Eine seltene, aber schwerwiegende Nebenwirkung von kombinierten Pillen besteht in der Entwicklung einer Thrombose. Thrombosen sind Blutgerinnsel, meist in den tiefen Beinvenen, die zu lebensgefährlichen Lungenembolien führen können. Bei Frauen, die die Pille nehmen, wird etwas häufiger Brustkrebs entdeckt als bei Frauen, die nicht die Pille nehmen. Allerdings ist Brustkrebs bei Frauen unter 35 Jahren sehr selten. Unter Pilleneinnahme findet man bei etwa einer von 10 000 Frauen einen zusätzlichen Fall von Brustkrebs. Bei Frauen, die bis zum Alter von 40 Jahren die Pille nehmen, findet man in den nächsten 10 Jahren unter 10 000 Frauen 19 zusätzliche Fälle von Brustkrebs. Zehn Jahre nach Absetzen der Pille findet man keine Unterschiede mehr."
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
        "effectiveness-text": "Die Mini-Pille gehört zu den relativ sicheren Verhütungsmethoden. Voraussetzung für die Zuverlässigkeit der Mini-Pille ist die absolut pünktliche Einnahme im 24-Stunden-Rhythmus. Niedrig dosierte Gestagen-Präparate sind deutlich weniger zuverlässig als die „Pille”. Hoch dosierte Gestagen-Präparate haben hingegen einen nur wenig niedrigeren Pearl-Index als die herkömmliche Pille",
        "sti-protection-text": "Die Mini-Pille ist ein sehr sicheres Verhütungsmittel.",
        "cost-text": "Die Mini-Pille kostet zwischen 6 und 17 € pro Monat, je nachdem welches Präparat und welche Packungsgröße verordnet wird. Dabei sind Pillen in der 6-Monatspackung deutlich günstiger.",
        "accessibility-text": "Die Mini-Pille ist ein Medikament und muss nach gründlicher Untersuchung von einer Ärztin oder einem Arzt verschrieben werden. Gegen Rezept ist sie dann in allen Apotheken erhältlich.",
        "side-effects-text": "Übelkeit, Müdigkeit, Kopfschmerzen, Depressionen, verminderter Sexualtrieb, empfindliche Brüste, Zysten an den Eierstöcken, Gewichtszunahme oder -abnahme, Blutungen zwischen den Perioden, ausbleibende Perioden, Stimmungsschwankungen, Schwindel, dünner werdendes Haar. Wenn Sie während der Einnahme der Minipille schwanger werden, kann dies zu einer Eileiterschwangerschaft führen. Die Monatsblutung wird unter Einnahme der Mini-Pille oft unregelmäßig. Sie verspätet sich oder bleibt ganz aus. Es können leichte oder häufige Zwischenblutungen auftreten, die medizinisch jedoch unbedenklich sind. Zwischenblutungen sind der häufigste Grund, zu einer anderen Verhütungsmethode zu wechseln. Manche Frauen klagen über Brustspannen, Kopfschmerzen, Stimmungsveränderungen oder sexuelle Unlust."
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
        "effectiveness-text": "Dies ist eine unsichere Verhütungsmethode. Für viele Paare ist gerade die früh- bzw. rechtzeitige Unterbrechung des Geschlechtsakts ein Problem, da (im Eifer des Gefechts) der richtige Zeitpunkt häufig verpasst wird. Zudem können Spermien beim Geschlechtsverkehr bereits vor dem Orgasmus bzw. Samenerguss durch die sogenannten Lusttropfen (Präejakulat) austreten. Wenn der Samenerguss außerhalb der Scheide erfolgt, besteht immer noch die Gefahr, dass Spermien durch die Hand oder beim Waschen am Bidet wieder in die Scheide gelangen.",
        "sti-protection-text": "Die Methode des Coitus Interruptus bietet keinen Schutz.",
        "cost-text": ATTRIBUTE_DEFAULT_TEXT,
        "accessibility-text": ATTRIBUTE_DEFAULT_TEXT,
        "side-effects-text": ATTRIBUTE_DEFAULT_TEXT
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
        "accessibility-text": "Die Kupferspirale wird durch Gynäkolog*innen eingesetzt. Der Eingriff läuft in den letzten" +
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
        "effectiveness-text": "Die Vasektomie ist ein sehr sicheres Verhütungsmittel. Nach dem Eingriff können noch einige Zeit lang Samenzellen im Samenerguss sein. Erst wenn Ihnen der/die Ärzt*in nach mehrmaliger Untersuchung des Samenergusses mitgeteilt hat, dass keine Samenfäden mehr gefunden wurden, besteht sicherer Schutz vor (weiterer) Vaterschaft.",
        "sti-protection-text": "Die Vasektomie bietet keinen Schutz.",
        "cost-text": "Die Kosten belaufen sich auf ca. 300 bis 400 €.",
        "accessibility-text": "Der Eingriff wird in Facharztpraxen (Urologie und Chirurgie) durchgeführt. Ein ausführliches Beratungsgespräch mit dem*r Ärzt*in sollte der Sterilisation vorausgehen.",
        "side-effects-text": "Eine Vasektomie kann nicht einfach rückgängig gemacht werden. Zu den möglichen Komplikationen gehören eine Ansammlung von Blut im Hodensack (Hämatom), harte Klumpen, die als Spermiengranulome bezeichnet werden (verursacht durch aus den Eileitern austretendes Sperma), und Infektionen oder langfristige Hodenschmerzen (möglicherweise müssen weitere Operationen durchgeführt werden). Die Samenleiterwannen können sich wieder verbinden (selten). Die sexuelle Erlebnisfähigkeit, Erektion und Orgasmus mit Samenerguss sind weiterhin möglich."
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
        "effectiveness-text": "Die Tubenligatur ist ein sehr sicheres Verhütungsmittel.",
        "sti-protection-text": "Die Tubenligatur bietet keinen Schutz.",
        "cost-text": "Die Kosten für eine Sterilisation der Frau belaufen sich auf 500 bis 1.000 €.",
        "accessibility-text": "Die Sterilisation der Frau wird in Praxen, OP-Zentren oder im Krankenhaus und fast immer unter Vollnarkose durchgeführt.",
        "side-effects-text": "Die sexuelle Erlebnisfähigkeit verändert sich nicht. Im Verlauf der Operation können (selten) Komplikationen auftreten, wie Narkosezwischenfälle, innere Blutung, Verletzung des Darms u.a. Es gibt mittlerweile auch neuere Operationsmethoden, die auf den Schnitt mit einem Skalpell verzichten."
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
    "effectiveness-text": "Da es keine Eingabefehler gibt, ist die Verhütungssicherheit der Depot-Spritze sehr hoch.",
    "sti-protection-text": "Die Depot-Spritze bietet keinen Schutz.",
    "cost-text": "Die Depot-Spritze kostet rund 31 bis 35,- € pro Spritze. Manche Ärzt*innen verlangen für die Verabreichung der Spritze zusätzliche Gebühren, bis zu 15 € pro Injektion.",
    "accessibility-text": "Die Depot-Spritze darf nur von der Ärztin oder vom Arzt verabreicht werden.",
    "side-effects-text": "Im Vergleich mit anderen rein gestagenhaltigen Methoden (Hormonstäbchen oder Minipille) ist die Menge an Hormon bei der Depot-Spritze deutlich höher. Die Depot-Spritze kann zu Gewichtszunahme, Stimmungsveränderungen und Lustlosigkeit führen. Die Hormone können sich negativ auf die Knochendichte auswirken. Meistens werden die Monatsblutungen unregelmäßig. Bei manchen Frauen bleibt die monatliche Blutung ganz aus. Es können Schmierblutungen, selten auch starke Dauerblutungen auftreten, die eine Ausschabung nötig machen. Die Nebenwirkungen dauern so lange an wie die Wirkung der Spritze. Nach dem Absetzen des Mittels kann es Monate (bis Jahre) dauern, bis sich der Zyklus wieder einstellt. Bei einigen Krankheiten (z.B. Zuckerkrankheit, Bluthochdruck, Gelbsucht, Venenentzündungen) darf die Spritze nicht angewandt werden."
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
        "effectiveness-text": "Wenn die Anweisungen zur natürlichen Familienplanung sorgfältig befolgt werden, kann diese Methode bis zu 99 % effektiv sein. Das bedeutet, dass 1 bis 9 von 100 Frauen, die die natürliche Familienplanung richtig anwenden, schwanger werden.",
        "sti-protection-text": "Die Kalendermethode bietet keinen Schutz.",
        "cost-text": "Einmalig ca 40 € für Literatur, Thermometer 4 €, Digitalthermometer 8 bis 20 €, Beratungskosten regional unterschiedlich, Temperatur-und Hormoncomputer variieren je nach Modell erheblich.",
        "accessibility-text": "Es kommen immer wieder Hilfsmittel für die Beobachtung und Auswertung auf den Markt.",
        "side-effects-text": "Wer nicht schwanger werden will, darf in den fruchtbaren Tagen kein Vorejakulat und Samen in die Scheide bringen. Das sind bei 24 bis 32 Tage langen Zyklen meist 10 bis 18 Tage."
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