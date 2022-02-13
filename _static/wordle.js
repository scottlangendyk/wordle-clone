const targetWords = [
    "gulch",
    "about",
    "freak",
    "offer",
    "fiend",
    "waxen",
    "imply",
    "cheat",
    "dummy",
    "champ",
    "crust",
    "sewer",
    "bused",
    "viper",
    "tatty",
    "child",
    "kneel",
    "lilac",
    "flame",
    "third",
    "grape",
    "gazer",
    "razor",
    "dodgy",
    "pivot",
    "usage",
    "femme",
    "skull",
    "scrap",
    "racer",
    "golem",
    "blind",
    "mucky",
    "basic",
    "stave",
    "facet",
    "draft",
    "beach",
    "logic",
    "curly",
    "style",
    "amass",
    "faint",
    "hydro",
    "pearl",
    "burnt",
    "coyly",
    "lanky",
    "wafer",
    "plaza",
    "unity",
    "modem",
    "house",
    "eater",
    "depot",
    "churn",
    "sprig",
    "dilly",
    "those",
    "shock",
    "sneak",
    "defer",
    "bribe",
    "snuff",
    "kiosk",
    "exile",
    "frill",
    "caulk",
    "forte",
    "tepee",
    "slosh",
    "balmy",
    "modal",
    "pithy",
    "groom",
    "renew",
    "lowly",
    "final",
    "match",
    "inept",
    "staid",
    "sadly",
    "slope",
    "buddy",
    "angst",
    "taffy",
    "patio",
    "roomy",
    "terse",
    "dread",
    "realm",
    "swamp",
    "wreak",
    "udder",
    "dicey",
    "stray",
    "pesto",
    "dowdy",
    "music",
    "filmy",
    "suite",
    "faith",
    "mushy",
    "caper",
    "braid",
    "apnea",
    "share",
    "hoard",
    "shalt",
    "coach",
    "ratio",
    "fable",
    "wrung",
    "savvy",
    "relax",
    "junto",
    "civil",
    "colon",
    "girth",
    "medal",
    "stake",
    "mouse",
    "gauze",
    "jolly",
    "goody",
    "debut",
    "shrub",
    "dough",
    "handy",
    "swirl",
    "sound",
    "viola",
    "swish",
    "vital",
    "daily",
    "camel",
    "curse",
    "butch",
    "salad",
    "agile",
    "inter",
    "chafe",
    "fritz",
    "donut",
    "smash",
    "grade",
    "swore",
    "shack",
    "squat",
    "cinch",
    "vixen",
    "gamer",
    "croak",
    "azure",
    "valet",
    "apart",
    "stoke",
    "thyme",
    "blaze",
    "yeast",
    "teach",
    "pence",
    "pound",
    "erode",
    "crude",
    "synod",
    "uncle",
    "nomad",
    "tibia",
    "quark",
    "jiffy",
    "islet",
    "irate",
    "piano",
    "grind",
    "forty",
    "thief",
    "lying",
    "druid",
    "pouty",
    "golly",
    "shake",
    "rouse",
    "plied",
    "talon",
    "inane",
    "quota",
    "whiny",
    "broil",
    "primo",
    "guppy",
    "knoll",
    "snare",
    "homer",
    "brunt",
    "rigid",
    "witty",
    "equip",
    "libel",
    "chose",
    "growl",
    "flair",
    "abbot",
    "known",
    "among",
    "skimp",
    "saute",
    "sheet",
    "scion",
    "scary",
    "drove",
    "freer",
    "smirk",
    "greed",
    "naive",
    "would",
    "crier",
    "drape",
    "glory",
    "start",
    "fatal",
    "funny",
    "ranch",
    "image",
    "allay",
    "track",
    "these",
    "exact",
    "shuck",
    "horny",
    "night",
    "jazzy",
    "blitz",
    "irony",
    "hatch",
    "wooly",
    "filly",
    "serve",
    "adore",
    "undid",
    "comet",
    "radio",
    "agony",
    "adopt",
    "flour",
    "twirl",
    "siege",
    "cheek",
    "snipe",
    "pagan",
    "grimy",
    "urban",
    "scale",
    "width",
    "foyer",
    "livid",
    "equal",
    "cabby",
    "stink",
    "tramp",
    "lynch",
    "beady",
    "cleat",
    "oddly",
    "caput",
    "swine",
    "plaid",
    "salvo",
    "hater",
    "pitch",
    "axial",
    "motto",
    "tunic",
    "locus",
    "nymph",
    "adult",
    "hovel",
    "pause",
    "slave",
    "stony",
    "liner",
    "sniff",
    "recur",
    "sulky",
    "algae",
    "tryst",
    "rinse",
    "drank",
    "spawn",
    "cloak",
    "there",
    "pinch",
    "inert",
    "wispy",
    "boule",
    "taboo",
    "umbra",
    "frail",
    "crick",
    "loose",
    "leave",
    "swami",
    "young",
    "proud",
    "aloft",
    "dryly",
    "depth",
    "crock",
    "spray",
    "ruler",
    "koala",
    "shoal",
    "mange",
    "gusty",
    "puppy",
    "ensue",
    "craze",
    "large",
    "humor",
    "brace",
    "burst",
    "shiny",
    "glide",
    "other",
    "cutie",
    "flyer",
    "fussy",
    "eying",
    "pulpy",
    "woven",
    "buggy",
    "vague",
    "clean",
    "aider",
    "vowel",
    "booze",
    "bevel",
    "patty",
    "spent",
    "bayou",
    "pecan",
    "rower",
    "vomit",
    "lemon",
    "dodge",
    "hippo",
    "ghost",
    "perch",
    "stall",
    "haunt",
    "crown",
    "gross",
    "tense",
    "email",
    "gayly",
    "album",
    "habit",
    "repay",
    "smell",
    "mover",
    "watch",
    "gruff",
    "chess",
    "basil",
    "await",
    "belly",
    "slyly",
    "quell",
    "class",
    "shunt",
    "sauna",
    "tango",
    "bough",
    "unwed",
    "inbox",
    "girly",
    "genie",
    "enjoy",
    "cheap",
    "flare",
    "lunar",
    "ramen",
    "proof",
    "rumba",
    "randy",
    "alone",
    "dolly",
    "gawky",
    "mince",
    "meant",
    "float",
    "video",
    "delta",
    "media",
    "gloom",
    "fudge",
    "bylaw",
    "dusky",
    "stoic",
    "bicep",
    "clear",
    "geese",
    "thorn",
    "waist",
    "apron",
    "roast",
    "amiss",
    "foray",
    "rivet",
    "kneed",
    "boxer",
    "joist",
    "furry",
    "tutor",
    "afoot",
    "build",
    "prawn",
    "river",
    "arose",
    "unmet",
    "froze",
    "crumb",
    "saner",
    "wrest",
    "heady",
    "cameo",
    "throw",
    "event",
    "cough",
    "drool",
    "rainy",
    "ebony",
    "allow",
    "blurt",
    "choke",
    "abase",
    "shore",
    "debug",
    "wrath",
    "yearn",
    "tweet",
    "catty",
    "knead",
    "pilot",
    "tease",
    "dwelt",
    "butte",
    "grown",
    "scold",
    "revue",
    "crash",
    "prank",
    "baton",
    "infer",
    "hefty",
    "giddy",
    "fixer",
    "flunk",
    "movie",
    "throb",
    "visor",
    "graze",
    "teddy",
    "torus",
    "frown",
    "flout",
    "stint",
    "clash",
    "grave",
    "badly",
    "blurb",
    "empty",
    "rayon",
    "brash",
    "grate",
    "larva",
    "flung",
    "fraud",
    "rider",
    "glade",
    "beefy",
    "teary",
    "syrup",
    "smile",
    "trump",
    "skunk",
    "puree",
    "tilde",
    "going",
    "hitch",
    "bleat",
    "tread",
    "agate",
    "grass",
    "haven",
    "breed",
    "canny",
    "stale",
    "ennui",
    "chain",
    "plumb",
    "entry",
    "ovary",
    "spout",
    "preen",
    "gooey",
    "flash",
    "cruel",
    "sloop",
    "sinew",
    "merit",
    "slump",
    "adept",
    "nudge",
    "brute",
    "unset",
    "chore",
    "femur",
    "annul",
    "artsy",
    "proxy",
    "women",
    "thump",
    "snake",
    "grace",
    "which",
    "slept",
    "judge",
    "quick",
    "fleck",
    "nerdy",
    "paper",
    "parer",
    "shown",
    "heard",
    "wreck",
    "apple",
    "bloat",
    "folio",
    "lemur",
    "threw",
    "decal",
    "shove",
    "rocky",
    "bushy",
    "conch",
    "money",
    "flask",
    "afoul",
    "clump",
    "murky",
    "dried",
    "verse",
    "miser",
    "clerk",
    "porch",
    "poppy",
    "aloud",
    "wheel",
    "cagey",
    "biome",
    "paler",
    "eaten",
    "smite",
    "joker",
    "chord",
    "labor",
    "vouch",
    "solar",
    "spree",
    "chick",
    "guava",
    "truss",
    "tenor",
    "ninny",
    "slung",
    "north",
    "cater",
    "using",
    "scoff",
    "whale",
    "decor",
    "qualm",
    "forum",
    "speck",
    "spite",
    "tonic",
    "risen",
    "crime",
    "adage",
    "lover",
    "brown",
    "wedge",
    "phony",
    "hazel",
    "begat",
    "chili",
    "elide",
    "mayor",
    "smith",
    "manic",
    "spine",
    "stone",
    "broke",
    "study",
    "yield",
    "downy",
    "could",
    "clove",
    "thank",
    "curry",
    "ounce",
    "queen",
    "envoy",
    "frame",
    "alert",
    "frank",
    "fence",
    "buyer",
    "verso",
    "micro",
    "impel",
    "bugle",
    "gaffe",
    "cause",
    "shine",
    "jumpy",
    "serum",
    "aloof",
    "story",
    "rebel",
    "duvet",
    "jaunt",
    "riser",
    "biddy",
    "speed",
    "shard",
    "field",
    "mucus",
    "trust",
    "hyena",
    "olive",
    "swath",
    "terra",
    "olden",
    "horse",
    "below",
    "widen",
    "nadir",
    "motor",
    "sally",
    "arbor",
    "fiber",
    "mangy",
    "beret",
    "scrum",
    "trace",
    "water",
    "input",
    "tweak",
    "pooch",
    "grunt",
    "bench",
    "befit",
    "spoon",
    "hence",
    "imbue",
    "penal",
    "filer",
    "cease",
    "utter",
    "polyp",
    "total",
    "jelly",
    "scant",
    "robot",
    "arrow",
    "salve",
    "chuck",
    "aping",
    "bound",
    "krill",
    "polar",
    "condo",
    "leapt",
    "evade",
    "humus",
    "creek",
    "chasm",
    "shire",
    "patsy",
    "smote",
    "blade",
    "canal",
    "topaz",
    "elite",
    "stool",
    "widow",
    "rajah",
    "brass",
    "cable",
    "icily",
    "noose",
    "roost",
    "spool",
    "print",
    "aging",
    "mouth",
    "spell",
    "neigh",
    "shady",
    "pupal",
    "honey",
    "prism",
    "sworn",
    "resin",
    "swoon",
    "comma",
    "tract",
    "birch",
    "brink",
    "cyber",
    "pique",
    "drone",
    "elder",
    "rabbi",
    "stair",
    "usurp",
    "sixty",
    "eerie",
    "spook",
    "stack",
    "spelt",
    "ashen",
    "sever",
    "easel",
    "smoke",
    "optic",
    "viral",
    "juicy",
    "canon",
    "punch",
    "topic",
    "great",
    "icing",
    "dunce",
    "missy",
    "gassy",
    "skiff",
    "orbit",
    "baste",
    "clang",
    "pushy",
    "tulip",
    "plume",
    "mason",
    "cycle",
    "carat",
    "evoke",
    "moron",
    "cargo",
    "groin",
    "moist",
    "drier",
    "welsh",
    "askew",
    "abled",
    "circa",
    "vista",
    "crepe",
    "slime",
    "tooth",
    "bliss",
    "crowd",
    "lance",
    "glint",
    "tenth",
    "hasty",
    "abhor",
    "forge",
    "knave",
    "pizza",
    "dingo",
    "flirt",
    "cobra",
    "ulcer",
    "newly",
    "tough",
    "limbo",
    "afire",
    "cigar",
    "dingy",
    "bible",
    "risky",
    "scene",
    "sonic",
    "slimy",
    "until",
    "lurid",
    "shone",
    "swing",
    "harem",
    "feast",
    "above",
    "polka",
    "steep",
    "aunty",
    "light",
    "whose",
    "fresh",
    "stain",
    "clued",
    "mogul",
    "lefty",
    "spare",
    "grain",
    "visit",
    "gleam",
    "singe",
    "carve",
    "abate",
    "smelt",
    "stomp",
    "prize",
    "paint",
    "pulse",
    "lithe",
    "elegy",
    "gaily",
    "right",
    "brake",
    "nasal",
    "tasty",
    "ditto",
    "belch",
    "foist",
    "sappy",
    "mammy",
    "paste",
    "tweed",
    "jumbo",
    "rerun",
    "sperm",
    "brawl",
    "sight",
    "brave",
    "waltz",
    "erase",
    "vault",
    "marsh",
    "slunk",
    "waive",
    "stiff",
    "graft",
    "cress",
    "knelt",
    "court",
    "dozen",
    "taper",
    "sissy",
    "untie",
    "juice",
    "toddy",
    "plane",
    "twist",
    "queer",
    "sober",
    "whiff",
    "doubt",
    "rapid",
    "dying",
    "niece",
    "slink",
    "valid",
    "gravy",
    "hurry",
    "storm",
    "daunt",
    "south",
    "filet",
    "revel",
    "drunk",
    "trunk",
    "broad",
    "junta",
    "cluck",
    "bawdy",
    "grief",
    "peace",
    "radar",
    "built",
    "least",
    "cumin",
    "gecko",
    "guest",
    "maxim",
    "woken",
    "kayak",
    "billy",
    "squad",
    "deter",
    "hello",
    "limit",
    "phone",
    "donor",
    "alive",
    "quill",
    "tangy",
    "prong",
    "odder",
    "harry",
    "alibi",
    "drill",
    "funky",
    "khaki",
    "salon",
    "snack",
    "royal",
    "shush",
    "marry",
    "fluid",
    "frisk",
    "lumpy",
    "lapel",
    "gouge",
    "sooty",
    "prone",
    "organ",
    "flume",
    "extol",
    "sorry",
    "octet",
    "still",
    "shell",
    "posse",
    "howdy",
    "fatty",
    "duchy",
    "pasta",
    "snort",
    "legal",
    "avert",
    "false",
    "brush",
    "cloud",
    "matey",
    "heath",
    "trial",
    "novel",
    "agree",
    "penne",
    "snowy",
    "occur",
    "sieve",
    "ocean",
    "tempo",
    "quoth",
    "bluer",
    "droop",
    "altar",
    "leech",
    "force",
    "pansy",
    "scout",
    "saint",
    "abide",
    "wield",
    "frock",
    "trait",
    "board",
    "aware",
    "adobe",
    "stein",
    "ideal",
    "touch",
    "shelf",
    "drown",
    "fault",
    "trawl",
    "borax",
    "bread",
    "bingo",
    "bulky",
    "bring",
    "trend",
    "fifty",
    "snaky",
    "block",
    "ratty",
    "charm",
    "tying",
    "freed",
    "adorn",
    "smart",
    "purge",
    "prude",
    "reign",
    "safer",
    "ought",
    "satin",
    "aorta",
    "silly",
    "bluff",
    "undue",
    "worse",
    "rover",
    "bilge",
    "lunge",
    "laden",
    "press",
    "lingo",
    "baler",
    "power",
    "plier",
    "trail",
    "owing",
    "ethos",
    "weary",
    "treat",
    "rally",
    "brawn",
    "shyly",
    "ruddy",
    "stead",
    "prune",
    "daddy",
    "payer",
    "world",
    "plant",
    "slide",
    "dandy",
    "ultra",
    "annoy",
    "sense",
    "bleak",
    "heart",
    "botch",
    "stunt",
    "crane",
    "lymph",
    "fluke",
    "fried",
    "jetty",
    "loser",
    "while",
    "shawl",
    "staff",
    "glare",
    "awake",
    "iliac",
    "hotly",
    "upset",
    "digit",
    "guise",
    "idiom",
    "coupe",
    "tower",
    "rarer",
    "prose",
    "ample",
    "peril",
    "friar",
    "diary",
    "dumpy",
    "squib",
    "vapor",
    "swarm",
    "twice",
    "serif",
    "macho",
    "stare",
    "agape",
    "tuber",
    "batch",
    "point",
    "quirk",
    "anime",
    "hunky",
    "dairy",
    "birth",
    "renal",
    "dwell",
    "parse",
    "lorry",
    "taunt",
    "stump",
    "bossy",
    "goofy",
    "lyric",
    "chirp",
    "globe",
    "close",
    "crest",
    "poise",
    "lupus",
    "abuse",
    "waver",
    "snide",
    "leery",
    "chute",
    "hutch",
    "anvil",
    "ether",
    "hunch",
    "guilt",
    "cover",
    "budge",
    "aside",
    "party",
    "gloat",
    "tried",
    "bully",
    "scope",
    "thick",
    "liege",
    "agent",
    "grant",
    "droll",
    "spank",
    "whole",
    "manly",
    "rival",
    "quack",
    "heavy",
    "maybe",
    "erect",
    "triad",
    "sushi",
    "caste",
    "bloke",
    "spurn",
    "spark",
    "break",
    "asset",
    "often",
    "broom",
    "climb",
    "retch",
    "shift",
    "tubal",
    "baron",
    "couch",
    "scoop",
    "quake",
    "every",
    "bunny",
    "datum",
    "fjord",
    "testy",
    "hover",
    "surer",
    "cider",
    "lathe",
    "vapid",
    "whack",
    "chime",
    "state",
    "creep",
    "ready",
    "dally",
    "privy",
    "mauve",
    "login",
    "willy",
    "quail",
    "usual",
    "briar",
    "chide",
    "shear",
    "steal",
    "opium",
    "guild",
    "mamma",
    "scaly",
    "stern",
    "toxic",
    "eject",
    "plunk",
    "endow",
    "snail",
    "blimp",
    "human",
    "month",
    "error",
    "thigh",
    "havoc",
    "theft",
    "fishy",
    "harsh",
    "trope",
    "denim",
    "vogue",
    "gully",
    "elude",
    "green",
    "honor",
    "grail",
    "chest",
    "crone",
    "ombre",
    "wimpy",
    "fizzy",
    "quiet",
    "ditch",
    "moose",
    "leash",
    "drama",
    "crept",
    "delay",
    "wooer",
    "quart",
    "voter",
    "flesh",
    "cream",
    "eight",
    "jewel",
    "pixel",
    "gorge",
    "deuce",
    "fleet",
    "swell",
    "oxide",
    "barge",
    "train",
    "slice",
    "tithe",
    "flown",
    "slain",
    "stage",
    "naval",
    "belie",
    "china",
    "early",
    "haute",
    "abbey",
    "mourn",
    "antic",
    "radii",
    "sheik",
    "piper",
    "avail",
    "patch",
    "probe",
    "posit",
    "along",
    "plead",
    "wrote",
    "scorn",
    "panic",
    "whelp",
    "turbo",
    "gavel",
    "llama",
    "metal",
    "wring",
    "swill",
    "guess",
    "emcee",
    "weird",
    "bleep",
    "ferry",
    "lucky",
    "sling",
    "elate",
    "carry",
    "gamma",
    "sugar",
    "woozy",
    "screw",
    "spilt",
    "dully",
    "dream",
    "bland",
    "fauna",
    "folly",
    "truly",
    "shave",
    "nylon",
    "ficus",
    "sigma",
    "mocha",
    "copse",
    "sweat",
    "hotel",
    "ninja",
    "clamp",
    "betel",
    "ovine",
    "price",
    "rouge",
    "coven",
    "usher",
    "picky",
    "saucy",
    "tawny",
    "comic",
    "mimic",
    "sassy",
    "strip",
    "sport",
    "debit",
    "scree",
    "recap",
    "verge",
    "gaudy",
    "forgo",
    "being",
    "trove",
    "berth",
    "prove",
    "fluff",
    "flush",
    "shorn",
    "mural",
    "waste",
    "vigor",
    "flier",
    "creme",
    "wager",
    "silky",
    "cramp",
    "dwarf",
    "shark",
    "tripe",
    "creak",
    "array",
    "deign",
    "opine",
    "knack",
    "flaky",
    "lipid",
    "elbow",
    "audit",
    "focal",
    "crypt",
    "aptly",
    "mercy",
    "diver",
    "angle",
    "exist",
    "quilt",
    "value",
    "ivory",
    "unfed",
    "papal",
    "label",
    "liver",
    "pasty",
    "wench",
    "lumen",
    "gayer",
    "merge",
    "shade",
    "cynic",
    "pinky",
    "torso",
    "gumbo",
    "local",
    "spurt",
    "blush",
    "curve",
    "scarf",
    "poesy",
    "tally",
    "moldy",
    "stash",
    "flank",
    "zebra",
    "crump",
    "gloss",
    "brood",
    "pudgy",
    "milky",
    "detox",
    "bowel",
    "broth",
    "magic",
    "snoop",
    "tiger",
    "wheat",
    "doing",
    "midge",
    "troop",
    "toxin",
    "palsy",
    "prowl",
    "kappa",
    "write",
    "wryly",
    "unzip",
    "begin",
    "wince",
    "gaunt",
    "spiny",
    "atone",
    "munch",
    "venom",
    "chief",
    "stark",
    "stork",
    "axiom",
    "whoop",
    "stove",
    "drink",
    "graph",
    "group",
    "chard",
    "cavil",
    "ascot",
    "fiery",
    "demur",
    "croup",
    "fight",
    "reset",
    "nicer",
    "truer",
    "edify",
    "slack",
    "title",
    "level",
    "boost",
    "reuse",
    "juror",
    "crack",
    "slash",
    "think",
    "nutty",
    "vivid",
    "cloth",
    "truth",
    "reedy",
    "igloo",
    "siren",
    "wound",
    "dirty",
    "count",
    "natal",
    "egret",
    "spasm",
    "banal",
    "froth",
    "fully",
    "twine",
    "joust",
    "beget",
    "moody",
    "twang",
    "fairy",
    "check",
    "blast",
    "lusty",
    "skier",
    "flora",
    "titan",
    "flint",
    "wrack",
    "chaos",
    "cling",
    "whisk",
    "sleek",
    "rearm",
    "outgo",
    "fruit",
    "timid",
    "tacit",
    "torch",
    "affix",
    "moral",
    "arson",
    "melon",
    "worst",
    "dimly",
    "upper",
    "bride",
    "fibre",
    "atoll",
    "pleat",
    "derby",
    "snore",
    "motel",
    "rowdy",
    "sepia",
    "drift",
    "melee",
    "riper",
    "voice",
    "baggy",
    "shied",
    "relic",
    "swung",
    "pouch",
    "vying",
    "tight",
    "godly",
    "scald",
    "cubic",
    "first",
    "idiot",
    "lousy",
    "gruel",
    "voila",
    "farce",
    "crank",
    "psalm",
    "brook",
    "crate",
    "gypsy",
    "finch",
    "reply",
    "nosey",
    "vocal",
    "idyll",
    "floss",
    "inlay",
    "gripe",
    "coral",
    "allot",
    "rhyme",
    "issue",
    "queue",
    "swear",
    "dense",
    "fetch",
    "relay",
    "exert",
    "bison",
    "pixie",
    "model",
    "inlet",
    "shall",
    "heist",
    "chock",
    "chant",
    "roger",
    "gamut",
    "meaty",
    "tenet",
    "clack",
    "covey",
    "valve",
    "taste",
    "needy",
    "theme",
    "shale",
    "rugby",
    "fewer",
    "align",
    "tumor",
    "toast",
    "corer",
    "showy",
    "quash",
    "clout",
    "piggy",
    "mount",
    "magma",
    "stock",
    "villa",
    "hound",
    "cello",
    "mummy",
    "fecal",
    "craft",
    "amply",
    "bravo",
    "canoe",
    "cairn",
    "blown",
    "kitty",
    "overt",
    "steer",
    "tabby",
    "shirt",
    "corny",
    "tepid",
    "color",
    "plush",
    "audio",
    "retry",
    "loamy",
    "ovate",
    "choir",
    "roach",
    "taint",
    "augur",
    "flute",
    "boozy",
    "macaw",
    "remit",
    "union",
    "chalk",
    "leach",
    "bathe",
    "savoy",
    "white",
    "minor",
    "helix",
    "slang",
    "joint",
    "maize",
    "gummy",
    "score",
    "salsa",
    "drawl",
    "crook",
    "catch",
    "myrrh",
    "bongo",
    "sneer",
    "elfin",
    "given",
    "taken",
    "might",
    "wiser",
    "karma",
    "goose",
    "grand",
    "latte",
    "shank",
    "brief",
    "fungi",
    "knock",
    "epoch",
    "meter",
    "youth",
    "fanny",
    "otter",
    "jerky",
    "epoxy",
    "stood",
    "woman",
    "swoop",
    "pluck",
    "spoke",
    "boney",
    "prick",
    "baker",
    "mecca",
    "alley",
    "blank",
    "lunch",
    "sleet",
    "slate",
    "favor",
    "scrub",
    "soapy",
    "loath",
    "stank",
    "verve",
    "gourd",
    "latch",
    "cross",
    "steed",
    "flood",
    "layer",
    "stilt",
    "after",
    "motif",
    "repel",
    "spore",
    "alpha",
    "sumac",
    "abort",
    "wight",
    "louse",
    "suing",
    "omega",
    "glyph",
    "aglow",
    "award",
    "trash",
    "elect",
    "fling",
    "grasp",
    "warty",
    "yacht",
    "musty",
    "shrew",
    "scour",
    "steak",
    "comfy",
    "pesky",
    "chump",
    "demon",
    "dealt",
    "plain",
    "slant",
    "claim",
    "macro",
    "incur",
    "excel",
    "trade",
    "drawn",
    "axion",
    "intro",
    "eagle",
    "anode",
    "dress",
    "table",
    "wrong",
    "strut",
    "semen",
    "photo",
    "disco",
    "never",
    "order",
    "mower",
    "skill",
    "puffy",
    "minus",
    "crave",
    "ridge",
    "glass",
    "bleed",
    "thong",
    "brine",
    "chart",
    "petal",
    "admin",
    "witch",
    "unite",
    "obese",
    "muddy",
    "lager",
    "sword",
    "welch",
    "decay",
    "scare",
    "ardor",
    "feral",
    "poker",
    "borne",
    "weedy",
    "swash",
    "blare",
    "alter",
    "vodka",
    "speak",
    "knife",
    "utile",
    "cocoa",
    "booth",
    "react",
    "stole",
    "nanny",
    "tamer",
    "prime",
    "slush",
    "dopey",
    "rogue",
    "spicy",
    "blood",
    "credo",
    "trite",
    "lever",
    "setup",
    "foggy",
    "spoof",
    "rhino",
    "geeky",
    "idler",
    "bacon",
    "evict",
    "solve",
    "tulle",
    "basal",
    "stand",
    "scamp",
    "ladle",
    "genre",
    "laugh",
    "savor",
    "taker",
    "manor",
    "whine",
    "theta",
    "began",
    "strap",
    "exalt",
    "awful",
    "vaunt",
    "nobly",
    "carol",
    "woody",
    "dutch",
    "arise",
    "parry",
    "wider",
    "annex",
    "awash",
    "lease",
    "weigh",
    "perky",
    "dirge",
    "armor",
    "sting",
    "flick",
    "booty",
    "lobby",
    "droit",
    "lucid",
    "octal",
    "ditty",
    "sheep",
    "clink",
    "sandy",
    "amaze",
    "reach",
    "ethic",
    "outer",
    "round",
    "sleep",
    "phase",
    "madam",
    "daisy",
    "cache",
    "drive",
    "argue",
    "sheen",
    "enema",
    "shook",
    "refit",
    "leper",
    "raven",
    "three",
    "ember",
    "smock",
    "mambo",
    "ankle",
    "tonal",
    "skirt",
    "cried",
    "mafia",
    "march",
    "stalk",
    "mulch",
    "cleft",
    "aisle",
    "fifth",
    "pupil",
    "fetal",
    "spiel",
    "grove",
    "begun",
    "swift",
    "cadet",
    "sonar",
    "scent",
    "sully",
    "dowel",
    "belle",
    "liken",
    "dusty",
    "unfit",
    "batty",
    "feign",
    "metro",
    "mossy",
    "gauge",
    "dizzy",
    "furor",
    "quasi",
    "stamp",
    "buxom",
    "scalp",
    "tribe",
    "sooth",
    "tipsy",
    "abyss",
    "focus",
    "bosom",
    "plump",
    "spade",
    "scone",
    "shirk",
    "nerve",
    "acorn",
    "offal",
    "enemy",
    "heave",
    "chase",
    "leant",
    "cacti",
    "venue",
    "lasso",
    "wharf",
    "straw",
    "vigil",
    "devil",
    "hippy",
    "masse",
    "pinto",
    "unify",
    "clock",
    "thing",
    "smoky",
    "stung",
    "clone",
    "rebar",
    "tacky",
    "snarl",
    "worth",
    "mania",
    "gland",
    "parka",
    "piece",
    "cedar",
    "scram",
    "alloy",
    "paddy",
    "bobby",
    "hairy",
    "cacao",
    "tardy",
    "expel",
    "sixth",
    "bunch",
    "hardy",
    "onion",
    "delve",
    "blunt",
    "binge",
    "tonga",
    "agora",
    "madly",
    "dance",
    "assay",
    "grope",
    "hobby",
    "spill",
    "pried",
    "unlit",
    "click",
    "hinge",
    "glaze",
    "civic",
    "sharp",
    "heron",
    "covet",
    "molar",
    "crawl",
    "apply",
    "guile",
    "later",
    "snout",
    "ovoid",
    "frost",
    "inner",
    "death",
    "gnash",
    "giant",
    "bagel",
    "rural",
    "vinyl",
    "wordy",
    "kebab",
    "musky",
    "enter",
    "spike",
    "nasty",
    "gusto",
    "older",
    "mirth",
    "ledge",
    "caddy",
    "shoot",
    "splat",
    "harpy",
    "ghoul",
    "bezel",
    "alike",
    "humid",
    "miner",
    "guard",
    "shrug",
    "forth",
    "urine",
    "crisp",
    "wacky",
    "burly",
    "vicar",
    "major",
    "brain",
    "totem",
    "arena",
    "leafy",
    "troll",
    "under",
    "robin",
    "noisy",
    "itchy",
    "spire",
    "clung",
    "fetus",
    "segue",
    "noble",
    "earth",
    "actor",
    "tidal",
    "cabal",
    "dogma",
    "brisk",
    "angry",
    "place",
    "cheer",
    "beset",
    "bitty",
    "drain",
    "awoke",
    "floor",
    "rusty",
    "aroma",
    "shame",
    "sheer",
    "morph",
    "beard",
    "edict",
    "gonad",
    "blame",
    "clown",
    "ester",
    "debar",
    "wrist",
    "zonal",
    "flack",
    "gnome",
    "plank",
    "outdo",
    "their",
    "lower",
    "sower",
    "finer",
    "stunk",
    "bigot",
    "windy",
    "ahead",
    "weave",
    "crush",
    "rupee",
    "minim",
    "panel",
    "spiky",
    "today",
    "sloth",
    "uncut",
    "alarm",
    "crazy",
    "rehab",
    "chunk",
    "surly",
    "teeth",
    "shout",
    "scuba",
    "notch",
    "purer",
    "pubic",
    "curio",
    "sweet",
    "guide",
    "crass",
    "merry",
    "aphid",
    "glean",
    "lapse",
    "shape",
    "bless",
    "found",
    "route",
    "surge",
    "pygmy",
    "frond",
    "decry",
    "newer",
    "timer",
    "glove",
    "eager",
    "eclat",
    "piety",
    "truce",
    "oaken",
    "filth",
    "retro",
    "cower",
    "hussy",
    "minty",
    "suave",
    "salty",
    "loopy",
    "boast",
    "thrum",
    "store",
    "manga",
    "leaky",
    "mound",
    "booby",
    "conic",
    "mealy",
    "aback",
    "solid",
    "dowry",
    "amuse",
    "leggy",
    "split",
    "amend",
    "rebus",
    "tarot",
    "rigor",
    "erupt",
    "seedy",
    "petty",
    "bonus",
    "basis",
    "adapt",
    "penny",
    "peach",
    "maple",
    "raise",
    "beast",
    "etude",
    "husky",
    "where",
    "twixt",
    "rough",
    "giver",
    "opera",
    "stuck",
    "shaft",
    "range",
    "fever",
    "trout",
    "basin",
    "rodeo",
    "chaff",
    "bulge",
    "sedan",
    "shaky",
    "trice",
    "plate",
    "decoy",
    "happy",
    "essay",
    "purse",
    "plait",
    "quest",
    "diode",
    "curvy",
    "ingot",
    "snuck",
    "dross",
    "rumor",
    "spice",
    "chair",
    "black",
    "embed",
    "midst",
    "acute",
    "space",
    "groan",
    "since",
    "ninth",
    "acrid",
    "hoist",
    "abode",
    "stoop",
    "hilly",
    "query",
    "satyr",
    "zesty",
    "kinky",
    "ionic",
    "grout",
    "ripen",
    "onset",
    "tiara",
    "stout",
    "steam",
    "sweep",
    "linen",
    "ruder",
    "avian",
    "pride",
    "worry",
    "prior",
    "again",
    "coast",
    "bloom",
    "scowl",
    "moult",
    "blond",
    "quote",
    "smear",
    "eking",
    "ozone",
    "brick",
    "banjo",
    "refer",
    "fancy",
    "chill",
    "drake",
    "poser",
    "towel",
    "niche",
    "fugue",
    "dryer",
    "fuzzy",
    "spear",
    "mango",
    "medic",
    "quite",
    "briny",
    "short",
    "virus",
    "grime",
    "elope",
    "thumb",
    "nurse",
    "lofty",
    "soggy",
    "small",
    "avoid",
    "hymen",
    "seven",
    "rebut",
    "vegan",
    "humph",
    "spunk",
    "learn",
    "creed",
    "flake",
    "exult",
    "holly",
    "amble",
    "blink",
    "enact",
    "amity",
    "fetid",
    "crony",
    "felon",
    "ralph",
    "trick",
    "skate",
    "clasp",
    "rotor",
    "sauce",
    "crimp",
    "smack",
    "badge",
    "maker",
    "slick",
    "goner",
    "foamy",
    "cliff",
    "loyal",
    "spend",
    "piney",
    "brand",
    "blend",
    "gipsy",
    "horde",
    "greet",
    "putty",
    "angel",
    "spoil",
    "seize",
    "grill",
    "owner",
    "rifle",
    "truck",
    "extra",
    "pedal",
    "valor",
    "spied",
    "winch",
    "sunny",
    "regal",
    "recut",
    "beech",
    "hyper",
    "navel",
    "berry",
    "cabin",
    "skulk",
    "raspy",
    "index",
    "alien",
    "whirl",
    "tapir",
    "attic",
    "diner",
    "super",
    "hedge",
    "lodge",
    "slurp",
    "front",
    "lurch",
    "stuff",
    "payee",
    "clank",
    "admit",
    "haste",
    "flail",
    "amber",
    "wagon",
    "anger",
    "fella",
    "steel",
    "noise",
    "stick",
    "token",
    "halve",
    "deity",
    "flock",
    "rabid",
    "swept",
    "candy"
];
const guessWords = [
    "aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "abacs", "abaft", "abaka", "abamp", "aband", "abash", "abask", "abaya", "abbas", "abbed", "abbes", "abcee", "abeam", "abear", "abele", "abers", "abets", "abies", "abler", "ables", "ablet", "ablow", "abmho", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "abram", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abuts", "abuzz", "abyes", "abysm", "acais", "acari", "accas", "accoy", "acerb", "acers", "aceta", "achar", "ached", "aches", "achoo", "acids", "acidy", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acred", "acres", "acros", "acted", "actin", "acton", "acyls", "adaws", "adays", "adbot", "addax", "added", "adder", "addio", "addle", "adeem", "adhan", "adieu", "adios", "adits", "adman", "admen", "admix", "adobo", "adown", "adoze", "adrad", "adred", "adsum", "aduki", "adunc", "adust", "advew", "adyta", "adzed", "adzes", "aecia", "aedes", "aegis", "aeons", "aerie", "aeros", "aesir", "afald", "afara", "afars", "afear", "aflaj", "afore", "afrit", "afros", "agama", "agami", "agars", "agast", "agave", "agaze", "agene", "agers", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agila", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglus", "agmas", "agoge", "agone", "agons", "agood", "agria", "agrin", "agros", "agued", "agues", "aguna", "aguti", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahull", "ahuru", "aidas", "aided", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimed", "aimer", "ainee", "ainga", "aioli", "aired", "airer", "airns", "airth", "airts", "aitch", "aitus", "aiver", "aiyee", "aizle", "ajies", "ajiva", "ajuga", "ajwan", "akees", "akela", "akene", "aking", "akita", "akkas", "alaap", "alack", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alary", "alate", "alays", "albas", "albee", "alcid", "alcos", "aldea", "alder", "aldol", "aleck", "alecs", "alefs", "aleft", "aleph", "alews", "aleye", "alfas", "algal", "algas", "algid", "algin", "algor", "algum", "alias", "alifs", "aline", "alist", "aliya", "alkie", "alkos", "alkyd", "alkyl", "allee", "allel", "allis", "allod", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "alods", "aloed", "aloes", "aloha", "aloin", "aloos", "alowe", "altho", "altos", "alula", "alums", "alure", "alvar", "alway", "amahs", "amain", "amate", "amaut", "amban", "ambit", "ambos", "ambry", "ameba", "ameer", "amene", "amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amlas", "amman", "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "amort", "amour", "amove", "amowt", "amped", "ampul", "amrit", "amuck", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "andro", "anear", "anele", "anent", "angas", "anglo", "anigh", "anile", "anils", "anima", "animi", "anion", "anise", "anker", "ankhs", "ankus", "anlas", "annal", "annas", "annat", "anoas", "anole", "anomy", "ansae", "antae", "antar", "antas", "anted", "antes", "antis", "antra", "antre", "antsy", "anura", "anyon", "apace", "apage", "apaid", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery", "apgar", "aphis", "apian", "apiol", "apish", "apism", "apode", "apods", "apoop", "aport", "appal", "appay", "appel", "appro", "appui", "appuy", "apres", "apses", "apsis", "apsos", "apted", "apter", "aquae", "aquas", "araba", "araks", "arame", "arars", "arbas", "arced", "archi", "arcos", "arcus", "ardeb", "ardri", "aread", "areae", "areal", "arear", "areas", "areca", "aredd", "arede", "arefy", "areic", "arene", "arepa", "arere", "arete", "arets", "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argus", "arhat", "arias", "ariel", "ariki", "arils", "ariot", "arish", "arked", "arled", "arles", "armed", "armer", "armet", "armil", "arnas", "arnut", "aroba", "aroha", "aroid", "arpas", "arpen", "arrah", "arras", "arret", "arris", "arroz", "arsed", "arses", "arsey", "arsis", "artal", "artel", "artic", "artis", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asana", "ascon", "ascus", "asdic", "ashed", "ashes", "ashet", "asked", "asker", "askoi", "askos", "aspen", "asper", "aspic", "aspie", "aspis", "aspro", "assai", "assam", "asses", "assez", "assot", "aster", "astir", "astun", "asura", "asway", "aswim", "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atlas", "atman", "atmas", "atmos", "atocs", "atoke", "atoks", "atoms", "atomy", "atony", "atopy", "atria", "atrip", "attap", "attar", "atuas", "audad", "auger", "aught", "aulas", "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", "auris", "aurum", "autos", "auxin", "avale", "avant", "avast", "avels", "avens", "avers", "avgas", "avine", "avion", "avise", "aviso", "avize", "avows", "avyze", "awarn", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awing", "awmry", "awned", "awner", "awols", "awork", "axels", "axile", "axils", "axing", "axite", "axled", "axles", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "ayont", "ayres", "ayrie", "azans", "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azurn", "azury", "azygy", "azyme", "azyms", "baaed", "baals", "babas", "babel", "babes", "babka", "baboo", "babul", "babus", "bacca", "bacco", "baccy", "bacha", "bachs", "backs", "baddy", "baels", "baffs", "baffy", "bafts", "baghs", "bagie", "bahts", "bahus", "bahut", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baked", "baken", "bakes", "bakra", "balas", "balds", "baldy", "baled", "bales", "balks", "balky", "balls", "bally", "balms", "baloo", "balsa", "balti", "balun", "balus", "bambi", "banak", "banco", "bancs", "banda", "bandh", "bands", "bandy", "baned", "banes", "bangs", "bania", "banks", "banns", "bants", "bantu", "banty", "banya", "bapus", "barbe", "barbs", "barby", "barca", "barde", "bardo", "bards", "bardy", "bared", "barer", "bares", "barfi", "barfs", "baric", "barks", "barky", "barms", "barmy", "barns", "barny", "barps", "barra", "barre", "barro", "barry", "barye", "basan", "based", "basen", "baser", "bases", "basho", "basij", "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "basti", "basto", "basts", "bated", "bates", "baths", "batik", "batta", "batts", "battu", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds", "bawks", "bawls", "bawns", "bawrs", "bawty", "bayed", "bayer", "bayes", "bayle", "bayts", "bazar", "bazoo", "beads", "beaks", "beaky", "beals", "beams", "beamy", "beano", "beans", "beany", "beare", "bears", "beath", "beats", "beaty", "beaus", "beaut", "beaux", "bebop", "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beedi", "beefs", "beeps", "beers", "beery", "beets", "befog", "begad", "begar", "begem", "begot", "begum", "beige", "beigy", "beins", "bekah", "belah", "belar", "belay", "belee", "belga", "bells", "belon", "belts", "bemad", "bemas", "bemix", "bemud", "bends", "bendy", "benes", "benet", "benga", "benis", "benne", "benni", "benny", "bento", "bents", "benty", "bepat", "beray", "beres", "bergs", "berko", "berks", "berme", "berms", "berob", "beryl", "besat", "besaw", "besee", "beses", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betes", "beths", "betid", "beton", "betta", "betty", "bever", "bevor", "bevue", "bevvy", "bewet", "bewig", "bezes", "bezil", "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs", "bibes", "biccy", "bices", "bided", "bider", "bides", "bidet", "bidis", "bidon", "bield", "biers", "biffo", "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bijou", "biked", "biker", "bikes", "bikie", "bilbo", "bilby", "biled", "biles", "bilgy", "bilks", "bills", "bimah", "bimas", "bimbo", "binal", "bindi", "binds", "biner", "bines", "bings", "bingy", "binit", "binks", "bints", "biogs", "biont", "biota", "biped", "bipod", "birds", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "bises", "bisks", "bisom", "bitch", "biter", "bites", "bitos", "bitou", "bitsy", "bitte", "bitts", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs", "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blams", "blart", "blase", "blash", "blate", "blats", "blatt", "blaud", "blawn", "blaws", "blays", "blear", "blebs", "blech", "blees", "blent", "blert", "blest", "blets", "bleys", "blimy", "bling", "blini", "blins", "bliny", "blips", "blist", "blite", "blits", "blive", "blobs", "blocs", "blogs", "blook", "bloop", "blore", "blots", "blows", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "blues", "bluet", "bluey", "bluid", "blume", "blunk", "blurs", "blype", "boabs", "boaks", "boars", "boart", "boats", "bobac", "bobak", "bobas", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks", "boded", "bodes", "bodge", "bodhi", "bodle", "boeps", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boils", "boing", "boink", "boite", "boked", "bokeh", "bokes", "bokos", "bolar", "bolas", "bolds", "boles", "bolix", "bolls", "bolos", "bolts", "bolus", "bomas", "bombe", "bombo", "bombs", "bonce", "bonds", "boned", "boner", "bones", "bongs", "bonie", "bonks", "bonne", "bonny", "bonza", "bonze", "booai", "booay", "boobs", "boody", "booed", "boofy", "boogy", "boohs", "books", "booky", "bools", "booms", "boomy", "boong", "boons", "boord", "boors", "boose", "boots", "boppy", "borak", "boral", "boras", "borde", "bords", "bored", "boree", "borel", "borer", "bores", "borgo", "boric", "borks", "borms", "borna", "boron", "borts", "borty", "bortz", "bosie", "bosks", "bosky", "boson", "bosun", "botas", "botel", "botes", "bothy", "botte", "botts", "botty", "bouge", "bouks", "boult", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bouts", "bovid", "bowat", "bowed", "bower", "bowes", "bowet", "bowie", "bowls", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxes", "boxla", "boxty", "boyar", "boyau", "boyed", "boyfs", "boygs", "boyla", "boyos", "boysy", "bozos", "braai", "brach", "brack", "bract", "brads", "braes", "brags", "brail", "braks", "braky", "brame", "brane", "brank", "brans", "brant", "brast", "brats", "brava", "bravi", "braws", "braxy", "brays", "braza", "braze", "bream", "brede", "breds", "breem", "breer", "brees", "breid", "breis", "breme", "brens", "brent", "brere", "brers", "breve", "brews", "breys", "brier", "bries", "brigs", "briki", "briks", "brill", "brims", "brins", "brios", "brise", "briss", "brith", "brits", "britt", "brize", "broch", "brock", "brods", "brogh", "brogs", "brome", "bromo", "bronc", "brond", "brool", "broos", "brose", "brosy", "brows", "brugh", "bruin", "bruit", "brule", "brume", "brung", "brusk", "brust", "bruts", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus", "buchu", "bucko", "bucks", "bucku", "budas", "budis", "budos", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy", "bufos", "bufty", "buhls", "buhrs", "buiks", "buist", "bukes", "bulbs", "bulgy", "bulks", "bulla", "bulls", "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunco", "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "buras", "burbs", "burds", "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls", "burns", "buroo", "burps", "burqa", "burro", "burrs", "burry", "bursa", "burse", "busby", "buses", "busks", "busky", "bussu", "busti", "busts", "busty", "buteo", "butes", "butle", "butoh", "butts", "butty", "butut", "butyl", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "byres", "byrls", "byssi", "bytes", "byway", "caaed", "cabas", "caber", "cabob", "caboc", "cabre", "cacas", "cacks", "cacky", "cadee", "cades", "cadge", "cadgy", "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffs", "caged", "cager", "cages", "cagot", "cahow", "caids", "cains", "caird", "cajon", "cajun", "caked", "cakes", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla", "calls", "calms", "calmy", "calos", "calpa", "calps", "calve", "calyx", "caman", "camas", "cames", "camis", "camos", "campi", "campo", "camps", "campy", "camus", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns", "canso", "canst", "canto", "cants", "canty", "capas", "caped", "capes", "capex", "caphs", "capiz", "caple", "capon", "capos", "capot", "capri", "capul", "carap", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "cared", "carer", "cares", "caret", "carex", "carks", "carle", "carls", "carns", "carny", "carob", "carom", "caron", "carpi", "carps", "carrs", "carse", "carta", "carte", "carts", "carvy", "casas", "casco", "cased", "cases", "casks", "casky", "casts", "casus", "cates", "cauda", "cauks", "cauld", "cauls", "caums", "caups", "cauri", "causa", "cavas", "caved", "cavel", "caver", "caves", "cavie", "cawed", "cawks", "caxon", "ceaze", "cebid", "cecal", "cecum", "ceded", "ceder", "cedes", "cedis", "ceiba", "ceili", "ceils", "celeb", "cella", "celli", "cells", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci", "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti", "cetes", "cetyl", "cezve", "chace", "chack", "chaco", "chado", "chads", "chaft", "chais", "chals", "chams", "chana", "chang", "chank", "chape", "chaps", "chapt", "chara", "chare", "chark", "charr", "chars", "chary", "chats", "chave", "chavs", "chawk", "chaws", "chaya", "chays", "cheep", "chefs", "cheka", "chela", "chelp", "chemo", "chems", "chere", "chert", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chibs", "chica", "chich", "chico", "chics", "chiel", "chiks", "chile", "chimb", "chimo", "chimp", "chine", "ching", "chink", "chino", "chins", "chips", "chirk", "chirl", "chirm", "chiro", "chirr", "chirt", "chiru", "chits", "chive", "chivs", "chivy", "chizz", "choco", "chocs", "chode", "chogs", "choil", "choko", "choky", "chola", "choli", "cholo", "chomp", "chons", "choof", "chook", "choom", "choon", "chops", "chota", "chott", "chout", "choux", "chowk", "chows", "chubs", "chufa", "chuff", "chugs", "chums", "churl", "churr", "chuse", "chuts", "chyle", "chyme", "chynd", "cibol", "cided", "cides", "ciels", "ciggy", "cilia", "cills", "cimar", "cimex", "cinct", "cines", "cinqs", "cions", "cippi", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "cited", "citer", "cites", "cives", "civet", "civie", "civvy", "clach", "clade", "clads", "claes", "clags", "clame", "clams", "clans", "claps", "clapt", "claro", "clart", "clary", "clast", "clats", "claut", "clave", "clavi", "claws", "clays", "cleck", "cleek", "cleep", "clefs", "clegs", "cleik", "clems", "clepe", "clept", "cleve", "clews", "clied", "clies", "clift", "clime", "cline", "clint", "clipe", "clips", "clipt", "clits", "cloam", "clods", "cloff", "clogs", "cloke", "clomb", "clomp", "clonk", "clons", "cloop", "cloot", "clops", "clote", "clots", "clour", "clous", "clows", "cloye", "cloys", "cloze", "clubs", "clues", "cluey", "clunk", "clype", "cnida", "coact", "coady", "coala", "coals", "coaly", "coapt", "coarb", "coate", "coati", "coats", "cobbs", "cobby", "cobia", "coble", "cobza", "cocas", "cocci", "cocco", "cocks", "cocky", "cocos", "codas", "codec", "coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign", "coils", "coins", "coirs", "coits", "coked", "cokes", "colas", "colby", "colds", "coled", "coles", "coley", "colic", "colin", "colls", "colly", "colog", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs", "comby", "comer", "comes", "comix", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus", "coned", "cones", "coney", "confs", "conga", "conge", "congo", "conia", "conin", "conks", "conky", "conne", "conns", "conte", "conto", "conus", "convo", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", "cools", "cooly", "coomb", "cooms", "coomy", "coons", "coops", "coopt", "coost", "coots", "cooze", "copal", "copay", "coped", "copen", "coper", "copes", "coppy", "copra", "copsy", "coqui", "coram", "corbe", "corby", "cords", "cored", "cores", "corey", "corgi", "coria", "corks", "corky", "corms", "corni", "corno", "corns", "cornu", "corps", "corse", "corso", "cosec", "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "coted", "cotes", "coths", "cotta", "cotts", "coude", "coups", "courb", "courd", "coure", "cours", "couta", "couth", "coved", "coves", "covin", "cowal", "cowan", "cowed", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau", "coyed", "coyer", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie", "craal", "crabs", "crags", "craic", "craig", "crake", "crame", "crams", "crans", "crape", "craps", "crapy", "crare", "craws", "crays", "creds", "creel", "crees", "crems", "crena", "creps", "crepy", "crewe", "crews", "crias", "cribs", "cries", "crims", "crine", "crios", "cripe", "crips", "crise", "crith", "crits", "croci", "crocs", "croft", "crogs", "cromb", "crome", "cronk", "crons", "crool", "croon", "crops", "crore", "crost", "crout", "crows", "croze", "cruck", "crudo", "cruds", "crudy", "crues", "cruet", "cruft", "crunk", "cruor", "crura", "cruse", "crusy", "cruve", "crwth", "cryer", "ctene", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubit", "cuddy", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", "cults", "culty", "cumec", "cundy", "cunei", "cunit", "cunts", "cupel", "cupid", "cuppa", "cuppy", "curat", "curbs", "curch", "curds", "curdy", "cured", "curer", "cures", "curet", "curfs", "curia", "curie", "curli", "curls", "curns", "curny", "currs", "cursi", "curst", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cycad", "cycas", "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cysts", "cytes", "cyton", "czars", "daals", "dabba", "daces", "dacha", "dacks", "dadah", "dadas", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahls", "daiko", "daine", "daint", "daker", "daled", "dales", "dalis", "dalle", "dalts", "daman", "damar", "dames", "damme", "damns", "damps", "dampy", "dancy", "dangs", "danio", "danks", "danny", "dants", "daraf", "darbs", "darcy", "dared", "darer", "dares", "darga", "dargs", "daric", "daris", "darks", "darky", "darns", "darre", "darts", "darzi", "dashi", "dashy", "datal", "dated", "dater", "dates", "datos", "datto", "daube", "daubs", "dauby", "dauds", "dault", "daurs", "dauts", "daven", "davit", "dawah", "dawds", "dawed", "dawen", "dawks", "dawns", "dawts", "dayan", "daych", "daynt", "dazed", "dazer", "dazes", "deads", "deair", "deals", "deans", "deare", "dearn", "dears", "deary", "deash", "deave", "deaws", "deawy", "debag", "debby", "debel", "debes", "debts", "debud", "debur", "debus", "debye", "decad", "decaf", "decan", "decko", "decks", "decos", "dedal", "deeds", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers", "deets", "deeve", "deevs", "defat", "deffo", "defis", "defog", "degas", "degum", "degus", "deice", "deids", "deify", "deils", "deism", "deist", "deked", "dekes", "dekko", "deled", "deles", "delfs", "delft", "delis", "dells", "delly", "delos", "delph", "delts", "deman", "demes", "demic", "demit", "demob", "demoi", "demos", "dempt", "denar", "denay", "dench", "denes", "denet", "denis", "dents", "deoxy", "derat", "deray", "dered", "deres", "derig", "derma", "derms", "derns", "derny", "deros", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks", "desse", "devas", "devel", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie", "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoti", "dhows", "dhuti", "diact", "dials", "diane", "diazo", "dibbs", "diced", "dicer", "dices", "dicht", "dicks", "dicky", "dicot", "dicta", "dicts", "dicty", "diddy", "didie", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilli", "dills", "dimbo", "dimer", "dimes", "dimps", "dinar", "dined", "dines", "dinge", "dings", "dinic", "dinks", "dinky", "dinna", "dinos", "dints", "diols", "diota", "dippy", "dipso", "diram", "direr", "dirke", "dirks", "dirls", "dirts", "disas", "disci", "discs", "dishy", "disks", "disme", "dital", "ditas", "dited", "dites", "ditsy", "ditts", "ditzy", "divan", "divas", "dived", "dives", "divis", "divna", "divos", "divot", "divvy", "diwan", "dixie", "dixit", "diyas", "dizen", "djinn", "djins", "doabs", "doats", "dobby", "dobes", "dobie", "dobla", "dobra", "dobro", "docht", "docks", "docos", "docus", "doddy", "dodos", "doeks", "doers", "doest", "doeth", "doffs", "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dohyo", "doilt", "doily", "doits", "dojos", "dolce", "dolci", "doled", "doles", "dolia", "dolls", "dolma", "dolor", "dolos", "dolts", "domal", "domed", "domes", "domic", "donah", "donas", "donee", "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donsy", "doobs", "dooce", "doody", "dooks", "doole", "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped", "doper", "dopes", "dorad", "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses", "dosha", "dotal", "doted", "doter", "dotes", "dotty", "douar", "douce", "doucs", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven", "dover", "doves", "dovie", "dowar", "dowds", "dowed", "dower", "dowie", "dowle", "dowls", "dowly", "downa", "downs", "dowps", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly", "dozed", "dozer", "dozes", "drabs", "drack", "draco", "draff", "drags", "drail", "drams", "drant", "draps", "drats", "drave", "draws", "drays", "drear", "dreck", "dreed", "dreer", "drees", "dregs", "dreks", "drent", "drere", "drest", "dreys", "dribs", "drice", "dries", "drily", "drips", "dript", "droid", "droil", "droke", "drole", "drome", "drony", "droob", "droog", "drook", "drops", "dropt", "drouk", "drows", "drubs", "drugs", "drums", "drupe", "druse", "drusy", "druxy", "dryad", "dryas", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "ducal", "ducat", "duces", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus", "duing", "duits", "dukas", "duked", "dukes", "dukka", "dulce", "dules", "dulia", "dulls", "dulse", "dumas", "dumbo", "dumbs", "dumka", "dumky", "dumps", "dunam", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny", "dunsh", "dunts", "duomi", "duomo", "duped", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured", "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks", "dusts", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwang", "dwaum", "dweeb", "dwile", "dwine", "dyads", "dyers", "dyked", "dykes", "dykey", "dykon", "dynel", "dynes", "dzhos", "eagre", "ealed", "eales", "eaned", "eards", "eared", "earls", "earns", "earnt", "earst", "eased", "easer", "eases", "easle", "easts", "eathe", "eaved", "eaves", "ebbed", "ebbet", "ebons", "ebook", "ecads", "eched", "eches", "echos", "ecrus", "edema", "edged", "edger", "edges", "edile", "edits", "educe", "educt", "eejit", "eensy", "eeven", "eevns", "effed", "egads", "egers", "egest", "eggar", "egged", "egger", "egmas", "ehing", "eider", "eidos", "eigne", "eiked", "eikon", "eilds", "eisel", "ejido", "ekkas", "elain", "eland", "elans", "elchi", "eldin", "elemi", "elfed", "eliad", "elint", "elmen", "eloge", "elogy", "eloin", "elops", "elpee", "elsin", "elute", "elvan", "elven", "elver", "elves", "emacs", "embar", "embay", "embog", "embow", "embox", "embus", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong", "emote", "emove", "empts", "emule", "emure", "emyde", "emyds", "enarm", "enate", "ended", "ender", "endew", "endue", "enews", "enfix", "eniac", "enlit", "enmew", "ennog", "enoki", "enols", "enorm", "enows", "enrol", "ensew", "ensky", "entia", "enure", "enurn", "envoi", "enzym", "eorls", "eosin", "epact", "epees", "ephah", "ephas", "ephod", "ephor", "epics", "epode", "epopt", "epris", "eques", "equid", "erbia", "erevs", "ergon", "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erose", "erred", "erses", "eruct", "erugo", "eruvs", "erven", "ervil", "escar", "escot", "esile", "eskar", "esker", "esnes", "esses", "estoc", "estop", "estro", "etage", "etape", "etats", "etens", "ethal", "ethne", "ethyl", "etics", "etnas", "ettin", "ettle", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evens", "evert", "evets", "evhoe", "evils", "evite", "evohe", "ewers", "ewest", "ewhow", "ewked", "exams", "exeat", "execs", "exeem", "exeme", "exfil", "exies", "exine", "exing", "exits", "exode", "exome", "exons", "expat", "expos", "exude", "exuls", "exurb", "eyass", "eyers", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabby", "faced", "facer", "faces", "facia", "facta", "facts", "faddy", "faded", "fader", "fades", "fadge", "fados", "faena", "faery", "faffs", "faffy", "faggy", "fagin", "fagot", "faiks", "fails", "faine", "fains", "fairs", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj", "falls", "famed", "fames", "fanal", "fands", "fanes", "fanga", "fango", "fangs", "fanks", "fanon", "fanos", "fanum", "faqir", "farad", "farci", "farcy", "fards", "fared", "farer", "fares", "farle", "farls", "farms", "faros", "farro", "farse", "farts", "fasci", "fasti", "fasts", "fated", "fates", "fatly", "fatso", "fatwa", "faugh", "fauld", "fauns", "faurd", "fauts", "fauve", "favas", "favel", "faver", "faves", "favus", "fawns", "fawny", "faxed", "faxes", "fayed", "fayer", "fayne", "fayre", "fazed", "fazes", "feals", "feare", "fears", "feart", "fease", "feats", "feaze", "feces", "fecht", "fecit", "fecks", "fedex", "feebs", "feeds", "feels", "feens", "feers", "feese", "feeze", "fehme", "feint", "feist", "felch", "felid", "fells", "felly", "felts", "felty", "femal", "femes", "femmy", "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny", "fesse", "festa", "fests", "festy", "fetas", "feted", "fetes", "fetor", "fetta", "fetts", "fetwa", "feuar", "feuds", "feued", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fibro", "fices", "fiche", "fichu", "ficin", "ficos", "fides", "fidge", "fidos", "fiefs", "fient", "fiere", "fiers", "fiest", "fifed", "fifer", "fifes", "fifis", "figgy", "figos", "fiked", "fikes", "filar", "filch", "filed", "files", "filii", "filks", "fille", "fillo", "fills", "filmi", "films", "filos", "filum", "finca", "finds", "fined", "fines", "finis", "finks", "finny", "finos", "fiord", "fiqhs", "fique", "fired", "firer", "fires", "firie", "firks", "firms", "firns", "firry", "firth", "fiscs", "fisks", "fists", "fisty", "fitch", "fitly", "fitna", "fitte", "fitts", "fiver", "fives", "fixed", "fixes", "fixit", "fjeld", "flabs", "flaff", "flags", "flaks", "flamm", "flams", "flamy", "flane", "flans", "flaps", "flary", "flats", "flava", "flawn", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleek", "fleer", "flees", "flegs", "fleme", "fleur", "flews", "flexi", "flexo", "fleys", "flics", "flied", "flies", "flimp", "flims", "flips", "flirs", "flisk", "flite", "flits", "flitt", "flobs", "flocs", "floes", "flogs", "flong", "flops", "flors", "flory", "flosh", "flota", "flote", "flows", "flubs", "flued", "flues", "fluey", "fluky", "flump", "fluor", "flurr", "fluty", "fluyt", "flyby", "flype", "flyte", "foals", "foams", "foehn", "fogey", "fogie", "fogle", "fogou", "fohns", "foids", "foils", "foins", "folds", "foley", "folia", "folic", "folie", "folks", "folky", "fomes", "fonda", "fonds", "fondu", "fones", "fonly", "fonts", "foods", "foody", "fools", "foots", "footy", "foram", "forbs", "forby", "fordo", "fords", "forel", "fores", "forex", "forks", "forky", "forme", "forms", "forts", "forza", "forze", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "fount", "fours", "fouth", "fovea", "fowls", "fowth", "foxed", "foxes", "foxie", "foyle", "foyne", "frabs", "frack", "fract", "frags", "fraim", "franc", "frape", "fraps", "frass", "frate", "frati", "frats", "fraus", "frays", "frees", "freet", "freit", "fremd", "frena", "freon", "frere", "frets", "fribs", "frier", "fries", "frigs", "frise", "frist", "frith", "frits", "fritt", "frize", "frizz", "froes", "frogs", "frons", "frore", "frorn", "frory", "frosh", "frows", "frowy", "frugs", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudgy", "fuels", "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugus", "fujis", "fulls", "fumed", "fumer", "fumes", "fumet", "fundi", "funds", "fundy", "fungo", "fungs", "funks", "fural", "furan", "furca", "furls", "furol", "furrs", "furth", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fusks", "fusts", "fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fyces", "fyked", "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gaddi", "gades", "gadge", "gadid", "gadis", "gadje", "gadjo", "gadso", "gaffs", "gaged", "gager", "gages", "gaids", "gains", "gairs", "gaita", "gaits", "gaitt", "gajos", "galah", "galas", "galax", "galea", "galed", "gales", "galls", "gally", "galop", "galut", "galvo", "gamas", "gamay", "gamba", "gambe", "gambo", "gambs", "gamed", "games", "gamey", "gamic", "gamin", "gamme", "gammy", "gamps", "ganch", "gandy", "ganef", "ganev", "gangs", "ganja", "ganof", "gants", "gaols", "gaped", "gaper", "gapes", "gapos", "gappy", "garbe", "garbo", "garbs", "garda", "gares", "garis", "garms", "garni", "garre", "garth", "garum", "gases", "gasps", "gaspy", "gasts", "gatch", "gated", "gater", "gates", "gaths", "gator", "gauch", "gaucy", "gauds", "gauje", "gault", "gaums", "gaumy", "gaups", "gaurs", "gauss", "gauzy", "gavot", "gawcy", "gawds", "gawks", "gawps", "gawsy", "gayal", "gazal", "gazar", "gazed", "gazes", "gazon", "gazoo", "geals", "geans", "geare", "gears", "geats", "gebur", "gecks", "geeks", "geeps", "geest", "geist", "geits", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma", "gemmy", "gemot", "genal", "genas", "genes", "genet", "genic", "genii", "genip", "genny", "genoa", "genom", "genro", "gents", "genty", "genua", "genus", "geode", "geoid", "gerah", "gerbe", "geres", "gerle", "germs", "germy", "gerne", "gesse", "gesso", "geste", "gests", "getas", "getup", "geums", "geyan", "geyer", "ghast", "ghats", "ghaut", "ghazi", "ghees", "ghest", "ghyll", "gibed", "gibel", "giber", "gibes", "gibli", "gibus", "gifts", "gigas", "gighe", "gigot", "gigue", "gilas", "gilds", "gilet", "gills", "gilly", "gilpy", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginch", "ginge", "gings", "ginks", "ginny", "ginzo", "gipon", "gippo", "gippy", "girds", "girls", "girns", "giron", "giros", "girrs", "girsh", "girts", "gismo", "gisms", "gists", "gitch", "gites", "giust", "gived", "gives", "gizmo", "glace", "glads", "glady", "glaik", "glair", "glams", "glans", "glary", "glaum", "glaur", "glazy", "gleba", "glebe", "gleby", "glede", "gleds", "gleed", "gleek", "glees", "gleet", "gleis", "glens", "glent", "gleys", "glial", "glias", "glibs", "gliff", "glift", "glike", "glime", "glims", "glisk", "glits", "glitz", "gloam", "globi", "globs", "globy", "glode", "glogg", "gloms", "gloop", "glops", "glost", "glout", "glows", "gloze", "glued", "gluer", "glues", "gluey", "glugs", "glume", "glums", "gluon", "glute", "gluts", "gnarl", "gnarr", "gnars", "gnats", "gnawn", "gnaws", "gnows", "goads", "goafs", "goals", "goary", "goats", "goaty", "goban", "gobar", "gobbi", "gobbo", "gobby", "gobis", "gobos", "godet", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer", "goffs", "gogga", "gogos", "goier", "gojis", "golds", "goldy", "goles", "golfs", "golpe", "golps", "gombo", "gomer", "gompa", "gonch", "gonef", "gongs", "gonia", "gonif", "gonks", "gonna", "gonof", "gonys", "gonzo", "gooby", "goods", "goofs", "googs", "gooks", "gooky", "goold", "gools", "gooly", "goons", "goony", "goops", "goopy", "goors", "goory", "goosy", "gopak", "gopik", "goral", "goras", "gored", "gores", "goris", "gorms", "gormy", "gorps", "gorse", "gorsy", "gosht", "gosse", "gotch", "goths", "gothy", "gotta", "gouch", "gouks", "goura", "gouts", "gouty", "gowan", "gowds", "gowfs", "gowks", "gowls", "gowns", "goxes", "goyim", "goyle", "graal", "grabs", "grads", "graff", "graip", "grama", "grame", "gramp", "grams", "grana", "grans", "grapy", "gravs", "grays", "grebe", "grebo", "grece", "greek", "grees", "grege", "grego", "grein", "grens", "grese", "greve", "grews", "greys", "grice", "gride", "grids", "griff", "grift", "grigs", "grike", "grins", "griot", "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits", "grize", "groat", "grody", "grogs", "groks", "groma", "grone", "groof", "grosz", "grots", "grouf", "grovy", "grows", "grrls", "grrrl", "grubs", "grued", "grues", "grufe", "grume", "grump", "grund", "gryce", "gryde", "gryke", "grype", "grypt", "guaco", "guana", "guano", "guans", "guars", "gucks", "gucky", "gudes", "guffs", "gugas", "guids", "guimp", "guiro", "gulag", "gular", "gulas", "gules", "gulet", "gulfs", "gulfy", "gulls", "gulph", "gulps", "gulpy", "gumma", "gummi", "gumps", "gundy", "gunge", "gungy", "gunks", "gunky", "gunny", "guqin", "gurdy", "gurge", "gurls", "gurly", "gurns", "gurry", "gursh", "gurus", "gushy", "gusla", "gusle", "gusli", "gussy", "gusts", "gutsy", "gutta", "gutty", "guyed", "guyle", "guyot", "guyse", "gwine", "gyals", "gyans", "gybed", "gybes", "gyeld", "gymps", "gynae", "gynie", "gynny", "gynos", "gyoza", "gypos", "gyppo", "gyppy", "gyral", "gyred", "gyres", "gyron", "gyros", "gyrus", "gytes", "gyved", "gyves", "haafs", "haars", "hable", "habus", "hacek", "hacks", "hadal", "haded", "hades", "hadji", "hadst", "haems", "haets", "haffs", "hafiz", "hafts", "haggs", "hahas", "haick", "haika", "haiks", "haiku", "hails", "haily", "hains", "haint", "hairs", "haith", "hajes", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim", "hakus", "halal", "haled", "haler", "hales", "halfa", "halfs", "halid", "hallo", "halls", "halma", "halms", "halon", "halos", "halse", "halts", "halva", "halwa", "hamal", "hamba", "hamed", "hames", "hammy", "hamza", "hanap", "hance", "hanch", "hands", "hangi", "hangs", "hanks", "hanky", "hansa", "hanse", "hants", "haole", "haoma", "hapax", "haply", "happi", "hapus", "haram", "hards", "hared", "hares", "harim", "harks", "harls", "harms", "harns", "haros", "harps", "harts", "hashy", "hasks", "hasps", "hasta", "hated", "hates", "hatha", "hauds", "haufs", "haugh", "hauld", "haulm", "hauls", "hault", "hauns", "hause", "haver", "haves", "hawed", "hawks", "hawms", "hawse", "hayed", "hayer", "hayey", "hayle", "hazan", "hazed", "hazer", "hazes", "heads", "heald", "heals", "heame", "heaps", "heapy", "heare", "hears", "heast", "heats", "heben", "hebes", "hecht", "hecks", "heder", "hedgy", "heeds", "heedy", "heels", "heeze", "hefte", "hefts", "heids", "heigh", "heils", "heirs", "hejab", "hejra", "heled", "heles", "helio", "hells", "helms", "helos", "helot", "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hench", "hends", "henge", "henna", "henny", "henry", "hents", "hepar", "herbs", "herby", "herds", "heres", "herls", "herma", "herms", "herns", "heros", "herry", "herse", "hertz", "herye", "hesps", "hests", "hetes", "heths", "heuch", "heugh", "hevea", "hewed", "hewer", "hewgh", "hexad", "hexed", "hexer", "hexes", "hexyl", "heyed", "hiant", "hicks", "hided", "hider", "hides", "hiems", "highs", "hight", "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch", "hillo", "hills", "hilts", "hilum", "hilus", "himbo", "hinau", "hinds", "hings", "hinky", "hinny", "hints", "hiois", "hiply", "hired", "hiree", "hirer", "hires", "hissy", "hists", "hithe", "hived", "hiver", "hives", "hizen", "hoaed", "hoagy", "hoars", "hoary", "hoast", "hobos", "hocks", "hocus", "hodad", "hodja", "hoers", "hogan", "hogen", "hoggs", "hoghs", "hohed", "hoick", "hoied", "hoiks", "hoing", "hoise", "hokas", "hoked", "hokes", "hokey", "hokis", "hokku", "hokum", "holds", "holed", "holes", "holey", "holks", "holla", "hollo", "holme", "holms", "holon", "holos", "holts", "homas", "homed", "homes", "homey", "homie", "homme", "homos", "honan", "honda", "honds", "honed", "honer", "hones", "hongi", "hongs", "honks", "honky", "hooch", "hoods", "hoody", "hooey", "hoofs", "hooka", "hooks", "hooky", "hooly", "hoons", "hoops", "hoord", "hoors", "hoosh", "hoots", "hooty", "hoove", "hopak", "hoped", "hoper", "hopes", "hoppy", "horah", "horal", "horas", "horis", "horks", "horme", "horns", "horst", "horsy", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey", "hosta", "hosts", "hotch", "hoten", "hotty", "houff", "houfs", "hough", "houri", "hours", "houts", "hovea", "hoved", "hoven", "hoves", "howbe", "howes", "howff", "howfs", "howks", "howls", "howre", "howso", "hoxed", "hoxes", "hoyas", "hoyed", "hoyle", "hubby", "hucks", "hudna", "hudud", "huers", "huffs", "huffy", "huger", "huggy", "huhus", "huias", "hulas", "hules", "hulks", "hulky", "hullo", "hulls", "hully", "humas", "humfs", "humic", "humps", "humpy", "hunks", "hunts", "hurds", "hurls", "hurly", "hurra", "hurst", "hurts", "hushy", "husks", "husos", "hutia", "huzza", "huzzy", "hwyls", "hydra", "hyens", "hygge", "hying", "hykes", "hylas", "hyleg", "hyles", "hylic", "hymns", "hynde", "hyoid", "hyped", "hypes", "hypha", "hyphy", "hypos", "hyrax", "hyson", "hythe", "iambi", "iambs", "ibrik", "icers", "iched", "iches", "ichor", "icier", "icker", "ickle", "icons", "ictal", "ictic", "ictus", "idant", "ideas", "idees", "ident", "idled", "idles", "idola", "idols", "idyls", "iftar", "igapo", "igged", "iglus", "ihram", "ikans", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliad", "ilial", "ilium", "iller", "illth", "imago", "imams", "imari", "imaum", "imbar", "imbed", "imide", "imido", "imids", "imine", "imino", "immew", "immit", "immix", "imped", "impis", "impot", "impro", "imshi", "imshy", "inapt", "inarm", "inbye", "incel", "incle", "incog", "incus", "incut", "indew", "india", "indie", "indol", "indow", "indri", "indue", "inerm", "infix", "infos", "infra", "ingan", "ingle", "inion", "inked", "inker", "inkle", "inned", "innit", "inorb", "inrun", "inset", "inspo", "intel", "intil", "intis", "intra", "inula", "inure", "inurn", "inust", "invar", "inwit", "iodic", "iodid", "iodin", "iotas", "ippon", "irade", "irids", "iring", "irked", "iroko", "irone", "irons", "isbas", "ishes", "isled", "isles", "isnae", "issei", "istle", "items", "ither", "ivied", "ivies", "ixias", "ixnay", "ixora", "ixtle", "izard", "izars", "izzat", "jaaps", "jabot", "jacal", "jacks", "jacky", "jaded", "jades", "jafas", "jaffa", "jagas", "jager", "jaggs", "jaggy", "jagir", "jagra", "jails", "jaker", "jakes", "jakey", "jalap", "jalop", "jambe", "jambo", "jambs", "jambu", "james", "jammy", "jamon", "janes", "janns", "janny", "janty", "japan", "japed", "japer", "japes", "jarks", "jarls", "jarps", "jarta", "jarul", "jasey", "jaspe", "jasps", "jatos", "jauks", "jaups", "javas", "javel", "jawan", "jawed", "jaxie", "jeans", "jeats", "jebel", "jedis", "jeels", "jeely", "jeeps", "jeers", "jeeze", "jefes", "jeffs", "jehad", "jehus", "jelab", "jello", "jells", "jembe", "jemmy", "jenny", "jeons", "jerid", "jerks", "jerry", "jesse", "jests", "jesus", "jetes", "jeton", "jeune", "jewed", "jewie", "jhala", "jiaos", "jibba", "jibbs", "jibed", "jiber", "jibes", "jiffs", "jiggy", "jigot", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jinks", "jinne", "jinni", "jinns", "jirds", "jirga", "jirre", "jisms", "jived", "jiver", "jives", "jivey", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos", "jodel", "joeys", "johns", "joins", "joked", "jokes", "jokey", "jokol", "joled", "joles", "jolls", "jolts", "jolty", "jomon", "jomos", "jones", "jongs", "jonty", "jooks", "joram", "jorum", "jotas", "jotty", "jotun", "joual", "jougs", "jouks", "joule", "jours", "jowar", "jowed", "jowls", "jowly", "joyed", "jubas", "jubes", "jucos", "judas", "judgy", "judos", "jugal", "jugum", "jujus", "juked", "jukes", "jukus", "julep", "jumar", "jumby", "jumps", "junco", "junks", "junky", "jupes", "jupon", "jural", "jurat", "jurel", "jures", "justs", "jutes", "jutty", "juves", "juvie", "kaama", "kabab", "kabar", "kabob", "kacha", "kacks", "kadai", "kades", "kadis", "kafir", "kagos", "kagus", "kahal", "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaims", "kaing", "kains", "kakas", "kakis", "kalam", "kales", "kalif", "kalis", "kalpa", "kamas", "kames", "kamik", "kamis", "kamme", "kanae", "kanas", "kandy", "kaneh", "kanes", "kanga", "kangs", "kanji", "kants", "kanzu", "kaons", "kapas", "kaphs", "kapok", "kapow", "kapus", "kaput", "karas", "karat", "karks", "karns", "karoo", "karos", "karri", "karst", "karsy", "karts", "karzy", "kasha", "kasme", "katal", "katas", "katis", "katti", "kaugh", "kauri", "kauru", "kaury", "kaval", "kavas", "kawas", "kawau", "kawed", "kayle", "kayos", "kazis", "kazoo", "kbars", "kebar", "kebob", "kecks", "kedge", "kedgy", "keech", "keefs", "keeks", "keels", "keema", "keeno", "keens", "keeps", "keets", "keeve", "kefir", "kehua", "keirs", "kelep", "kelim", "kells", "kelly", "kelps", "kelpy", "kelts", "kelty", "kembo", "kembs", "kemps", "kempt", "kempy", "kenaf", "kench", "kendo", "kenos", "kente", "kents", "kepis", "kerbs", "kerel", "kerfs", "kerky", "kerma", "kerne", "kerns", "keros", "kerry", "kerve", "kesar", "kests", "ketas", "ketch", "ketes", "ketol", "kevel", "kevil", "kexes", "keyed", "keyer", "khadi", "khafs", "khans", "khaph", "khats", "khaya", "khazi", "kheda", "kheth", "khets", "khoja", "khors", "khoum", "khuds", "kiaat", "kiack", "kiang", "kibbe", "kibbi", "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel", "kidge", "kiefs", "kiers", "kieve", "kievs", "kight", "kikes", "kikoi", "kiley", "kilim", "kills", "kilns", "kilos", "kilps", "kilts", "kilty", "kimbo", "kinas", "kinda", "kinds", "kindy", "kines", "kings", "kinin", "kinks", "kinos", "kiore", "kipes", "kippa", "kipps", "kirby", "kirks", "kirns", "kirri", "kisan", "kissy", "kists", "kited", "kiter", "kites", "kithe", "kiths", "kitul", "kivas", "kiwis", "klang", "klaps", "klett", "klick", "klieg", "kliks", "klong", "kloof", "kluge", "klutz", "knags", "knaps", "knarl", "knars", "knaur", "knawe", "knees", "knell", "knish", "knits", "knive", "knobs", "knops", "knosp", "knots", "knout", "knowe", "knows", "knubs", "knurl", "knurr", "knurs", "knuts", "koans", "koaps", "koban", "kobos", "koels", "koffs", "kofta", "kogal", "kohas", "kohen", "kohls", "koine", "kojis", "kokam", "kokas", "koker", "kokra", "kokum", "kolas", "kolos", "kombu", "konbu", "kondo", "konks", "kooks", "kooky", "koori", "kopek", "kophs", "kopje", "koppa", "korai", "koras", "korat", "kores", "korma", "koros", "korun", "korus", "koses", "kotch", "kotos", "kotow", "koura", "kraal", "krabs", "kraft", "krais", "krait", "krang", "krans", "kranz", "kraut", "krays", "kreep", "kreng", "krewe", "krona", "krone", "kroon", "krubi", "krunk", "ksars", "kubie", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukri", "kukus", "kulak", "kulan", "kulas", "kulfi", "kumis", "kumys", "kuris", "kurre", "kurta", "kurus", "kusso", "kutas", "kutch", "kutis", "kutus", "kuzus", "kvass", "kvell", "kwela", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos", "kydst", "kyles", "kylie", "kylin", "kylix", "kyloe", "kynde", "kynds", "kypes", "kyrie", "kytes", "kythe", "laari", "labda", "labia", "labis", "labra", "laced", "lacer", "laces", "lacet", "lacey", "lacks", "laddy", "laded", "lader", "lades", "laers", "laevo", "lagan", "lahal", "lahar", "laich", "laics", "laids", "laigh", "laika", "laiks", "laird", "lairs", "lairy", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lakin", "laksa", "laldy", "lalls", "lamas", "lambs", "lamby", "lamed", "lamer", "lames", "lamia", "lammy", "lamps", "lanai", "lanas", "lanch", "lande", "lands", "lanes", "lanks", "lants", "lapin", "lapis", "lapje", "larch", "lards", "lardy", "laree", "lares", "largo", "laris", "larks", "larky", "larns", "larnt", "larum", "lased", "laser", "lases", "lassi", "lassu", "lassy", "lasts", "latah", "lated", "laten", "latex", "lathi", "laths", "lathy", "latke", "latus", "lauan", "lauch", "lauds", "laufs", "laund", "laura", "laval", "lavas", "laved", "laver", "laves", "lavra", "lavvy", "lawed", "lawer", "lawin", "lawks", "lawns", "lawny", "laxed", "laxer", "laxes", "laxly", "layed", "layin", "layup", "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leads", "leady", "leafs", "leaks", "leams", "leans", "leany", "leaps", "leare", "lears", "leary", "leats", "leavy", "leaze", "leben", "leccy", "ledes", "ledgy", "ledum", "leear", "leeks", "leeps", "leers", "leese", "leets", "leeze", "lefte", "lefts", "leger", "leges", "legge", "leggo", "legit", "lehrs", "lehua", "leirs", "leish", "leman", "lemed", "lemel", "lemes", "lemma", "lemme", "lends", "lenes", "lengs", "lenis", "lenos", "lense", "lenti", "lento", "leone", "lepid", "lepra", "lepta", "lered", "leres", "lerps", "lesbo", "leses", "lests", "letch", "lethe", "letup", "leuch", "leuco", "leuds", "leugh", "levas", "levee", "leves", "levin", "levis", "lewis", "lexes", "lexis", "lezes", "lezza", "lezzy", "liana", "liane", "liang", "liard", "liars", "liart", "liber", "libra", "libri", "lichi", "licht", "licit", "licks", "lidar", "lidos", "liefs", "liens", "liers", "lieus", "lieve", "lifer", "lifes", "lifts", "ligan", "liger", "ligge", "ligne", "liked", "liker", "likes", "likin", "lills", "lilos", "lilts", "liman", "limas", "limax", "limba", "limbi", "limbs", "limby", "limed", "limen", "limes", "limey", "limma", "limns", "limos", "limpa", "limps", "linac", "linch", "linds", "lindy", "lined", "lines", "liney", "linga", "lings", "lingy", "linin", "links", "linky", "linns", "linny", "linos", "lints", "linty", "linum", "linux", "lions", "lipas", "lipes", "lipin", "lipos", "lippy", "liras", "lirks", "lirot", "lisks", "lisle", "lisps", "lists", "litai", "litas", "lited", "liter", "lites", "litho", "liths", "litre", "lived", "liven", "lives", "livor", "livre", "llano", "loach", "loads", "loafs", "loams", "loans", "loast", "loave", "lobar", "lobed", "lobes", "lobos", "lobus", "loche", "lochs", "locie", "locis", "locks", "locos", "locum", "loden", "lodes", "loess", "lofts", "logan", "loges", "loggy", "logia", "logie", "logoi", "logon", "logos", "lohan", "loids", "loins", "loipe", "loirs", "lokes", "lolls", "lolly", "lolog", "lomas", "lomed", "lomes", "loner", "longa", "longe", "longs", "looby", "looed", "looey", "loofa", "loofs", "looie", "looks", "looky", "looms", "loons", "loony", "loops", "loord", "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords", "lordy", "lorel", "lores", "loric", "loris", "losed", "losel", "losen", "loses", "lossy", "lotah", "lotas", "lotes", "lotic", "lotos", "lotsa", "lotta", "lotte", "lotto", "lotus", "loued", "lough", "louie", "louis", "louma", "lound", "louns", "loupe", "loups", "loure", "lours", "loury", "louts", "lovat", "loved", "loves", "lovey", "lovie", "lowan", "lowed", "lowes", "lownd", "lowne", "lowns", "lowps", "lowry", "lowse", "lowts", "loxed", "loxes", "lozen", "luach", "luaus", "lubed", "lubes", "lubra", "luces", "lucks", "lucre", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", "lumas", "lumbi", "lumme", "lummy", "lumps", "lunas", "lunes", "lunet", "lungi", "lungs", "lunks", "lunts", "lupin", "lured", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurks", "lurry", "lurve", "luser", "lushy", "lusks", "lusts", "lusus", "lutea", "luted", "luter", "lutes", "luvvy", "luxed", "luxer", "luxes", "lweis", "lyams", "lyard", "lyart", "lyase", "lycea", "lycee", "lycra", "lymes", "lynes", "lyres", "lysed", "lyses", "lysin", "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta", "maaed", "maare", "maars", "mabes", "macas", "maced", "macer", "maces", "mache", "machi", "machs", "macks", "macle", "macon", "madge", "madid", "madre", "maerl", "mafic", "mages", "maggs", "magot", "magus", "mahoe", "mahua", "mahwa", "maids", "maiko", "maiks", "maile", "maill", "mails", "maims", "mains", "maire", "mairs", "maise", "maist", "makar", "makes", "makis", "makos", "malam", "malar", "malas", "malax", "males", "malic", "malik", "malis", "malls", "malms", "malmy", "malts", "malty", "malus", "malva", "malwa", "mamas", "mamba", "mamee", "mamey", "mamie", "manas", "manat", "mandi", "maneb", "maned", "maneh", "manes", "manet", "mangs", "manis", "manky", "manna", "manos", "manse", "manta", "manto", "manty", "manul", "manus", "mapau", "maqui", "marae", "marah", "maras", "marcs", "mardy", "mares", "marge", "margs", "maria", "marid", "marka", "marks", "marle", "marls", "marly", "marms", "maron", "maror", "marra", "marri", "marse", "marts", "marvy", "masas", "mased", "maser", "mases", "mashy", "masks", "massa", "massy", "masts", "masty", "masus", "matai", "mated", "mater", "mates", "maths", "matin", "matlo", "matte", "matts", "matza", "matzo", "mauby", "mauds", "mauls", "maund", "mauri", "mausy", "mauts", "mauzy", "maven", "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawns", "mawrs", "maxed", "maxes", "maxis", "mayan", "mayas", "mayed", "mayos", "mayst", "mazed", "mazer", "mazes", "mazey", "mazut", "mbira", "meads", "meals", "meane", "means", "meany", "meare", "mease", "meath", "meats", "mebos", "mechs", "mecks", "medii", "medle", "meeds", "meers", "meets", "meffs", "meins", "meint", "meiny", "meith", "mekka", "melas", "melba", "melds", "melic", "melik", "mells", "melts", "melty", "memes", "memos", "menad", "mends", "mened", "menes", "menge", "mengs", "mensa", "mense", "mensh", "menta", "mento", "menus", "meous", "meows", "merch", "mercs", "merde", "mered", "merel", "merer", "meres", "meril", "meris", "merks", "merle", "merls", "merse", "mesal", "mesas", "mesel", "meses", "meshy", "mesic", "mesne", "meson", "messy", "mesto", "meted", "metes", "metho", "meths", "metic", "metif", "metis", "metol", "metre", "meuse", "meved", "meves", "mewed", "mewls", "meynt", "mezes", "mezze", "mezzo", "mhorr", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "micht", "micks", "micky", "micos", "micra", "middy", "midgy", "midis", "miens", "mieve", "miffs", "miffy", "mifty", "miggs", "mihas", "mihis", "miked", "mikes", "mikra", "mikva", "milch", "milds", "miler", "miles", "milfs", "milia", "milko", "milks", "mille", "mills", "milor", "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo", "mimer", "mimes", "mimsy", "minae", "minar", "minas", "mincy", "minds", "mined", "mines", "minge", "mings", "mingy", "minis", "minke", "minks", "minny", "minos", "mints", "mired", "mires", "mirex", "mirid", "mirin", "mirks", "mirky", "mirly", "miros", "mirvs", "mirza", "misch", "misdo", "mises", "misgo", "misos", "missa", "mists", "misty", "mitch", "miter", "mites", "mitis", "mitre", "mitts", "mixed", "mixen", "mixer", "mixes", "mixte", "mixup", "mizen", "mizzy", "mneme", "moans", "moats", "mobby", "mobes", "mobey", "mobie", "moble", "mochi", "mochs", "mochy", "mocks", "moder", "modes", "modge", "modii", "modus", "moers", "mofos", "moggy", "mohel", "mohos", "mohrs", "mohua", "mohur", "moile", "moils", "moira", "moire", "moits", "mojos", "mokes", "mokis", "mokos", "molal", "molas", "molds", "moled", "moles", "molla", "molls", "molly", "molto", "molts", "molys", "momes", "momma", "mommy", "momus", "monad", "monal", "monas", "monde", "mondo", "moner", "mongo", "mongs", "monic", "monie", "monks", "monos", "monte", "monty", "moobs", "mooch", "moods", "mooed", "mooks", "moola", "mooli", "mools", "mooly", "moong", "moons", "moony", "moops", "moors", "moory", "moots", "moove", "moped", "moper", "mopes", "mopey", "moppy", "mopsy", "mopus", "morae", "moras", "morat", "moray", "morel", "mores", "moria", "morne", "morns", "morra", "morro", "morse", "morts", "mosed", "moses", "mosey", "mosks", "mosso", "moste", "mosts", "moted", "moten", "motes", "motet", "motey", "moths", "mothy", "motis", "motte", "motts", "motty", "motus", "motza", "mouch", "moues", "mould", "mouls", "moups", "moust", "mousy", "moved", "moves", "mowas", "mowed", "mowra", "moxas", "moxie", "moyas", "moyle", "moyls", "mozed", "mozes", "mozos", "mpret", "mucho", "mucic", "mucid", "mucin", "mucks", "mucor", "mucro", "mudge", "mudir", "mudra", "muffs", "mufti", "mugga", "muggs", "muggy", "muhly", "muids", "muils", "muirs", "muist", "mujik", "mulct", "muled", "mules", "muley", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh", "mumms", "mumps", "mumsy", "mumus", "munga", "munge", "mungo", "mungs", "munis", "munts", "muntu", "muons", "muras", "mured", "mures", "murex", "murid", "murks", "murls", "murly", "murra", "murre", "murri", "murrs", "murry", "murti", "murva", "musar", "musca", "mused", "muser", "muses", "muset", "musha", "musit", "musks", "musos", "musse", "mussy", "musth", "musts", "mutch", "muted", "muter", "mutes", "mutha", "mutis", "muton", "mutts", "muxed", "muxes", "muzak", "muzzy", "mvule", "myall", "mylar", "mynah", "mynas", "myoid", "myoma", "myope", "myops", "myopy", "mysid", "mythi", "myths", "mythy", "myxos", "mzees", "naams", "naans", "nabes", "nabis", "nabks", "nabla", "nabob", "nache", "nacho", "nacre", "nadas", "naeve", "naevi", "naffs", "nagas", "naggy", "nagor", "nahal", "naiad", "naifs", "naiks", "nails", "naira", "nairu", "naked", "naker", "nakfa", "nalas", "naled", "nalla", "named", "namer", "names", "namma", "namus", "nanas", "nance", "nancy", "nandu", "nanna", "nanos", "nanua", "napas", "naped", "napes", "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "narre", "nashi", "natch", "nates", "natis", "natty", "nauch", "naunt", "navar", "naves", "navew", "navvy", "nawab", "nazes", "nazir", "nazis", "nduja", "neafe", "neals", "neaps", "nears", "neath", "neats", "nebek", "nebel", "necks", "neddy", "needs", "neeld", "neele", "neemb", "neems", "neeps", "neese", "neeze", "negro", "negus", "neifs", "neist", "neive", "nelis", "nelly", "nemas", "nemns", "nempt", "nenes", "neons", "neper", "nepit", "neral", "nerds", "nerka", "nerks", "nerol", "nerts", "nertz", "nervy", "nests", "netes", "netop", "netts", "netty", "neuks", "neume", "neums", "nevel", "neves", "nevus", "newbs", "newed", "newel", "newie", "newsy", "newts", "nexts", "nexus", "ngaio", "ngana", "ngati", "ngoma", "ngwee", "nicad", "nicht", "nicks", "nicol", "nidal", "nided", "nides", "nidor", "nidus", "niefs", "nieve", "nifes", "niffs", "niffy", "nifty", "niger", "nighs", "nihil", "nikab", "nikah", "nikau", "nills", "nimbi", "nimbs", "nimps", "niner", "nines", "ninon", "nipas", "nippy", "niqab", "nirls", "nirly", "nisei", "nisse", "nisus", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitry", "nitty", "nival", "nixed", "nixer", "nixes", "nixie", "nizam", "nkosi", "noahs", "nobby", "nocks", "nodal", "noddy", "nodes", "nodus", "noels", "noggs", "nohow", "noils", "noily", "noint", "noirs", "noles", "nolls", "nolos", "nomas", "nomen", "nomes", "nomic", "nomoi", "nomos", "nonas", "nonce", "nones", "nonet", "nongs", "nonis", "nonny", "nonyl", "noobs", "nooit", "nooks", "nooky", "noons", "noops", "nopal", "noria", "noris", "norks", "norma", "norms", "nosed", "noser", "noses", "notal", "noted", "noter", "notes", "notum", "nould", "noule", "nouls", "nouns", "nouny", "noups", "novae", "novas", "novum", "noway", "nowed", "nowls", "nowts", "nowty", "noxal", "noxes", "noyau", "noyed", "noyes", "nubby", "nubia", "nucha", "nuddy", "nuder", "nudes", "nudie", "nudzh", "nuffs", "nugae", "nuked", "nukes", "nulla", "nulls", "numbs", "numen", "nummy", "nunny", "nurds", "nurdy", "nurls", "nurrs", "nutso", "nutsy", "nyaff", "nyala", "nying", "nyssa", "oaked", "oaker", "oakum", "oared", "oases", "oasis", "oasts", "oaten", "oater", "oaths", "oaves", "obang", "obeah", "obeli", "obeys", "obias", "obied", "obiit", "obits", "objet", "oboes", "obole", "oboli", "obols", "occam", "ocher", "oches", "ochre", "ochry", "ocker", "ocrea", "octad", "octan", "octas", "octyl", "oculi", "odahs", "odals", "odeon", "odeum", "odism", "odist", "odium", "odors", "odour", "odyle", "odyls", "ofays", "offed", "offie", "oflag", "ofter", "ogams", "ogeed", "ogees", "oggin", "ogham", "ogive", "ogled", "ogler", "ogles", "ogmic", "ogres", "ohias", "ohing", "ohmic", "ohone", "oidia", "oiled", "oiler", "oinks", "oints", "ojime", "okapi", "okays", "okehs", "okras", "oktas", "oldie", "oleic", "olein", "olent", "oleos", "oleum", "olios", "ollas", "ollav", "oller", "ollie", "ology", "olpae", "olpes", "omasa", "omber", "ombus", "omens", "omers", "omits", "omlah", "omovs", "omrah", "oncer", "onces", "oncet", "oncus", "onely", "oners", "onery", "onium", "onkus", "onlay", "onned", "ontic", "oobit", "oohed", "oomph", "oonts", "ooped", "oorie", "ooses", "ootid", "oozed", "oozes", "opahs", "opals", "opens", "opepe", "oping", "oppos", "opsin", "opted", "opter", "orach", "oracy", "orals", "orang", "orant", "orate", "orbed", "orcas", "orcin", "ordos", "oread", "orfes", "orgia", "orgic", "orgue", "oribi", "oriel", "orixa", "orles", "orlon", "orlop", "ormer", "ornis", "orpin", "orris", "ortho", "orval", "orzos", "oscar", "oshac", "osier", "osmic", "osmol", "ossia", "ostia", "otaku", "otary", "ottar", "ottos", "oubit", "oucht", "ouens", "ouija", "oulks", "oumas", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourie", "ousel", "ousts", "outby", "outed", "outre", "outro", "outta", "ouzel", "ouzos", "ovals", "ovels", "ovens", "overs", "ovist", "ovoli", "ovolo", "ovule", "owche", "owies", "owled", "owler", "owlet", "owned", "owres", "owrie", "owsen", "oxbow", "oxers", "oxeye", "oxids", "oxies", "oxime", "oxims", "oxlip", "oxter", "oyers", "ozeki", "ozzie", "paals", "paans", "pacas", "paced", "pacer", "paces", "pacey", "pacha", "packs", "pacos", "pacta", "pacts", "padis", "padle", "padma", "padre", "padri", "paean", "paedo", "paeon", "paged", "pager", "pages", "pagle", "pagod", "pagri", "paiks", "pails", "pains", "paire", "pairs", "paisa", "paise", "pakka", "palas", "palay", "palea", "paled", "pales", "palet", "palis", "palki", "palla", "palls", "pally", "palms", "palmy", "palpi", "palps", "palsa", "pampa", "panax", "pance", "panda", "pands", "pandy", "paned", "panes", "panga", "pangs", "panim", "panko", "panne", "panni", "panto", "pants", "panty", "paoli", "paolo", "papas", "papaw", "papes", "pappi", "pappy", "parae", "paras", "parch", "pardi", "pards", "pardy", "pared", "paren", "pareo", "pares", "pareu", "parev", "parge", "pargo", "paris", "parki", "parks", "parky", "parle", "parly", "parma", "parol", "parps", "parra", "parrs", "parti", "parts", "parve", "parvo", "paseo", "pases", "pasha", "pashm", "paska", "paspy", "passe", "pasts", "pated", "paten", "pater", "pates", "paths", "patin", "patka", "patly", "patte", "patus", "pauas", "pauls", "pavan", "paved", "paven", "paver", "paves", "pavid", "pavin", "pavis", "pawas", "pawaw", "pawed", "pawer", "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payor", "paysd", "peage", "peags", "peaks", "peaky", "peals", "peans", "peare", "pears", "peart", "pease", "peats", "peaty", "peavy", "peaze", "pebas", "pechs", "pecke", "pecks", "pecky", "pedes", "pedis", "pedro", "peece", "peeks", "peels", "peens", "peeoy", "peepe", "peeps", "peers", "peery", "peeve", "peggy", "peghs", "peins", "peise", "peize", "pekan", "pekes", "pekin", "pekoe", "pelas", "pelau", "peles", "pelfs", "pells", "pelma", "pelon", "pelta", "pelts", "pends", "pendu", "pened", "penes", "pengo", "penie", "penis", "penks", "penna", "penni", "pents", "peons", "peony", "pepla", "pepos", "peppy", "pepsi", "perai", "perce", "percs", "perdu", "perdy", "perea", "peres", "peris", "perks", "perms", "perns", "perog", "perps", "perry", "perse", "perst", "perts", "perve", "pervo", "pervs", "pervy", "pesos", "pests", "pesty", "petar", "peter", "petit", "petre", "petri", "petti", "petto", "pewee", "pewit", "peyse", "phage", "phang", "phare", "pharm", "pheer", "phene", "pheon", "phese", "phial", "phish", "phizz", "phlox", "phoca", "phono", "phons", "phots", "phpht", "phuts", "phyla", "phyle", "piani", "pians", "pibal", "pical", "picas", "piccy", "picks", "picot", "picra", "picul", "piend", "piers", "piert", "pieta", "piets", "piezo", "pight", "pigmy", "piing", "pikas", "pikau", "piked", "piker", "pikes", "pikey", "pikis", "pikul", "pilae", "pilaf", "pilao", "pilar", "pilau", "pilaw", "pilch", "pilea", "piled", "pilei", "piler", "piles", "pilis", "pills", "pilow", "pilum", "pilus", "pimas", "pimps", "pinas", "pined", "pines", "pingo", "pings", "pinko", "pinks", "pinna", "pinny", "pinon", "pinot", "pinta", "pints", "pinup", "pions", "piony", "pious", "pioye", "pioys", "pipal", "pipas", "piped", "pipes", "pipet", "pipis", "pipit", "pippy", "pipul", "pirai", "pirls", "pirns", "pirog", "pisco", "pises", "pisky", "pisos", "pissy", "piste", "pitas", "piths", "piton", "pitot", "pitta", "piums", "pixes", "pized", "pizes", "plaas", "plack", "plage", "plans", "plaps", "plash", "plasm", "plast", "plats", "platt", "platy", "playa", "plays", "pleas", "plebe", "plebs", "plena", "pleon", "plesh", "plews", "plica", "plies", "plims", "pling", "plink", "ploat", "plods", "plong", "plonk", "plook", "plops", "plots", "plotz", "plouk", "plows", "ploye", "ploys", "plues", "pluff", "plugs", "plums", "plumy", "pluot", "pluto", "plyer", "poach", "poaka", "poake", "poboy", "pocks", "pocky", "podal", "poddy", "podex", "podge", "podgy", "podia", "poems", "poeps", "poets", "pogey", "pogge", "pogos", "pohed", "poilu", "poind", "pokal", "poked", "pokes", "pokey", "pokie", "poled", "poler", "poles", "poley", "polio", "polis", "polje", "polks", "polls", "polly", "polos", "polts", "polys", "pombe", "pomes", "pommy", "pomos", "pomps", "ponce", "poncy", "ponds", "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponks", "ponts", "ponty", "ponzu", "poods", "pooed", "poofs", "poofy", "poohs", "pooja", "pooka", "pooks", "pools", "poons", "poops", "poopy", "poori", "poort", "poots", "poove", "poovy", "popes", "poppa", "popsy", "porae", "poral", "pored", "porer", "pores", "porge", "porgy", "porin", "porks", "porky", "porno", "porns", "porny", "porta", "ports", "porty", "posed", "poses", "posey", "posho", "posts", "potae", "potch", "poted", "potes", "potin", "potoo", "potsy", "potto", "potts", "potty", "pouff", "poufs", "pouke", "pouks", "poule", "poulp", "poult", "poupe", "poupt", "pours", "pouts", "powan", "powin", "pownd", "powns", "powny", "powre", "poxed", "poxes", "poynt", "poyou", "poyse", "pozzy", "praam", "prads", "prahu", "prams", "prana", "prang", "praos", "prase", "prate", "prats", "pratt", "praty", "praus", "prays", "predy", "preed", "prees", "preif", "prems", "premy", "prent", "preon", "preop", "preps", "presa", "prese", "prest", "preve", "prexy", "preys", "prial", "pricy", "prief", "prier", "pries", "prigs", "prill", "prima", "primi", "primp", "prims", "primy", "prink", "prion", "prise", "priss", "proas", "probs", "prods", "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo", "proms", "pronk", "props", "prore", "proso", "pross", "prost", "prosy", "proto", "proul", "prows", "proyn", "prunt", "pruta", "pryer", "pryse", "pseud", "pshaw", "psion", "psoae", "psoai", "psoas", "psora", "psych", "psyop", "pubco", "pubes", "pubis", "pucan", "pucer", "puces", "pucka", "pucks", "puddy", "pudge", "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffs", "puggy", "pugil", "puhas", "pujah", "pujas", "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao", "pulas", "puled", "puler", "pules", "pulik", "pulis", "pulka", "pulks", "pulli", "pulls", "pully", "pulmo", "pulps", "pulus", "pumas", "pumie", "pumps", "punas", "punce", "punga", "pungs", "punji", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", "pupas", "pupus", "purda", "pured", "pures", "purin", "puris", "purls", "purpy", "purrs", "pursy", "purty", "puses", "pusle", "pussy", "putid", "puton", "putti", "putto", "putts", "puzel", "pwned", "pyats", "pyets", "pygal", "pyins", "pylon", "pyned", "pynes", "pyoid", "pyots", "pyral", "pyran", "pyres", "pyrex", "pyric", "pyros", "pyxed", "pyxes", "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik", "qibla", "qophs", "qorma", "quads", "quaff", "quags", "quair", "quais", "quaky", "quale", "quant", "quare", "quass", "quate", "quats", "quayd", "quays", "qubit", "quean", "queme", "quena", "quern", "queyn", "queys", "quich", "quids", "quiff", "quims", "quina", "quine", "quino", "quins", "quint", "quipo", "quips", "quipu", "quire", "quirt", "quist", "quits", "quoad", "quods", "quoif", "quoin", "quoit", "quoll", "quonk", "quops", "qursh", "quyte", "rabat", "rabic", "rabis", "raced", "races", "rache", "racks", "racon", "radge", "radix", "radon", "raffs", "rafts", "ragas", "ragde", "raged", "ragee", "rager", "rages", "ragga", "raggs", "raggy", "ragis", "ragus", "rahed", "rahui", "raias", "raids", "raiks", "raile", "rails", "raine", "rains", "raird", "raita", "raits", "rajas", "rajes", "raked", "rakee", "raker", "rakes", "rakia", "rakis", "rakus", "rales", "ramal", "ramee", "ramet", "ramie", "ramin", "ramis", "rammy", "ramps", "ramus", "ranas", "rance", "rands", "ranee", "ranga", "rangi", "rangs", "rangy", "ranid", "ranis", "ranke", "ranks", "rants", "raped", "raper", "rapes", "raphe", "rappe", "rared", "raree", "rares", "rarks", "rased", "raser", "rases", "rasps", "rasse", "rasta", "ratal", "ratan", "ratas", "ratch", "rated", "ratel", "rater", "rates", "ratha", "rathe", "raths", "ratoo", "ratos", "ratus", "rauns", "raupo", "raved", "ravel", "raver", "raves", "ravey", "ravin", "rawer", "rawin", "rawly", "rawns", "raxed", "raxes", "rayah", "rayas", "rayed", "rayle", "rayne", "razed", "razee", "razer", "razes", "razoo", "readd", "reads", "reais", "reaks", "realo", "reals", "reame", "reams", "reamy", "reans", "reaps", "rears", "reast", "reata", "reate", "reave", "rebbe", "rebec", "rebid", "rebit", "rebop", "rebuy", "recal", "recce", "recco", "reccy", "recit", "recks", "recon", "recta", "recti", "recto", "redan", "redds", "reddy", "reded", "redes", "redia", "redid", "redip", "redly", "redon", "redos", "redox", "redry", "redub", "redux", "redye", "reech", "reede", "reeds", "reefs", "reefy", "reeks", "reeky", "reels", "reens", "reest", "reeve", "refed", "refel", "reffo", "refis", "refix", "refly", "refry", "regar", "reges", "reggo", "regie", "regma", "regna", "regos", "regur", "rehem", "reifs", "reify", "reiki", "reiks", "reink", "reins", "reird", "reist", "reive", "rejig", "rejon", "reked", "rekes", "rekey", "relet", "relie", "relit", "rello", "reman", "remap", "remen", "remet", "remex", "remix", "renay", "rends", "reney", "renga", "renig", "renin", "renne", "renos", "rente", "rents", "reoil", "reorg", "repeg", "repin", "repla", "repos", "repot", "repps", "repro", "reran", "rerig", "resat", "resaw", "resay", "resee", "reses", "resew", "resid", "resit", "resod", "resow", "resto", "rests", "resty", "resus", "retag", "retax", "retem", "retia", "retie", "retox", "revet", "revie", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rewth", "rexes", "rezes", "rheas", "rheme", "rheum", "rhies", "rhime", "rhine", "rhody", "rhomb", "rhone", "rhumb", "rhyne", "rhyta", "riads", "rials", "riant", "riata", "ribas", "ribby", "ribes", "riced", "ricer", "rices", "ricey", "richt", "ricin", "ricks", "rides", "ridgy", "ridic", "riels", "riems", "rieve", "rifer", "riffs", "rifte", "rifts", "rifty", "riggs", "rigol", "riled", "riles", "riley", "rille", "rills", "rimae", "rimed", "rimer", "rimes", "rimus", "rinds", "rindy", "rines", "rings", "rinks", "rioja", "riots", "riped", "ripes", "ripps", "rises", "rishi", "risks", "risps", "risus", "rites", "ritts", "ritzy", "rivas", "rived", "rivel", "riven", "rives", "riyal", "rizas", "roads", "roams", "roans", "roars", "roary", "roate", "robed", "robes", "roble", "rocks", "roded", "rodes", "roguy", "rohes", "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked", "roker", "rokes", "rolag", "roles", "rolfs", "rolls", "romal", "roman", "romeo", "romps", "ronde", "rondo", "roneo", "rones", "ronin", "ronne", "ronte", "ronts", "roods", "roofs", "roofy", "rooks", "rooky", "rooms", "roons", "roops", "roopy", "roosa", "roose", "roots", "rooty", "roped", "roper", "ropes", "ropey", "roque", "roral", "rores", "roric", "rorid", "rorie", "rorts", "rorty", "rosed", "roses", "roset", "roshi", "rosin", "rosit", "rosti", "rosts", "rotal", "rotan", "rotas", "rotch", "roted", "rotes", "rotis", "rotls", "roton", "rotos", "rotte", "rouen", "roues", "roule", "rouls", "roums", "roups", "roupy", "roust", "routh", "routs", "roved", "roven", "roves", "rowan", "rowed", "rowel", "rowen", "rowie", "rowme", "rownd", "rowth", "rowts", "royne", "royst", "rozet", "rozit", "ruana", "rubai", "rubby", "rubel", "rubes", "rubin", "ruble", "rubli", "rubus", "ruche", "rucks", "rudas", "rudds", "rudes", "rudie", "rudis", "rueda", "ruers", "ruffe", "ruffs", "rugae", "rugal", "ruggy", "ruing", "ruins", "rukhs", "ruled", "rules", "rumal", "rumbo", "rumen", "rumes", "rumly", "rummy", "rumpo", "rumps", "rumpy", "runch", "runds", "runed", "runes", "rungs", "runic", "runny", "runts", "runty", "rupia", "rurps", "rurus", "rusas", "ruses", "rushy", "rusks", "rusma", "russe", "rusts", "ruths", "rutin", "rutty", "ryals", "rybat", "ryked", "rykes", "rymme", "rynds", "ryots", "ryper", "saags", "sabal", "sabed", "saber", "sabes", "sabha", "sabin", "sabir", "sable", "sabot", "sabra", "sabre", "sacks", "sacra", "saddo", "sades", "sadhe", "sadhu", "sadis", "sados", "sadza", "safed", "safes", "sagas", "sager", "sages", "saggy", "sagos", "sagum", "saheb", "sahib", "saice", "saick", "saics", "saids", "saiga", "sails", "saims", "saine", "sains", "sairs", "saist", "saith", "sajou", "sakai", "saker", "sakes", "sakia", "sakis", "sakti", "salal", "salat", "salep", "sales", "salet", "salic", "salix", "salle", "salmi", "salol", "salop", "salpa", "salps", "salse", "salto", "salts", "salue", "salut", "saman", "samas", "samba", "sambo", "samek", "samel", "samen", "sames", "samey", "samfu", "sammy", "sampi", "samps", "sands", "saned", "sanes", "sanga", "sangh", "sango", "sangs", "sanko", "sansa", "santo", "sants", "saola", "sapan", "sapid", "sapor", "saran", "sards", "sared", "saree", "sarge", "sargo", "sarin", "saris", "sarks", "sarky", "sarod", "saros", "sarus", "saser", "sasin", "sasse", "satai", "satay", "sated", "satem", "sates", "satis", "sauba", "sauch", "saugh", "sauls", "sault", "saunt", "saury", "sauts", "saved", "saver", "saves", "savey", "savin", "sawah", "sawed", "sawer", "saxes", "sayed", "sayer", "sayid", "sayne", "sayon", "sayst", "sazes", "scabs", "scads", "scaff", "scags", "scail", "scala", "scall", "scams", "scand", "scans", "scapa", "scape", "scapi", "scarp", "scars", "scart", "scath", "scats", "scatt", "scaud", "scaup", "scaur", "scaws", "sceat", "scena", "scend", "schav", "schmo", "schul", "schwa", "sclim", "scody", "scogs", "scoog", "scoot", "scopa", "scops", "scots", "scoug", "scoup", "scowp", "scows", "scrab", "scrae", "scrag", "scran", "scrat", "scraw", "scray", "scrim", "scrip", "scrob", "scrod", "scrog", "scrow", "scudi", "scudo", "scuds", "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts", "scuzz", "scyes", "sdayn", "sdein", "seals", "seame", "seams", "seamy", "seans", "seare", "sears", "sease", "seats", "seaze", "sebum", "secco", "sechs", "sects", "seder", "sedes", "sedge", "sedgy", "sedum", "seeds", "seeks", "seeld", "seels", "seely", "seems", "seeps", "seepy", "seers", "sefer", "segar", "segni", "segno", "segol", "segos", "sehri", "seifs", "seils", "seine", "seirs", "seise", "seism", "seity", "seiza", "sekos", "sekts", "selah", "seles", "selfs", "sella", "selle", "sells", "selva", "semee", "semes", "semie", "semis", "senas", "sends", "senes", "sengi", "senna", "senor", "sensa", "sensi", "sente", "senti", "sents", "senvy", "senza", "sepad", "sepal", "sepic", "sepoy", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "seric", "serin", "serks", "seron", "serow", "serra", "serre", "serrs", "serry", "servo", "sesey", "sessa", "setae", "setal", "seton", "setts", "sewan", "sewar", "sewed", "sewel", "sewen", "sewin", "sexed", "sexer", "sexes", "sexto", "sexts", "seyen", "shads", "shags", "shahs", "shako", "shakt", "shalm", "shaly", "shama", "shams", "shand", "shans", "shaps", "sharn", "shash", "shaul", "shawm", "shawn", "shaws", "shaya", "shays", "shchi", "sheaf", "sheal", "sheas", "sheds", "sheel", "shend", "shent", "sheol", "sherd", "shere", "shero", "shets", "sheva", "shewn", "shews", "shiai", "shiel", "shier", "shies", "shill", "shily", "shims", "shins", "ships", "shirr", "shirs", "shish", "shiso", "shist", "shite", "shits", "shiur", "shiva", "shive", "shivs", "shlep", "shlub", "shmek", "shmoe", "shoat", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo", "shola", "shool", "shoon", "shoos", "shope", "shops", "shorl", "shote", "shots", "shott", "showd", "shows", "shoyu", "shred", "shris", "shrow", "shtik", "shtum", "shtup", "shule", "shuln", "shuls", "shuns", "shura", "shute", "shuts", "shwas", "shyer", "sials", "sibbs", "sibyl", "sices", "sicht", "sicko", "sicks", "sicky", "sidas", "sided", "sider", "sides", "sidha", "sidhe", "sidle", "sield", "siens", "sient", "sieth", "sieur", "sifts", "sighs", "sigil", "sigla", "signa", "signs", "sijos", "sikas", "siker", "sikes", "silds", "siled", "silen", "siler", "siles", "silex", "silks", "sills", "silos", "silts", "silty", "silva", "simar", "simas", "simba", "simis", "simps", "simul", "sinds", "sined", "sines", "sings", "sinhs", "sinks", "sinky", "sinus", "siped", "sipes", "sippy", "sired", "siree", "sires", "sirih", "siris", "siroc", "sirra", "sirup", "sisal", "sises", "sista", "sists", "sitar", "sited", "sites", "sithe", "sitka", "situp", "situs", "siver", "sixer", "sixes", "sixmo", "sixte", "sizar", "sized", "sizel", "sizer", "sizes", "skags", "skail", "skald", "skank", "skart", "skats", "skatt", "skaws", "skean", "skear", "skeds", "skeed", "skeef", "skeen", "skeer", "skees", "skeet", "skegg", "skegs", "skein", "skelf", "skell", "skelm", "skelp", "skene", "skens", "skeos", "skeps", "skers", "skets", "skews", "skids", "skied", "skies", "skiey", "skimo", "skims", "skink", "skins", "skint", "skios", "skips", "skirl", "skirr", "skite", "skits", "skive", "skivy", "sklim", "skoal", "skody", "skoff", "skogs", "skols", "skool", "skort", "skosh", "skran", "skrik", "skuas", "skugs", "skyed", "skyer", "skyey", "skyfs", "skyre", "skyrs", "skyte", "slabs", "slade", "slaes", "slags", "slaid", "slake", "slams", "slane", "slank", "slaps", "slart", "slats", "slaty", "slaws", "slays", "slebs", "sleds", "sleer", "slews", "sleys", "slier", "slily", "slims", "slipe", "slips", "slipt", "slish", "slits", "slive", "sloan", "slobs", "sloes", "slogs", "sloid", "slojd", "slomo", "sloom", "sloot", "slops", "slopy", "slorm", "slots", "slove", "slows", "sloyd", "slubb", "slubs", "slued", "slues", "sluff", "slugs", "sluit", "slums", "slurb", "slurs", "sluse", "sluts", "slyer", "slype", "smaak", "smaik", "smalm", "smalt", "smarm", "smaze", "smeek", "smees", "smeik", "smeke", "smerk", "smews", "smirr", "smirs", "smits", "smogs", "smoko", "smolt", "smoor", "smoot", "smore", "smorg", "smout", "smowt", "smugs", "smurs", "smush", "smuts", "snabs", "snafu", "snags", "snaps", "snarf", "snark", "snars", "snary", "snash", "snath", "snaws", "snead", "sneap", "snebs", "sneck", "sneds", "sneed", "snees", "snell", "snibs", "snick", "snies", "snift", "snigs", "snips", "snipy", "snirt", "snits", "snobs", "snods", "snoek", "snoep", "snogs", "snoke", "snood", "snook", "snool", "snoot", "snots", "snowk", "snows", "snubs", "snugs", "snush", "snyes", "soaks", "soaps", "soare", "soars", "soave", "sobas", "socas", "soces", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", "softa", "softs", "softy", "soger", "sohur", "soils", "soily", "sojas", "sojus", "sokah", "soken", "sokes", "sokol", "solah", "solan", "solas", "solde", "soldi", "soldo", "solds", "soled", "solei", "soler", "soles", "solon", "solos", "solum", "solus", "soman", "somas", "sonce", "sonde", "sones", "songs", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey", "sooks", "sooky", "soole", "sools", "sooms", "soops", "soote", "soots", "sophs", "sophy", "sopor", "soppy", "sopra", "soral", "soras", "sorbo", "sorbs", "sorda", "sordo", "sords", "sored", "soree", "sorel", "sorer", "sores", "sorex", "sorgo", "sorns", "sorra", "sorta", "sorts", "sorus", "soths", "sotol", "souce", "souct", "sough", "souks", "souls", "soums", "soups", "soupy", "sours", "souse", "souts", "sowar", "sowce", "sowed", "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps", "sowse", "sowth", "soyas", "soyle", "soyuz", "sozin", "spacy", "spado", "spaed", "spaer", "spaes", "spags", "spahi", "spail", "spain", "spait", "spake", "spald", "spale", "spall", "spalt", "spams", "spane", "spang", "spans", "spard", "spars", "spart", "spate", "spats", "spaul", "spawl", "spaws", "spayd", "spays", "spaza", "spazz", "speal", "spean", "speat", "specs", "spect", "speel", "speer", "speil", "speir", "speks", "speld", "spelk", "speos", "spets", "speug", "spews", "spewy", "spial", "spica", "spick", "spics", "spide", "spier", "spies", "spiff", "spifs", "spiks", "spile", "spims", "spina", "spink", "spins", "spirt", "spiry", "spits", "spitz", "spivs", "splay", "splog", "spode", "spods", "spoom", "spoor", "spoot", "spork", "sposh", "spots", "sprad", "sprag", "sprat", "spred", "sprew", "sprit", "sprod", "sprog", "sprue", "sprug", "spuds", "spued", "spuer", "spues", "spugs", "spule", "spume", "spumy", "spurs", "sputa", "spyal", "spyre", "squab", "squaw", "squeg", "squid", "squit", "squiz", "stabs", "stade", "stags", "stagy", "staig", "stane", "stang", "staph", "staps", "starn", "starr", "stars", "stats", "staun", "staws", "stays", "stean", "stear", "stedd", "stede", "steds", "steek", "steem", "steen", "steil", "stela", "stele", "stell", "steme", "stems", "stend", "steno", "stens", "stent", "steps", "stept", "stere", "stets", "stews", "stewy", "steys", "stich", "stied", "sties", "stilb", "stile", "stime", "stims", "stimy", "stipa", "stipe", "stire", "stirk", "stirp", "stirs", "stive", "stivy", "stoae", "stoai", "stoas", "stoat", "stobs", "stoep", "stogy", "stoit", "stoln", "stoma", "stond", "stong", "stonk", "stonn", "stook", "stoor", "stope", "stops", "stopt", "stoss", "stots", "stott", "stoun", "stoup", "stour", "stown", "stowp", "stows", "strad", "strae", "strag", "strak", "strep", "strew", "stria", "strig", "strim", "strop", "strow", "stroy", "strum", "stubs", "stude", "studs", "stull", "stulm", "stumm", "stums", "stuns", "stupa", "stupe", "sture", "sturt", "styed", "styes", "styli", "stylo", "styme", "stymy", "styre", "styte", "subah", "subas", "subby", "suber", "subha", "succi", "sucks", "sucky", "sucre", "sudds", "sudor", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety", "sugan", "sughs", "sugos", "suhur", "suids", "suint", "suits", "sujee", "sukhs", "sukuk", "sulci", "sulfa", "sulfo", "sulks", "sulph", "sulus", "sumis", "summa", "sumos", "sumph", "sumps", "sunis", "sunks", "sunna", "sunns", "sunup", "supes", "supra", "surah", "sural", "suras", "surat", "surds", "sured", "sures", "surfs", "surfy", "surgy", "surra", "sused", "suses", "susus", "sutor", "sutra", "sutta", "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale", "swaly", "swamy", "swang", "swank", "swans", "swaps", "swapt", "sward", "sware", "swarf", "swart", "swats", "swayl", "sways", "sweal", "swede", "sweed", "sweel", "sweer", "swees", "sweir", "swelt", "swerf", "sweys", "swies", "swigs", "swile", "swims", "swink", "swipe", "swire", "swiss", "swith", "swits", "swive", "swizz", "swobs", "swole", "swoln", "swops", "swopt", "swots", "swoun", "sybbe", "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syens", "syker", "sykes", "sylis", "sylph", "sylva", "symar", "synch", "syncs", "synds", "syned", "synes", "synth", "syped", "sypes", "syphs", "syrah", "syren", "sysop", "sythe", "syver", "taals", "taata", "taber", "tabes", "tabid", "tabis", "tabla", "tabor", "tabun", "tabus", "tacan", "taces", "tacet", "tache", "tacho", "tachs", "tacks", "tacos", "tacts", "taels", "tafia", "taggy", "tagma", "tahas", "tahrs", "taiga", "taigs", "taiko", "tails", "tains", "taira", "taish", "taits", "tajes", "takas", "takes", "takhi", "takin", "takis", "takky", "talak", "talaq", "talar", "talas", "talcs", "talcy", "talea", "taler", "tales", "talks", "talky", "talls", "talma", "talpa", "taluk", "talus", "tamal", "tamed", "tames", "tamin", "tamis", "tammy", "tamps", "tanas", "tanga", "tangi", "tangs", "tanhs", "tanka", "tanks", "tanky", "tanna", "tansy", "tanti", "tanto", "tanty", "tapas", "taped", "tapen", "tapes", "tapet", "tapis", "tappa", "tapus", "taras", "tardo", "tared", "tares", "targa", "targe", "tarns", "taroc", "tarok", "taros", "tarps", "tarre", "tarry", "tarsi", "tarts", "tarty", "tasar", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso", "tatar", "tater", "tates", "taths", "tatie", "tatou", "tatts", "tatus", "taube", "tauld", "tauon", "taupe", "tauts", "tavah", "tavas", "taver", "tawai", "tawas", "tawed", "tawer", "tawie", "tawse", "tawts", "taxed", "taxer", "taxes", "taxis", "taxol", "taxon", "taxor", "taxus", "tayra", "tazza", "tazze", "teade", "teads", "teaed", "teaks", "teals", "teams", "tears", "teats", "teaze", "techs", "techy", "tecta", "teels", "teems", "teend", "teene", "teens", "teeny", "teers", "teffs", "teggs", "tegua", "tegus", "tehrs", "teiid", "teils", "teind", "teins", "telae", "telco", "teles", "telex", "telia", "telic", "tells", "telly", "teloi", "telos", "temed", "temes", "tempi", "temps", "tempt", "temse", "tench", "tends", "tendu", "tenes", "tenge", "tenia", "tenne", "tenno", "tenny", "tenon", "tents", "tenty", "tenue", "tepal", "tepas", "tepoy", "terai", "teras", "terce", "terek", "teres", "terfe", "terfs", "terga", "terms", "terne", "terns", "terry", "terts", "tesla", "testa", "teste", "tests", "tetes", "teths", "tetra", "tetri", "teuch", "teugh", "tewed", "tewel", "tewit", "texas", "texes", "texts", "thack", "thagi", "thaim", "thale", "thali", "thana", "thane", "thang", "thans", "thanx", "tharm", "thars", "thaws", "thawy", "thebe", "theca", "theed", "theek", "thees", "thegn", "theic", "thein", "thelf", "thema", "thens", "theow", "therm", "thesp", "thete", "thews", "thewy", "thigs", "thilk", "thill", "thine", "thins", "thiol", "thirl", "thoft", "thole", "tholi", "thoro", "thorp", "thous", "thowl", "thrae", "thraw", "thrid", "thrip", "throe", "thuds", "thugs", "thuja", "thunk", "thurl", "thuya", "thymi", "thymy", "tians", "tiars", "tical", "ticca", "ticed", "tices", "tichy", "ticks", "ticky", "tiddy", "tided", "tides", "tiers", "tiffs", "tifos", "tifts", "tiges", "tigon", "tikas", "tikes", "tikis", "tikka", "tilak", "tiled", "tiler", "tiles", "tills", "tilly", "tilth", "tilts", "timbo", "timed", "times", "timon", "timps", "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tings", "tinks", "tinny", "tints", "tinty", "tipis", "tippy", "tired", "tires", "tirls", "tiros", "tirrs", "titch", "titer", "titis", "titre", "titty", "titup", "tiyin", "tiyns", "tizes", "tizzy", "toads", "toady", "toaze", "tocks", "tocky", "tocos", "todde", "toeas", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "toged", "toges", "togue", "tohos", "toile", "toils", "toing", "toise", "toits", "tokay", "toked", "toker", "tokes", "tokos", "tolan", "tolar", "tolas", "toled", "toles", "tolls", "tolly", "tolts", "tolus", "tolyl", "toman", "tombs", "tomes", "tomia", "tommy", "tomos", "tondi", "tondo", "toned", "toner", "tones", "toney", "tongs", "tonka", "tonks", "tonne", "tonus", "tools", "tooms", "toons", "toots", "toped", "topee", "topek", "toper", "topes", "tophe", "tophi", "tophs", "topis", "topoi", "topos", "toppy", "toque", "torah", "toran", "toras", "torcs", "tores", "toric", "torii", "toros", "torot", "torrs", "torse", "torsi", "torsk", "torta", "torte", "torts", "tosas", "tosed", "toses", "toshy", "tossy", "toted", "toter", "totes", "totty", "touks", "touns", "tours", "touse", "tousy", "touts", "touze", "touzy", "towed", "towie", "towns", "towny", "towse", "towsy", "towts", "towze", "towzy", "toyed", "toyer", "toyon", "toyos", "tozed", "tozes", "tozie", "trabs", "trads", "tragi", "traik", "trams", "trank", "tranq", "trans", "trant", "trape", "traps", "trapt", "trass", "trats", "tratt", "trave", "trayf", "trays", "treck", "treed", "treen", "trees", "trefa", "treif", "treks", "trema", "trems", "tress", "trest", "trets", "trews", "treyf", "treys", "triac", "tride", "trier", "tries", "triff", "trigo", "trigs", "trike", "trild", "trill", "trims", "trine", "trins", "triol", "trior", "trios", "trips", "tripy", "trist", "troad", "troak", "troat", "trock", "trode", "trods", "trogs", "trois", "troke", "tromp", "trona", "tronc", "trone", "tronk", "trons", "trooz", "troth", "trots", "trows", "troys", "trued", "trues", "trugo", "trugs", "trull", "tryer", "tryke", "tryma", "tryps", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tsubo", "tuans", "tuart", "tuath", "tubae", "tubar", "tubas", "tubby", "tubed", "tubes", "tucks", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra", "tuile", "tuina", "tuism", "tuktu", "tules", "tulpa", "tulsi", "tumid", "tummy", "tumps", "tumpy", "tunas", "tunds", "tuned", "tuner", "tunes", "tungs", "tunny", "tupek", "tupik", "tuple", "tuque", "turds", "turfs", "turfy", "turks", "turme", "turms", "turns", "turnt", "turps", "turrs", "tushy", "tusks", "tusky", "tutee", "tutti", "tutty", "tutus", "tuxes", "tuyer", "twaes", "twain", "twals", "twank", "twats", "tways", "tweel", "tween", "tweep", "tweer", "twerk", "twerp", "twier", "twigs", "twill", "twilt", "twink", "twins", "twiny", "twire", "twirp", "twite", "twits", "twoer", "twyer", "tyees", "tyers", "tyiyn", "tykes", "tyler", "tymps", "tynde", "tyned", "tynes", "typal", "typed", "types", "typey", "typic", "typos", "typps", "typto", "tyran", "tyred", "tyres", "tyros", "tythe", "tzars", "udals", "udons", "ugali", "ugged", "uhlan", "uhuru", "ukase", "ulama", "ulans", "ulema", "ulmin", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ulvas", "ulyie", "ulzie", "umami", "umbel", "umber", "umble", "umbos", "umbre", "umiac", "umiak", "umiaq", "ummah", "ummas", "ummed", "umped", "umphs", "umpie", "umpty", "umrah", "umras", "unais", "unapt", "unarm", "unary", "unaus", "unbag", "unban", "unbar", "unbed", "unbid", "unbox", "uncap", "unces", "uncia", "uncos", "uncoy", "uncus", "undam", "undee", "undos", "undug", "uneth", "unfix", "ungag", "unget", "ungod", "ungot", "ungum", "unhat", "unhip", "unica", "units", "unjam", "unked", "unket", "unkid", "unlaw", "unlay", "unled", "unlet", "unlid", "unman", "unmew", "unmix", "unpay", "unpeg", "unpen", "unpin", "unred", "unrid", "unrig", "unrip", "unsaw", "unsay", "unsee", "unsew", "unsex", "unsod", "untax", "untin", "unwet", "unwit", "unwon", "upbow", "upbye", "updos", "updry", "upend", "upjet", "uplay", "upled", "uplit", "upped", "upran", "uprun", "upsee", "upsey", "uptak", "upter", "uptie", "uraei", "urali", "uraos", "urare", "urari", "urase", "urate", "urbex", "urbia", "urdee", "ureal", "ureas", "uredo", "ureic", "urena", "urent", "urged", "urger", "urges", "urial", "urite", "urman", "urnal", "urned", "urped", "ursae", "ursid", "urson", "urubu", "urvas", "users", "usnea", "usque", "usure", "usury", "uteri", "uveal", "uveas", "uvula", "vacua", "vaded", "vades", "vagal", "vagus", "vails", "vaire", "vairs", "vairy", "vakas", "vakil", "vales", "valis", "valse", "vamps", "vampy", "vanda", "vaned", "vanes", "vangs", "vants", "vaped", "vaper", "vapes", "varan", "varas", "vardy", "varec", "vares", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", "vatic", "vatus", "vauch", "vaute", "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegas", "veges", "vegie", "vegos", "vehme", "veils", "veily", "veins", "veiny", "velar", "velds", "veldt", "veles", "vells", "velum", "venae", "venal", "vends", "vendu", "veney", "venge", "venin", "vents", "venus", "verbs", "verra", "verry", "verst", "verts", "vertu", "vespa", "vesta", "vests", "vetch", "vexed", "vexer", "vexes", "vexil", "vezir", "vials", "viand", "vibes", "vibex", "vibey", "viced", "vices", "vichy", "viers", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vilde", "viler", "villi", "vills", "vimen", "vinal", "vinas", "vinca", "vined", "viner", "vines", "vinew", "vinic", "vinos", "vints", "viold", "viols", "vired", "vireo", "vires", "virga", "virge", "virid", "virls", "virtu", "visas", "vised", "vises", "visie", "visne", "vison", "visto", "vitae", "vitas", "vitex", "vitro", "vitta", "vivas", "vivat", "vivda", "viver", "vives", "vizir", "vizor", "vleis", "vlies", "vlogs", "voars", "vocab", "voces", "voddy", "vodou", "vodun", "voema", "vogie", "voids", "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volks", "volta", "volte", "volti", "volts", "volva", "volve", "vomer", "voted", "votes", "vouge", "voulu", "vowed", "vower", "voxel", "vozhd", "vraic", "vrils", "vroom", "vrous", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva", "vutty", "waacs", "wacke", "wacko", "wacks", "wadds", "waddy", "waded", "wader", "wades", "wadge", "wadis", "wadts", "waffs", "wafts", "waged", "wages", "wagga", "wagyu", "wahoo", "waide", "waifs", "waift", "wails", "wains", "wairs", "waite", "waits", "wakas", "waked", "waken", "waker", "wakes", "wakfs", "waldo", "walds", "waled", "waler", "wales", "walie", "walis", "walks", "walla", "walls", "wally", "walty", "wamed", "wames", "wamus", "wands", "waned", "wanes", "waney", "wangs", "wanks", "wanky", "wanle", "wanly", "wanna", "wants", "wanty", "wanze", "waqfs", "warbs", "warby", "wards", "wared", "wares", "warez", "warks", "warms", "warns", "warps", "warre", "warst", "warts", "wases", "washy", "wasms", "wasps", "waspy", "wasts", "watap", "watts", "wauff", "waugh", "wauks", "waulk", "wauls", "waurs", "waved", "waves", "wavey", "wawas", "wawes", "wawls", "waxed", "waxer", "waxes", "wayed", "wazir", "wazoo", "weald", "weals", "weamb", "weans", "wears", "webby", "weber", "wecht", "wedel", "wedgy", "weeds", "weeke", "weeks", "weels", "weems", "weens", "weeny", "weeps", "weepy", "weest", "weete", "weets", "wefte", "wefts", "weids", "weils", "weirs", "weise", "weize", "wekas", "welds", "welke", "welks", "welkt", "wells", "welly", "welts", "wembs", "wends", "wenge", "wenny", "wents", "weros", "wersh", "wests", "wetas", "wetly", "wexed", "wexes", "whamo", "whams", "whang", "whaps", "whare", "whata", "whats", "whaup", "whaur", "wheal", "whear", "wheen", "wheep", "wheft", "whelk", "whelm", "whens", "whets", "whews", "wheys", "whids", "whift", "whigs", "whilk", "whims", "whins", "whios", "whips", "whipt", "whirr", "whirs", "whish", "whiss", "whist", "whits", "whity", "whizz", "whomp", "whoof", "whoot", "whops", "whore", "whorl", "whort", "whoso", "whows", "whump", "whups", "whyda", "wicca", "wicks", "wicky", "widdy", "wides", "wiels", "wifed", "wifes", "wifey", "wifie", "wifty", "wigan", "wigga", "wiggy", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis", "wilja", "wills", "wilts", "wimps", "winds", "wined", "wines", "winey", "winge", "wings", "wingy", "winks", "winna", "winns", "winos", "winze", "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wirra", "wised", "wises", "wisha", "wisht", "wisps", "wists", "witan", "wited", "wites", "withe", "withs", "withy", "wived", "wiver", "wives", "wizen", "wizes", "woads", "woald", "wocks", "wodge", "woful", "wojus", "woker", "wokka", "wolds", "wolfs", "wolly", "wolve", "wombs", "womby", "womyn", "wonga", "wongi", "wonks", "wonky", "wonts", "woods", "wooed", "woofs", "woofy", "woold", "wools", "woons", "woops", "woopy", "woose", "woosh", "wootz", "words", "works", "worms", "wormy", "worts", "wowed", "wowee", "woxen", "wrang", "wraps", "wrapt", "wrast", "wrate", "wrawl", "wrens", "wrick", "wried", "wrier", "wries", "writs", "wroke", "wroot", "wroth", "wryer", "wuddy", "wudus", "wulls", "wurst", "wuses", "wushu", "wussy", "wuxia", "wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", "xerus", "xoana", "xrays", "xylan", "xylem", "xylic", "xylol", "xylyl", "xysti", "xysts", "yaars", "yabas", "yabba", "yabby", "yacca", "yacka", "yacks", "yaffs", "yager", "yages", "yagis", "yahoo", "yaird", "yakka", "yakow", "yales", "yamen", "yampy", "yamun", "yangs", "yanks", "yapok", "yapon", "yapps", "yappy", "yarak", "yarco", "yards", "yarer", "yarfa", "yarks", "yarns", "yarrs", "yarta", "yarto", "yates", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns", "yawny", "yawps", "ybore", "yclad", "ycled", "ycond", "ydrad", "ydred", "yeads", "yeahs", "yealm", "yeans", "yeard", "years", "yecch", "yechs", "yechy", "yedes", "yeeds", "yeesh", "yeggs", "yelks", "yells", "yelms", "yelps", "yelts", "yenta", "yente", "yerba", "yerds", "yerks", "yeses", "yesks", "yests", "yesty", "yetis", "yetts", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes", "yfere", "yiked", "yikes", "yills", "yince", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth", "yites", "yitie", "ylems", "ylike", "ylkes", "ymolt", "ympes", "yobbo", "yobby", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yoick", "yojan", "yoked", "yokel", "yoker", "yokes", "yokul", "yolks", "yolky", "yomim", "yomps", "yonic", "yonis", "yonks", "yoofs", "yoops", "yores", "yorks", "yorps", "youks", "yourn", "yours", "yourt", "youse", "yowed", "yowes", "yowie", "yowls", "yowza", "yrapt", "yrent", "yrivd", "yrneh", "ysame", "ytost", "yuans", "yucas", "yucca", "yucch", "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky", "yukos", "yulan", "yules", "yummo", "yummy", "yumps", "yupon", "yuppy", "yurta", "yurts", "yuzus", "zabra", "zacks", "zaida", "zaidy", "zaire", "zakat", "zaman", "zambo", "zamia", "zanja", "zante", "zanza", "zanze", "zappy", "zarfs", "zaris", "zatis", "zaxes", "zayin", "zazen", "zeals", "zebec", "zebub", "zebus", "zedas", "zeins", "zendo", "zerda", "zerks", "zeros", "zests", "zetas", "zexes", "zezes", "zhomo", "zibet", "ziffs", "zigan", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs", "zinco", "zincs", "zincy", "zineb", "zines", "zings", "zingy", "zinke", "zinky", "zippo", "zippy", "ziram", "zitis", "zizel", "zizit", "zlote", "zloty", "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zoism", "zoist", "zombi", "zonae", "zonda", "zoned", "zoner", "zones", "zonks", "zooea", "zooey", "zooid", "zooks", "zooms", "zoons", "zooty", "zoppa", "zoppo", "zoril", "zoris", "zorro", "zouks", "zowee", "zowie", "zulus", "zupan", "zupas", "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic"
];

