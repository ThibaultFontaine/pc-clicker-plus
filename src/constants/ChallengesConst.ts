import { reactive, watch } from 'vue';

export const challenges = reactive([
    { id: 1, name: 'Premier clic', description: 'Effectue ton premier clic.', objective: { type: "clicks", goal: 1 }, reward: { money: 100, xp: 10 }, progress: 0 },
    { id: 2, name: 'Petit clickeur', description: 'Effectue 100 clics.', objective: { type: "clicks", goal: 100 }, reward: { money: 500, xp: 50 }, progress: 0 },
    { id: 3, name: 'Accro au clic', description: 'Effectue 1,000 clics.', objective: { type: "clicks", goal: 1000 }, reward: { money: 2000, xp: 100 }, progress: 0 },
    { id: 4, name: 'Clic master', description: 'Effectue 10,000 clics.', objective: { type: "clicks", goal: 10000 }, reward: { money: 10000, xp: 500 }, progress: 0 },
    { id: 5, name: 'Légende du clic', description: 'Effectue 100,000 clics.', objective: { type: "clicks", goal: 100000 }, reward: { money: 50000, xp: 2000 }, progress: 0 },
    
    { id: 6, name: 'Début d’une fortune', description: 'Gagne 1,000 pièces d’argent.', objective: { type: "money", goal: 1000 }, reward: { money: 500, xp: 50 }, progress: 0 },
    { id: 7, name: 'Petit entrepreneur', description: 'Gagne 10,000 pièces d’argent.', objective: { type: "money", goal: 10000 }, reward: { money: 2000, xp: 100 }, progress: 0 },
    { id: 8, name: 'Homme d’affaires', description: 'Gagne 100,000 pièces d’argent.', objective: { type: "money", goal: 100000 }, reward: { money: 5000, xp: 300 }, progress: 0 },
    { id: 9, name: 'Millionnaire', description: 'Gagne 1,000,000 pièces d’argent.', objective: { type: "money", goal: 1000000 }, reward: { money: 10000, xp: 1000 }, progress: 0 },
    { id: 10, name: 'Magnat', description: 'Gagne 10,000,000 pièces d’argent.', objective: { type: "money", goal: 10000000 }, reward: { money: 50000, xp: 5000 }, progress: 0 },
    
    { id: 11, name: 'Petit clic automatique', description: 'Achète ton premier AutoClicker.', objective: { type: "autoClickers", goal: 1 }, reward: { money: 500, xp: 20 }, progress: 0 },
    { id: 12, name: 'Armée de clics', description: 'Possède 10 AutoClickers.', objective: { type: "autoClickers", goal: 10 }, reward: { money: 2000, xp: 100 }, progress: 0 },
    { id: 13, name: 'Machine à clics', description: 'Possède 50 AutoClickers.', objective: { type: "autoClickers", goal: 50 }, reward: { money: 10000, xp: 500 }, progress: 0 },
    { id: 14, name: 'Roi du clic', description: 'Possède 100 AutoClickers.', objective: { type: "autoClickers", goal: 100 }, reward: { money: 20000, xp: 1000 }, progress: 0},
    { id: 15, name: 'Monopole des clics', description: 'Possède 500 AutoClickers.', objective: { type: "autoClickers", goal: 500 }, reward: { money: 50000, xp: 5000 }, progress: 0 },
    { id: 16, name: 'Bill Gates', description: 'Possède 1000 AutoClickers.', objective: { type: "autoClickers", goal: 1000 }, reward: { money: 100000, xp: 7000 }, progress: 0 },
]);
  