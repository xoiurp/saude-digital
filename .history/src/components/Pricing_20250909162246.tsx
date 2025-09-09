import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  limitations?: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Consulta Avulsa",
    popular: 0,
    price: 39.90,
    description:
      "Ideal para quem precisa renovar receitas esporadicamente.",
    buttonText: "Renovar Agora",
    benefitList: [
      "1 renovação de receita",
      "Atendimento em até 30 min",
      "Receita digital válida",
      "Suporte via chat",
      "Válida por 30 dias",
    ],
  },
  {
    title: "Plano Mensal",
    popular: 1,
    price: 79.90,
    description:
      "Perfeito para pacientes com medicação de uso contínuo.",
    buttonText: "Assinar Plano",
    benefitList: [
      "Renovações ilimitadas",
      "Atendimento prioritário",
      "Histórico médico digital",
      "Lembretes automáticos",
      "Suporte 24/7",
      "Desconto em parceiros",
    ],
  },
  {
    title: "Plano Família",
    popular: 0,
    price: 149.90,
    description:
      "Cuide de toda sua família com um único plano completo.",
    buttonText: "Escolher Família",
    benefitList: [
      "Até 5 membros da família",
      "Renovações ilimitadas",
      "Atendimento VIP",
      "Prontuário familiar",
      "Orientação farmacêutica",
      "Descontos especiais",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Escolha o
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Melhor Plano{" "}
        </span>
        para Você
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Renovação de receitas médicas com preços acessíveis e transparentes.
        Sem taxas escondidas.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="outline"
                    className="text-s text-primary"
                  >
                    Mais popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">R$ {pricing.price}</span>
                <span className="text-muted-foreground"> /{pricing.title === "Consulta Avulsa" ? "consulta" : "mês"}</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a href="http://wa.me/5516981747790" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button 
                  className="w-full" 
                  variant={pricing.popular === PopularPlanType.YES ? "default" : "outline"}
                >
                  {pricing.buttonText}
                </Button>
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500 mr-2" />
                    <h3 className="text-sm">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-muted-foreground mb-4">
          Todos os planos incluem:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="text-sm">
            <Check className="h-3 w-3 mr-1" />
            Médicos CRM ativos
          </Badge>
          <Badge variant="outline" className="text-sm">
            <Check className="h-3 w-3 mr-1" />
            Receita válida nacionalmente
          </Badge>
          <Badge variant="outline" className="text-sm">
            <Check className="h-3 w-3 mr-1" />
            Assinatura digital ICP-Brasil
          </Badge>
          <Badge variant="outline" className="text-sm">
            <Check className="h-3 w-3 mr-1" />
            Garantia de satisfação
          </Badge>
        </div>
      </div>
    </section>
  );
};
