const category = [
  {
    id: 1,
    name: "Dog",
    category_id: 'dog',
    link: "/pages/category/index.html?cat-id=dog",
  },
  {
    id: 2,
    name: "Cat",
    category_id: 'cat',
    link: "/pages/category/index.html?cat-id=cat",
  },
  {
    id: 3,
    name: "Small Pet",
    category_id: 'small_pet',
    link: "/pages/category/index.html?cat-id=small_pet",
  },
  {
    id: 4,
    name: "Feathered",
    category_id: 'feathered',
    link: "/pages/category/index.html?cat-id=feathered",
  },
  {
    id: 5,
    name: "Aquatic",
    category_id: 'aquatic',
    link: "/pages/category/index.html?cat-id=aquatic",
  },
];

const pageDetails = {
  dog: {
    title: "Dog Shop: Dog Supplies & Dog Accessories",
    description: `We offer a wide range of dog food and treats and dog accessories. Here you'll find all brands of <span class="highlight">dog food</span>, <span class="highlight">dog kennels</span>, <span class="highlight">dog beds</span>, <span class="highlight">dog leads</span>, <span class="highlight">dog training equipment</span>, and much more.`,
    link: "../../images/dog_banner.png",
  },
  cat: {
    title: "Cat Shop: Cat Supplies & Cat Accessories",
    description: ` We offer a wide range of cat food, treats, and accessories. Here you'll find all brands of <span class="highlight">cat food</span>, <span class="highlight">cat litter</span>, <span class="highlight">cat beds</span>, <span class="highlight">cat toys</span>, <span class="highlight">cat scratching posts</span>, and much more.`,
    link: "../../images/cat_banner.png",
  },
  small_pet: {
    title: "Small Pet Shop: Supplies & Accessories",
    description: `We offer a wide range of products for small pets. Shop <span class="highlight">small pet food</span>, <span class="highlight">cages and enclosures</span>, <span class="highlight">bedding</span>, <span class="highlight">toys</span>, and <span class="highlight">grooming essentials</span> to keep your small companions happy and healthy.`,
    link: "../../images/small_pet_banner.png",
  },
  feathered: {
    title: "Bird Shop: Bird Supplies & Accessories",
    description: `We offer a variety of products for your feathered friends. Explore our range of <span class="highlight">bird food</span>, <span class="highlight">bird cages</span>, <span class="highlight">perches</span>, <span class="highlight">toys for birds</span>, <span class="highlight">bird baths</span>, and much more to keep your pet birds healthy and happy.`,
    link: "../../images/feathered_banner.png",
  },
  aquatic: {
    title: "Aquatic Shop: Fish Supplies & Accessories",
    description: `Explore our wide selection of products for aquatic pets. From <span class="highlight">fish food</span> and <span class="highlight">aquariums</span> to <span class="highlight">filters</span>, <span class="highlight">water care</span>, and <span class="highlight">aquarium decorations</span>, we have everything you need to keep your underwater world thriving.`,
    link: "../../images/aquatic_banner.png",
  },
};

