export interface IPriceItem {
    name: string;
    price: string | number;
    description?: string;
}

export const getPriceList = (): IPriceItem[] => {
    return [
        {
            name: "Microblading - vláskování obočí",
            price: "5.500,-",
        },
        {
            name: "Power brows - pudrové obočí",
            price: "5.500,-",
        },
        {
            name: "Microblading + Shading - vláskování + stínování",
            price: "5.500,-",
        },
        {
            name: "Eyeliner - meziřasové oční linky",
            price: "4.500,-",
        },
        {
            name: "Eyeliner shading - stínované oční linky",
            price: "4.900,-",
        },
        {
            name: "Lips - rty - plně barvené",
            price: "5.500,-",
        },
        {
            name: "Korekce obočí 4 - 8 týdnů po tetování",
            price: "900,-",
        },
        {
            name: "Korekce rtů 4 - 8 týdnů po tetování",
            price: "1.000,-",
        },
        {
            name: "Korekce linek 4 - 8 týdnů po tetování",
            price: "900,-",
        },
        {
            name: "Obnovení tetování do 1 roku  (50% sleva)",
            price: "2.250,-",
        },
        {
            name: "Obnovení tetování do 2 let",
            price: "3.500,-",
        },
        {
            name: "Obnovení tetování od 2 let",
            price: "3.500,-",
        },
    ];
};