const WORD_LENGTH = 5;
const CURRENT_VERSION = 1;
let targetWord;
let gameNumber;
let reloadPriorGuesses = false;
const secretAnimations = [
    {name: 'generateGif', func: generateGif},
    {name: 'colorBackground', func: colorBackground},
    {name: 'bounce', func: bounce},
    {name: 'blink', func: blink},
    {name: 'flipEachKey', func: flipEachKey},
    {name: 'multicolorKeyboard', func: multicolorKeyboard},
    {name: 'rotateTiles', func: rotateTiles},
];
const statHolder = {
    // store # of guesses for each game in the gamesPlayed
    gamesPlayed: [
        // {id: gameNumber,
        // datePlayed: new Date().toLocaleDateString(),
        // numGuesses: 3,
        // won: true,
        // word: targetWord,},
    ],
    lastPlayed: "",
    winStreak: 0,
    winStreakRecord: 0,
    nonWordGuesses: 0,
    dailySecretCount: 0,
    secretsFound: [],
};

const secretCodes = [
    {key: 'corns', sequence: [], func: corns},
    {key: 'ineedhelp', sequence: [], func: ineedhelp},
    {key: 'waves', sequence: [], func: waves},
    {key: 'crack', sequence: [], func: crack},
    {key: 'space', sequence: [], func: space},
    {key: 'davis', sequence: [], func: davis},
    {key: 'snowy', sequence: [], func: snowy},
    {key: 'arash', sequence: [], func: arash},
    {key: 'echos', sequence: [], func: echos},
    {key: 'flips', sequence: [], func: flips},
    {key: 'blurs', sequence: [], func: blurs},
    {key: 'chaos', sequence: [], func: chaos},
];

