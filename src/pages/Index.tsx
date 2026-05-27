import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/0d49ebf3-7ce8-4f91-af35-f8bfc378f171/files/a8001e18-3452-4374-bd2f-8908d1873cc6.jpg";
const GALLERY_IMAGE1 = "https://cdn.poehali.dev/projects/0d49ebf3-7ce8-4f91-af35-f8bfc378f171/files/b63dfc0f-dabf-49ac-9c12-37d66e8ab83a.jpg";
const GALLERY_IMAGE2 = "https://cdn.poehali.dev/projects/0d49ebf3-7ce8-4f91-af35-f8bfc378f171/files/52b9db73-6266-4842-8e43-ef80b51d5a00.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "methodology", label: "Методика" },
  { id: "parents", label: "Родителям" },
  { id: "gallery", label: "Галерея" },
  { id: "news", label: "Новости" },
];

const METHODS = [
  {
    icon: "Brain",
    title: "Индивидуальный подход",
    text: "Каждый ребёнок уникален. Программа обучения адаптируется под особенности восприятия, темп и возможности каждого ученика.",
  },
  {
    icon: "Puzzle",
    title: "Игровое обучение",
    text: "Использование дидактических игр, сенсорных материалов и интерактивных заданий для естественного освоения знаний.",
  },
  {
    icon: "Heart",
    title: "Эмоциональная поддержка",
    text: "Безопасная, тёплая атмосфера в классе помогает детям раскрыться и поверить в свои силы.",
  },
  {
    icon: "Users",
    title: "Взаимодействие с семьёй",
    text: "Регулярная связь с родителями, совместные консультации и открытость — основа успешного развития ребёнка.",
  },
];

const PARENT_INFO = [
  {
    icon: "Clock",
    title: "Режим занятий",
    text: "Уроки проходят с 8:30 до 13:00, пять дней в неделю. Расписание учитывает особенности концентрации внимания детей.",
  },
  {
    icon: "Phone",
    title: "Консультации",
    text: "Индивидуальные встречи — каждую пятницу с 13:30 до 15:00. Запись по телефону или в мессенджере.",
  },
  {
    icon: "BookOpen",
    title: "Домашние задания",
    text: "Задания подбираются индивидуально, не превышают 20–30 минут. Подробные инструкции прилагаются.",
  },
  {
    icon: "Bell",
    title: "Важные события",
    text: "Все объявления и изменения в расписании публикуются в разделе «Новости» и отправляются в родительский чат.",
  },
];

const NEWS = [
  {
    date: "20 мая 2026",
    tag: "Мероприятие",
    title: "Весенний праздник «Мир вокруг нас»",
    text: "В пятницу, 24 мая, в 10:00 приглашаем родителей на итоговый праздник. Дети покажут спектакль и выставку своих работ.",
  },
  {
    date: "12 мая 2026",
    tag: "Объявление",
    title: "Изменение расписания на следующей неделе",
    text: "В связи с педагогическим советом 27 мая занятия начнутся в 9:00. Просьба учесть при планировании.",
  },
  {
    date: "5 мая 2026",
    tag: "Новость",
    title: "Новые материалы в учебном уголке",
    text: "Пополнили класс сенсорными играми и развивающими пособиями по логопедической программе Т.А. Ткаченко.",
  },
  {
    date: "28 апреля 2026",
    tag: "Успехи",
    title: "Наши дети на районной олимпиаде",
    text: "Три ученика класса приняли участие в олимпиаде по изобразительному искусству и получили дипломы участников.",
  },
];

