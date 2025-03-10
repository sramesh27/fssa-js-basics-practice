import { Classification } from "./classification.mjs";
                     
const salesData = [
    ["Product", "Sales"],
    ["Milkybar", "200"],
    ["Silk", "400"],
    ["Dairy Milk", "700"],
    ["Eclaires", "800"],
    ["Nesley", "1000"],
    ["Kitkat", "100"],
    ["Five Star", "200"],
    ["Snikkers", "500"],
    ["Munch", "300"],
    ["Perk", "400"],
    ["Center Fresh", "600"],
    ["Mint", "800"],
    ["Polo", "200"],
    ["Tictac", "400"],
    ["Gems", "100"],
    ["Kinder Joy", "900"],
    ["Marbels", "100"],
    ["Melody", "500"],
    ["Mentos", "300"],
    ["Coffee Bite", "200"],
    ["Luvit", "800"],
    ["Kopiko", "1000"],
    ["Kacha Mango", "800"],
    ["Lollipop", "1000"],
  ]; 

  
  let salesDataWithMonth = [
    ["Product", "Month", "Sales"],
    ["Milkybar", "January", "200"],
    ["Silk", "January", "400"],
    ["Dairy Milk", "January", "700"],
    ["Eclaires", "January", "800"],
    ["Nesley", "January", "1000"],
    ["Kitkat", "January", "100"],
    ["Five Star", "January", "200"],
    ["Snikkers", "January", "500"],
    ["Munch", "January", "300"],
    ["Perk", "January", "400"],
    ["Center Fresh", "January", "600"],
    ["Mint", "January", "800"],
    ["Polo", "January", "200"],
    ["Tictac", "January", "400"],
    ["Gems", "January", "100"],
    ["Kinder Joy", "January", "900"],
    ["Marbels", "January", "100"],
    ["Melody", "January", "500"],
    ["Mentos", "January", "300"],
    ["Coffee Bite", "January", "200"],
    ["Luvit", "January", "800"],
    ["Kopiko", "January", "1000"],
    ["Kacha Mango", "January", "800"],
    ["Lollipop", "January", "1000"],
   
    ["Milkybar", "February", "300"],
    ["Silk", "February", "500"],
    ["Dairy Milk", "February", "800"],
    ["Eclaires", "February", "900"],
    ["Nesley", "February", "1200"],
    ["Kitkat", "February", "150"],
    ["Five Star", "February", "250"],
    ["Snikkers", "February", "600"],
    ["Munch", "February", "400"],
    ["Perk", "February", "500"],
    ["Center Fresh", "February", "700"],
    ["Mint", "February", "900"],
    ["Polo", "February", "250"],
    ["Tictac", "February", "500"],
    ["Gems", "February", "150"],
    ["Kinder Joy", "February", "100"],
    ["Marbels", "February", "150"],
    ["Melody", "February", "700"],
    ["Mentos", "February", "400"],
    ["Coffee Bite", "February", "300"],
    ["Luvit", "February", "1000"],
    ["Kopiko", "February", "100"],
    ["Kacha Mango", "February", "900"],
    ["Lollipop", "February", "100"],
   
    ["Milkybar", "March", "250"],
    ["Silk", "March", "450"],
    ["Dairy Milk", "March", "750"],
    ["Eclaires", "March", "850"],
    ["Nesley", "March", "100"],
    ["Kitkat", "March", "120"],
    ["Five Star", "March", "180"],
    ["Snikkers", "March", "550"],
    ["Munch", "March", "350"],
    ["Perk", "March", "450"],
    ["Center Fresh", "March", "650"],
    ["Mint", "March", "850"],
    ["Polo", "March", "180"],
    ["Tictac", "March", "350"],
    ["Gems", "March", "120"],
    ["Kinder Joy", "March", "950"],
    ["Marbels", "March", "120"],
    ["Melody", "March", "550"],
    ["Mentos", "March", "350"],
    ["Coffee Bite", "March", "250"],
    ["Luvit", "March", "850"],
    ["Kopiko", "March", "100"],
    ["Kacha Mango", "March", "850"],
    ["Lollipop", "March", "100"],
   
    ["Milkybar", "April", "250"],
    ["Silk", "April", "450"],
    ["Dairy Milk", "April", "750"],
    ["Eclaires", "April", "850"],
    ["Nesley", "April", "100"],
    ["Kitkat", "April", "120"],
    ["Five Star", "April", "180"],
    ["Snikkers", "April", "550"],
    ["Munch", "April", "350"],
    ["Perk", "April", "450"],
    ["Center Fresh", "April", "650"],
    ["Mint", "April", "850"],
    ["Polo", "April", "180"],
    ["Tictac", "April", "350"],
    ["Gems", "April", "120"],
    ["Kinder Joy", "April", "950"],
    ["Marbels", "April", "120"],
    ["Melody", "April", "550"],
    ["Mentos", "April", "350"],
    ["Coffee Bite", "April", "250"],
    ["Luvit", "April", "850"],
    ["Kopiko", "April", "1100"],
    ["Kacha Mango", "April", "850"],
    ["Lollipop", "April", "100"],
   
    ["Milkybar", "May", "300"],
    ["Silk", "May", "550"],
    ["Dairy Milk", "May", "850"],
    ["Eclaires", "May", "950"],
    ["Nesley", "May", "1200"],
    ["Kitkat", "May", "150"],
    ["Five Star", "May", "250"],
    ["Snikkers", "May", "600"],
    ["Munch", "May", "400"],
    ["Perk", "May", "500"],
    ["Center Fresh", "May", "700"],
    ["Mint", "May", "900"],
    ["Polo", "May", "250"],
    ["Tictac", "May", "500"],
    ["Gems", "May", "150"],
    ["Kinder Joy", "May", "100"],
    ["Marbels", "May", "150"],
    ["Melody", "May", "700"],
    ["Mentos", "May", "400"],
    ["Coffee Bite", "May", "300"],
    ["Luvit", "May", "1000"],
    ["Kopiko", "May", "100"],
    ["Kacha Mango", "May", "900"],
    ["Lollipop", "May", "1000"],
   
    ["Milkybar", "June", "350"],
    ["Silk", "June", "600"],
    ["Dairy Milk", "June", "900"],
    ["Eclaires", "June", "700"],
    ["Nesley", "June", "800"],
    ["Kitkat", "June", "180"],
    ["Five Star", "June", "280"],
    ["Snikkers", "June", "650"],
    ["Munch", "June", "450"],
    ["Perk", "June", "550"],
    ["Center Fresh", "June", "750"],
    ["Mint", "June", "950"],
    ["Polo", "June", "280"],
    ["Tictac", "June", "550"],
    ["Gems", "June", "180"],
    ["Kinder Joy", "June", "800"],
    ["Marbels", "June", "180"],
    ["Melody", "June", "650"],
    ["Mentos", "June", "450"],
    ["Coffee Bite", "June", "350"],
    ["Luvit", "June", "950"],
    ["Kopiko", "June", "800"],
    ["Kacha Mango", "June", "950"],
    ["Lollipop", "June", "800"],
   
    ["Milkybar", "July", "400"],
    ["Silk", "July", "700"],
    ["Dairy Milk", "July", "800"],
    ["Eclaires", "July", "700"],
    ["Nesley", "July", "800"],
    ["Kitkat", "July", "200"],
    ["Five Star", "July", "300"],
    ["Snikkers", "July", "700"],
    ["Munch", "July", "500"],
    ["Perk", "July", "600"],
    ["Center Fresh", "July", "800"],
    ["Mint", "July", "800"],
    ["Polo", "July", "300"],
    ["Tictac", "July", "600"],
    ["Gems", "July", "200"],
    ["Kinder Joy", "July", "800"],
    ["Marbels", "July", "200"],
    ["Melody", "July", "700"],
    ["Mentos", "July", "500"],
    ["Coffee Bite", "July", "400"],
    ["Luvit", "July", "800"],
    ["Kopiko", "July", "800"],
    ["Kacha Mango", "July", "800"],
    ["Lollipop", "July", "800"],
   
    ["Milkybar", "August", "500"],
    ["Silk", "August", "800"],
    ["Dairy Milk", "August", "900"],
    ["Eclaires", "August", "700"],
    ["Nesley", "August", "800"],
    ["Kitkat", "August", "200"],
    ["Five Star", "August", "300"],
    ["Snikkers", "August", "700"],
    ["Munch", "August", "500"],
    ["Perk", "August", "600"],
    ["Center Fresh", "August", "800"],
    ["Mint", "August", "800"],
    ["Polo", "August", "300"],
    ["Tictac", "August", "600"],
    ["Gems", "August", "200"],
    ["Kinder Joy", "August", "800"],
    ["Marbels", "August", "200"],
    ["Melody", "August", "700"],
    ["Mentos", "August", "500"],
    ["Coffee Bite", "August", "400"],
    ["Luvit", "August", "800"],
    ["Kopiko", "August", "800"],
    ["Kacha Mango", "August", "800"],
    ["Lollipop", "August", "800"],
   
    ["Milkybar", "September", "450"],
    ["Silk", "September", "700"],
    ["Dairy Milk", "September", "800"],
    ["Eclaires", "September", "600"],
    ["Nesley", "September", "700"],
    ["Kitkat", "September", "150"],
    ["Five Star", "September", "250"],
    ["Snikkers", "September", "600"],
    ["Munch", "September", "400"],
    ["Perk", "September", "500"],
    ["Center Fresh", "September", "700"],
    ["Mint", "September", "700"],
    ["Polo", "September", "250"],
    ["Tictac", "September", "500"],
    ["Gems", "September", "150"],
    ["Kinder Joy", "September", "700"],
    ["Marbels", "September", "150"],
    ["Melody", "September", "600"],
    ["Mentos", "September", "400"],
    ["Coffee Bite", "September", "300"],
    ["Luvit", "September", "700"],
    ["Kopiko", "September", "800"],
    ["Kacha Mango", "September", "700"],
    ["Lollipop", "September", "800"],
   
    ["Milkybar", "October", "600"],
    ["Silk", "October", "850"],
    ["Dairy Milk", "October", "950"],
    ["Eclaires", "October", "750"],
    ["Nesley", "October", "800"],
    ["Kitkat", "October", "250"],
    ["Five Star", "October", "350"],
    ["Snikkers", "October", "750"],
    ["Munch", "October", "550"],
    ["Perk", "October", "650"],
    ["Center Fresh", "October", "850"],
    ["Mint", "October", "900"],
    ["Polo", "October", "350"],
    ["Tictac", "October", "650"],
    ["Gems", "October", "250"],
    ["Kinder Joy", "October", "850"],
    ["Marbels", "October", "250"],
    ["Melody", "October", "750"],
    ["Mentos", "October", "550"],
    ["Coffee Bite", "October", "450"],
    ["Luvit", "October", "850"],
    ["Kopiko", "October", "900"],
    ["Kacha Mango", "October", "850"],
    ["Lollipop", "October", "900"],
   
    ["Milkybar", "November", "500"],
    ["Silk", "November", "750"],
    ["Dairy Milk", "November", "850"],
    ["Eclaires", "November", "650"],
    ["Nesley", "November", "700"],
    ["Kitkat", "November", "200"],
    ["Five Star", "November", "300"],
    ["Snikkers", "November", "700"],
    ["Munch", "November", "500"],
    ["Perk", "November", "600"],
    ["Center Fresh", "November", "800"],
    ["Mint", "November", "800"],
    ["Polo", "November", "300"],
    ["Tictac", "November", "600"],
    ["Gems", "November", "200"],
    ["Kinder Joy", "November", "800"],
    ["Marbels", "November", "200"],
    ["Melody", "November", "650"],
    ["Mentos", "November", "450"],
    ["Coffee Bite", "November", "350"],
    ["Luvit", "November", "800"],
    ["Kopiko", "November", "900"],
    ["Kacha Mango", "November", "700"],
    ["Lollipop", "November", "900"],
   
    ["Milkybar", "December", "550"],
    ["Silk", "December", "800"],
    ["Dairy Milk", "December", "900"],
    ["Eclaires", "December", "700"],
    ["Nesley", "December", "750"],
    ["Kitkat", "December", "300"],
    ["Five Star", "December", "400"],
    ["Snikkers", "December", "800"],
    ["Munch", "December", "600"],
    ["Perk", "December", "700"],
    ["Center Fresh", "December", "900"],
    ["Mint", "December", "950"],
    ["Polo", "December", "400"],
    ["Tictac", "December", "700"],
    ["Gems", "December", "300"],
    ["Kinder Joy", "December", "900"],
    ["Marbels", "December", "300"],
    ["Melody", "December", "750"],
    ["Mentos", "December", "550"],
    ["Coffee Bite", "December", "450"],
    ["Luvit", "December", "900"],
    ["Kopiko", "December", "950"],
    ["Kacha Mango", "December", "800"],
    ["Lollipop", "December", "950"],
  ];

  let rank = [
    {
      column : 'Poor',
      from : 0,
      to : 300
    },
    {
      column : 'Neutral',
      from : 300,
      to : 500
    },
    {
      column : 'Good',
      from : 500,
      to : 1000
    }
]

  let group = new Classification(salesData);
   group.addGroupColumn(rank);
   group.getColumnIndex('Sales');
   group.addRankColumn('Sales');
   group.top5('Rank');
   
   console.log(group.header);
   console.log(group.values);
