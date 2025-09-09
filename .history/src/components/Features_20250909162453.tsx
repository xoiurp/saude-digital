import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Shield, 
  Smartphone, 
  CheckCircle2, 
  FileText, 
  Users,
  Zap,
  Lock,
  Globe
} from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureProps[] = [
  {
    title: "Atendimento 100% Online",
    description:
      "Consulte um médico sem sair de casa. Atendimento por videochamada ou chat, disponível 24 horas por dia.",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
  },
  {
    title: "Receitas Válidas Nacionalmente",
    description:
      "Receitas digitais com assinatura eletrônica ICP-Brasil, aceitas em todas as farmácias do país.",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
  {
    title: "Rápido e Seguro",
    description:
      "Renovação em minutos com total segurança. Seus dados médicos são protegidos com criptografia de ponta.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
];

const benefitsList: string[] = [
  "Sem filas de espera",
  "Médicos CRM ativos",
  "Receita digital válida",
  "Atendimento 24/7",
  "Privacidade garantida",
  "Preço acessível",
  "Suporte ao paciente",
  "Histórico médico",
  "Lembretes de renovação",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Por que escolher nossa{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          plataforma médica?
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {benefitsList.map((benefit: string) => (
          <div key={benefit}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              <CheckCircle2 className="h-3 w-3 mr-1" />
              {benefit}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card key={title} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {icon}
                <span>{title}</span>
              </CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter className="mt-auto">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="h-4 w-4" />
                  <span>Privado</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  <span>Legal</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              Mais de 50.000 pacientes atendidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Junte-se a milhares de brasileiros que já renovam suas receitas médicas 
              de forma prática, rápida e segura através da nossa plataforma.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
