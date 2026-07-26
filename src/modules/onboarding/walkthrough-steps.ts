import HelpAddTasks from "@/assets/images/help-add-tasks.png";
import HelpSetup from "@/assets/images/help-setup.png";
import HelpTasks from "@/assets/images/help-tasks.png";
import { WalkthroughStep } from "@/components/shared/walkthrough";

export const appWalkthroughSteps: WalkthroughStep[] = [
  {
    icon: "hand-heart",
    title: "Bem-vindo(a) ao SeniorEase",
    description:
      "Vamos te mostrar, em poucos passos, como organizar seu dia sem complicação.",
  },
  {
    icon: "square-plus",
    image: HelpAddTasks,
    title: "Crie suas tarefas",
    description:
      "Toque no botão + para adicionar o que precisa fazer. Um título e uma descrição já bastam.",
  },
  {
    icon: "clock-check",
    image: HelpTasks,
    title: "Acompanhe tudo em um só lugar",
    description:
      "Veja o que ainda falta e o que já foi concluído, e marque suas tarefas ao clicar e acessar os detalhes.",
  },
  {
    icon: "sliders",
    image: HelpSetup,
    title: "Deixe do seu jeito",
    description:
      "Em Configurações, ajuste o tamanho da fonte, o contraste e o espaçamento sempre que quiser.",
  },
];
