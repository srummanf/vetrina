export type Shayari = {
  poet_name: string;
  poem_couplet: string;
};

export const shayariData: Shayari[] = [
  {
    poet_name: "Faiz Ahmed Faiz",
    poem_couplet: `aaj tak surḳh o siyah sadiyoñ ke saa.e ke tale
aadam o havvā kī aulād pe kyā guzrī hai?
maut aur ziist kī rozāna saf-ārā.ī meñ
ham pe kyā guzregī ajdād pe kyā guzrī hai?
`,
  },
  {
    poet_name: "Jaun Elia",
    poem_couplet: `surḳh aur sabz vādiyoñ kī taraf
vo mire saath chal rahī hogī`,
  },
];








/**
 *
 * - poet_name: Name of the poet whose work is being featured.
 * - `poem_couplet`: A string containing up to 8 lines of a shayari or poem.
 *
 * Example:
 * {
 *   poet_name: "Mirza Ghalib",
 *   poem_couplet: `Hazaaron khwahishen aisi ke har khwahish pe dum nikleBahut nikle mere armaan lekin phir bhi kam nikle`
 * }
 */
