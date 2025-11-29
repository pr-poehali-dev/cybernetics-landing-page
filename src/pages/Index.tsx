import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToForm = () => {
    const element = document.getElementById('registration-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: 'Globe',
      title: 'Занимайтесь из любой точки мира',
      description: 'Онлайн-формат позволяет учиться где угодно'
    },
    {
      icon: 'Rocket',
      title: 'Берем учеников без опыта и доводим до первых проектов',
      description: 'Пошаговое обучение от азов до реальных работ'
    },
    {
      icon: 'Users',
      title: 'Ценим групповую работу, проводим занятия в группах до 4 человек',
      description: 'Индивидуальный подход в малых группах'
    },
    {
      icon: 'ChartLine',
      title: 'Смотрите за прогрессом вашего ребенка вместе с нами',
      description: 'Регулярные отчёты и доступ к платформе'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-violet-700 flex items-center justify-center shadow-lg">
              <Icon name="Cpu" size={26} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-purple-900">Кибернетика</div>
              <div className="text-xs text-gray-500">Программируем молодые умы</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              О Нас
            </a>
            <a href="#registration-form" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Запишись на вводное занятие
            </a>
            <a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Оферта
            </a>
            <Button variant="outline" size="sm" className="gap-2 border-purple-200 hover:bg-purple-50">
              <Icon name="Send" size={16} />
              @kibernetika_kids
            </Button>
          </nav>
          
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-yellow-50/20 py-24 md:py-32">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
                  <span className="text-sm font-semibold text-purple-700">От 9 до 16 лет</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                  Наша задача - ваше <span className="text-purple-600 relative">
                    будущее
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10"></span>
                  </span>!
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                  Исполняем мечты детей от 9 до 16 лет
                </p>
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-7 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-xl hover:shadow-2xl transition-all rounded-full"
                  onClick={scrollToForm}
                >
                  Начните бесплатно!
                </Button>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="https://cdn.poehali.dev/projects/0213ac85-17ac-478b-bd0e-8285591f7432/files/3a15f443-7652-433d-9d22-b523d4a1c9e1.jpg"
                    alt="Ребенок программирует"
                    className="rounded-3xl shadow-2xl w-full animate-scale-in"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-purple-400 to-violet-500 rounded-3xl -z-10 blur-2xl opacity-30"></div>
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-3xl -z-10 blur-2xl opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/50"
                >
                  <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-lg">
                      <Icon name={feature.icon} size={36} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight px-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm px-2">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-violet-800 text-white relative overflow-hidden" id="about">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://cdn.poehali.dev/projects/0213ac85-17ac-478b-bd0e-8285591f7432/files/58a365f9-ef50-45d5-b236-0c9840b9b475.jpg"
              alt="Coding pattern"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-sm font-semibold text-yellow-300">Почему выбирают нас</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Программирование — это навык будущего
              </h2>
              
              <p className="text-xl md:text-2xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
                Мы помогаем детям научиться программировать с нуля, развивая логическое мышление, 
                креативность и навыки решения проблем в дружелюбной онлайн-среде
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div className="space-y-3">
                  <div className="text-5xl font-black text-yellow-300">9-16</div>
                  <div className="text-lg text-purple-200">лет — возраст учеников</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-black text-yellow-300">4</div>
                  <div className="text-lg text-purple-200">человека в группе</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-black text-yellow-300">100%</div>
                  <div className="text-lg text-purple-200">онлайн-формат</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                  Что дают наши занятия?
                </h2>
                <p className="text-xl text-gray-600">
                  Практические навыки, которые пригодятся в жизни
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-10 space-y-6 border-2 border-purple-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center">
                    <Icon name="Brain" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Развитие логического мышления
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Программирование учит структурировать мысли, находить решения сложных задач 
                    и мыслить алгоритмически
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-10 space-y-6 border-2 border-yellow-200">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center">
                    <Icon name="Lightbulb" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Творческий подход
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Создание собственных игр, сайтов и приложений развивает креативность 
                    и позволяет воплощать идеи в жизнь
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 space-y-6 border-2 border-blue-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-700 flex items-center justify-center">
                    <Icon name="Target" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Достижение целей
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Каждый проект — это маленькая победа, которая учит доводить дела до конца 
                    и гордиться результатом
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-10 space-y-6 border-2 border-pink-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-700 flex items-center justify-center">
                    <Icon name="Users2" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Командная работа
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    В малых группах дети учатся общаться, помогать друг другу 
                    и работать над общими проектами
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Как проходят занятия
                </h2>
                <p className="text-xl text-gray-600">
                  Простой и понятный процесс обучения
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative">
                  <div className="bg-white rounded-3xl p-8 space-y-4 shadow-lg h-full">
                    <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Бесплатное вводное занятие
                    </h3>
                    <p className="text-gray-600">
                      Познакомим с преподавателем, расскажем о программе и определим уровень ребёнка
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-purple-300"></div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-3xl p-8 space-y-4 shadow-lg h-full">
                    <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Подбираем группу
                    </h3>
                    <p className="text-gray-600">
                      Формируем малые группы по возрасту и уровню подготовки — до 4 человек
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-purple-300"></div>
                </div>
                
                <div className="bg-white rounded-3xl p-8 space-y-4 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Начинаем обучение
                  </h3>
                  <p className="text-gray-600">
                    Регулярные онлайн-занятия с домашними заданиями и поддержкой преподавателя
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://cdn.poehali.dev/projects/0213ac85-17ac-478b-bd0e-8285591f7432/files/0912ab69-a1f2-4d61-9fcd-b4d31d309e3c.jpg"
                    alt="Групповое обучение"
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
                    <span className="text-sm font-semibold text-purple-700">Наш подход</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Обучение через практику
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Icon name="Check" size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Реальные проекты</h4>
                        <p className="text-gray-600">Каждый урок — это создание игры, сайта или приложения</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Icon name="Check" size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Персональная поддержка</h4>
                        <p className="text-gray-600">Малые группы позволяют уделить внимание каждому</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Icon name="Check" size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Без стресса и давления</h4>
                        <p className="text-gray-600">Обучение в комфортном темпе с интересными заданиями</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-violet-800 text-white" id="registration-form">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="text-center mb-8 space-y-4">
                  <div className="inline-block px-6 py-3 bg-purple-100 rounded-full">
                    <span className="text-sm font-semibold text-purple-700">Бесплатное занятие</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                    Запишитесь на вводное занятие
                  </h2>
                  <p className="text-lg text-gray-600">
                    Оставьте заявку, и мы свяжемся с вами в ближайшее время
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="parent-name" className="text-gray-900 text-base font-semibold">
                      Имя родителя
                    </Label>
                    <Input 
                      id="parent-name" 
                      placeholder="Как к вам обращаться?" 
                      className="mt-2 h-12 text-base" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="child-name" className="text-gray-900 text-base font-semibold">
                      Имя ребёнка
                    </Label>
                    <Input 
                      id="child-name" 
                      placeholder="Как зовут вашего ребёнка?" 
                      className="mt-2 h-12 text-base" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="child-age" className="text-gray-900 text-base font-semibold">
                      Возраст ребёнка
                    </Label>
                    <Input 
                      id="child-age" 
                      type="number" 
                      placeholder="Полных лет" 
                      className="mt-2 h-12 text-base" 
                      min="9"
                      max="16"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 text-base font-semibold">
                      Телефон или Telegram
                    </Label>
                    <Input 
                      id="phone" 
                      placeholder="+7 (___) ___-__-__ или @username" 
                      className="mt-2 h-12 text-base" 
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full py-7 text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Записаться бесплатно
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center">
                  <Icon name="Cpu" size={26} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl">Кибернетика</div>
                  <div className="text-sm text-gray-400">Программируем молодые умы</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Онлайн-школа программирования для детей от 9 до 16 лет
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#registration-form" className="text-gray-400 hover:text-white transition-colors">
                    Записаться на занятие
                  </a>
                </li>
                <li>
                  <a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Оферта
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-400">
                  <Icon name="Send" size={18} />
                  <a href="https://t.me/kibernetika_kids" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    @kibernetika_kids
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Icon name="Mail" size={18} />
                  info@kibernetika.ru
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2024 Кибернетика. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
