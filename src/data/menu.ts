export interface MenuEntry {
  index: number;
  title: string;
  description?: string;
  items: MenuCategory[];
}

export interface MenuCategory {
  category: string;
  priceLabels?: string[]; // z. B. ['Hot', 'Cold'] oder ['Small', 'Big']
  items?: MenuItem[];      // normale Item-Liste (wenn keine Subkategorien)
  subcategories?: MenuSubCategory[]; // wenn es z. B. 'Cold' & 'Hot' Subgruppen gibt
}

export type MenuItem =
  | { name: string; price: string; description?: string }
  | { name: string; prices: string[]; description?: string };

export interface MenuSubCategory {
  category: string;
  items: { name: string; price: string; description?: string }[];
}


const menu: MenuEntry[] = [
    {
      "index": 1,
      "title": "Beverages",
      "items": [
        {
          "category": "Cold",
          "items": [
            {
              "name": "Tea",
              "price": "5",
              "description": "black tea with milk or sugar"
            },
            {
              "name": "Lemon Tea",
              "price": "8"
            },
            {
              "name": "Limau Tea\u00a0",
              "price": "8"
            },
            {
              "name": "Lychee Tea",
              "price": "6"
            },
            {
              "name": "Jagung",
              "price": "6",
              "description": "sweet corn-based drink"
            },
            {
              "name": "Milo",
              "price": "6"
            },
            {
              "name": "Rose Syrup",
              "price": "5"
            },
            {
              "name": "Sunquick",
              "price": "5",
              "description": "concentrated orange squash"
            }
          ]
        },
        {
          "category": "Hot",
          "items": [
            {
              "name": "Black Tea",
              "price": "5"
            },
            {
              "name": "Ginger Tea",
              "price": "5"
            },
            {
              "name": "Lime Tea",
              "price": "3"
            },
            {
              "name": "Tea Tarik",
              "price": "5"
            },
            {
              "name": "Horliks",
              "price": "5",
              "description": "wheat and barley milk drink"
            },
            {
              "name": "Milo",
              "price": "5"
            }
          ]
        },
        {
          "category": "Soft Drink",
          "items": [
            {
              "name": "Coke",
              "price": "4"
            },
            {
              "name": "Diet Coke",
              "price": "4"
            },
            {
              "name": "Fanta Orange",
              "price": "4"
            },
            {
              "name": "Red Bull",
              "price": "5"
            },
            {
              "name": "Sprite",
              "price": "4"
            },
            {
              "name": "100 Plus",
              "price": "4"
            },
            {
              "name": "7 Up",
              "price": "4"
            }
          ]
        },
{
  "category": "Coffee",
  "priceLabels": ["Hot", "Cold"],
  "items": [
    { "name": "Coffee", "prices": ["5", "6"] },
    { "name": "Nescafe", "prices": ["5", "6"] },
    { "name": "Cappuccino", "prices": ["5", "7"] },
    { "name": "Latte", "prices": ["5", "7"] },
    { "name": "Mocha", "prices": ["5", "7"] },
    { "name": "Vanilla", "prices": ["5", "7"] }
  ]
},
        {
          "category": "Fresh Juice",
          "items": [
            {
              "name": "Apple",
              "price": "10"
            },
            {
              "name": "Banana",
              "price": "10"
            },
            {
              "name": "Carrot",
              "price": "10"
            },
            {
              "name": "Cucumber",
              "price": "10"
            },
            {
              "name": "Dragonfruit",
              "price": "15"
            },
            {
              "name": "Fresh Coconut",
              "price": "10"
            },
            {
              "name": "Kiwi",
              "price": "15"
            },
            {
              "name": "Lime and Honey",
              "price": "10"
            },
            {
              "name": "Mango",
              "price": "10"
            },
            {
              "name": "Orange",
              "price": "10"
            },
            {
              "name": "Pineapple",
              "price": "10"
            },
            {
              "name": "Watermelon",
              "price": "10"
            }
          ]
        },
        
        {
            "category": "Water",
            "priceLabels": ["Small", "Big"],
            "items": [
              { "name": "Seamaster", "description": "Mineral Water", "prices": ["3", "5"] },
              { "name": "Spritzer", "description": "Mineral Water", "prices": ["5", "8"] },
              { "name": "Hot Water", "description": "", "prices": ["1", ""] },
              { "name": "Sky Juice", "description": "", "prices": ["1", ""] }
            ]
          }
      ]
    },
    {
      "index": 2,
      "title": "Shakes and Dessert",
      "items": [
        {
          "category": "Milkshakes",
          "items": [
            {
              "name": "Lime",
              "price": "12"
            },
            {
              "name": "Mango",
              "price": "12"
            },
            {
              "name": "Mango and Banana",
              "price": "15"
            },
            {
              "name": "Orange",
              "price": "12"
            },
            {
              "name": "Pineapple",
              "price": "12"
            },
            {
              "name": "Watermelon",
              "price": "12"
            }
          ]
        },
        {
          "category": "Smoothies",
          "items": [
            {
              "name": "Banana Smoothie",
              "price": "15"
            },
            {
              "name": "Mango Smoothie",
              "price": "15"
            }
          ]
        },
        {
          "category": "Lassie",
          "items": [
            {
              "name": "Mango Lassi",
              "price": "15"
            }
          ]
        },
        {
          "category": "Chocolate Milkshakes",
          "items": [
            {
              "name": "Banana and Chocolate ",
              "price": "15"
            },
            {
              "name": "Chocolate Milo",
              "price": "12"
            },
            {
              "name": "M&M",
              "price": "12"
            },
            {
              "name": "Mars Bar",
              "price": "12"
            },
            {
              "name": "Oreo",
              "price": "12"
            },
            {
              "name": "Snickers",
              "price": "12"
            }
          ]
        },
        {
          "category": "Desserts",
          "items": [
            {
              "name": "Banana Split",
              "price": "13"
            },
            {
              "name": "Fruits Salad",
              "price": "13"
            },
            {
              "name": "Ice Cream",
              "price": "10"
            },
            {
              "name": "Fried Banana Chocolate",
              "price": "9"
            },
            {
              "name": "Fried Ice Cream",
              "price": "15"
            },
            {
              "name": "Fried Snicker",
              "price": "13"
            }
          ]
        }
      ]
    },
    {
      "index": 3,
      "title": "All Day Breakfast",
      "items": [
        {
          "category": "Breakfast",
          "items": [
            {
              "name": "Baked Beans with Scrambled Eggs on Toast",
              "price": "15"
            },
            {
              "name": "Cheese Toast",
              "price": "10"
            },
            {
              "name": "Fried Egg on Toast",
              "price": "10"
            },
            {
              "name": "Half-Boiled Egg and Toast",
              "price": "10"
            },
            {
              "name": "French Toast and Honey",
              "price": "10"
            },
            {
              "name": "Toast with Butter and Jam",
              "price": "10"
            },
            {
              "name": "Muesli Fruit with Yogurt",
              "price": "15"
            }
          ]
        },
        {
          "category": "Omelette",
          "items": [
            {
              "name": "Plain Omelette",
              "price": "10"
            },
            {
              "name": "Chicken Omelette",
              "price": "13"
            },
            {
              "name": "Cheese Omelette",
              "price": "13"
            },
            {
              "name": "Mushroom Omelette",
              "price": "12"
            },
            {
              "name": "Onion Omelette",
              "price": "12"
            },
            {
              "name": "Special Omelette",
              "price": "15",
              "description": "Onion, Tomato and Cheese"
            },
            {
              "name": "Tomato Omelette",
              "price": "12"
            },
            {
              "name": "Tuna Omelette",
              "price": "13"
            },
            {
              "name": "Vegetable Omelette",
              "price": "12"
            }
          ]
        },
        {
          "category": "Roti Canai",
          "items": [
            {
              "name": "Roti Canai with Curry",
              "price": "9"
            },
            {
              "name": "Roti Canai Banana",
              "price": "12"
            },
            {
              "name": "Roti Canai Cheese",
              "price": "12"
            },
            {
              "name": "Roti Canai Egg",
              "price": "12"
            }
          ]
        },
        {
          "category": "Pancake",
          "items": [
            {
              "name": "Banana Chocolate",
              "price": "11"
            },
            {
              "name": "Lime and Sugar",
              "price": "10"
            },
            {
              "name": "Mango with Honey",
              "price": "11"
            },
            {
              "name": "Pineapple with Honey",
              "price": "11"
            },
            {
              "name": "Plain with Honey",
              "price": "9"
            }
          ]
        }
      ]
    },
    {
      "index": 4,
      "title": "Snacks and Western",
      "items": [
        {
          "category": "Snacks",
          "items": [
            {
              "name": "Calamari",
              "price": "15"
            },
            {
              "name": "Cheezy Wedges",
              "price": "10"
            },
            {
              "name": "Chicken Nugget",
              "price": "10"
            },
            {
              "name": "Chicken Wings",
              "price": "15"
            },
            {
              "name": "French Fries",
              "price": "8"
            },
            {
              "name": "Garlic Toast",
              "price": "8"
            },
            {
              "name": "Keropok",
              "price": "5"
            },
            {
              "name": "Mushroom Soup with Garlic Bread",
              "price": "12"
            },
            {
              "name": "Onion Ring",
              "price": "9"
            },
            {
              "name": "Potato Wedges",
              "price": "8"
            },
            {
              "name": "Sausage and French Fries",
              "price": "12"
            },
            {
              "name": "Spring Roll",
              "price": "9"
            },
            {
              "name": "Vegetable Tempura",
              "price": "12"
            }
          ]
        },
        {
          "category": "Pasta",
          "items": [
            {
              "name": "Bolognese",
              "price": "12"
            },
            {
              "name": "Carbonara",
              "price": "15"
            },
            {
              "name": "Alio e Olio",
              "price": "15"
            },
            {
              "name": "Mushroom",
              "price": "12"
            },
            {
              "name": "Seafood",
              "price": "15"
            },
            {
              "name": "Tomato",
              "price": "12"
            },
            {
              "name": "Tuna",
              "price": "12"
            }
          ]
        },
        {
          "category": "Sandwiches",
          "items": [
            {
              "name": "Chicken Sandwich",
              "price": "12"
            },
            {
              "name": "Club Sandwich",
              "price": "15"
            },
            {
              "name": "Egg Sandwich",
              "price": "12"
            },
            {
              "name": "Tomato Sandwich",
              "price": "12"
            },
            {
              "name": "Tuna Sandwich",
              "price": "13"
            }
          ]
        },
        {
          "category": "Burgers",
          "items": [
            {
              "name": "Beef Burger",
              "price": "12"
            },
            {
              "name": "Chicken Burger",
              "price": "12"
            },
            {
              "name": "Egg Burger",
              "price": "10"
            },
            {
              "name": "Fish Burger",
              "price": "13"
            },
            {
              "name": "Extra Cheese",
              "price": "2",
               "description": "Add-on"
            }
          ]
        },
        {
          "category": "Tacos",
          "items": [
            {
              "name": "Beef Tacos",
              "price": "18",
            },
            {
              "name": "Chicken Tacos",
              "price": "18"
            },
            {
              "name": "Vegi Tacos",
              "price": "15"
            }
          ]
        },
        {
          "category": "Kebab",
          "items": [
            {
              "name": "Chicken Kebab",
              "price": "18"
            },
            {
              "name": "Beef Kebab",
              "price": "18"
            }
          ]
        }
      ]
    },
    {
      "index": 5,
      "title": "Rice and Noodles",
      "items": [
        {
          "category": "Nasi Goreng",
          "items": [
            {
              "name": "Ayam/Daging Merah",
              "price": "18",
              "description": "chicken or beef in red sauce"
            },
            {
              "name": "Ayam Kunyit",
              "price": "18",
              "description": "turmeric-marinated chicken"
            },
            {
              "name": "Beef",
              "price": "10"
            },
            {
              "name": "Chicken",
              "price": "10"
            },
            {
              "name": "Ikan Masin",
              "price": "10",
              "description": "salted fish"
            },
            {
              "name": "Kampung",
              "price": "10",
              "description": "anchovies and chili paste"
            },
            {
              "name": "Mushroom",
              "price": "12"
            },
            {
              "name": "Paprik",
              "price": "18",
              "description": "thai-style chili sauce"
            },
            {
              "name": "Pataya",
              "price": "13",
              "description": "wrapped in omelette"
            },
            {
              "name": "Pineapple",
              "price": "12"
            },
            {
              "name": "Seafood",
              "price": "13"
            },
            {
              "name": "Special Awatif",
              "price": "20",
              "description": "black pepper beef and fried egg"
            },
            {
              "name": "Tomyam",
              "price": "12"
            },
            {
              "name": "Tuna",
              "price": "12"
            },
            {
              "name": "Vegetables",
              "price": "8"
            }
          ]
        },
        {
          "category": "Noodles",
          "subcategories": [
            {
              "category": "Main Ingredient",
              "items": [
                {
                  "name": "Beef",
                  "price": "10"
                },
                {
                  "name": "Chicken",
                  "price": "10"
                },
                {
                  "name": "Seafood",
                  "price": "13"
                },
                {
                  "name": "Tuna",
                  "price": "10"
                },
                {
                  "name": "Vegetables",
                  "price": "8"
                },
                {
                  "name": "Mix",
                  "price": "18"
                }
              ]
            },
            {
              "category": "Noodle Base",
              "items": [
                {
                  "name": "Noodles",
                  "price": ""
                },
                {
                  "name": "Rice Noodles",
                  "price": ""
                },
                {
                  "name": "Kuay Tiaw",
                  "price": ""
                },
                {
                  "name": "Maggie",
                  "price": ""
                }
              ]
            },
            {
              "category": "Cooking Style",
              "items": [
                {
                  "name": "Fried",
                  "price": ""
                },
                {
                  "name": "Curry ",
                  "price": ""
                },
                {
                  "name": "Soup",
                  "price": ""
                },
                {
                  "name": "Tomyam",
                  "price": ""
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "index": 6,
      "title": "Local Specialities",
      "items": [
        {
          "category": "Fish",
          "items": [
            {
              "name": "Garlic Butter",
              "price": "20"
            },
            {
              "name": "Ginger",
              "price": "20"
            },
            {
              "name": "Green Curry",
              "price": "20"
            },
            {
              "name": "Grilled",
              "price": "20"
            },
            {
              "name": "Soya Sauce",
              "price": "20"
            },
            {
              "name": "Sweet and Sour",
              "price": "20"
            },
            {
              "name": "Curry ",
              "price": "20"
            }
          ]
        },
        {
          "category": "Chicken",
          "items": [
            {
              "name": "Cashew Nut",
              "price": "18"
            },
            {
              "name": "Ginger",
              "price": "18"
            },
            {
              "name": "Grilled",
              "price": "18"
            },
            {
              "name": "Malay Style",
              "price": "18"
            },
            {
              "name": "Paprik",
              "price": "18"
            },
            {
              "name": "Peanut",
              "price": "18"
            },
            {
              "name": "Soup",
              "price": "18"
            },
            {
              "name": "Tomyam",
              "price": "18"
            }
          ]
        },
        {
          "category": "Prawn or Squid",
          "items": [
            {
              "name": "Curry ",
              "price": "18"
            },
            {
              "name": "Garlic Butter",
              "price": "18"
            },
            {
              "name": "Malay Style",
              "price": "18"
            },
            {
              "name": "Tomyam",
              "price": "18"
            },
            {
              "name": "Yellow Coconut",
              "price": "18"
            }
          ]
        },
        {
          "category": "Beef",
          "items": [
            {
              "name": "Black Pepper",
              "price": "18"
            },
            {
              "name": "Oyster Sauce",
              "price": "18"
            },
            {
              "name": "Red Chili",
              "price": "18"
            },
            {
              "name": "Stroganoff",
              "price": "18"
            },
            {
              "name": "Tomato",
              "price": "18"
            },
            {
              "name": "Tomyam",
              "price": "18"
            }
          ]
        },
        {
          "category": "Sides",
          "items": [
            {
              "name": "Steamed Rice",
              "price": "3"
            },
            {
              "name": "Omelette",
              "price": "5"
            },
            {
              "name": "Roti Canai",
              "price": "5"
            },
            {
              "name": "French Fries",
              "price": "8"
            },
            {
              "name": "Baked Potato",
              "price": "5"
            },
            {
              "name": "Fried Vegetable",
              "price": "9"
            }
          ]
        }
      ],
      "description": "choose your protein and preferred style of preparation"
    },
    {
      "index": 7,
      "title": "Kerabu",
      "items": [
        {
          "category": "",
          "items": [
            {
              "name": "Kerabu Sohum",
              "price": "20",
              "description": "glass noodles and shrimp"
            },
            {
              "name": "Kerabu Sotong dan Udang",
              "price": "20",
              "description": "squid and shrimp"
            },
            {
              "name": "Kerabu Udang",
              "price": "20",
              "description": "shrimp"
            },
            {
              "name": "Kerabu Daging",
              "price": "20",
              "description": "beef"
            },
            {
              "name": "Kerabu Ikan Bilis",
              "price": "20",
              "description": "anchovies"
            },
            {
              "name": "Kerabu Telur Masin",
              "price": "20",
              "description": "salted egg"
            }
          ]
        }
      ],
      "description": "spicy thai-style salad"
    },
    {
      "index": 8,
      "title": "Lala",
      "items": [
        {
          "category": "",
          "items": [
            {
              "name": "Lala Goreng Kicap",
              "price": "18",
              "description": "stir-fried with sweet soy sauce"
            },
            {
              "name": "Lala Goreng Pedas",
              "price": "18",
              "description": "spicy stir-fried"
            },
            {
              "name": "Lala Masak Lemak Cili Api",
              "price": "18",
              "description": "coconut gravy with bird\u2019s eye chili"
            },
            {
              "name": "Lala Serai (Rebus)",
              "price": "18",
              "description": "boiled in lemongrass and herbs"
            },
            {
              "name": "Lala Goreng Serai",
              "price": "18",
              "description": "stir-fried with lemongrass"
            },
            {
              "name": "Lala Goreng Sambal",
              "price": "18",
              "description": "stir-fried with spicy sambal"
            }
          ]
        }
      ],
      "description": "small local clams"
    },
    {
      "index": 9,
      "title": "Sayur",
      "items": [
        {
          "category": "",
          "items": [
            {
              "name": "Terung Goreng Belacan",
              "price": "15",
              "description": "eggplant, plain or anchovies"
            },
            {
              "name": "Kacang Panjang Goreng Kicap",
              "price": "15",
              "description": "long beans with soy sauce, chili and prawns"
            },
            {
              "name": "Kacang Buncis Telur / Belacan",
              "price": "15",
              "description": "string beans with egg or belancan"
            },
            {
              "name": "Bendi Goreng Belacan",
              "price": "15",
              "description": "lady\u2019s fingers"
            },
            {
              "name": "Kailan Ikan Masin",
              "price": "10",
              "description": "broccoli with salted fish"
            }
          ]
        }
      ],
      "description": "Vegetables"
    },
    {
      "index": 10,
      "title": "Siakap",
      "items": [
        {
          "category": "",
          "items": [
            {
              "name": "Sweet Sour",
              "price": "60"
            },
            {
              "name": "3 Rasa",
              "price": "60",
              "description": "sweet, sour and spicy sauce"
            },
            {
              "name": "Curry",
              "price": "60"
            },
            {
              "name": "Beradab",
              "price": "60",
              "description": "sambal and herbs"
            },
            {
              "name": "Stim",
              "price": "60",
              "description": "steamed with lime, garlic and chili"
            },
            {
              "name": "Goreng Bawang Putih",
              "price": "60",
              "description": "deep-fried with crispy garlic"
            }
          ]
        }
      ],
      "description": "Seabass"
    }
  ];

  export default menu;