const subCategory = {
  dog: [
    {
      link: "/pages/products/index.html?sub-cat-id=Dry Dog Food&cat-id=dog",
      id: 1,
      img: "../../images/dog-category/Dry Dog Food.jpeg",
      name: "Dry Dog Food",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Wet Dog Food&cat-id=dog",
      id: 2,
      img: "../../images/dog-category/Wet Dog Food.jpeg",
      name: "Wet Dog Food",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Dog Treats&cat-id=dog",
      id: 3,
      img: "../../images/dog-category/Dog Treats.jpeg",
      name: "Dog Treats",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Dog Supplements&cat-id=dog",
      id: 4,
      img: "../../images/dog-category/Dog Supplements.jpeg",
      name: "Dog Supplements",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Dog Grooming&cat-id=dog",
      id: 5,
      img: "../../images/dog-category/Dog Grooming.jpeg",
      name: "Dog Grooming",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Dog Bowls&cat-id=dog",
      id: 6,
      img: "../../images/dog-category/Dog Bowls.jpeg",
      name: "Dog Bowls",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Dog Clothing&cat-id=dog",
      id: 7,
      img: "../../images/dog-category/Dog Clothing.jpeg",
      name: "Dog Clothing",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Dog Toys&cat-id=dog",
      id: 8,
      img: "../../images/dog-category/Dog Toys.jpeg",
      name: "Dog Toys",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Dog Crates&cat-id=dog",
      id: 9,
      img: "../../images/dog-category/Dog Crates.jpeg",
      name: "Dog Crates",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Dog Leads&cat-id=dog",
      id: 10,
      img: "../../images/dog-category/Dog Leads.jpeg",
      name: "Dog Leads",
    },
  ],
  cat: [
    {
      link: "/pages/products/index.html?sub-cat-id=Dry Cat Food&cat-id=cat",
      id: 1,
      img: "../../images/cat-category/Dry Cat Food.jpeg",
      name: "Dry Cat Food",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Wet Cat Food&cat-id=cat",
      id: 2,
      img: "../../images/cat-category/Wet Cat Food.jpeg",
      name: "Wet Cat Food",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Cat Treats&cat-id=cat",
      id: 3,
      img: "../../images/cat-category/Cat Treats.jpeg",
      name: "Cat Treats",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Cat Toys&cat-id=cat",
      id: 4,
      img: "../../images/cat-category/Cat Toys.jpeg",
      name: "Cat Toys",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Cat Beds&cat-id=cat",
      id: 5,
      img: "../../images/cat-category/Cat Beds.jpeg",
      name: "Cat Beds",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Cat Litter&cat-id=cat",
      id: 6,
      img: "../../images/cat-category/Cat Litter.jpeg",
      name: "Cat Litter",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Cat Grooming&cat-id=cat",
      id: 7,
      img: "../../images/cat-category/Cat Grooming.jpeg",
      name: "Cat Grooming",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Cat Health&cat-id=cat",
      id: 8,
      img: "../../images/cat-category/Cat Health.jpeg",
      name: "Cat Health",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Cat Scratchers&cat-id=cat",
      id: 9,
      img: "../../images/cat-category/Cat Scratchers.jpeg",
      name: "Cat Scratchers",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Cat Accessories&cat-id=cat",
      id: 10,
      img: "../../images/cat-category/Cat Accessories.jpeg",
      name: "Cat Accessories",
    },
  ],

  small_pet: [
    {
      link: "/pages/products/index.html?sub-cat-id=Small Pet Cages&cat-id=small_pet",
      id: 1,
      img: "../../images/small-pets-category/Small Pet Cages.jpeg",
      name: "Small Pet Cages",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Rabbit&cat-id=small_pet",
      id: 2,
      img: "../../images/small-pets-category/Rabbit.jpeg",
      name: "Rabbit",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Fencing for Small Pets&cat-id=small_pet",
      id: 3,
      img: "../../images/small-pets-category/Fencing for Small Pets.jpeg",
      name: "Fencing for Small Pets",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Small Pet Food&cat-id=small_pet",
      id: 4,
      img: "../../images/small-pets-category/Small Pet Food.jpeg",
      name: "Small Pet Food",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Cage Accessories&cat-id=small_pet",
      id: 5,
      img: "../../images/small-pets-category/Cage Accessories.jpeg",
      name: "Cage Accessories",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Snacks and Supplements&cat-id=small_pet",
      id: 6,
      img: "../../images/small-pets-category/Snacks and Supplements.jpeg",
      name: "Snacks and Supplements",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Hay and Straw&cat-id=small_pet",
      id: 7,
      img: "../../images/small-pets-category/Hay and Straw.jpeg",
      name: "Hay and Straw",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Small Pet Toys&cat-id=small_pet",
      id: 8,
      img: "../../images/small-pets-category/Small Pet Toys.jpeg",
      name: "Small Pet Toys",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Care and Grooming&cat-id=small_pet",
      id: 9,
      img: "../../images/small-pets-category/Care and Grooming.jpeg",
      name: "Care and Grooming",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Small Pet Special Offers&cat-id=small_pet",
      id: 10,
      img: "../../images/small-pets-category/Small Pet Special Offers.jpeg",
      name: "Small Pet Special Offers",
    },
  ],

  feathered: [
    {
      link: "/pages/products/index.html?sub-cat-id=Bird Foods&cat-id=feathered",
      id: 1,
      img: "../../images/bird-category/Bird Foods.jpeg",
      name: "Bird Foods",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Bird Cages&cat-id=feathered",
      id: 2,
      img: "../../images/bird-category/Bird Cages.jpeg",
      name: "Bird Cages",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Bird Cage Accessories&cat-id=feathered",
      id: 3,
      img: "../../images/bird-category/Bird Cage Accessories.jpeg",
      name: "Bird Cage Accessories",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Bird Snack&cat-id=feathered",
      id: 4,
      img: "../../images/bird-category/Bird Snacks.jpeg",
      name: "Bird Snacks",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Bird Toys&cat-id=feathered",
      id: 4,
      img: "../../images/bird-category/Bird Toys.jpeg",
      name: "Bird Toys",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Bird Health&cat-id=feathered",
      id: 6,
      img: "../../images/bird-category/Bird Health.jpeg",
      name: "Bird Health",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Bird Cage Bedding &cat-id=feathered",
      id: 7,
      img: "../../images/bird-category/Bird Cage Bedding.jpeg",
      name: "Bird Cage Bedding",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Wild Birds&cat-id=feathered",
      id: 8,
      img: "../../images/bird-category/Wild Birds.jpeg",
      name: "Wild Birds",
    },
    {
      link: "#",
      id: 9,
      img: "../../images/bird-category/Feeding Supplies.jpeg",
      name: "Feeding Supplies",
    },
    {
      link: "#",
      id: 10,
      img: "../../images/bird-category/Special Offers.jpeg",
      name: "Special Offers",
    },  
  ],

  aquatic: [
    {
      link: "/pages/products/index.html?sub-cat-id=Aquarium Sand&cat-id=aquatic",
      id: 1,
      img: "../../images/fish-category/Aquarium Sand.webp",
      name: "Aquarium Sand",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Fish Tanks&cat-id=aquatic",
      id: 2,
      img: "../../images/fish-category/Fish Tanks.jpg",
      name: "Fish Tanks",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Aquarium Filters&cat-id=aquatic",
      id: 3,
      img: "../../images/fish-category/Aquarium Filters.jpg",
      name: "Aquarium Filters",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Fish Food&cat-id=aquatic",
      id: 4,
      img: "../../images/fish-category/Fish Food.jpg",
      name: "Fish Food",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Aquarium Decorations&cat-id=aquatic",
      id: 5,
      img: "../../images/fish-category/Aquarium Decorations.jpg",
      name: "Aquarium Decorations",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Aquarium Lighting&cat-id=aquatic",
      id: 6,
      img: "../../images/fish-category/aquarium light.jpg",
      name: "Aquarium Lighting",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Fish Health&cat-id=aquatic",
      id: 7,
      img: "../../images/fish-category/Fish Health.jpg",
      name: "Fish Health",
    },
    {
      link: "/pages/products/index.html?sub-cat-id=Aquarium Maintenance&cat-id=aquatic",
      id: 8,
      img: "../../images/fish-category/Aquarium Maintenance.jpg",
      name: "Aquarium Maintenance",
    }
  ],


};
