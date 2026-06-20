import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "С какого возраста можно записаться?",
      answer:
        "Мы принимаем детей с 6 лет и взрослых любого возраста. Для каждой возрастной группы — отдельные тренировки с учётом физиологии и уровня подготовки.",
    },
    {
      question: "Нужна ли подготовка для первой тренировки?",
      answer:
        "Нет, специальная подготовка не требуется. Приходите как есть — тренер начнёт с самых основ. Первое пробное занятие бесплатно.",
    },
    {
      question: "Какое снаряжение нужно купить?",
      answer:
        "На первое занятие достаточно спортивной формы и кроссовок. Перчатки и бинты можно взять в аренду в зале. После зачисления поможем подобрать собственное снаряжение.",
    },
    {
      question: "Как часто нужно тренироваться?",
      answer:
        "Оптимально — 3 раза в неделю. Новичкам подойдут 2 тренировки, чтобы тело привыкало постепенно. Расписание гибкое — выбираете удобное время.",
    },
    {
      question: "Проводятся ли спарринги с первых занятий?",
      answer:
        "Нет. Спарринги начинаются только после освоения техники и защитных навыков — обычно через 2-3 месяца тренировок. Безопасность учеников — наш приоритет.",
    },
    {
      question: "Как записаться на тренировку?",
      answer:
        "Нажмите кнопку «Записаться» на сайте, оставьте контакт — и мы свяжемся с вами в течение дня, чтобы согласовать время первого занятия.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на всё, что вас волнует перед первым шагом на ринг.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}