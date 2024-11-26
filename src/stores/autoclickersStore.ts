import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Autoclicker {
  id: number;
  name: string;
  price: number;
  cps: number;
  description: string;
  image: string;
  currentAmount: number;
}

export const useAutoclickersStore = defineStore('autoclickers', () => {

  const autoclickers = ref<Autoclicker[]>([
    {
      id: 1,
      name: 'Stagiaire',
      price: 50,
      cps: 1,
      description: "Le stagiaire : il clique... mais il prend aussi des pauses café !",
      image: new URL('../assets/autoClickerImages/Stagiaire.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 2,
      name: 'Alternant',
      price: 200,
      cps: 5,
      description: "L'alternant : l'expert en multi-tâches et en recherche d'email à répondre.",
      image: new URL('../assets/autoClickerImages/Alternant.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 3,
      name: 'Développeur',
      price: 1000,
      cps: 20,
      description: "Le développeur : une machine à coder, mais qui oublie parfois de faire ses commits.",
      image: new URL('../assets/autoClickerImages/Developpeur.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 4,
      name: 'Senior',
      price: 5000,
      cps: 50,
      description: "Le senior : plus d'expérience, moins de patience pour les bugs.",
      image: new URL('../assets/autoClickerImages/Senior.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 5,
      name: 'Lead Dev',
      price: 15000,
      cps: 100,
      description: "Le Lead Dev : responsable du code, de la qualité... et des réunions inutiles.",
      image: new URL('../assets/autoClickerImages/lead dev.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 6,
      name: 'CTO',
      price: 25000,
      cps: 500,
      description: "Le CTO : clique sur des idées brillantes, mais trop occupé pour coder.",
      image: new URL('../assets/autoClickerImages/CTO.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 7,
      name: 'DevOps',
      price: 50000,
      cps: 1000,
      description: "Le DevOps : il clique pour déployer, mais ça prend toujours 3 heures.",
      image: new URL('../assets/autoClickerImages/DevOps.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 8,
      name: 'Testeur',
      price: 100000,
      cps: 2000,
      description: "Le QA : clique sans cesse pour tester, mais il se plaint que tout est cassé.",
      image: new URL('../assets/autoClickerImages/QA_enginer.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 9,
      name: 'Consultant',
      price: 200000,
      cps: 5000,
      description: "Le consultant : il clique tout en vous facturant par heure.",
      image: new URL('../assets/autoClickerImages/Consultant.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 10,
      name: 'Freelance',
      price: 500000,
      cps: 10000,
      description: "Le freelance : clique vite, mais envoie la facture avant même de terminer.",
      image: new URL('../assets/autoClickerImages/Freelance.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 11,
      name: 'Blockchain Dev',
      price: 1000000,
      cps: 20000,
      description: "Le dev blockchain : clique, mais ça ne marche jamais comme prévu.",
      image: new URL('../assets/autoClickerImages/Blockchain.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 12,
      name: 'Ingenieur IA',
      price: 2000000,
      cps: 50000,
      description: "L'Ingenieur IA : clique, mais il pense qu'il est déjà à la retraite grâce à l'IA.",
      image: new URL('../assets/autoClickerImages/Dev_IA.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 13,
      name: 'Tech Lead',
      price: 5000000,
      cps: 100000,
      description: "Le Tech Lead : clique avec confiance, mais son équipe doit coder derrière.",
      image: new URL('../assets/autoClickerImages/Tech_Lead.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 14,
      name: 'Designer',
      price: 10000000,
      cps: 250000,
      description: "Le designer : clique sur le PC, mais ne sait pas où est le bouton droit.",
      image: new URL('../assets/autoClickerImages/Designer.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 15,
      name: 'Stagiaire 2.0',
      price: 25000000,
      cps: 500000,
      description: "Le stagiaire 2.0 : il clique pour le WiFi et la machine à café.",
      image: new URL('../assets/autoClickerImages/Stagiaire2_0.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 16,
      name: 'Étudiant en dev',
      price: 50000000,
      cps: 1000000,
      description: "L'étudiant en dev : clique, mais passe 70% de son temps à chercher des solutions StackOverflow.",
      image: new URL('../assets/autoClickerImages/Student.png', import.meta.url).href,
      currentAmount: 0
    },
    {
      id: 17,
      name: 'Guru',
      price: 100000000,
      cps: 10000000,
      description: "Le Guru : clique avec sagesse... mais personne ne comprend comment il le fait.",
      image: new URL('../assets/autoClickerImages/Guru.png', import.meta.url).href,
      currentAmount: 0
    }
  ]);

  // Add autoclicker
  function addAutoclicker(id: number) {
    autoclickers.value[id].currentAmount++;
  }

  return { autoclickers, addAutoclicker };
});