let version = JSON.parse(localStorage.getItem('version')) || 0;
if (+version !== CURRENT_VERSION) versionUpdate();

let priorGuesses = JSON.parse(localStorage.getItem('priorGuesses')) || [];
let dailySecretWords = [];
let dailySecretFound = JSON.parse(localStorage.getItem('dailySecretFound')) || false;
let gameOver = JSON.parse(localStorage.getItem('gameOver')) || false;

const stats = JSON.parse(localStorage.getItem('stats')) || statHolder;
if (!stats.dailySecretCount) stats.dailySecretCount = 0;
gameLoop();

function versionUpdate() {
    const modal = document.querySelector('#version-modal');
    const contentContainer = modal.querySelector('.modal-container');

    const title = document.createElement('div');
    title.classList.add('modal-announcement');
    title.innerText = 'SHMURDLE ALERT';

    const subtitle = document.createElement('div');
    subtitle.classList.add('modal-title');
    subtitle.innerText = 'Introducing: Daily Anomalies';

    const content1 = document.createElement('div');
    content1.classList.add('version-modal-content');
    content1.innerText = 'Certain words seem to be exhibiting unusual behaviour...';

    const grid = document.createElement('div');
    grid.classList.add('guess-grid');
    const word = 'WEIRD';
    for (let letter of word) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerText = letter;
        tile.style.animation = 'rotate 6000ms linear infinite'
        grid.appendChild(tile);
    }

    const content2 = document.createElement('div');
    content2.classList.add('version-modal-content');
    content2.innerText = 'See if you can identify these mischievous words each day. Be sure to report your findings back to headquarters.';

    contentContainer.appendChild(title);
    contentContainer.appendChild(subtitle);
    contentContainer.appendChild(content1);
    contentContainer.appendChild(grid);
    contentContainer.appendChild(content2);

    modal.classList.remove('hide');
    localStorage.setItem('version', JSON.stringify(CURRENT_VERSION));
}

