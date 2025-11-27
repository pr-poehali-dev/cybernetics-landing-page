import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const programs = [
    {
      title: 'Scratch',
      icon: 'Blocks',
      description: 'Визуальное программирование для начинающих',
      age: '6-9 лет',
      color: 'bg-purple-100'
    },
    {
      title: 'Python',
      icon: 'Code2',
      description: 'Изучение основ программирования на Python',
      age: '10-13 лет',
      color: 'bg-violet-100'
    },
    {
      title: 'Web-разработка',
      icon: 'Globe',
      description: 'Создание сайтов с HTML, CSS и JavaScript',
      age: '12-16 лет',
      color: 'bg-purple-200'
    },
    {
      title: 'Unity & GameDev',
      icon: 'Gamepad2',
      description: 'Разработка игр на движке Unity',
      age: '13-17 лет',
      color: 'bg-violet-200'
    }
  ];

  const methods = [
    {
      icon: 'Target',
      title: 'Практический подход',
      description: 'Каждый урок — это реальный проект, который можно показать друзьям'
    },
    {
      icon: 'Users',
      title: 'Малые группы',
      description: 'До 6 человек в группе для максимального внимания каждому ученику'
    },
    {
      icon: 'Trophy',
      title: 'Геймификация',
      description: 'Система достижений и наград мотивирует учиться с удовольствием'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Выбирайте удобное время занятий и формат обучения'
    }
  ];

  const pricing = [
    {
      title: '1 месяц',
      price: '6 000',
      duration: '4 занятия',
      features: ['Доступ к платформе', '1 проект в портфолио', 'Сертификат участника'],
      popular: false
    },
    {
      title: '2 месяца',
      price: '12 000',
      duration: '8 занятий',
      features: ['Доступ к платформе', '2-3 проекта в портфолио', 'Менторская поддержка', 'Сертификат о прохождении'],
      popular: true
    },
    {
      title: '4 месяца',
      price: '20 000',
      duration: '16 занятий',
      features: ['Доступ к платформе', '4-5 проектов в портфолио', 'Персональный ментор', 'Итоговый проект', 'Именной сертификат'],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'С какого возраста можно начинать обучение?',
      answer: 'Мы принимаем детей от 6 лет. Для самых маленьких есть курс Scratch с визуальным программированием, не требующий навыков чтения кода.'
    },
    {
      question: 'Нужны ли предварительные знания программирования?',
      answer: 'Нет, все наши курсы начинаются с нуля. Мы подберём программу под уровень вашего ребёнка.'
    },
    {
      question: 'Какое оборудование необходимо?',
      answer: 'Достаточно компьютера или ноутбука с доступом в интернет. Все программы, которые мы используем, бесплатные.'
    },
    {
      question: 'Можно ли попробовать перед покупкой?',
      answer: 'Да, мы проводим бесплатное пробное занятие, чтобы вы могли оценить формат и познакомиться с преподавателем.'
    },
    {
      question: 'Как проходят занятия?',
      answer: 'Занятия проходят онлайн в режиме реального времени. Преподаватель работает с небольшой группой (до 6 человек), каждому уделяется внимание.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              К
            </div>
            <span className="text-xl font-bold text-purple-900">Кибернетика</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              О нас
            </button>
            <a 
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Оферта
            </a>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Send" size={16} />
              Telegram
            </Button>
          </nav>
          
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-purple-900 leading-tight">
                Программирование<br />
                для детей
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                Обучаем созданию игр, сайтов и приложений в онлайн-формате с индивидуальным подходом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
                  Записаться на пробный урок
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 gap-2">
                  <Icon name="Play" size={20} />
                  Смотреть видео
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white" id="programs">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Линейка наших программ
              </h2>
              <p className="text-lg text-gray-600">
                Выберите направление по возрасту и интересам вашего ребёнка
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-purple-100"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-4`}>
                      <Icon name={program.icon} size={32} className="text-purple-700" />
                    </div>
                    <CardTitle className="text-xl text-purple-900">{program.title}</CardTitle>
                    <CardDescription className="text-sm text-purple-600 font-medium">
                      {program.age}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-violet-700 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Наши методики
              </h2>
              <p className="text-lg text-purple-100">
                Как мы делаем обучение эффективным и интересным
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {methods.map((method, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon name={method.icon} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                  <p className="text-purple-100 text-lg">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white" id="pricing">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Ценовая политика
              </h2>
              <p className="text-lg text-gray-600">
                Выберите удобный формат обучения
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative hover:shadow-xl transition-all ${
                    plan.popular 
                      ? 'border-purple-600 border-2 shadow-lg scale-105' 
                      : 'border-purple-100'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-900">{plan.title}</CardTitle>
                    <CardDescription className="text-gray-600">{plan.duration}</CardDescription>
                    <div className="pt-4">
                      <span className="text-5xl font-bold text-purple-600">{plan.price}</span>
                      <span className="text-gray-600 ml-2">₽</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6" 
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      Выбрать тариф
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-purple-50" id="faq">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Найди свой вопрос
              </h2>
              <p className="text-lg text-gray-600">
                Ответы на часто задаваемые вопросы
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-purple-100 px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-purple-900 hover:text-purple-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-xl">
                  К
                </div>
                <span className="text-lg font-bold">Кибернетика</span>
              </div>
              <p className="text-purple-200">
                Онлайн-школа программирования для детей
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Документы</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    Оферта
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
            
            <div id="about">
              <h3 className="font-bold mb-4">О нас</h3>
              <p className="text-purple-200">
                Мы обучаем детей программированию с 2020 года. Более 1000 учеников создали свои первые проекты вместе с нами.
              </p>
            </div>
          </div>
          
          <div className="border-t border-purple-800 pt-8 text-center text-purple-200">
            <p>© 2024 Кибернетика. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
