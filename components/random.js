// I don't want to be responsible for
const actions = [
  "destroying your entire economy",
  "nuking your country",
  "shooting you in the middle of the street",
  "deprive you of all your rights",
  "shutting down the government over nothing",
  "telling Vladimir Putin to poison you",
  "helping the Saudis cover up your murder",
  "pressing my nuclear button",
  "rage tweeting about you at 3am",
  "starting a constitutional crisis",
  "mocking your physical appearance at my next rally",
  "deporting you to a shithole country (one that has lots of not-white!)",
  "covfefing your ass",
  "paying porn stars to not talk about me having sex with them when Melania was pregnant",
  "incarcerating children and depriving them of soap",
  "firing every member of my cabinet",
  "getting Ukraine to investigate you",
  "taking a day off from the golf course",
  "Kellyanne Conway’s loveless marriage",
  "sexual harassment at Fox News",
  "not getting Mexico to pay for the wall",
  "the U.S. economy",
  "racist things I said on buried Apprentice tapes",
  "blood coming out of her wherever",
]

//  I've already given you a little sample with respect to
const things = [
  "worthless degrees from Trump University",
  "tweeting shade at Kristen Stewart",
  "betraying the Kurds",
  "insulting NATO allies",
  "mocking disabled people",
  "crapping on John McCain",
  "grabbing them by the pussy",
  "complete and utter disregard for the constitution",
  "funneling government funds to Trump Hotels",
  "over-rated Hillary flunky Meryl Streep",
  "Ted Cruz’s JFK Assassin father and ugly wife",
  "cutting taxes bigly",
  "coupon for a discounted stay at Mar-a-Lago",
  "backstage pass for next national security briefing",
  "tremendous respect for women",
]

// ___ is willing to negotiate with you
const friends = [
  "Chris Christie’s Muffin Top",
  "Stephen Miller’s Painted-On Hairline",
  "Rudy Giuliani’s Misshapen Skeleton",
  "Sarah Huckabee Sanders’s Face Scowl",
  "Kim Jong Un",
  "Don Jr’s Slimy Hair",
  "Tom Brady",
  "A White Nationalist I met at a rally",
  "Tiffany Trump",
  "Rudy’s Ukrainian friend with the eyes",
  "Baba Booey",
  "The Fox News morning crew",
  "My favorite dictator",
  "Britain Trump",
  "Omarosa",
  "Bill Rancic’s Front Tooth",
]

// I am confidentially enclosing
const objects = [
  "Melania’s don’t care jacket",
  "a Trump University Diploma",
  "some worthless congressional subpoena",
  "quid pro quo",
  "an intelligence report I didn’t read",
  "bigly ",
  "the 10 empty diet coke cans I finished today",
  "18 big mac wrappers",
  "torn up national security briefs",
  "some right wingnut conspiracy website printouts",
  "Pence nudes",
  "yuge poll numbers",
  "Two Corinthians 3:17, that’s the whole ballgame",
  "collusion",
  "a stupid hat",
  "Michael Cohen",
  "a taco bowl from Trump Tower Grill",
]

// It will look upon you forever as
const insults = [
  "the devil",
  "SAD!",
  "an All Talk, No Action Dummy",
  "an Establishment Dope",
  "a low energy",
  "not a nice person!",
  "not having the presidential ‘look’",
  "‘Liddle’",
  "Goofy",
  "wacky",
  "not smart",
  "dumb as a rock",
  "sloppy",
  "out of whack",
  "low IQ",
  "Fake News",
  "short and fat",
  "having low ratings",
]

// Don't be a
const otherInsults = [
  "very bad person",
  "dummy",
  "dumb puppet",
  "slimeball",
  "Total Con",
  "liberal clown",
  "third rate flunky",
  "major lightweight",
  "dopey",
  "nasty woman",
]

const moreInsults = [
  "weirdo",
  "loser",
  "total disaster",
  "tough guy",
  "degenerate fool",
  "crying lowlife",
  "horseface",
  "leaker",
  "out of whack slimeball",
  "disgusting person (check out sex tape and past)",
  "bad hombre",
  "moron",
]

// I will <random>.
const later = [
  "call you later",
  "see you on the golf course",
  "text you from my unsecure phone later",
  "see you at Mar-a-Lago",
  "block your testimony",
]

const getRandom = array => {
  return array[Math.floor(Math.random() * array.length)]
}

export default {
  action: () => {
    return getRandom(actions)
  },
  thing: () => {
    return getRandom(things)
  },
  friend: () => {
    return getRandom(friends)
  },
  object: () => {
    return getRandom(objects)
  },
  insult: () => {
    return getRandom(insults)
  },
  otherInsult: () => {
    return getRandom(otherInsults)
  },
  anotherInsult: () => {
    return getRandom(moreInsults)
  },
  later: () => {
    return getRandom(later)
  },
}
