import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  UserPlus, 
  MessageSquare, 
  FileCheck, 
  Smartphone 
} from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  step: number;
}

const features: FeatureProps[] = [
  {
    icon: <UserPlus className="h-8 w-8" />,
    title: "Cadastre-se",
    description:
      "Crie sua conta em menos de 2 minutos. Precisamos apenas de informações básicas para começar.",
    step: 1,
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Consulta Online",
    description:
      "Converse com um médico por chat ou videochamada. Explique sua necessidade de renovação.",
    step: 2,
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: "Receba sua Receita",
    description:
      "Após avaliação médica, receba sua receita digital assinada eletronicamente em minutos.",
    step: 3,
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Use em Qualquer Farmácia",
    description:
      "Apresente o QR Code ou PDF da receita em qualquer farmácia do Brasil. É válida nacionalmente!",
    step: 4,
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Como{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Funciona{" "}
        </span>
        o Processo?
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Renovar sua receita médica nunca foi tão fácil. 
        Em apenas 4 passos simples, você tem sua receita renovada.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description, step }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 relative h-full"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {step}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  {icon}
                </div>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-primary/5 rounded-lg p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">
          Importante Saber
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <h4 className="font-semibold mb-2 text-primary">✓ Receitas Permitidas</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Medicamentos de uso contínuo</li>
              <li>• Antibióticos</li>
              <li>• Anti-hipertensivos</li>
              <li>• Antidepressivos</li>
              <li>• Receita branca comum</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-destructive">✗ Não Renovamos</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Receitas de controle especial (tarja preta)</li>
              <li>• Receita azul ou amarela</li>
              <li>• Medicamentos controlados</li>
              <li>• Anabolizantes</li>
              <li>• Primeira prescrição</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};