function generateDailySecrets(num) {
    dailySecretWords = [];
    const offset = ((gameNumber - 2082) * num) % (targetWords.length-1);
    let index = offset;
    for (let i = 0; i < num; i++) {
        if (index >= targetWords.length - 1) index = 0;
        const wordToAdd = targetWords[index];
        const permanentSecretCodes = secretCodes.map(code => code.key);
        if (wordToAdd !== targetWord && !permanentSecretCodes.includes(wordToAdd)) {
            dailySecretWords.push(wordToAdd);
        }
        index++;
    }
    localStorage.setItem('dailySecretWords', JSON.stringify(dailySecretWords));
}

function resultsText() {
    const tiles = [...document.querySelectorAll('.tile')];
    const dark = '⬛'
    const green = '🟩'
    const yellow = '🟨'

    const grid = tiles.map(tile => {
        if (tile.classList.contains('correct')) return green;
        else if (tile.classList.contains('present')) return yellow;
        else return dark;
    })
    
    let result = `Shmurdle ${gameNumber} ${tiles.filter(t => t.dataset.letter).length / 5}/6\n\n`
    for (let i = 0; i < 6; i++) {
        result += grid.slice(i*5, i*5+5).join('') + "\n";
    }
    result.trim();
    if (dailySecretFound !== false) result += `\n⭐${dailySecretFound} Found!⭐`
    return result;
}

