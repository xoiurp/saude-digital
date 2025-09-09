import { Button } from "./ui/button";
import { ArrowRight, Clock, Shield, CheckCircle2 } from "lucide-react";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-16 my-24 sm:my-32 rounded-xl"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Precisa renovar sua
            <span className="bg-gradient-to-b from-primary to-primary/80 text-transparent bg-clip-text">
              {" "}
              receita agora?{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Não fique sem sua medicação! Renove sua receita em minutos com 
            segurança e praticidade. Atendimento médico online 24 horas.
          </p>
          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="text-sm">Consulta médica em até 30 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="text-sm">Receita digital válida em todo Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-500" />
              <span className="text-sm">Disponível 24 horas, 7 dias por semana</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a href="http://wa.me/5516981747790" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full md:mr-4 md:w-auto">
              Renovar Receita Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