const GALLERY_ITEMS = [
  { src: GALLERY_IMAGE1, caption: "Выставка работ учеников" },
  { src: GALLERY_IMAGE2, caption: "Учебные материалы класса" },
  { src: HERO_IMAGE, caption: "Наш уютный класс" },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-display text-xl font-semibold text-primary tracking-wide"
          >
            Анна Петрова
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-body text-sm transition-colors duration-200 relative pb-1 ${
                  activeSection === item.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-body text-base text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-16">
        <div className="relative h-[92vh] min-h-[580px] overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Класс"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,45%,15%)]/80 via-[hsl(210,45%,15%)]/50 to-transparent" />
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="max-w-xl">
                <p className="font-body text-sm uppercase tracking-[0.2em] text-white/70 mb-4 animate-fade-in-up">
                  Коррекционное образование · 1–4 класс
                </p>
                <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 animate-fade-in-up delay-100">
                  Анна<br />
                  <span className="italic">Сергеевна</span><br />
                  Петрова
                </h1>
                <span className="block w-12 h-0.5 bg-white/60 mb-6 animate-fade-in-up delay-200" />
                <p className="font-body text-lg text-white/85 leading-relaxed mb-8 animate-fade-in-up delay-300">
                  Учитель начальных классов коррекционного образования.<br />
                  Стаж — 14 лет. Помогаю каждому ребёнку найти свой путь к знаниям.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
                  <button
                    onClick={() => scrollTo("parents")}
                    className="px-6 py-3 bg-white text-primary font-body font-medium text-sm rounded-full hover:bg-secondary transition-colors duration-200"
                  >
                    Информация для родителей
                  </button>
                  <button
                    onClick={() => scrollTo("news")}
                    className="px-6 py-3 border border-white/50 text-white font-body text-sm rounded-full hover:bg-white/10 transition-colors duration-200"
                  >
                    Новости класса
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Подходы к обучению
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Методика преподавания
            </h2>
            <span className="block w-12 h-0.5 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {METHODS.map((method, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <Icon name={method.icon} fallback="Star" size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                  {method.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                  {method.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary rounded-2xl px-10 py-12 text-center">
            <p className="font-display text-2xl md:text-3xl italic text-primary-foreground leading-relaxed">
              «Каждый ребёнок талантлив по-своему — задача педагога помочь этому таланту раскрыться»
            </p>
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section id="parents" className="py-24 bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Важная информация
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Родителям
            </h2>
            <span className="block w-12 h-0.5 bg-primary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PARENT_INFO.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-7 border border-border hover:border-primary/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon} fallback="Star" size={18} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl font-medium text-foreground mb-2">
                Есть вопросы?
              </h3>
              <p className="font-body text-muted-foreground text-[15px]">
                Я всегда рада ответить. Напишите или позвоните в удобное время.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+79001234567"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                <Icon name="Phone" size={16} />
                +7 (900) 123-45-67
              </a>
              <a
                href="mailto:teacher@school.ru"
                className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-body text-sm rounded-full hover:bg-secondary transition-colors"
              >
                <Icon name="Mail" size={16} />
                teacher@school.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Наша жизнь
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Галерея
            </h2>
            <span className="block w-12 h-0.5 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="font-body text-white text-sm font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-center text-muted-foreground text-sm mt-8">
            Фотографии добавляются регулярно — следите за обновлениями
          </p>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-24 bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Актуально
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Новости и объявления
            </h2>
            <span className="block w-12 h-0.5 bg-primary" />
          </div>

          <div className="space-y-5">
            {NEWS.map((item, i) => (
              <article
                key={i}
                className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-sm transition-all duration-200 flex flex-col sm:flex-row gap-6"
              >
                <div className="sm:w-40 flex-shrink-0">
                  <span className="inline-block font-body text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mb-2">
                    {item.tag}
                  </span>
                  <p className="font-body text-xs text-muted-foreground">{item.date}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-medium text-foreground mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-2">Анна Сергеевна Петрова</h3>
              <p className="font-body text-primary-foreground/70 text-sm">
                Учитель начальных классов<br />
                коррекционного образования
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm font-body text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                <span>г. Москва, ГБОУ Школа № 123</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                <span>+7 (900) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                <span>teacher@school.ru</span>
              </div>
            </div>
            <nav className="flex flex-col gap-2 text-sm font-body text-primary-foreground/70">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center">
            <p className="font-body text-xs text-primary-foreground/50">
              © 2026 · Анна Сергеевна Петрова
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}