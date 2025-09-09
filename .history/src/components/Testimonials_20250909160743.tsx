import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
    name: "Carlos Silva",
    userName: "@carlos_silva",
    comment: "A renovação da minha receita foi muito rápida e prática. O atendimento é excelente e a plataforma é super fácil de usar. Recomendo!",
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    name: "Ana Costa",
    userName: "@ana_costa",
    comment: "Fiquei impressionada com a agilidade do serviço. Em menos de 30 minutos, eu já estava com a minha receita digital em mãos. Fantástico!",
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    name: "Juliana Pereira",
    userName: "@juliana_pereira",
    comment: "O sistema é muito seguro e confiável. A receita digital é aceita em todas as farmácias, o que facilita muito a minha vida.",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    name: "Marcos Andrade",
    userName: "@marcos_andrade",
    comment: "Com a correria do dia a dia, ter um serviço de renovação de receitas online é essencial. A plataforma superou minhas expectativas.",
  },
  {
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    name: "Ricardo Oliveira",
    userName: "@ricardo_oliveira",
    comment: "O suporte ao cliente é incrível. Tive uma dúvida e fui atendido rapidamente pelo chat. Serviço de primeira qualidade!",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "Fernanda Lima",
    userName: "@fernanda_lima",
    comment: "Finalmente uma solução prática para quem faz uso de medicação contínua. O plano mensal vale muito a pena. Estou muito satisfeita!",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        O que nossos
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          pacientes dizem{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Veja como a nossa plataforma tem ajudado milhares de pessoas a renovar suas receitas com praticidade e segurança.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