function copyToClipboard() {

    // if navigator.share API is supported and user device IS a mobile device:
    // use navigator.share: this will open up the mobile share options 
    if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) {
        navigator.share({
            title: `Shmurdle ${gameNumber}`,
            text: resultsText()
        }).then(() => {
            console.log('Thanks for sharing!');
        })
        .catch(console.error);
    }
    // otherwise just copy to clipboard:
    else {
        const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = resultsText();
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        makeAlert('Copied to Clipboard!')
    }
}

function populateStats() {
    const modal = document.querySelector('#stats-modal');
    const played = modal.querySelector('#played');
    const win_percent = modal.querySelector('#win_percent');
    const streak = modal.querySelector('#streak');
    const record = modal.querySelector('#record');
    const non_word_guesses = modal.querySelector('#non-word');
    const daily_secrets = modal.querySelector('#daily-secrets');
    const secrets_found = modal.querySelector('#secrets');
    const shareBtn = modal.querySelector('#share-btn');

    const bars = modal.querySelectorAll('.bar-bar');
    const lastGame = stats.gamesPlayed[stats.gamesPlayed.length - 1];
    let highestBar = 0.0001;
    bars.forEach(bar => {
        // set bar number to total num of games with that many guesses:
        const matchedGuessCount = stats.gamesPlayed.filter(g => {
            return g.numGuesses === +bar.dataset.count;
        }).length;
        bar.innerText = matchedGuessCount;
        bar.classList.remove('current');
        if (matchedGuessCount > highestBar) highestBar = matchedGuessCount;
        // turn the bar with the num guesses from the last game green:
        if (lastGame && lastGame.won && lastGame.numGuesses === +bar.dataset.count) {
            bar.classList.add('current')
        }
    })
    // set the length of the bar based on how many guesses:
    bars.forEach(bar => {
        const matchedGuessCount = stats.gamesPlayed.filter(g => {
            return g.numGuesses === +bar.dataset.count;
        }).length;
        
        if (matchedGuessCount > 0) {
            bar.style.width = `${matchedGuessCount / highestBar * 100}%`;
        }
    })

    played.innerText = stats.gamesPlayed.length;
    if (stats.gamesPlayed.length > 0) {
        win_percent.innerText = Math.round(stats.gamesPlayed.filter(g => g.won).length / stats.gamesPlayed.length * 100);
    }
    streak.innerText = stats.winStreak;
    record.innerText = stats.winStreakRecord;
    non_word_guesses.innerText = stats.nonWordGuesses;
    daily_secrets.innerText = stats.dailySecretCount;
    secrets_found.innerText = `${stats.secretsFound.length} / ${secretCodes.length}`;

    // only show bar highlight in green and share btn if the current game is over:
    if (!gameOver) {
        if (shareBtn) shareBtn.parentElement.style.display = 'none';
        bars.forEach(bar => bar.classList.remove('current'));
    }
    else shareBtn.parentElement.style.display = 'block';

    if (dailySecretFound !== false) {
        const foundSecretMsg = modal.querySelector('.found-secret-msg-container');
        foundSecretMsg.innerText = `⭐${dailySecretFound} Found⭐`;
        foundSecretMsg.style.display = 'block';
    }
}

