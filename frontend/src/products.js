const products = [
  {
    _id: "1",
    name: "Degreaser Cleaner",
    price: 140.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 15,
    description:
      "Removes oil and grease stains from food, feet, and sunscreen. Sold by the case (4 bottles).",
    image: "/images/degreaser_cleaner.jpg",
  },
  {
    _id: "2",
    name: "Peroxide Cleaner",
    price: 120.0,
    countInStock: 0,
    rating: 4,
    numReviews: 5,
    description:
      "Multi-purpose cleaner. Effectively removes grime and organic matter. Sold by the case (4 bottles).",
    image: "/images/peroxide_cleaner.jpg",
  },
  {
    _id: "3",
    name: "Mineral Deposit Remover",
    price: 140.0,
    countInStock: 10,
    rating: 3.5,
    numReviews: 25,
    description:
      "Effectively removes calcium, rust stains, lime, magnesium, and aluminum oxide.  Sold by the case (4 bottles).",
    image: "/images/mineral_deposit_remover.jpg",
  },
  {
    _id: "4",
    name: "Degreaser & Peroxide Combination",
    price: 130.0,
    countInStock: 10,
    rating: 4,
    numReviews: 4,
    description:
      "Includes 2 bottles of Degreaser Cleaner and 2 bottles of Peroxide Cleaner.",
    image: "/images/peroxide_degreaser.png",
  },
  {
    _id: "5",
    name: "Starter Combination",
    price: 150.0,
    countInStock: 10,
    rating: 2.5,
    numReviews: 8,
    description:
      "Includes 1 bottle of Degreaser Cleaner, 1 bottle of Peroxide Cleaner, 1 bottle of Mineral Deposit Remover and 1 Foamer Filler.",
    image: "/images/starter_combo.jpg",
  },
  {
    _id: "6",
    name: "Foamer Filler",
    price: 40.0,
    countInStock: 10,
    rating: 5,
    numReviews: 15,
    description:
      "An applicator that allows maintenance staff the ability to control the concentration of the Cleaner. Sold individually.",
    image: "/images/foamer_filler.jpg",
  },
  {
    _id: "7",
    name: "TurfScrub Floor Pad",
    price: 44.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 9,
    description:
      "The TurfScrub provides brush scrubbing action in a pad. Now there is no need for expensive brushes and the time consuming process of changing cumbersome brush driver blocks when you want to scrub uneven surfaces.",
    image: "/images/circle_pad.png",
    sizes: [13, 14, 17, 20],
  },
  // {
  //   _id: "8",
  //   name: "TurfScrub Floor Pad",
  //   price: 45.0,
  //   countInStock: 10,
  //   rating: 4.5,
  //   numReviews: 5,
  //   description:
  //     "The TurfScrub provides brush scrubbing action in a pad. Now there is no need for expensive brushes and the time consuming process of changing cumbersome brush driver blocks when you want to scrub uneven surfaces.",
  //   image: "/images/circle_pad.png",
  // },
  // {
  //   _id: "9",
  //   name: "TurfScrub Floor Pad",
  //   price: 51.0,
  //   countInStock: 10,
  //   rating: 3,
  //   numReviews: 25,
  //   description:
  //     "The TurfScrub provides brush scrubbing action in a pad. Now there is no need for expensive brushes and the time consuming process of changing cumbersome brush driver blocks when you want to scrub uneven surfaces.",
  //   image: "/images/circle_pad.png",
  // },
  // {
  //   _id: "10",
  //   name: "TurfScrub Floor Pad",
  //   price: 74.0,
  //   countInStock: 10,
  //   rating: 3.5,
  //   numReviews: 45,
  //   description:
  //     "The TurfScrub provides brush scrubbing action in a pad. Now there is no need for expensive brushes and the time consuming process of changing cumbersome brush driver blocks when you want to scrub uneven surfaces.",
  //   image: "/images/circle_pad.png",
  // },
  // {
  //   _id: "11",
  //   name: "TurfScrub Floor Pad",
  //   price: 48.0,
  //   countInStock: 10,
  //   rating: 4.5,
  //   numReviews: 2,
  //   description:
  //     "The TurfScrub provides brush scrubbing action in a pad. Now there is no need for expensive brushes and the time consuming process of changing cumbersome brush driver blocks when you want to scrub uneven surfaces.",
  //   image: "/images/floor_pad.png",
  // },
  {
    _id: "12",
    name: "TurfScrub Floor Pad",
    price: 62.0,
    countInStock: 10,
    rating: 5,
    numReviews: 5,
    description:
      "The TurfScrub provides brush scrubbing action in a pad. Now there is no need for expensive brushes and the time consuming process of changing cumbersome brush driver blocks when you want to scrub uneven surfaces.",
    image: "/images/floor_pad.png",
    sizes: ["12x18", "14x20"],
  },
  {
    _id: "13",
    name: "Trident FMD20 Orbital Floor Scrubber – 20″",
    price: 2369.0,
    countInStock: 10,
    rating: 4,
    numReviews: 4,
    description:
      "FMD20 Orbital is a new concept single disc machine that combines high performance and maneuverability. The oribtal action allows the operator to achieve better results in half the time when compared to a normal single disc machine.",
    image: "/images/orbital_floor_scrubber.jpg",
  },
  {
    _id: "14",
    name: "K’A’RCHER B40WBp Orbital Auto Scrubber – 20″",
    price: 7845.0,
    countInStock: 10,
    rating: 3.5,
    numReviews: 5,
    description:
      "This machine is easy to operate and provides cost savings. Top-scrubbing and re-coat programs was once a messy, multi-person job. This technology provides a green solution, using less chemicals, water, energy, and labor – all completed by one person.",
    image: "/images/orbital_auto_scrubber.jpg",
  },
  {
    _id: "15",
    name: "Trident WD21V Wet/Dry Vacuum",
    price: 885.0,
    countInStock: 10,
    rating: 2.5,
    numReviews: 8,
    description:
      "The WET or DRY technology allows to vacuum separately or simultaneously both liquids and debris, without the need to stop and change the filter. This technology helps to improve productivity, optimizing cleaning time.",
    image: "/images/wet_dry_vac.jpg",
  },
  {
    _id: "16",
    name: "Life Floor Landing Pads",
    price: "",
    countInStock: 10,
    rating: 4.5,
    numReviews: 7,
    description:
      "Life Floor landing pads are durable, hygenic, slip-resistant, cushioned and UV stable. They are available in 2′ square tiles (7/8″ thick) and can be customized to fits your needs, however, they are commonly sold and readily available in 4’x4′, 4’x6′, 4’x8′ and 6’x6′ layouts in the color Bluebird.",
    image: "/images/life_floor_landing_pads.jpg",
  },
];

export default products;
