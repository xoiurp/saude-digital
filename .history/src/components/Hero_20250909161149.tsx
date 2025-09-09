import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { CheckCircle2, Clock, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Renove sua{" "}
            <span className="inline bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] text-transparent bg-clip-text">
              receita médica
            </span>{" "}
            online
          </h1>
          <h2 className="text-2xl md:text-3xl font-normal mt-4 text-muted-foreground">
            Rápido, seguro e sem sair de casa
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Consulta médica online com profissionais qualificados. 
          Renovação de receitas em minutos, válida em todo território nacional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>Médicos CRM ativos</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-5 " />
            <span>Atendimento 24h</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-5 w-5 text-purple-500" />
            <span>100% Seguro</span>
          </div>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] hover:from-[#0284C7] hover:to-[#0EA5E9]">
            Renovar Receita Agora
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="w-full md:w-auto"
          >
            Como Funciona?
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};