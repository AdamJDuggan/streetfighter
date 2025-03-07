const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const FIGHTERS = {
  2: {
    name: "Luke",
    style: "allaround",
    country: "USA",
    strength: 3,
  },
  1: {
    name: "Ryu",
    style: "allaround",
    country: "JPN",
    strength: 8,
  },
  10: {
    name: "Dhalsim",
    style: "zoning",
    country: "IND",
    strength: 5,
  },
  5: { name: "Guile", style: "zoning", country: "USA", strength: 7 },
  15: { name: "JP", style: "zoning", country: "RUS", strength: 6 },
  18: {
    name: "Cammy",
    style: "rushdown",
    country: "GBR",
    strength: 9,
  },
  7: { name: "Juri", style: "rushdown", country: "JPN", strength: 5 },
  8: { name: "Ken", style: "rushdown", country: "USA", strength: 5 },
  19: {
    name: "Rashid",
    style: "rushdown",
    country: "SAU",
    strength: 3,
  },
  9: {
    name: "Blanka",
    style: "tricky",
    country: "BRA",
    strength: 7,
  },
  12: {
    name: "Dee Jay",
    style: "tricky",
    country: "JAM",
    strength: 1,
  },
  6: {
    name: "Kimberly",
    style: "tricky",
    country: "USA",
    strength: 3,
  },
  4: {
    name: "Chun-Li",
    style: "footsies",
    country: "CHN",
    strength: 10,
  },
  3: {
    name: "Jamie",
    style: "footsies",
    country: "HKG",
    strength: 1,
  },
  17: {
    name: "Lily",
    style: "grappler",
    country: "MEX",
    strength: 2,
  },
  13: {
    name: "Manon",
    style: "grappler",
    country: "FRA",
    strength: 9,
  },
  16: {
    name: "Zangief",
    style: "grappler",
    country: "RUS",
    strength: 7,
  },
  11: {
    name: "E. Honda",
    style: "brawler",
    country: "JPN",
    strength: 8,
  },
  14: {
    name: "Marisa",
    style: "brawler",
    country: "ITA",
    strength: 7,
  },
  20: {
    name: "AKI",
    style: "tricky",
    country: "CHN",
    strength: 7,
  },
};

const fighters = Object.entries(FIGHTERS).map(([id, fighter]) => {
  const { name, style, country } = fighter;
  return { id, name, style, country };
});

async function seedFighters() {
  for (const fighter of fighters) {
    await prisma.fighter.create({
      data: fighter,
    });
  }
}

seedFighters()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