function updateCountdown() {
    const countdown = document.querySelector('#countdown');
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0,0,0,0);

    const difference = tomorrow - now;
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    countdown.innerText = `${hours<10 ? 0 : ""}${hours}:${minutes<10 ? 0 : ""}${minutes}:${seconds<10 ? 0 : ""}${seconds}`;
}

// check if today is a different day than the lastDate stored in local storage
function newDay() {
    const today = new Date().toLocaleDateString();
    if (JSON.parse(localStorage.getItem('lastDate')) === today) return false;
    localStorage.setItem('lastDate', JSON.stringify(today));
    
    priorGuesses = [];
    localStorage.setItem('priorGuesses', JSON.stringify(priorGuesses));
    
    dailySecretFound = false;
    localStorage.setItem('dailySecretFound', JSON.stringify(dailySecretFound));
    
    gameOver = false;
    localStorage.setItem('gameOver', JSON.stringify(gameOver));

    return true;
}

function showStats() {
    const modal = document.querySelector('#stats-modal');
    modal.classList.toggle('hide');
}

// modal used to display secret content
function closeSecretModal() {
    const modal = document.querySelector('#crack-modal');
    modal.querySelectorAll('img').forEach(img => modal.removeChild(img));
    modal.querySelectorAll('div').forEach(div => {
        if (div.id !== 'secret-modal-close-btn') modal.removeChild(div);
    });
    // reset darkened background since for "crack" secret we dont want it dark
    modal.style.backgroundColor = 'transparent';
    modal.classList.remove('blur');
    modal.classList.toggle('hide');
}

