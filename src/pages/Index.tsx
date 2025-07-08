import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const congratulations = [
    {
      name: "Анна Киреева",
      message:
        "Дарья, поздравляю с 17-летием! Желаю тебе счастья, любви и исполнения всех желаний! 🎉",
    },
    {
      name: "Максим",
      message:
        "С днем рождения! Пусть этот год принесет много радости и новых открытий! 🎂",
    },
    {
      name: "Елена",
      message:
        "Дарочка, желаю тебе яркой и насыщенной жизни! Пусть все мечты сбудутся! ✨",
    },
    {
      name: "Александр",
      message:
        "Поздравляю с совершеннолетием! Новых горизонтов и успехов во всем! 🌟",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold font-montserrat bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              17!
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-4">
              С Днём Рождения,
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-pink-600 mb-8">
              Дарья Вячеславовна!
            </h3>
            <p className="text-xl font-open-sans text-gray-600 mb-12 max-w-2xl mx-auto">
              Сегодня особенный день! Желаем тебе ярких эмоций, незабываемых
              моментов и исполнения всех желаний!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg">
                <Icon name="Camera" className="mr-2" />
                Фотогалерея
              </Button>
              <Button
                variant="outline"
                className="border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-lg"
              >
                <Icon name="Heart" className="mr-2" />
                Поздравления
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-10 left-10 animate-bounce">
          <Icon name="Sparkles" size={32} className="text-pink-500" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce delay-700">
          <Icon name="Star" size={28} className="text-purple-500" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
          <Icon name="Gift" size={30} className="text-blue-500" />
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            <Icon name="Camera" className="inline mr-3 text-pink-500" />
            Фотогалерея
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <img
                  src="https://cdn.poehali.dev/files/32845eb3-0284-46dc-a3bc-3984443562fc.jpg"
                  alt="Дарья"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Наша именинница
                  </h3>
                  <p className="text-gray-600">
                    Красивая и стильная в свой особенный день
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <img
                  src="/img/08db3106-687e-4922-b94b-499d3abdd328.jpg"
                  alt="Празднование"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Празднование
                  </h3>
                  <p className="text-gray-600">
                    Моменты радости и веселья с друзьями
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="Plus"
                      size={48}
                      className="text-pink-500 mx-auto mb-2"
                    />
                    <p className="text-gray-600">Больше фото скоро...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Congratulations Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            <Icon
              name="MessageCircle"
              className="inline mr-3 text-purple-500"
            />
            Поздравления от друзей
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {congratulations.map((congrat, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">
                        {congrat.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {congrat.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full">
              <Icon name="PlusCircle" className="mr-2" />
              Добавить поздравление
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400 mb-4">
            С любовью для Дарьи Вячеславовны ✨
          </p>
          <div className="flex justify-center gap-4">
            <Icon name="Heart" className="text-pink-500" />
            <Icon name="Star" className="text-purple-500" />
            <Icon name="Sparkles" className="text-blue-500" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
