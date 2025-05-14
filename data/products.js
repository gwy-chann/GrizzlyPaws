const products = [
  {
    id: 1,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 1 - Hill_s Prescription Diet/hillsPrescriptionDiet1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 1 - Hill_s Prescription Diet/hillsPrescriptionDiet2.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 1 - Hill_s Prescription Diet/hillsPrescriptionDiet3.jpg",
    ],
    name: "Hill's Prescription Diet Canine z/d Food Sensitivities",
    description:
      "Hill's Prescription Diet Canine z/d Food Sensitivities - Dietetic dry food for adult dogs with food allergies and intolerances, with a hypoallergenic recipe to help with dermatitis and hair loss, as well as reducing digestive upset.",
    variations: [
      { unit: "6kg", price: 3999 },
      { unit: "10kg", price: 5999 },
    ],
  },
  {
    id: 2,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 2 - Hill_s Prescription Diet Canine Metabolic/Hill_sPrescriptionDietCanineMetabolic1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 2 - Hill_s Prescription Diet Canine Metabolic/Hill_sPrescriptionDietCanineMetabolic2.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 2 - Hill_s Prescription Diet Canine Metabolic/Hill_sPrescriptionDietCanineMetabolic3.jpg",
    ],
    name: "Hill's Prescription Diet Canine Metabolic+Mobility Weight+Joint Care Chicken",
    description:
      "Specialist dry food for overweight dogs suffering from osteoarthritis. The clinically proven formula is filling yet lean and contains calcium, chondroitin & glucosamine for healthy bones & joints",
    variations: [
      {unit: "Prescription", price: 3199},
    ],
  },
  {
    id: 3,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 3 - Royal Canin Maxi Adult/RoyalCaninMaxiAdult1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 3 - Royal Canin Maxi Adult/RoyalCaninMaxiAdult2.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 3 - Royal Canin Maxi Adult/RoyalCaninMaxiAdult3.jpg",
    ],
    name: "Royal Canin Maxi Adult",
    description:
      "Balanced dry food for large breed adult dogs, designed to promote optimum digestion, a source of glucosamine and chondroitin, enriched with vitamin D and antioxidants, with a tailored kibble size",
    variations: [
      { unit: "6kg", price: 5000 },
      { unit: "10kg", price: 6500 },
    ],
  },
  {
    id: 4,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 4 - Royal Canin Medium Adult/RoyalCaninMediumAdult1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 4 - Royal Canin Medium Adult/RoyalCaninMediumAdult2.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 4 - Royal Canin Medium Adult/RoyalCaninMediumAdult3.jpg",
    ],
    name: "Royal Canin Medium Adult",
    description:
      "Balanced dry food for adult dogs of medium-sized breeds, provides high-quality proteins, highly-digestible ingredients, source of antioxidants, with a tailored kibble size.Balanced dry food for adult dogs of medium-sized breeds, provides high-quality proteins, highly-digestible ingredients, source of antioxidants, with a tailored kibble size.",
    variations: [
      { unit: "4kg", price: 799 },
      { unit: "10kg", price: 1200 },
      { unit: "15kg", price: 1999 },
    ],
  },
  {
    id: 5,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 5 - Hill_s Prescription Diet Canine i-d Digestive Care/Hill_sPrescriptionDietCanineDigestiveCare1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 5 - Hill_s Prescription Diet Canine i-d Digestive Care/Hill_sPrescriptionDietCanineDigestiveCare2.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 5 - Hill_s Prescription Diet Canine i-d Digestive Care/Hill_sPrescriptionDietCanineDigestiveCare3.jpg",
    ],
    name: "Hill's Prescription Diet Canine i/d Digestive Care - Chicken",
    description:
      "Highly-digestible dietetic complete food for dogs or puppies with gastrointestinal issues, helping to relieve acute resorption disruption and balance digestion, with a high electrolyte content.",
    variations: [
      { unit: "6kg", price: 1200 },
      { unit: "12kg", price: 1700 },
      { unit: "15kg", price: 1999 },
    ],
  },
  {
    id: 6,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 6 - Burns Adult & Senior Original Chicken & Brown Rice/BurnsAdult&SeniorOriginalChicken&BrownRice1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 6 - Burns Adult & Senior Original Chicken & Brown Rice/BurnsAdult&SeniorOriginalChicken&BrownRice2.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 6 - Burns Adult & Senior Original Chicken & Brown Rice/BurnsAdult&SeniorOriginalChicken&BrownRice3.jpg",
    ],
    name: "Burns Adult & Senior Original Chicken & Brown Rice",
    description:
      "Wheat-free dry food for adult & older dogs, low-fat recipe, without soy & dairy products, natural ingredients, high in fiber, valuable fatty acids, easily digestible, tasty.",
    variations: [
      { unit: "6kg", price: 799 },
      { unit: "12kg", price: 1200 },
      { unit: "16kg", price: 1999 },
    ],
  },
  {
    id: 7,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 7 - Royal Canin Veterinary Canine Hypoallergenic/RoyalCaninVeterinaryCanineHypoallergenic1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 7 - Royal Canin Veterinary Canine Hypoallergenic/RoyalCaninVeterinaryCanineHypoallergenic2.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 7 - Royal Canin Veterinary Canine Hypoallergenic/RoyalCaninVeterinaryCanineHypoallergenic3.jpg",
    ],
    name: "Royal Canin Veterinary Canine Hypoallergenic",
    description:
      "Hypoallergenic dietetic dry dog food for adult dogs prone to dietary intolerances and allergies made with hydrolysed proteins, EPA and DHA, ideal for supporting dermatosis and excessive hair loss.",
    variations: [
      { unit: "2kg", price: 399 },
      { unit: "7kg", price: 899 },
      { unit: "14kg", price: 1799 },
    ],
  },
  {
    id: 8,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 8 - Royal Canin Yorkshire Terrier Adult Loaf/RoyalCaninYorkshireTerrierAdultLoaf1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 8 - Royal Canin Yorkshire Terrier Adult Loaf/RoyalCaninYorkshireTerrierAdultLoaf2.jpg",
    ],
    name: "Royal Canin Yorkshire Terrier Adult Loaf",
    description:
      "Tailored wet dog food for adult Yorkshire Terriers over the age of 10 months, in a tasty loaf with an appetising recipe designed for high acceptance, helping to support digestion, skin and coat health",
    variations: [
      { unit: "12 x 85g", price: 799 },
      { unit: "24 x 85g", price: 999 },
    ],
  },
  {
    id: 9,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 9 - Royal Canin Veterinary Canine - Satiety Weight Management/RoyalCaninVeterinaryCanineSatietyWeightManagement1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 9 - Royal Canin Veterinary Canine - Satiety Weight Management/RoyalCaninVeterinaryCanineSatietyWeightManagement2.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 9 - Royal Canin Veterinary Canine - Satiety Weight Management/RoyalCaninVeterinaryCanineSatietyWeightManagement3.jpg",
    ],
    name: "Royal Canin Veterinary Canine - Satiety Weight Management",
    description:
      "Complete dietetic dry food for overweight adult dogs older than 1 year. The low energy density helps with weight management, while the high protein content supports muscle mass maintenance.",
    variations: [
      { unit: "2kg", price: 499},
      { unit: "7kg", price: 799},
      { unit: "14kg", price: 1799},
    ],
  },
  {
    id: 10,
    category: "dog",
    sub_category: "Dry Dog Food",
    images: [
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 10 - Black Angus Adult/BlackAngusAdult1.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 10 - Black Angus Adult/BlackAngusAdult2.jpg",
      "../../../Product Images/Category 1 - Dry Dog Food/Category 1 - Products/Product 10 - Black Angus Adult/BlackAngusAdult3.jpg",
    ],
    name: "Black Angus Adult",
    description:
      "A delicious complete dry dog food from Markus Mühle, optimally suited to the needs of dogs over 12 months, with green-lipped mussel extract.",
    variations: [
      { unit: "15kg", price: 4799},
    ],
  },
  {
    id: 11,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Rocco Sensitive",
    description:
      "Rocco Sensitive is a well-balanced complete wet food for dogs with sensitive tummies. Dogs with allergies, nutritional intolerances and gastrointestinal disorders don't need to compromise on tasty food.",
    variations: [
      { unit: "6kg", price: 600 },
      { unit: "8kg", price: 800 },
    ],
  },
  {
    id: 12,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Rocco Diet Care Gastrointestinal",
    description:
      "Rocco Diet Care Gastrointestinal is a meat-based therapeutic wet dog food that helps to relieve intestinal dysfunction during and after acute diarrhoea. This complete food has an increased electrolyte content and contains easy-to-digest ingredients which also helps compensate an inadequate digestion.",
    variations: [
      { unit: "8kg", price: 3600},
      { unit: "19kg", price: 5400},
    ],
  },
  {
    id: 13,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Royal Canin Mini",
    description:
      "Everyone loves to be pampered and small breed dogs are no exception. Royal Canin Mini Adult in Gravy has been specially developed for small breed dogs up to 10kg.",
    variations: [
      { unit: "4kg", price: 1300 },
      { unit: "6kg", price: 2500 },
      { unit: "10kg", price: 3500 },
    ],
  },
  {
    id: 14,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Royal Canin Maxi Puppy",
    description:
      "During your large breed puppy's growth phase, it is essential that it receives sufficient calories and the right nutrients to support development. This is a particular challenge for dogs of this size, as calcium and vitamin levels need to be specially tailored to help avoid bone and joint problems that are common in larger breeds.",
    variations: [
      { unit: "4kg", price: 2300 },
      { unit: "10kg", price: 4500},
      { unit: "15kg", price: 6000},
    ],
  },
  {
    id: 15,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Wolf of Wilderness Expedition Stony Creek",
    description:
      "Wolf of Wilderness Adult Expedition wet dog food - discover the untamed nature of the wolf on its forays for prey and new territories.",
    variations: [
      { unit: "5kg", price: 100},
    ],
  },
  {
    id: 16,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Hill's Prescription Diet Canine",
    description:
      "This Hill's Prescription Diet Canine z/d Food Sensitivities has been specially developed for adult dogs with nutritional intolerances. It is a hypoallergenic wet food that contains selected sources of carbohydrates and chicken liver hydrolysate as the sole source of hydrolysed protein.",
    variations: [
      { unit: "5kg", price: 3300 },
      { unit: "9kg", price: 6400 },
    ],
  },
  {
    id: 17,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Rocco Classic Saver",
    description:
      "Meaty grain-free dinners for your dog, with a high proportion of meat & offal and 100% fresh, quality ingredients. Species-appropriate. No artificial additives. Great value in a 24 x 400g saver pack!",
    variations: [
      { unit: "15kg", price: 2500 },
      { unit: "10kg", price: 1700 },
      { unit: "7kg", price: 1500 },
      { unit: "4kg", price: 1300 },
    ],
  },
  {
    id: 18,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Concept for Life Veterinary Diet Hypoallergenic",
    description:
      "Dietetic wet food for adult dogs with food intolerances, dermatosis and hair loss. This vet food can be used as an exclusion or elimination diet as kangaroo is the only source of animal protein",
    variations: [
      { unit: "15kg", price: 2500 },
      { unit: "10kg", price: 1700 },
      { unit: "7kg", price: 1500 },
      { unit: "4kg", price: 1300 },
    ],
  },
  {
    id: 19,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Almo Nature BioOrganic Maintenance",
    description:
      "Balanced organic wet food for dogs, with organic ingredients and a range of tasty varieties offering vital nutrients and vitamins, in handy trays with no genetically modified ingredients.",
    variations: [
      { unit: "15kg", price: 2500 },
      { unit: "10kg", price: 1700 },
      { unit: "7kg", price: 1500 },
      { unit: "4kg", price: 1300 },
    ],
  },
  {
    id: 20,
    category: "dog",
    sub_category: "Wet Dog Food",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Cesar Pouches Deliciously Fresh Favourites in Sauce",
    description:
      "Tasty wet food in sauce, 4 varieties, selected meat & vegetables, balanced, complete, with vitamins & minerals, in a fresh bag, easy to portion, without sugar & artificial flavourings.",
    variations: [
      { unit: "4kg", price: 1700 },
    ],
  },
  {
    id: 21,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Pedigree Dentastix",
    description:
      "Tasty wet food in sauce, 4 varieties, selected meat & vegetables, balanced, complete, with vitamins & minerals, in a fresh bag, easy to portion, without sugar & artificial flavourings.",
    variations: [
      { unit: "Small 110g", price: 92},
      { unit: "Medium 185g", price: 137},
      { unit: "Large 112g", price: 70},
    ],
  },
  {
    id: 22,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Pedigree Schmackos",
    description:
      "Tasty chewy strips or sticks for dogs, in a range of flavours. These meaty treats are easy to portion, making them ideal for rewarding your dog, and contain valuable omega-3, vitamins and minerals.",
    variations: [
      { unit: "Small 110g", price: 92},
      { unit: "Medium 185g", price: 137},
      { unit: "Large 112g", price: 70},
    ],
  },
  {
    id: 23,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Rocco Rolls Chew Sticks",
    description:
      "A firm favourite from Rocco: Low-fat rawhide chew sticks, wrapped in mouth-watering chicken or duck fillet, or fish skin. These dog treats provide lots of tasty, chewy fun while aiding dental hygiene.",
    variations: [
      { unit: "Small 110g", price: 92},
      { unit: "Medium 185g", price: 137},
      { unit: "Large 112g", price: 70},
    ],
  },
  {
    id: 24,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Greenies Canine Dental Chews",
    description:
      "Delicious snacks to mechanically clean your dog's teeth, with a unique surface structure designed to reduce tartar, plaque and mouth odour, easy to digest and helping support fresh breath.",
    variations: [
      { unit: "340g", price: 229},
    ],
  },
  {
    id: 25,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Advance Hypoallergenic Snack",
    description:
      "Delicious, digestible snacks for nutritionally-sensitive dogs, with 100% hydrolysed protein, highly digestible and in a semi-moist biscuit format that is ideal for rewarding your dog.",
    variations: [
      { unit: "150g", price: 135},
      { unit: "450g", price: 275},
    ],
  },
  {
    id: 26,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Rocco Cow Ears",
    description:
      "One of the most popular Rocco snacks! These cows' ears are low in fat and odour, with a chewy consistency that keeps your dog entertained for hours.",
    variations: [
      { unit: "1kg", price: 369},
    ],
  },
  {
    id: 27,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Rosie's Farm Adult Tender Steak Bites",
    description:
      "Delicious dog snacks that taste like home-cooking! The tasty treats in a re-sealable pouch contain 30% chicken and are totally grain-free, with no sugar or artificial aroma or colour. Made in Austria.",
    variations: [
      { unit: "Small 110g", price: 92},
      { unit: "Medium 185g", price: 137},
      { unit: "Large 112g", price: 70},
    ],
  },
  {
    id: 28,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Vitakraft Beef-Sticks",
    description:
      "Mouth-watering 93% meat chew sticks, easy to break into small portions for rewards on the go. Each stick is packed full of vitamins, sugar free, with no colours, preservatives or flavour enhancers.entertained for hours.",
    variations: [
      { unit: "Small 110g", price: 92},
      { unit: "Medium 185g", price: 137},
      { unit: "Large 112g", price: 70},
    ],
  },
  {
    id: 29,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Zesty Paws Hip & Joint Chews Mobility",
    description:
      "Delicious snacks for dogs over 4 months old, to support natural mobility and bodily immunity, rich in vitamins C and E combined with glucosamine, chondroitin and green-lipped mussel.",
    variations: [
      { unit: "Small 110g", price: 92},
      { unit: "Medium 185g", price: 137},
      { unit: "Large 112g", price: 70},
    ],
  },
  {
    id: 30,
    category: "dog",
    sub_category: "Dog Treats & Bones",
    images: [
      "/images/cat/hillsPrescriptionDiet1.jpg",
      "/images/cat/royalCaninMediumAdult1.jpg",
    ],
    name: "Trixie PREMIO Strips with Chicken and Cheese",
    description:
      "Gluten- & sugar-free snack for dogs, with lots of tasty chicken meat & hearty cheese, low-fat recipe, for extensive chewing, high in protein, resealable bag for lasting freshness.",
    variations: [
      { unit: "100g", price: 99},
    ],
  },
  {
    id: 31,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "Burns Adult & Senior Original Chicken & Brown Rice",
    description:
      "Wheat-free dry food for adult & older dogs, low-fat recipe, without soy & dairy products, natural ingredients, high in fiber, valuable fatty acids, easily digestible, tasty.",
    variations: [
      { unit: "6kg", price: 899},
      { unit: "14kg", price: 1119},
      { unit: "16kg", price: 1459},
    ],
  },
  {
    id: 32,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "Briantos Adult Grain-Free Duck & Potato",
    description:
      "Complete grain-free dry dog food with tender duck and hearty sweet potatoes. The soft kibble has an irresistible flavour and has been gently prepared to ensure proper and healthy digestion.",
    variations: [
      { unit: "12kg", price: 1800},
      { unit: "24kg", price: 3400},
    ],
  },
  {
    id: 33,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "YuMOVE Joint Care for Adult Dogs",
    description:
      "Keep your dog's joints healthy and mobile with omega-3 & natural chondroitin from green-lipped mussels, in this YuMOVE nutritional supplement to promote cartilage health and mobility.",
    variations: [
      { unit: "10kg", price: 6200},
    ],
  },
  {
    id: 34,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "Royal Canin Medium Ageing in Loaf",
    description:
      "Premium wet food for older dogs (from 7 years of age) of medium-sized breeds (11-25 kg), with high-quality protein and digestion-boosting prebiotics which supports the body's own defences.",
    variations: [
      { unit: "4kg", price: 2800},
    ],
  },
  {
    id: 35,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "Eukanuba Daily Care Mono-Protein with Duck",
    description:
      "Appealing complete dry food for dogs, with a single source protein from hearty duck, containing FOS and MOS with delicious sweet potato, enriched with omega-3 and -6 fatty acids.",
    variations: [
      { unit: "12kg", price: 4300},
      { unit: "24kg", price: 5600},
    ],
  },
  {
    id: 36,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "PRO PLAN Skin & Coat Dog Supplement Oil",
    description:
      "Appealing complete dry food for dogs, with a single source protein from hearty duck, containing FOS and MOS with delicious sweet potato, enriched with omega-3 and -6 fatty acids.",
    variations: [
      { unit: "2kg", price: 788},
    ],
  },
  {
    id: 37,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "Burns Hypo-Allergenic Mixer",
    description:
      "Appealing complete dry food for dogs, with a single source protein from hearty duck, containing FOS and MOS with delicious sweet potato, enriched with omega-3 and -6 fatty acids.",
    variations: [
      { unit: "2kg", price: 421},
    ],
  },
  {
    id: 38,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "LUPO Herb Pellets",
    description:
      "Supplement for dogs, with a multi-vitamin complex from herbs and micronutrients to support healthy nutrition, with trace elements and easy to serve in handy tablets in a resealable tub.",
    variations: [
      { unit: "600g", price: 299},
    ],
  },
  {
    id: 39,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "PURINA PRO PLAN Fortiflora Canine Probiotic",
    description:
      "Probiotic supplement for dogs, contains living lactic acid bacteria and minerals, can promote intestinal health and strengthen the immune system, in practical sachets, easy to feed to your dog.",
    variations: [
      { unit: "300g", price: 199},
    ],
  },
  {
    id: 40,
    category: "dog",
    sub_category: "Dog Supplements & Special Food",
    images: [
      "",
      "",
    ],
    name: "Hyaloral for Large & Giant Breeds",
    description:
      "Probiotic supplement for dogs, contains living lactic acid bacteria and minerals, can promote intestinal health and strengthen the immune system, in practical sachets, easy to feed to your dog.",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 41,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 42,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 43,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 44,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 45,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 46,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 47,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 48,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 49,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },
  {
    id: 50,
    category: "dog",
    sub_category: " Dog Grooming & Care",
    images: [
      "",
      "",
      "",
    ],
    name: "",
    description:
      "",
    variations: [
      { unit: "3.2kg", price: 2300},
      { unit: "6.2kg", price: 5000},
    ],
  },

];