// modal used to display new content due to updates/version changes:
function closeVersionModal() {
    const modal = document.querySelector('#version-modal');
    modal.querySelectorAll('div').forEach(div => div.remove());
    modal.classList.toggle('hide');
}

// reset body vertical height
// necessary for proper background sizing on mobile
function setBodyHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// main game loop
function gameLoop() {
    // arbitrary date by which to choose an index from the word array
    const startDate = new Date(1991, 0, 25);
    const now = Date.now();
    const daysPast = (now - startDate) / 1000 / 60 / 60 / 24;
    const index = Math.floor(daysPast % targetWords.length);
    gameNumber = index;
    targetWord = targetWords[index];

    // generate a list of daily words to use as "Anomaly" secrets:
    generateDailySecrets(50);
    localStorage.setItem('dailySecretWords', JSON.stringify(dailySecretWords));

    // resets body vertical height on resize
    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);

    const timer = setInterval(updateCountdown, 1000);

    const statsCloseBtn = document.querySelector('#stats-close-btn');
    const secretModalCloseBtn = document.querySelector('#secret-modal-close-btn');
    const versionModalCloseBtn = document.querySelector('#version-close-btn');
    const statsBtn = document.querySelector('.stats-btn');
    const shareBtn = document.querySelector('#share-btn');

    // initalize modal btn event listeners
    statsCloseBtn.addEventListener('click', showStats);
    secretModalCloseBtn.addEventListener('click', closeSecretModal);
    versionModalCloseBtn.addEventListener('click', closeVersionModal);
    statsBtn.addEventListener('click', showStats);
    shareBtn.addEventListener('click', copyToClipboard);
    
    // if it't not a new day, load the prior guesses in local storage
    if (!newDay()) {
        console.log('Loading previous guesses');
        reloadPriorGuesses = true;
        loadGuesses();
    }
    else {
        console.log('A brand new day!')
        reloadPriorGuesses = false;
    }
    populateStats()
    startInteraction();
}

