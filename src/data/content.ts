export interface Charm {
  id: string;
  slug: string;
  name: string;
  origin: string;
  description: string;
  howToUse: string;
  culturalSignificance: string;
  image: string;
}

export interface Ritual {
  id: string;
  slug: string;
  name: string;
  region: 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Global';
  description: string;
  steps: string[];
  significance: string;
  image: string;
}

export interface NumberSuperstition {
  number: string;
  status: 'Lucky' | 'Unlucky' | 'Neutral';
  culture: string;
  meaning: string;
  origin: string;
}

export const CHARMS: Charm[] = [
  {
    id: '1',
    slug: 'rabbits-foot',
    name: "Rabbit's Foot",
    origin: "Western / Celtic",
    description: "One of the most iconic lucky charms in the Western world, the rabbit's foot has been carried by gamblers for centuries.",
    howToUse: "Keep it in your left pocket while playing cards or slots. Some say rubbing it before a big bet increases the odds.",
    culturalSignificance: "Rooted in ancient Celtic beliefs that rabbits, being burrowing animals, could communicate with spirits of the underworld.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    slug: 'four-leaf-clover',
    name: "Four-Leaf Clover",
    origin: "Irish / Celtic",
    description: "Finding a four-leaf clover is a rare event, making it a powerful symbol of good fortune.",
    howToUse: "Traditionally pressed into a wallet or worn as a pendant. Gamblers often look for clover motifs on slot machines.",
    culturalSignificance: "Each leaf represents something: faith, hope, love, and luck. It's a cornerstone of Irish folklore.",
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c91d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    slug: 'maneki-neko',
    name: "Maneki-neko",
    origin: "Japanese",
    description: "The 'Beckoning Cat' is a common sight in casinos and businesses, believed to bring in customers and wealth.",
    howToUse: "Place a small figurine facing the entrance of your home or keep a charm on your person while gambling.",
    culturalSignificance: "Legend tells of a cat that saved a wealthy feudal lord from a lightning strike by beckoning him into a temple.",
    image: "https://images.unsplash.com/photo-1578466601490-484732688770?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '4',
    slug: 'evil-eye',
    name: "Evil Eye (Nazar)",
    origin: "Mediterranean / Middle Eastern",
    description: "The Nazar eye is used to ward off the 'evil eye'—the jealous glares of others that might steal your luck.",
    howToUse: "Wear it as jewelry or keep a glass bead in your pocket to protect your winning streak from envious eyes.",
    culturalSignificance: "A cross-cultural symbol found throughout Greece, Turkey, and the Middle East for thousands of years.",
    image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '5',
    slug: 'jade-pendant',
    name: "Jade Pendant",
    origin: "Chinese",
    description: "Jade is considered more valuable than gold in many Asian cultures, symbolizing purity, protection, and luck.",
    howToUse: "Worn close to the skin. Many high rollers in Macau wouldn't dream of entering a casino without their jade.",
    culturalSignificance: "Known as the 'Stone of Heaven,' it's believed to protect the wearer and attract prosperity.",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=800"
  }
];

export const RITUALS: Ritual[] = [
  {
    id: '1',
    slug: 'blowing-on-dice',
    name: "Blowing on Dice",
    region: "Global",
    description: "The most famous craps ritual, where a player or a 'lucky' companion blows on the dice before they are thrown.",
    steps: [
      "Hold the dice in your cupped hands.",
      "Take a deep breath.",
      "Gently blow your 'luck' onto the dice.",
      "Throw with confidence."
    ],
    significance: "Believed to transfer the player's energy and desire for a specific outcome into the dice themselves.",
    image: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    slug: 'knocking-on-table',
    name: "Knocking on the Table",
    region: "Asia",
    description: "In many Asian baccarat rooms, players will rhythmically tap or knock on the table as the cards are dealt.",
    steps: [
      "Wait for the dealer to begin the deal.",
      "Use your knuckles to tap the table edge twice.",
      "Focus your mind on the 'Banker' or 'Player' win."
    ],
    significance: "A way to 'wake up' the luck of the table and signal to the spirits that you are ready to win.",
    image: "https://images.unsplash.com/photo-1596838132731-dd9d5900f10a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    slug: 'lucky-socks',
    name: "The Lucky Socks",
    region: "Global",
    description: "Many professional gamblers have a specific pair of socks they wear only during major tournaments or big sessions.",
    steps: [
      "Identify a pair of socks worn during a previous big win.",
      "Wash them only when absolutely necessary (some say never!).",
      "Put them on as the final piece of your gambling outfit."
    ],
    significance: "Psychological anchoring—wearing the socks recreates the mindset of a previous success.",
    image: "https://images.unsplash.com/photo-1582966298601-827445def7ad?auto=format&fit=crop&q=80&w=800"
  }
];

export const NUMBERS: NumberSuperstition[] = [
  {
    number: '7',
    status: 'Lucky',
    culture: 'Western',
    meaning: 'The ultimate lucky number, appearing in slot machines and craps as a winner.',
    origin: 'Biblical references to the seven days of creation and the seven heavens.'
  },
  {
    number: '8',
    status: 'Lucky',
    culture: 'Chinese',
    meaning: 'The word for eight (bā) sounds like the word for prosperity or wealth (fā).',
    origin: 'Deeply rooted in Chinese numerology and linguistics.'
  },
  {
    number: '13',
    status: 'Unlucky',
    culture: 'Western',
    meaning: 'Associated with bad luck; many casinos skip the 13th floor or table 13.',
    origin: 'Often linked to the 13 guests at the Last Supper.'
  },
  {
    number: '4',
    status: 'Unlucky',
    culture: 'East Asian',
    meaning: 'The word for four sounds like the word for death in Chinese, Japanese, and Korean.',
    origin: 'Linguistic homophone that has created a widespread phobia (tetraphobia).'
  }
];

export const DOS_AND_DONTS = [
  {
    title: "Never say 'Seven' at a Craps Table",
    type: "Don't",
    description: "Once the point is established, saying the word 'seven' is considered a massive jinx that will cause the shooter to crap out.",
    tip: "Refer to it as 'the other number' or 'Big Red' if you must."
  },
  {
    title: "Don't Count Your Money at the Table",
    type: "Don't",
    description: "As the song goes, 'you never count your money while you're sittin' at the table.' It's considered bad luck and poor etiquette.",
    tip: "Wait until you've colored out and walked away from the pit."
  },
  {
    title: "Always Tip Your Dealer",
    type: "Do",
    description: "Good karma is real. Tipping the dealer (or 'toking') is believed to keep the luck flowing your way.",
    tip: "You can place a small bet for the dealer alongside your own."
  }
];
