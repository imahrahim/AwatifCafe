import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot } from './astro/server_BrEU8JJG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { isUnderline, title, subtitle, destinations } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`rounded-[5px] ${isUnderline ? "border border-[#673606] shadow-[5px_5px_0px_#673606]" : ""}`, "class")}> <div class="p-[20px]"> ${title && renderTemplate`<h3 class="text-xl font-semibold">${title}</h3>`} ${subtitle && renderTemplate`<p class="text-sm italic text-[gray]-500 mb-4">${subtitle}</p>`} ${destinations && Array.isArray(destinations) && renderTemplate`<ul class="grid gap-1 text-base mb-4"> ${destinations.map((item) => renderTemplate`<li class="flex justify-between"> <span>${item.place}</span> <span class="font-semibold italic"> ${item.price}</span> </li>`)} </ul>`} ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/imahrahim/awatif-menu/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
