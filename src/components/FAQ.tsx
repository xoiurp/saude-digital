import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "A receita digital é válida em todo o Brasil?",
    answer: "Sim! Nossas receitas digitais possuem assinatura eletrônica com certificado ICP-Brasil, sendo aceitas em todas as farmácias do território nacional, conforme regulamentação da ANVISA e CFM.",
    value: "item-1",
  },
  {
    question: "Quanto tempo demora para receber minha receita?",
    answer: "Após a consulta online com nosso médico, você recebe sua receita digital em até 30 minutos. Em casos de alta demanda, pode levar até 2 horas. Consultas prioritárias são atendidas em até 15 minutos.",
    value: "item-2",
  },
  {
    question: "Quais tipos de receitas podem ser renovadas?",
    answer: "Renovamos receitas brancas comuns para medicamentos de uso contínuo como anti-hipertensivos, antidiabéticos, antibióticos, antidepressivos e outros. NÃO renovamos receitas de controle especial (tarja preta), receitas azuis ou amarelas.",
    value: "item-3",
  },
  {
    question: "Preciso ter consultado presencialmente antes?",
    answer: "Sim, para renovação é necessário que você já tenha uma prescrição anterior do medicamento. Nossa plataforma é para RENOVAÇÃO de receitas, não para primeira prescrição.",
    value: "item-4",
  },
  {
    question: "Como funciona a consulta online?",
    answer: "A consulta pode ser realizada por chat ou videochamada, conforme sua preferência. O médico irá revisar seu histórico, fazer perguntas sobre seu tratamento atual e, se apropriado, emitir a renovação da receita.",
    value: "item-5",
  },
  {
    question: "É seguro e legal?",
    answer: "Totalmente! Seguimos todas as regulamentações do CFM (Conselho Federal de Medicina) e ANVISA. Todos os nossos médicos possuem CRM ativo e são treinados em telemedicina. Seus dados são protegidos com criptografia de ponta a ponta.",
    value: "item-6",
  },
  {
    question: "Posso cancelar minha assinatura?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas. O cancelamento pode ser feito diretamente em sua conta ou entrando em contato com nosso suporte.",
    value: "item-7",
  },
  {
    question: "A plataforma funciona 24 horas?",
    answer: "Sim! Temos médicos disponíveis 24 horas por dia, 7 dias por semana, incluindo feriados. Você pode renovar sua receita a qualquer momento que precisar.",
    value: "item-8",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Perguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frequentes
        </span>
      </h2>
      <p className="text-xl text-muted-foreground text-center mb-8">
        Tire suas dúvidas sobre renovação de receitas médicas online
      </p>

      <div className="max-w-3xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
            >
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground mb-4">
          Ainda tem dúvidas?
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Falar com Suporte
          </button>
          <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
            Ver Mais Perguntas
          </button>
        </div>
      </div>
    </section>
  );
};