// allow user to add letters and submit guesses
function startInteraction() {
    document.addEventListener('click', handleClick);
    document.addEventListener('click', captureKey);
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', captureKey);
    console.log('Starting User Interation');
}

// stop user from adding letters or submitting guesses
function stopInteraction() {
    document.removeEventListener('click', handleClick);
    document.removeEventListener('keydown', handleKeyPress);
    document.removeEventListener('keydown', handleKeyPress);
    document.removeEventListener('keydown', captureKey);
    console.log('Stopping User Interation');
}

// Fisher-Yates shuffle:
// not in use, just used to initially shuffle the words array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// load previous letters from local storage:
function loadGuesses() { 
    let tiles = [...document.querySelectorAll('.tile')]
    let count = 0;
    console.log(priorGuesses)
    priorGuesses.forEach(guess => {
        for (let i = 0; i < guess.length; i++) {
            tiles[count].innerText = guess[i];
            tiles[count].dataset.letter = guess[i];
            count++;
        }
        checkGuess(tiles.slice(count-5, count), guess);
    })
}

// used to capture key sequences for the secret codes:
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        submitGuess();
    }
    else if (e.key === 'Backspace' || e.key === 'Delete') {
        deleteLetter();
    }
    else {
        const char = e.key.toUpperCase();
        const regex = new RegExp('^[a-z]$', 'i');
        if (char.match(regex)) addLetter(char);
    }
}

function handleClick(e) {
    const key = e.target.dataset.key;
    if (key === undefined) return;
    else if (key === 'Enter') {
        submitGuess();
    }
    else if (key === 'Delete') {
        deleteLetter();
    }
    else {
        addLetter(key);
    }
}

function addLetter(letter) {
    const guessGrid = document.querySelector('.guess-grid');
    // grab all the tiles with an active class:
    const activeTiles = guessGrid.querySelectorAll('.active');
    // only add a letter if there are less than WORD_LENGTH letters added:
    if (activeTiles.length >= WORD_LENGTH) return;
    // grab the first tile that doesn't have a letter assigned to it:
    const tile = guessGrid.querySelector(':not([data-letter])');
    tile.innerText = letter;
    tile.dataset.letter = letter;
    tile.classList.add('active');
    animateNewTile(tile);
}

function animateNewTile(tile) {
    tile.classList.add('new');
    tile.addEventListener('animationend', () => {
        tile.classList.remove('new');
    })
}

function deleteLetter() {
    const guessGrid = document.querySelector('.guess-grid');
    const activeTiles = guessGrid.querySelectorAll('.active');
    const lastActive = activeTiles[activeTiles.length-1];
    if (lastActive === undefined) return;
    lastActive.innerText = "";
    delete lastActive.dataset.letter;
    lastActive.classList.remove('active');
}

// for guesses that are not a word or wrong number of letters
function shakeTiles(tiles) {
    tiles.forEach(tile => {
        tile.classList.add('shake');
        tile.addEventListener('animationend', () => {
            tile.classList.remove('shake');
        });
    })   
}

// bouncing animation for win:
function victoryDance(tiles) {
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('dance');
            tile.addEventListener('animationend', () => {
                tile.classList.remove('dance');
            });
        }, index * 500/5);
    })   
}

function submitGuess() {
    const guessGrid = document.querySelector('.guess-grid');
    const activeTiles = guessGrid.querySelectorAll('.active');
    let guess = "";
    activeTiles.forEach(tile => guess += tile.innerText.toLowerCase());

    if (guess.length !== WORD_LENGTH) {
        makeAlert('Not enough letters');
        console.log("Dude that's not even enough letters.")
        const blanks = [...guessGrid.querySelectorAll(':not([data-letter])')];
        const tilesToShake = [...activeTiles, ...blanks.slice(0, WORD_LENGTH - activeTiles.length)]
        shakeTiles(tilesToShake);
    }
    else if (!guessWords.includes(guess) && !targetWords.includes(guess)){
        makeAlert('Not in word list');
        console.log("You can't just make shit up...")
        shakeTiles(activeTiles);
        stats.nonWordGuesses++;
        localStorage.setItem('stats', JSON.stringify(stats));
        populateStats();
    }
    else {
        priorGuesses.push(guess);
        localStorage.setItem('priorGuesses', JSON.stringify(priorGuesses));    
        checkGuess(activeTiles, guess);
    }
}

function flipTile(tile, index, duration) {
    setTimeout(() => {
        tile.classList.add('flip');
    }, index * duration);
}

function checkGuess(activeTiles, guess) {
    stopInteraction();
    for (let i = 0; i < activeTiles.length; i++) {
        flipTile(activeTiles[i], i, 250);
        
        activeTiles[i].addEventListener('transitionend', () => {
            activeTiles[i].classList.remove('flip');

            if (guess[i] === targetWord[i]) {
                activeTiles[i].classList.add('correct');
            }
            else if (targetWord.includes(guess[i])) {
                activeTiles[i].classList.add('present')
            }
            else {
                activeTiles[i].classList.add('absent')
            }

            activeTiles[i].classList.remove('active')
            if (i === activeTiles.length - 1) {
                activeTiles[i].addEventListener('transitionend', doneFlip, false);
                activeTiles[i].guess = guess;
                activeTiles[i].activeTiles = [...activeTiles];
            }
        });
    }
}

function doneFlip(e) {
    const guess = e.currentTarget.guess;
    const activeTiles = e.currentTarget.activeTiles;
    updateKeyboard(guess);
    startInteraction();
    const win = checkWin(guess,activeTiles);
    if (win === true) {
        victoryDance(activeTiles);
    }
}

function checkWin(guess) {
    const guessGrid = document.querySelector('.guess-grid');
    const totalLetters = guessGrid.querySelectorAll('[data-letter]').length;
    if (guess === targetWord) {
        stopInteraction();
        if (totalLetters <= 5) makeAlert("One guess?? Are ye the Devil?", 3000);
        else if (totalLetters <= 10) makeAlert("2 guesses?? Highly suspicious but congrats.", 3000);
        else if (totalLetters <= 15) makeAlert("Incredible!", 3000);
        else if (totalLetters <= 20) makeAlert("Great!", 3000);
        else makeAlert("Not bad!", 3000);

        // update localStorage:
        if (!stats.gamesPlayed.find(game => game.id === gameNumber)) {
            stats.gamesPlayed.push({
                id: gameNumber,
                datePlayed: new Date().toLocaleDateString(),
                numGuesses: Math.floor(totalLetters / WORD_LENGTH),
                won: true,
                word: targetWord,
            })
            stats.lastPlayed = new Date().toLocaleDateString();
            stats.winStreak++;
            stats.winStreakRecord = stats.winStreak > stats.winStreakRecord ? stats.winStreak : stats.winStreakRecord;
            localStorage.setItem('stats', JSON.stringify(stats));
        }
        gameOver = true;
        localStorage.setItem('gameOver', JSON.stringify(gameOver));    
        populateStats();
        setTimeout(showStats, 1000);
        return true;
    }
    else if (guess !== targetWord && totalLetters >= 30) {
        stopInteraction();

        // update localStorage:
        if (!stats.gamesPlayed.find(game => game.id === gameNumber)) {
            stats.gamesPlayed.push({
                id: gameNumber,
                datePlayed: new Date().toLocaleDateString(),
                numGuesses: Math.floor(totalLetters / WORD_LENGTH),
                won: false,
                word: targetWord,
            })
            stats.lastPlayed = new Date().toLocaleDateString();
            stats.winStreak = 0;
            localStorage.setItem('stats', JSON.stringify(stats));
        }

        if (guess === priorGuesses[priorGuesses.length - 1]) {
            makeAlert(`Today's word was: ${targetWord.toUpperCase()}`)
            console.log("No dice.  Maybe you should give this a quick read: \n https://www.amazon.ca/Oxford-Dictionary-English-Dictionaries/dp/0199571120");
            setTimeout(showStats, 1000);
        }

        gameOver = true;
        localStorage.setItem('gameOver', JSON.stringify(gameOver)); 
        populateStats();
    }
    return false;
}

function updateKeyboard(guess) {
    const keys = [...document.querySelectorAll('.key')];
    for (let i = 0; i < guess.length; i++) {
        const key = keys.find(key => key.dataset.key === guess[i].toUpperCase());
        if (guess[i] === targetWord[i]) {
            key.classList.add('correct');
            key.dataset.index = i;
        }
        else if (targetWord.includes(guess[i])) {
            key.classList.add('present');
        }
        else {
            key.classList.add('absent');
        }
    }
}

function makeAlert(content, duration = 1000) {
    const alertContainer = document.querySelector('.alert-container');
    const newAlert = document.createElement('div');
    newAlert.classList.add('alert');
    newAlert.innerText = content;
    alertContainer.append(newAlert);
    newAlert.addEventListener('transitionend', () => {
        newAlert.remove();
    })
    setTimeout(() => {
        newAlert.classList.add('hide')
    }, duration)
}

function captureKey(e) {
    let key;
    if (e.type === 'click') {
        key = e.target.dataset.key;
        if (e.target.dataset.key === undefined) return
    }
    else key = e.key;
    if (key !== 'Enter') {
        checkSecretCodes(secretCodes, key);
    }
}

function checkSecretCodes(secretCodesArray, char) {
    for (let secretCode of secretCodesArray) {
        const regex = new RegExp('^[a-z]$', 'i');
        if (char.match(regex)) secretCode.sequence.push(char.toLowerCase());
        if (char === 'Backspace' || char === 'Delete') secretCode.sequence.pop();

        if (secretCode.sequence.length > secretCode.key.length) secretCode.sequence.splice(0,1);
        
        if (secretCode.sequence.join('') === secretCode.key) {
            makeAlert('Secret Found!', 2000);
            clearImages();
            secretCode.func();
            if (!stats.secretsFound.includes(secretCode.key)) {
                stats.secretsFound.push(secretCode.key);
                localStorage.setItem('stats', JSON.stringify(stats));
            }
            dailySecretFound = 'Secret';
            localStorage.setItem('dailySecretFound', JSON.stringify(dailySecretFound));
            populateStats();
            return;
        }
        // for testing purposes
        if (secretCode.sequence.join('') === 'xxxxx') {
            generateGif('covid');
            return;
        }
        for (let word of dailySecretWords) {
            if (secretCode.sequence.join('') === word) {
                makeAlert('Daily Anomaly Found!', 2000);
        
                const randomIndex = Math.floor(Math.random() * secretAnimations.length);
                if (secretAnimations[randomIndex].name === 'generateGif') generateGif(word);
                else if (secretAnimations[randomIndex].name === 'blink') {
                    let count = 0;
                    const interval = setInterval(() => {
                        blink();
                        if (++count >= 2) window.clearInterval(interval);

                    }, 500);
                }
                else secretAnimations[randomIndex].func();

                dailySecretFound = 'Anomaly';
                localStorage.setItem('dailySecretFound', JSON.stringify(dailySecretFound));
                stats.dailySecretCount ? stats.dailySecretCount++ : stats.dailySecretCount = 1;
                localStorage.setItem('stats', JSON.stringify(stats));
                populateStats();
                return;
            }
        }
    }
}

function clearImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => img.remove());
}

function corns() {
    console.log('YOU HORNY?!?');

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            cornify_add();
            if (i === 34) {
                setTimeout(() => {
                    document.querySelectorAll('.__cornify_unicorn').forEach(el => el.remove());
                    document.querySelector('#__cornify_count').remove()
                },1500);
            }
        }, i*150);
    }
    // cornify_add(); // adds a unicorn from inbedded cornify site (see script tag above)
}

function ineedhelp() {
    const keyboard = document.querySelector('.keyboard');
    const keys = [...keyboard.querySelectorAll('.key')];
    const correctKeys = keys.filter(key => key.classList.contains('correct'));
    const presentKeys = keys.filter(key => key.classList.contains('present'));
    const absentKeys = keys.filter(key => key.classList.contains('absent'));
    const possibleWords = targetWords.filter(word => {
        for (let key of correctKeys) {
            if (word[key.dataset.index] !== key.innerText.toLowerCase()) return false;
        }
        for (let key of presentKeys) {
            const letter = key.innerText.toLowerCase();
            if (!word.includes(letter)) return false;
        }
        for (let key of absentKeys) {
            const letter = key.innerText.toLowerCase();
            if (word.includes(letter)) return false;
        }
        return true;
    });
    const possibleWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    makeAlert(`Try: ${possibleWord}`);
    for (let i = 0; i < 5; i++) deleteLetter();
    for (let letter of possibleWord) {
        addLetter(letter);
    }
}

function waves() {
    const keyboard = document.querySelector('.keyboard');
    const keys = keyboard.querySelectorAll('.key');
    keys.forEach(key => {
        key.style.backgroundColor = 'transparent';
        key.style.backgroundImage = 'url(./images/water.png)';
        key.style.backgroundSize = 'cover';
        // if (key.classList.contains("absent")) key.style.color = 'hsl(240,2%,23%)';
        // if (key.classList.contains("present")) key.style.color = 'hsl(49,51%,47%)';
        // if (key.classList.contains("correct")) key.style.color = 'hsl(115,29%,43%)';
        key.style.fontWeight = 'bold'
    });
    victoryDance(keys);
}

function crack() {
    const modal = document.querySelector('#crack-modal');
    
    const crack1 = document.createElement('img');
    crack1.setAttribute('src', './images/crack.png');
    crack1.id = 'crack1'
    
    const crack2 = document.createElement('img');
    crack2.setAttribute('src', './images/crack2.png');
    crack2.id = 'crack2';

    modal.appendChild(crack1);
    modal.appendChild(crack2);

    modal.classList.toggle('hide');
}

function space() {
    const body = document.querySelector('body');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    body.style.backgroundImage = 'url("./images/space-desktop.jpg")';

    const astronaut = document.createElement('img');
    astronaut.classList.add('astro');
    astronaut.setAttribute('src', './images/astronaut.png');
    document.body.appendChild(astronaut);
    astronaut.addEventListener('animationend', () => {
        document.body.removeChild(astronaut);
    });

    const secretDiv = document.querySelector('.secret-div');
    secretDiv.innerHTML = 'You may find <a href="http://project-red-rover.herokuapp.com">PROJECT RED ROVER</a> interesting...'
}

function davis() {
    const modal = document.querySelector('#crack-modal');
    modal.classList.toggle('hide');

    const wanted = document.createElement('img');
    wanted.classList.add('wanted');
    wanted.setAttribute('src', './images/davis.png');
    wanted.addEventListener('click', closeSecretModal);
    modal.appendChild(wanted);
}

function snowy() {
    const body = document.querySelector('body');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        body.style.backgroundImage = 'url("./images/snowy-mobile.jpg")';
    }
    else body.style.backgroundImage = 'url("./images/snowy.jpg")';

    setInterval(() => {
        const flake = document.createElement('img');
        flake.classList.add('snowflake');
        flake.setAttribute('src', './images/snowflake.png');
        flake.style.left = `${Math.random() * vw}px`;
        flake.style.animation = `fall ${Math.random() * (40-20+1) + 20}s linear`
        body.appendChild(flake);
        flake.addEventListener('animationend', () => {
            body.removeChild(flake);
        });
    }, 1000)
}

function arash() {
    const modal = document.querySelector('#crack-modal');
    modal.classList.toggle('hide');

    const arash = document.createElement('img');
    arash.classList.add('wanted');
    arash.setAttribute('src', './images/arash.jpg');
    arash.addEventListener('click', closeSecretModal);
    modal.appendChild(arash);

    const text = document.createElement('div');
    text.classList.add('text-overlay');
    text.innerText = 'HAPPY BIRTHDAY!';
    text.style.animation = 'dance 500ms ease-in-out';
    modal.appendChild(text);
}

function generateGif(word) {
    const modal = document.querySelector('#crack-modal');

    const api = 'http://api.giphy.com/v1/gifs/search?';
    const key = '&api_key=dFRvVTlP2eISiJSn087SVBpGpDNbWNPg';
    const query = `&q=${word}`;
    const url = api + key + query;
    
    fetch(url)
        .then(response => response.json())
        .then(giphy => {
            const rand = Math.floor(Math.random() * (giphy.data.length));  // giphy API returns an array of results, choose a random one
            if (giphy.data[rand].images.original.url !== '') {
                makeAlert(`Generating Random Gif for ${word.toUpperCase()}...`, 3000);
                
                const gif = document.createElement('img');
                gif.setAttribute('src', giphy.data[rand].images.original.url);
                gif.classList.add('gif');
                gif.addEventListener('click', closeSecretModal);

                modal.appendChild(gif);
                modal.classList.toggle('hide');
                modal.style.backgroundColor= 'rgba(0,0,0,0.4)';
                return;
            }
            else {
                generateGif(word);
            }
        })
}

function echos() {
    let count = 0;
    const interval = setInterval(() => {
        let msg = 'ECHO!';
        for (let i = 0; i < count; i++) {
            msg = '(' + msg + ')'
        }
        makeAlert(msg, 3000);
        if (++count >= 5) window.clearInterval(interval);
    }, 500)
}

function flips() {
    document.body.style.transform = 'rotateY(180deg)';
}

function chaos() {
    const keys = document.querySelectorAll('.key');
    const spacers = document.querySelectorAll('.spacer');
    const title = document.querySelector('.title');
    title.style.animation = 'multicolor 5000ms infinite alternate';
    spacers.forEach(spacer => spacer.remove());
    keys.forEach(key => {
        rand = Math.floor(Math.random() * keys.length-1);
        key.style.order = rand;
        rand = Math.floor(Math.random() * (6000 - 3000) + 3000);
        key.style.animation = `multicolor-bg ${rand}ms infinite alternate`;
    });
}

function blurs() {
    modal = document.querySelector('#crack-modal')
    modal.classList.remove('hide');
    modal.classList.add('blur');
}

function multicolorKeyboard() {
    const keys = document.querySelectorAll('.key');
    const tiles = document.querySelectorAll('.tile');
    keys.forEach(key => {
        const hue = Math.floor(Math.random() * (360-150) + 150);
        const sat = Math.floor(Math.random() * (100 - 60) + 60);
        const brightness = Math.floor(Math.random() * (50 - 10) + 10);
        key.style.backgroundColor = `hsl(
            var(--hue, ${hue}), 
            var(--saturation, ${sat}%), 
            calc(var(--lightness-offset, 0%) + var(--lightness, ${brightness}%))
        `
    });
    tiles.forEach(tile => {
        const hue = Math.floor(Math.random() * (360-150) + 150);
        const sat = Math.floor(Math.random() * (100 - 60) + 60);
        const brightness = Math.floor(Math.random() * (50 - 10) + 10);
        tile.style.backgroundColor = `hsl(
            var(--hue, ${hue}), 
            var(--saturation, ${sat}%), 
            calc(var(--lightness-offset, 0%) + var(--lightness, ${brightness}%))
        `
    });
}

function flipEachKey() {
    // debugger
    const keys = document.querySelectorAll('.key');
    stopInteraction();

    for (let i = 0; i < keys.length; i++) {
        flipTile(keys[i], i, 100);
        keys[i].addEventListener('transitionend', () => {
            keys[i].classList.remove('flip');
            if (i === keys.length - 1) {
                keys[i].addEventListener('transitionend', () => {
                    startInteraction();
                });
            }
        });
    }
}

function blink() {
    const keys = document.querySelectorAll('.key');
    
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.add('flip');
        keys[i].addEventListener('transitionend', () => {
            keys[i].classList.remove('flip');
        });
    }
}

function bounce() {
    const keys = document.querySelectorAll('.key');
    const tiles = document.querySelectorAll('.tile');
    victoryDance(keys);
    victoryDance(tiles);
}

function colorBackground() {
    document.body.style.animation = `multicolor-bg 50000ms infinite alternate`;
    setTimeout(() => {
        document.body.style.animation = "";
    },15000);
}

function rotateTiles() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.style.animation = 'rotate 1000ms linear';
        setTimeout(() => {
            tile.style.animation = "";
        },2000)
    });

    
}


