import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [city, setCity] = useState('Москва');
  const [showForm, setShowForm] = useState(false);

  const stats = [
    { number: '515', label: 'партнёров по всему миру' },
    { number: '1 100 000+', label: 'выпускников школы' },
    { number: '70+', label: 'стран присутствия' }
  ];

  const benefits = [
    {
      icon: 'GraduationCap',
      title: 'Преподаватель ведёт урок',
      description: 'Живые онлайн-занятия с опытными педагогами, которые умеют увлечь'
    },
    {
      icon: 'Users',
      title: 'Группа или индивидуально',
      description: 'Малые группы до 6 человек или персональные занятия'
    },
    {
      icon: 'Monitor',
      title: 'Учитесь откуда угодно',
      description: 'Онлайн-формат позволяет заниматься из любой точки мира'
    },
    {
      icon: 'Rocket',
      title: 'Курсы для любого уровня',
      description: 'От первого знакомства с кодом до создания сложных проектов'
    }
  ];

  const courses = [
    {
      title: 'Scratch Junior',
      age: '6-7 лет',
      icon: 'Sparkles',
      color: 'from-purple-400 to-pink-400',
      description: 'Первые шаги в программировании через игру'
    },
    {
      title: 'Scratch',
      age: '8-9 лет',
      icon: 'Blocks',
      color: 'from-purple-500 to-violet-500',
      description: 'Создание игр и анимаций визуальным способом'
    },
    {
      title: 'Python Start',
      age: '10-12 лет',
      icon: 'Code2',
      color: 'from-violet-500 to-purple-600',
      description: 'Изучение текстового программирования на Python'
    },
    {
      title: 'Python Pro',
      age: '12-14 лет',
      icon: 'Terminal',
      color: 'from-purple-600 to-indigo-600',
      description: 'Продвинутые алгоритмы и структуры данных'
    },
    {
      title: 'Web-разработка',
      age: '13-16 лет',
      icon: 'Globe',
      color: 'from-indigo-500 to-blue-500',
      description: 'Создание сайтов и веб-приложений'
    },
    {
      title: 'Unity & GameDev',
      age: '14-17 лет',
      icon: 'Gamepad2',
      color: 'from-blue-500 to-cyan-500',
      description: '3D-игры на профессиональном движке'
    }
  ];

  const features = [
    {
      icon: 'BookOpen',
      title: 'Умный учебник',
      description: 'Интерактивная платформа с теорией, практикой и домашними заданиями'
    },
    {
      icon: 'Palette',
      title: 'Творческие проекты',
      description: 'Создавайте игры, сайты, приложения — всё что придумаете'
    },
    {
      icon: 'MessageCircle',
      title: 'Комьюнити',
      description: 'Общайтесь с единомышленниками, делитесь проектами'
    }
  ];

  const reviews = [
    {
      name: 'Елена Петрова',
      text: 'Сын занимается уже полгода. Раньше только в игры играл, теперь сам их создаёт! Заметила, как вырос интерес к учёбе в школе.',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Отличная школа! Преподаватели находят подход к каждому ребёнку. Дочка в восторге от занятий, ждёт каждый урок.',
      rating: 5
    },
    {
      name: 'Анна Иванова',
      text: 'Пробный урок понравился всей семье. Записали сына на годовой курс Python. Результаты видны уже через месяц!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                <Icon name="Code2" size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-purple-900">Кибернетика</div>
                <div className="text-xs text-gray-500">Школа программирования</div>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              <button className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                Программирование
              </button>
              <button className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                Математика
              </button>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600">
              <Icon name="MapPin" size={16} />
              {city}
            </button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Icon name="Phone" size={16} />
              <span className="hidden md:inline">+7 (499) 288-85-87</span>
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Войти
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-violet-50 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-extrabold text-purple-900 leading-tight">
                  Суперсила для суперзавтра
                </h1>
                <p className="text-xl md:text-2xl text-gray-600">
                  Со школой программирования и математики для детей от 6 до 18 лет
                </p>
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-6 bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setShowForm(true)}
                >
                  Попробовать бесплатно
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/0213ac85-17ac-478b-bd0e-8285591f7432/files/a5414546-2a0a-41b9-b2ad-cd9ba43d86fb.jpg"
                  alt="Дети учатся программированию"
                  className="rounded-3xl shadow-2xl animate-scale-in"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-violet-600 rounded-full blur-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-4 p-6 rounded-2xl hover:bg-purple-50 transition-all">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center">
                    <Icon name={benefit.icon} size={32} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-purple-900 to-violet-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Учитесь в школе международного уровня
            </h2>
            <p className="text-xl text-purple-200 mb-16 max-w-3xl mx-auto">
              Мы работаем по всему миру и помогаем детям получить навыки будущего
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-5xl md:text-6xl font-extrabold text-white">{stat.number}</div>
                  <div className="text-lg text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white" id="courses">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Выбирайте подходящий курс
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Программы для всех возрастов — от первых шагов до профессионального уровня
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border-none"
                >
                  <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                    <Icon name={course.icon} size={48} className="text-white" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl text-purple-900">{course.title}</CardTitle>
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {course.age}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <Button variant="outline" className="w-full">
                      Узнать больше
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Готовьтесь к настоящему и будущему
              </h2>
              <p className="text-xl text-gray-600">
                Наши курсы помогают детям развивать навыки, которые пригодятся в жизни
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" size={28} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  Улучшите успеваемость в школе
                </h3>
                <p className="text-gray-600 text-lg">
                  Развитие логического мышления и математических способностей положительно влияет на учёбу по всем предметам
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                  <Icon name="Briefcase" size={28} className="text-violet-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  Подготовьтесь к перспективным профессиям
                </h3>
                <p className="text-gray-600 text-lg">
                  IT-специалисты востребованы во всех отраслях. Начните карьеру в программировании уже сегодня
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Изучайте, создавайте и общайтесь
              </h2>
              <p className="text-xl text-gray-600">
                Всё в одной платформе для эффективного обучения
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                    <Icon name={feature.icon} size={36} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 max-w-4xl mx-auto">
              <img 
                src="https://cdn.poehali.dev/projects/0213ac85-17ac-478b-bd0e-8285591f7432/files/c143fe44-33bf-4d75-9a10-74af12269a3f.jpg"
                alt="Платформа обучения"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Отзывы родителей
              </h2>
              <p className="text-xl text-gray-600">
                Узнайте, что думают о нас те, кто уже с нами учится
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg text-purple-900">{review.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-purple-600 to-violet-700">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                  Запишитесь на бесплатный пробный урок
                </h2>
                <p className="text-lg text-gray-600">
                  Познакомимся с преподавателем и платформой, определим уровень ребёнка
                </p>
              </div>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-purple-900">Имя родителя</Label>
                  <Input id="name" placeholder="Введите ваше имя" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-purple-900">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="age" className="text-purple-900">Возраст ребёнка</Label>
                  <Input id="age" type="number" placeholder="Возраст" className="mt-2" />
                </div>
                <Button className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-700">
                  Записаться на урок
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon name="Code2" size={20} className="text-white" />
                </div>
                <span className="font-bold text-lg">Кибернетика</span>
              </div>
              <p className="text-purple-200 text-sm">
                Международная школа программирования и математики для детей
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Курсы</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Программирование</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Математика</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Индивидуальные занятия</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Партнёрам</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-purple-200">
                <li>+7 (499) 288-85-87</li>
                <li>info@cybernetics.ru</li>
                <li className="flex gap-4 pt-2">
                  <a href="#" className="hover:text-white transition-colors">
                    <Icon name="Send" size={20} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Icon name="Mail" size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-800 pt-8 text-center text-sm text-purple-200">
            <p>© 2024 Кибернетика. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
