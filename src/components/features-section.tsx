import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Тренировки для всех уровней",
    description: "Группы для новичков, любителей и продвинутых спортсменов. Тренер подберёт нагрузку индивидуально.",
    icon: "brain",
    badge: "Для всех",
  },
  {
    title: "Опытные тренеры",
    description: "Наши тренеры — мастера спорта с многолетним опытом подготовки чемпионов и работы с детьми.",
    icon: "lock",
    badge: "Профи",
  },
  {
    title: "Современный зал",
    description: "Профессиональные ринги, груши, лапы и всё необходимое оборудование для полноценных тренировок.",
    icon: "globe",
    badge: "Оснащение",
  },
  {
    title: "Быстрый результат",
    description: "Уже после первого месяца тренировок вы почувствуете рост силы, выносливости и уверенности.",
    icon: "zap",
    badge: "Результат",
  },
  {
    title: "Удобное расписание",
    description: "Тренировки утром, днём и вечером — выбирайте время, которое подходит именно вам.",
    icon: "link",
    badge: "Гибко",
  },
  {
    title: "Соревнования и турниры",
    description: "Регулярно участвуем в городских и региональных турнирах. Готовим к соревнованиям всех желающих.",
    icon: "target",
    badge: "Турниры",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё для того, чтобы вы росли как спортсмен — независимо от возраста и уровня подготовки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}