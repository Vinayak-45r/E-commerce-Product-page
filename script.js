let products = [
    {name:"ASUS ROG Strix G16 Gaming Laptop", price:275990, rating:4, category:"Electronics", 
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDz-1DLSV4poellWQ6C6jocPwRsqBmm8hZe-dLHrlW6GPmOAw66XTvs9fOetpqjqaNPIueX4chsJ1EyjJRalKDgEE2oNcuK3FxsfBdM-RYumXb5QS7e1XxUA"},

    {name:"PNY Nvidia RTX A6000 48GB Workstation Graphics Card", price:749999, rating:5, category:"Electronics",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIzg9cdJOtI8vZZhi3WPIQov4j0Mb05vRrXwD6J535mgZuadtnn178vTBO41QLm9V0RwQAINnijI3eO1ecNLnCbsWSwgsp1vAlHv_NuAij2IasHNS_H6Kw"},

    {name:"Sony IER-Z1R IEM", price:159990, rating:4, category:"Electronics",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSIji3U441LFIAtE4OgU255NxolARUfRmQKwPlecBtR4yHdyHFYja8Ywu5w_V-Nra_9Wq3Nm7mLyTYR-sZXZjXEjeKcC_kRKCH0yUIrTVqMcUR_l5jB318f"},

    {name:"Hasselblad X2D 100C Lightweight Kit", price:891920, rating:5, category:"Electronics",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQSCVFJzRmyr22_8dWLRmPrds1Pp_QuLJ0TogjIwBSImHaoAViSZL2P4476FvL8KDP0VDcFr6byjnu7ihVvNwoVZvschHWv0lHPbqJltoGJSN-1LzKaFZ_k"},

    {name:"Bowers & Wilkins 801 D4 Floor Standing Speaker", price:6400000, rating:4, category:"Electronics",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2wsZcRy6szTLVcMQkaF0CXwGnVX943UYMtV_PKlctrZOtrUxAAJ6_c9PG1HsgOO8dm8EsbNb3KuPBj7T8DQhw3XQdsnOCobj3KzWB-XtmIQe_rdzN4lZ1JQ"},


    {name:"Brunello Cucinelli Black Monile Cuff Cardigan", price:436041, rating:3, category:"Clothing",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS2vwewopSJq4UbhZqMSEnxaZMb1Cuu9TKSbeA-G1nFAFIlYgEkMbaLG58uAmZcCjdiFjqBXUMbFdosih4j6EF287GLY912AbDYqb_xVXVm1mS9AJMjK6ZG"},



    {name:"Elie Saab - stud-embellished silk shirt", price:219975, rating:4, category:"Clothing",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSoebkES5vImvLz0b_iqcjs-vnIu7kmPh2gd4T_SnOG56tldYmnhaNArCLTM8ncNXHd6hbLfbsJeHr2CCAL5suZzRE4OU_wYoS3E-LXq0IKkxxecCM3PpSkgA"},



    {name:"Bottega Veneta High-rise straight-leg jeans Women", price:126538, rating:5, category:"Clothing",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS5tvh4pvWB3g_sHAjlNaWpCF4dIK4JGYmJvB37lmiOxQ-MEdseM7yM8GB2Q5GE0QKpSMj3jEdPoMauT2AyB9m7MSz9ct6hpCC4xNaxeIPzzBpVvLNpk_a6"},



    {name:"Christian Louboutin Bellarose 100 appliquéd satin-crepe pumps - Women - Black Heels", price:507529, rating:4, category:"Clothing",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFbglGm-8_hspyWILsWwcCZV6k8EzF8W9oJD_VkQ-uQdPh77K7LMMdlnr3g29936qibrK8SoSVU4iLqZcWteeTpsbW4TOE9AoSPtwxX8WB-dO2LpvUAcvCCg"},



    {name:"Jordan 1 Retro High Dior UK 10 | Nike Air Jordan", price:749499, rating:3, category:"Clothing",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgzB8bqlztNDQ5XsQmHXBfQaMow8JWDqr16VARDDGpyoOuDKm-WxNhHZu2BsQE774NGxFrYEDIorGnOItyhjDd_RUEKZhcNpMteHhIiWIVFw6yUEQdhKkf"},




    {name:"TOM FORD Men's Crocodile T Icon Belt", price:117002, rating:5, category:"Accessories",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTUn1NxWIqobPRIqlQEkIDodhaWCGX896u3cDAmYDn9LMaDYduD3s7nBzTV4Mi7nWtoJGDm7Hn7hvyuM2j-iSTfQVlPRyhuZzm1KjBlHwm59IHuFQNqKZz8Q"},



    {name:"Monoline Men's Diamond Neck Chain", price:400000, rating:4, category:"Accessories",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTT4Wmobf-E3n-9OGqaQ8EeLiRstuQ0PSF0vva3rSp4-2NPgYMPrwhhTxG00YyPadkFPuMRKNzSqRwjme4XfhMzza8YoRdNxcR9f9tf-58tu1qDh42wJLP5B6c"},



    {name:"Tiffany HardWear Wrap Necklace", price:2646000, rating:4, category:"Accessories",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTIfAxp9Mcc5BWoZBLjkQGl9Px3Ok-F5O4PNmJd1_VsuVMpW7h5iX86Ns8IIo0APFcVvjz5Jq9gAic6nf-Ddxr3rhXsmzppa9BGJ2AOy4qF1GmvomEWNGvj1g"},



    {name:"OSCAR DE LA RENTA Crystal Pave Alibi Cube Bag", price:709715, rating:3, category:"Accessories",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHac07O2DnQCd3M0hblK9h8m6IKRAK_r3huJ_WZVLxEARoiEABnyfoQNpjQ1JnMFOgr91Itw6HUwRuXOjxnt12NCLiD1vUCqsoRsnXaZbRDHDXqkj8Sqo_-qs-"},



    {name:"Tiffany Knot Earrings", price:378000, rating:4, category:"Accessories",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKFWNqwfTSmEzXt71K5mdeEyi9Gkmnrdv-uK4_W3Mxk2bc_2Cn7dlhGwLi8XTV-Wr7CjSvr4WXkgE_XtSC4vd-d4DeI6af4YP5jPAmdbwcR_lvhE4go4Ktaz0"},




    {name:"Roja Haute Luxe", price:326056, rating:4, category:"Beauty",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLVXd88Cfh58PiMuC46XZUs10DHA0XkyfLZnkChICWjiVLLd-lynFvU5zPK2dMa16SxhGkYXoHqltTghxRmxnbUwSJ3av4rW0pSDQr97PCdSJz2RHIxO09Fw"},



    {name:"La Prairie Skin Caviar Luxe Cream", price:102500, rating:5, category:"Beauty",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUp-tSOkeGlzX7W_kHME4LJDd_WJBwUAhnC_0SKB6vYAM83rNSKXb5MYSDrY5lcC_COlxf5SA_b-FjhVLH97hFmlakojaMSA7S9syTMh2bqmW8civQQFfO"},



    {name:"YSL Beauty Rouge Sur Mesure Custom Lip Color Creator Bundle", price:44999, rating:4, category:"Beauty",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwu-i2yF46bg7vOf0X-p5spBSOiFCxF6axlUMv51dPk6cTcjqD4V2T1Nh58uYadC9rgV9hiTQccsARgao1vPNeM8p4ElipgkEN7uzLJd1ben4D8kO7UxV8Ei4"},



    {name:"CHANEL Sublimage La CRÈME Texture Suprême Ultimate Cream", price:51550, rating:3, category:"Beauty",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQtYckXIWq_eqN5EOmoGvbg-vJihK8QJpNZ2xohy3iEQw35d_EflYW6qUXsfOzs6EqECfb_uL03RVvF8c5mBXrvttpHqvDbaWF78zpkOLSu0XVCpSbVBC3yxg"},



    {name:"CHANTECAille 24K Gold Intense Cream", price:43100, rating:4, category:"Beauty",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnc0lJ3hXISSfxGJ0UYvmL6mYSxDlRmk9VuhplYzQWAfkBtnvAVwQr6PAgE4YVEY_ZwylgWAu0-G7WZ0MLlQfnYTnG-U80SJNHN4uROvkiFPPgkEACWJjevtw"},

];
let displayList = [...products];

function showProducts(list) {
    let box = document.getElementById("products");
    box.innerHTML = "";

    list.forEach(p => {
        box.innerHTML += `
            <div class="product">
                <img src="${p.image}" width="100"><br>
                <b>${p.name}</b><br>
                Price: ₹${p.price.toLocaleString("en-IN")}<br>
                Rating: ${p.rating}<br>
                Category: ${p.category}
            </div>
        `;
    });
}
showProducts(displayList);

function sortProducts() {
    let value = document.getElementById("sort").value;

    if (value === "priceAsc")
        displayList.sort((a,b)=>a.price-b.price);

    else if (value === "priceDesc")
        displayList.sort((a,b)=>b.price-a.price);

    else if (value === "nameAsc")
        displayList.sort((a,b)=>a.name.localeCompare(b.name));

    else if (value === "nameDesc")
        displayList.sort((a,b)=>b.name.localeCompare(a.name));

    else if (value === "ratingAsc")
        displayList.sort((a,b)=>a.rating-b.rating);

    else if (value === "ratingDesc")
        displayList.sort((a,b)=>b.rating-a.rating);

    showProducts(displayList);
}

function filterProducts() {
    let category = document.getElementById("filter").value;

    if (category === "")
        displayList = [...products];
    else
        displayList = products.filter(p => p.category === category);

    showProducts(displayList);
}



