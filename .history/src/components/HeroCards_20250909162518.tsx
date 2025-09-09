import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
            />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Dra. Marina Silva</CardTitle>
            <CardDescription>CRM 123456/SP</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          "Atendimento médico online com toda segurança e praticidade que você precisa."
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=200&fit=crop"
            alt="médico"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Médicos Qualificados</CardTitle>
          <CardDescription className="font-normal text-primary">
            CRM Ativo e Verificado
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Todos os nossos médicos possuem registro ativo no CRM e são especializados em telemedicina.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <Badge variant="secondary" className="text-sm">
              + de 1000 médicos
            </Badge>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Receita Digital
            <Badge
              variant="outline"
              className="text-s text-primary"
            >
              Mais popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">R$ 39,90</span>
            <span className="text-muted-foreground"> /consulta</span>
          </div>

          <CardDescription>
            Renovação rápida e segura da sua receita médica
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Começar Agora</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Consulta online em minutos",
              "Receita válida nacionalmente",
              "Assinatura digital ICP-Brasil",
            ].map((benefit: string) => (
              <span
                key={benefit}
                className="flex"
              >
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Atendimento 24 horas</CardTitle>
            <CardDescription className="text-md mt-2">
              Renove sua receita a qualquer hora do dia ou da noite, sem filas de espera.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
