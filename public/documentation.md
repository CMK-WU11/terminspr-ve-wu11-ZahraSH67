# Landrup Dans- Projekt Dokumentation

## Projekt Oversigt

**Navn:** Landrup Dans


**Udvikler:** Zahra Shahabi

**Hold:** WU-11  

**GitHub Repo:** [https://github.com/CMK-WU11/terminspr-ve-wu11-ZahraSH67](https://github.com/CMK-WU11/terminspr-ve-wu11-ZahraSH67)

## Tech-stack

I udviklingen af Landrup har jeg brugt følgende teknologistack:

- **Next.js**
- **TailwindCSS**
- **React Hook Form**
- **React Icons**
- **Framer Motion**
<!-- - **Lottie-React** -->

## Tech-stack
* [**NextJS**](https://nextjs.org)  
Next.js blev valgt til dette projekt, fordi det tilbyder server-side rendering (SSR), hvilket forbedrer performance og SEO.  I modsætning til React.js, som kun kører på klienten, understøtter Next.js både SSR og SSG, hvilket gør apps hurtigere og mere søgemaskinevenlige.  
  
  Next.js har også indbygget routing og API-funktionalitet, mens React kræver eksterne biblioteker til disse opgaver. Dette gør Next.js mere alsidigt og produktionsklar ud af boksen. Next.js er desuden skalerbart og færdigkonfigureret med funktioner som code splitting.

* [**TailwindCSS**](https://tailwindcss.com/)  
Tailwind CSS blev valgt til dette projekt, fordi det giver en utility-first tilgang til styling, hvilket gør det nemt at opbygge responsive og tilpassede designs direkte i HTML. Det minimerer behovet for at skrive manuel CSS og gør det hurtigt at iterere på designs. Tailwind er også let at tilpasse og integrere med moderne frameworks som Next.js.

  I modsætning til Bootstrap, som kommer med foruddefinerede komponenter, giver Tailwind mere fleksibilitet til at skabe unikke designs uden at overstige med unødvendig kode. Ren CSS kræver mere manuelt arbejde og er mindre effektivt til hurtig udvikling. Tailwind kombinerer fordelene ved begge ved at tilbyde en strukturert tilgang til styling, mens den stadig tillader fuld kreativ frihed.


* [**React Icons**](https://react-icons.github.io/react-icons/)  
React Icons blev valgt til dette projekt, fordi det er et letvægtsbibliotek, der giver adgang til tusindvis af ikoner fra populære ikonpakker som Font Awesome, Material Design, og Feather. Det er nemt at bruge, da ikoner importeres som React-komponenter, og det understøtter tree-shaking, hvilket betyder, at kun de ikoner, du bruger, inkluderes i din applikation.

  I modsætning til at bruge ikonpakker som Font Awesome eller Material Icons direkte, eliminerer React Icons behovet for at inkludere hele ikonpakker, hvilket reducerer bundlestørrelsen. Det er også mere fleksibelt end at bruge SVG-filer manuelt, da React Icons giver dig mulighed for nemt at ændre størrelse, farve og andre egenskaber direkte via props. Dette gør det til et mere effektivt og udviklervenligt valg.


* [**Framer Motion**](https://www.npmjs.com/package/framer-motion)  
Framer Motion blev valgt til dette projekt, fordi det er et kraftfuldt og fleksibelt animationsbibliotek til React, der gør det nemt at skabe komplekse animationer og interaktive brugergrænseflader. Det tilbyder en simpel syntaks med understøttelse af spring-animationer, gesturer og layout-animationer, hvilket gør det ideelt til at forbedre brugeroplevelsen med smidige og engagerende animationer.

  I modsætning til biblioteker som React Spring eller CSS-animationer, er Framer Motion mere intuitivt at bruge med sin deklarative tilgang og direkte integration med React.  


  ## Kode-eksempel  
   I denne kode har jeg oprettet en Button-komponent i React, der bruger Framer Motion til at tilføje animationer. Knappen kan enten animeres eller ikke, afhængigt af animate-prop'en. Hvis animate er sand, starter knappen med en lav gennemsigtighed (opacity: 0) og animeres gradvist til fuld synlighed (opacity: 1) over 1,5 sekunder. Under animationen er knappen deaktiveret ved hjælp af isDisabled-tilstanden, og den aktiveres automatisk, når animationen er færdig via onAnimationComplete. Knappens styling er tilpasset med Tailwind CSS og inline-styles, hvilket gør den både visuelt tiltalende og funktionel.

[components ui Button](/src/components/ui/Button.jsx)
```js
"use client"

import { useState } from 'react'; // Importer useState hook
import { motion } from 'framer-motion';

const Button = ({ title, onClick, animate }) => {
  // Tilføj en tilstand for at spore om knappen skal være deaktiveret
  const [isDisabled, setIsDisabled] = useState(animate);

  // Definer animationsopsætningen med tilføjelse af onAnimationComplete
  const animationProps = animate
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1.5, delay: 1.5 },
        onAnimationComplete: () => setIsDisabled(false) // Aktiver knappen når animationen er færdig
      }
    : {}; // Hvis ikke 'animate', så ingen animation og knappen er ikke deaktiveret fra starten

  return (
    <motion.div {...animationProps}>
      <button
        disabled={isDisabled} // Brug isDisabled tilstand til at kontrollere om knappen er deaktiveret
        className={`text-white py-2 px-4 rounded-lg w-[250px]  ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{
          backgroundColor: "#5E2E53",
          borderRadius: "10px",
          fontSize: "18px",
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </motion.div>
  );
};

export default Button;

```
