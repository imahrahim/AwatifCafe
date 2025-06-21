/* empty css                                 */
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as createAstro, b as addAttribute, j as renderScript, F as Fragment } from '../chunks/astro/server_BrEU8JJG.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_CkVpKT_l.mjs';
import { $ as $$SectionTitle, a as $$Section } from '../chunks/SectionTitle_C7fAEMu6.mjs';
import { $ as $$Card } from '../chunks/Card_C0c6HP2Z.mjs';
/* empty css                                 */
import { $ as $$MainLayout } from '../chunks/MainLayout_DcETqVNw.mjs';
export { renderers } from '../renderers.mjs';

const kecilImage = new Proxy({"src":"/_astro/kecil.CcbGDeyG.svg","width":1668,"height":2224,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/imahrahim/awatif-menu/src/assets/pics/kecil.svg";
							}
							
							return target[name];
						}
					});

const besarImage = new Proxy({"src":"/_astro/besar.BaNOdVi7.svg","width":1668,"height":2224,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/imahrahim/awatif-menu/src/assets/pics/besar.svg";
							}
							
							return target[name];
						}
					});

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const kecil = [
    { place: "Corel Bay", price: "30" },
    { place: "Fisherman Village", price: "15" },
    { place: "Lagoon", price: "15" },
    { place: "Mira", price: "25" },
    { place: "Petani", price: "25" },
    { place: "Quite Beach", price: "25" },
    { place: "Romantic Beach", price: "25" },
    { place: "Wind Mills", price: "10" }
  ];
  const besar = [
    { place: "Abdul", price: "20" },
    { place: "Aruwana", price: "30" },
    { place: "Bubbles", price: "30" },
    { place: "Cozy", price: "20" },
    { place: "Fauna", price: "30" },
    { place: "Flora", price: "30" },
    { place: "KK Beach", price: "25" },
    { place: "PIR", price: "15" },
    { place: "Suhaila", price: "20" },
    { place: "The Barat", price: "25" },
    { place: "The Reef", price: "15" },
    { place: "Tuna", price: "20" },
    { place: "Turtle Beach", price: "20" }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "cases" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] text-[#673606]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Water Taxi", "description": "Choose your destination and let us take you there \u2013 price per person" })} <div class="grid md:grid-cols-2 gap-0 w-full"> <!-- Perhentian Kecil --> <div class="-mx-5 md:mx-0 bg-transparent"> ${renderComponent($$result2, "Image", $$Image, { "src": kecilImage, "alt": "Perhentian Kecil", "class": "w-full h-full object-cover block rounded-none bg-transparent" })} </div> <div> ${renderComponent($$result2, "Card", $$Card, { "title": "Perhentian Kecil", "subtitle": "Small Island", "destinations": kecil })} </div> <!-- Perhentian Besar --> <div class="-mx-5 md:mx-0 bg-transparent"> ${renderComponent($$result2, "Image", $$Image, { "src": besarImage, "alt": "Perhentian Besar", "class": "w-full h-full object-cover block rounded-none bg-transparent" })} </div> <div> ${renderComponent($$result2, "Card", $$Card, { "title": "Perhentian Besar", "subtitle": "Big Island", "destinations": besar })} </div> </div> </div> ` })}`;
}, "/Users/imahrahim/awatif-menu/src/components/sections/Cases.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { index, title, description, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[150px] bg-[#F3F3F3] overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[4px] border border-dark shadow-[5px_5px_0px_#673606]" data-astro-cid-kq6n5brs> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[20px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[25px] text-left" data-astro-cid-kq6n5brs> <div class="flex items-center gap-2 sm:gap-[5px]" data-astro-cid-kq6n5brs> <span class="text-xl font-bold" data-astro-cid-kq6n5brs>${title}</span> </div> ${description && renderTemplate`<p class="text-sm text-gray-500 leading-tight sm:ml-4 sm:mt-0 mt-1" data-astro-cid-kq6n5brs> ${description} </p>`} </div> <div class="accordion__icon relative w-4 h-4 ml-auto mr-[5px]" aria-hidden="true" data-astro-cid-kq6n5brs></div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[20px]" data-astro-cid-kq6n5brs> <div class="w-full h-[1.5px] bg-[#673606] mb-4" data-astro-cid-kq6n5brs></div> ${items && items.map((group) => renderTemplate`<div class="mb-6" data-astro-cid-kq6n5brs> <h4 class="font-bold text-lg mb-2 text-inherit" data-astro-cid-kq6n5brs>${group.category}</h4> ${group.items ? group.priceLabels && group.priceLabels.length > 1 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-kq6n5brs": true }, { "default": ($$result2) => renderTemplate` <div class="flex justify-end gap-10 text-sm italic font-semibold text-right mt-1 mb-1 pr-2" data-astro-cid-kq6n5brs> ${group.priceLabels.map((label) => renderTemplate`<span data-astro-cid-kq6n5brs>${label}</span>`)} </div> <ul class="grid gap-2 text-base" data-astro-cid-kq6n5brs> ${group.items.map((entry) => renderTemplate`<li class="border-b border-black/10 pb-2" data-astro-cid-kq6n5brs> <div class="flex justify-between gap-10" data-astro-cid-kq6n5brs> <span data-astro-cid-kq6n5brs>${entry.name}</span> ${"prices" in entry ? renderTemplate`<div class="flex gap-10 font-semibold italic justify-end min-w-[80px]" data-astro-cid-kq6n5brs> <span class="w-[30px] text-right" data-astro-cid-kq6n5brs>${entry.prices[0]}</span> <span class="w-[30px] text-right" data-astro-cid-kq6n5brs>${entry.prices[1]}</span> </div>` : renderTemplate`<span class="font-semibold" data-astro-cid-kq6n5brs>${entry.price}</span>`} </div> ${entry.description && renderTemplate`<div class="text-xs text-gray-500 mt-0.5" data-astro-cid-kq6n5brs>${entry.description}</div>`} </li>`)} </ul> ` })}` : renderTemplate`<ul class="grid gap-2 text-base" data-astro-cid-kq6n5brs> ${group.items.map((entry) => renderTemplate`<li class="border-b border-black/10 pb-2" data-astro-cid-kq6n5brs> <div class="flex justify-between" data-astro-cid-kq6n5brs> <span data-astro-cid-kq6n5brs>${entry.name}</span> <span class="font-semibold" data-astro-cid-kq6n5brs> ${"price" in entry ? entry.price : entry.prices?.[0] ?? ""} </span> </div> ${entry.description && renderTemplate`<div class="text-xs text-gray-500 mt-0.5" data-astro-cid-kq6n5brs>${entry.description}</div>`} </li>`)} </ul>` : group.subcategories ? renderTemplate`<div class="grid gap-4" data-astro-cid-kq6n5brs> ${group.subcategories.map((sub) => renderTemplate`<div data-astro-cid-kq6n5brs> <h5 class="text-base font-italic mb-1" data-astro-cid-kq6n5brs>${sub.category}</h5> <ul class="grid gap-1 text-sm border-l pl-4 border-black/10" data-astro-cid-kq6n5brs> ${sub.items.map((entry) => renderTemplate`<li class="flex justify-between text-sm" data-astro-cid-kq6n5brs> <span data-astro-cid-kq6n5brs>${entry.name}</span> <span class="font-semibold" data-astro-cid-kq6n5brs>${entry.price}</span> </li>`)} </ul> </div>`)} </div>` : null} </div>`)} </div> </div>  ${renderScript($$result, "/Users/imahrahim/awatif-menu/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/imahrahim/awatif-menu/src/components/ui/AccordionItem.astro", void 0);

const content = [
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
            "name": "Limau Tea\xA0",
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
        category: "Coffee",
        priceLabels: ["Hot", "Cold"],
        items: [
          { name: "Coffee", prices: ["5", "6"] },
          { name: "Nescafe", prices: ["5", "6"] },
          { name: "Cappuccino", prices: ["5", "7"] },
          { name: "Latte", prices: ["5", "7"] },
          { name: "Mocha", prices: ["5", "7"] },
          { name: "Vanilla", prices: ["5", "7"] }
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
        category: "Water",
        priceLabels: ["Small", "Big"],
        items: [
          { name: "Seamaster", description: "Mineral Water", prices: ["3", "5"] },
          { name: "Spritzer", description: "Mineral Water", prices: ["5", "8"] },
          { name: "Hot Water", description: "", prices: ["1", ""] },
          { name: "Sky Juice", description: "", prices: ["1", ""] }
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
            "price": "2"
          },
          {
            "name": "Beef Tacos",
            "price": "18",
            "description": "Add-on"
          }
        ]
      },
      {
        "category": "Tacos",
        "items": [
          {
            "name": "Chicken Tacos",
            "price": "18"
          },
          {
            "name": "Vegi Tacos",
            "price": "15"
          },
          {
            "name": "Beef Kebab",
            "price": "18"
          }
        ]
      },
      {
        "category": "Kebab",
        "items": [
          {
            "name": "Chicken Kebab",
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
                "name": "Curry",
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
            "name": "Curry",
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
            "name": "Curry",
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
    "description": "spicy thai-style salad with lime, chili and herbs"
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
    "description": "vegetables"
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
    "description": "seabass"
  }
];
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${content.map((item) => {
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { "index": item.index, "title": item.title, "description": item.description, "items": item.items })}`;
  })}`;
}, "/Users/imahrahim/awatif-menu/src/components/ui/Accordion.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const description = "Discover our full menu, from breakfast favorites to local specialties.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Awatif Cafe", "description": description })} ${renderComponent($$result2, "Accordion", $$Accordion, {})} </div> ` })}`;
}, "/Users/imahrahim/awatif-menu/src/components/sections/Process.astro", void 0);

const snorkel = new Proxy({"src":"/_astro/snorkel.D24VjAiW.png","width":1668,"height":2224,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/imahrahim/awatif-menu/src/assets/pics/snorkel.png";
							}
							
							return target[name];
						}
					});

const rawaImg = new Proxy({"src":"/_astro/rawa.L6N6Ld18.png","width":1668,"height":2032,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/imahrahim/awatif-menu/src/assets/pics/rawa.png";
							}
							
							return target[name];
						}
					});

const redangImg = new Proxy({"src":"/_astro/redang.BeVQfU-6.png","width":1668,"height":1031,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/imahrahim/awatif-menu/src/assets/pics/redang.png";
							}
							
							return target[name];
						}
					});

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const description = "Discover Perhentian\u2019s best snorkelling spots \u2013 from colourful coral gardens to hidden turtle bays. Safe, guided trips for all skill levels.";
  const teamGroups = [
    {
      trips: [
        {
          pic: snorkel,
          name: "Short Trip",
          role: "10:30AM \u2013 1:00PM",
          description: ["Fish Point", "Turtle Point", "Shark Point"],
          pricePerPerson: "RM 40",
          privateBoatPrice: "RM 400",
          privateBoatInfo: "1\u20138 persons",
          link: "https://linkedin.com"
        },
        {
          name: "Long Trip",
          role: "10:30AM \u2013 2:30PM",
          description: [
            "Fish Point",
            "Turtle Point",
            "Shark Point",
            "Turtle Beach",
            "Fisherman Village (Lunch)"
          ],
          pricePerPerson: "RM 50",
          privateBoatPrice: "RM 550",
          privateBoatInfo: "1\u20137 persons",
          link: "https://linkedin.com"
        }
      ]
    },
    {
      trips: [
        {
          pic: rawaImg,
          name: "Rawa Trip",
          role: "",
          description: ["Rawa", "Serenggeh", "Tukong Burung"],
          pricePerPerson: "RM 70",
          privateBoatPrice: "RM 500",
          privateBoatInfo: "1\u20135 persons",
          link: "https://linkedin.com"
        },
        {
          name: "Special Trip",
          role: "",
          description: [
            "Rawa",
            "Serenggeh",
            "Tukong Burung",
            "Light House",
            "Romantic Beach"
          ],
          pricePerPerson: "RM 90",
          privateBoatPrice: "RM 700",
          privateBoatInfo: "1\u20136 persons",
          link: "https://linkedin.com"
        }
      ]
    },
    {
      trips: [
        {
          pic: redangImg,
          name: "Redang Trip",
          role: "Start: 9:00AM",
          description: [
            "Turtles",
            "Guar @ Green Coral",
            "Long Beach (Lunch)",
            "Sand Bank",
            "Teluk Batu Kucing",
            "Silent Beach (Lang Tengah)",
            "Lucky Baby Shark"
          ],
          pricePerPerson: "RM 150",
          privateBoatPrice: "RM 900",
          privateBoatInfo: "1\u20138 persons",
          link: "https://linkedin.com"
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-[10px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Snorkeling", "description": description })} <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"> ${teamGroups.map((group) => {
    const groupImage = group.trips.find((t) => t.pic)?.pic;
    return renderTemplate`<div class="bg-white rounded-xl shadow-[5px_5px_0px_#673606] overflow-hidden border border-[#673606]"> ${groupImage && renderTemplate`<img${addAttribute(groupImage.src, "src")} alt="Trip Image" class="w-full h-auto object-cover rounded-t-xl">`} <div class="px-6 pb-6 pt-4"> ${group.trips.map((trip) => renderTemplate`<div class="mb-10 last:mb-0 space-y-4"> <!-- Name & Zeit --> <div> <h3 class="font-bold text-lg text-[#673606]">${trip.name}</h3> ${trip.role && renderTemplate`<p class="text-sm text-[#673606] mt-1">${trip.role}</p>`} </div> <!-- Trennlinie --> <div class="w-full h-[1px] bg-[#673606]"></div> <!-- Beschreibung --> <ul class="list-disc list-inside text-sm text-[#673606] space-y-1"> ${trip.description.map((item) => renderTemplate`<li>${item}</li>`)} </ul> <!-- Preise --> <div class="flex justify-between text-sm font-semibold text-[#673606] pt-1"> <div> <div>${trip.pricePerPerson}</div> <div class="text-[11px] italic font-light">per person</div> </div> <div class="text-right"> <div>${trip.privateBoatPrice}</div> <div class="text-[11px] italic font-light">${trip.privateBoatInfo}</div> </div> </div> </div>`)} </div> </div>`;
  })} </div> </div> ` })}`;
}, "/Users/imahrahim/awatif-menu/src/components/sections/Team.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Awatif Cafe", "description": "Awatif Cafe on Long Beach Perhentian Kecil" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "Team", $$Team, {})} ` })}`;
}, "/Users/imahrahim/awatif-menu/src/pages/index.astro", void 0);

const $$file = "/Users/imahrahim/awatif-menu/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
