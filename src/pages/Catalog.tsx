import HeaderWithCategories from "../components/HeaderWithCategories";
import ProductCard from "../components/ProductCard";

// Массив товаров — строго как в твоём макете (пополняй/дополняй при необходимости)
const products = [
  // Популярное
  {
    id: 1,
    name: "Пирожное «Картошка»",
    description: "Классическое пирожное из нежного бисквита с ароматным какао и сливочным кремом. Лёгкий вкус детства в каждой крошке! Идеально к чашке кофе или чая.ое с какао и орехами.",
    weight: "75 г",
    price: 75,
    image: "/images/pastry/potato.png",
    category: "Популярное"
  },
  {
    id: 2,
    name: "Наполеон",
    description: "Слоёный Легендарный десерт с нежными слоями теста и ароматным заварным кремом. Классика, проверенная временем — воздушный, пропитанный и по-настоящему домашний вкус.",
    weight: "180 г",
    price: 760,
    image: "/images/cakes/napoleon.png",
    category: "Популярное"
  },
  {
    id: 3,
    name: "Панакота Ягодная",
    description: "Нежное сливочное желе в сочетании с ярким ягодным слоем, украшенное свежими ягодами и шоколадом. Лёгкий и освежающий десерт для особых моментов.",
    weight: "160 г",
    price: 360,
    image: "/images/deserts/panacota.png",
    category: "Популярное"
  },

  {
    id: 4,
    name: "Тирамису",
    description: "Классическое пирожное из нежного бисквита с ароматным какао и сливочным кремом. Лёгкий вкус детства в каждой крошке! Идеально к чашке кофе или чая.",
    weight: "120 г",
    price: 360,
    image: "/images/deserts/tiramisu.png",
    category: "Популярное"
  },

  // Десерты
  {
    id: 5,
    name: "Желе Ягодное",
    description: "Легкий и освежающий десерт с насыщенным вишневым вкусом, украшенный целыми ягодами для контраста текстур и сочного аромата",
    weight: "210 г",
    price: 160,
    image: "/images/deserts/raspberry_jelly.png",
    category: "Десерты"
  },
  {
    id: 6,
    name: "Крем-брюле",
    description: "Классический десерт с насыщенным сливочным вкусом, покрытый тонкой карамелизированной корочкой. Дополнен свежей клубникой и мятой для контраста вкусов и аромата.",
    weight: "150 г",
    price: 390,
    image: "/images/deserts/creme_brulee.png",
    category: "Десерты"
  },
  {
    id: 7,
    name: "Миндальный штрейзель",
    description: "Легкий десерт с воздушным сырно-сливочным кремом, нежным пюре маракуйи, сочными кусочками персиков и хрустящим миндальным штрейзелем, украшенный лепестками миндаля",
    weight: "175 г",
    price: 280,
    image: "/images/deserts/almond_streusel.png",
    category: "Десерты"
  },
  {
    id: 8,
    name: "Пряная груша",
    description: "Нежный десерт с пряными дольками груши, хрустящими миндальными чипсами и мягким сырным кремом",
    weight: "160 г",
    price: 250,
    image: "/images/deserts/spicy_pear.png",
    category: "Десерты"
  },
  {
    id: 9,
    name: "Мусс из белого шоколада",
    description: "Нежный десерт с воздушным муссом из белого шоколада, покрытый освежающим пюре маракуйи и украшенный ягодами и зеленью для яркого акцента",
    weight: "140 г",
    price: 325,
    image: "/images/deserts/white_chocolate_mousse.png",
    category: "Десерты"
  },
  {
    id: 10,
    name: "Мусс из темного шоколада",
    description: "Эффектный десерт с насыщенным муссом из темного шоколада, воздушным бисквитом, слоями сливочного пюре маракуйи и хрустящей вафельной крошкой",
    weight: "140 г",
    price: 340,
    image: "/images/deserts/dark_chocolate_mousse.png",
    category: "Десерты"
  },
  {
    id: 11,
    name: "Пюре груши на ряженке",
    description: "Нежный десерт из густой ряженки, покрытый освежающим грушевым пюре и украшенный карамелизированным орехом для легкого хруста и тонкого аромата",
    weight: "100 г",
    price: 240,
    image: "/images/deserts/mashed_pears.png",
    category: "Десерты"
  },
  {
    id: 12,
    name: "Десерт с голубикой",
    description: "Легкий и освежающий десерт с нежным сметанно-сливочным кремом, хрустящей гранолой и сочной голубикой. Идеальный выбор для тех, кто ценит свежесть ягод и нежную текстуру крема.",
    weight: "130 г",
    price: 400,
    image: "/images/deserts/blueberries.png",
    category: "Десерты"
  },
  {
    id: 13,
    name: "Птичье молоко",
    description: "Изысканный десерт с воздушными взбитыми сливками, свежими кусочками персиков и ароматным клубничным пюре",
    weight: "100 г",
    price: 260,
    image: "/images/deserts/birds_milk.png",
    category: "Десерты"
  },
  {
    id: 14,
    name: "Малиновый мильфей",
    description: "Нежный десерт с чередующимися слоями воздушного сливочного крема и насыщенного малинового пюре, дополненный кусочками бисквита и свежими ягодами малины",
    weight: "160 г",
    price: 280,
    image: "/images/deserts/raspberry_milfey.png",
    category: "Десерты"
  },
  {
    id: 15,
    name: "Птифура с ягодой",
    description: "Изысканные мини-десерты с легким безе и свежими ягодами. Каждое пирожное украшено малиной, голубикой или физалисом, создавая яркий акцент для вашего сладкого стола.",
    weight: "350 г",
    price: 630,
    image: "/images/deserts/ptifura.png",
    category: "Десерты"
  },

  // Печенье
  {
    id: 16,
    name: "Песочное печенье “Персик”",
    description: "Хрустящие песочные печенья с нежной сырно-сливочной начинкой, дополненные ароматной варёной сгущёнкой и кусочками грецкого ореха",
    weight: "90 г",
    price: 160,
    image: "/images/cookies/peach_cookie.png",
    category: "Печенье"
  },
  {
    id: 17,
    name: "Трубочка с вишней",
    description: "Хрустящее тесто на сметане с насыщенной вишнёвой начинкой. Идеальный выбор для тех, кто любит сочетание кислинки свежих ягод и нежного теста.",
    weight: "150 г",
    price: 175,
    image: "/images/cookies/cherry_straw.png",
    category: "Печенье"
  },
  {
    id: 18,
    name: "Меренг французский",
    description: "Лёгкие и хрустящие безе с добавлением миндальной муки и тёмного шоколада, украшенные цельными ядрами миндаля. Нежное сочетание воздушной текстуры и насыщенного орехового вкуса.",
    weight: "200 г",
    price: 460,
    image: "/images/cookies/meringue.png",
    category: "Печенье"
  },
  {
    id: 19,
    name: "Печенье миндальное “Идеал”",
    description: "Хрустящее миндальное печенье, покрытое крошкой из какао-бобов и лёгким сахарным покрытием. Идеально сочетается с чашечкой кофе или чая, добавляя нотки ореховой сладости каждому моменту.",
    weight: "200 г",
    price: 650,
    image: "/images/cookies/almond_cookie.png",
    category: "Печенье"
  },
  {
    id: 20,
    name: "Рогалик миндальный",
    description: "Хрустящее печенье с насыщенным миндальным вкусом, частично покрытое темным шоколадом для яркого контраста вкусов",
    weight: "200 г",
    price: 240,
    image: "/images/cookies/almond_bagel.png",
    category: "Печенье"
  },
  {
    id: 21,
    name: "Печенье Сырное",
    description: "Хрустящее печенье из нежного творожного теста, посыпанное сахарной пудрой",
    weight: "200 г",
    price: 360,
    image: "/images/cookies/cheese_bagel.png",
    category: "Печенье"
  },
  {
    id: 22,
    name: "Печенье Бискотти",
    description: "Хрустящее печенье с кусочками цукатов, миндальными лепестками и медовой пропиткой",
    weight: "150 г",
    price: 330,
    image: "/images/cookies/biscotti.png",
    category: "Печенье"
  },

  // Пирожные
  {
    id: 23,
    name: "Эклер",
    description: "Классический французский десерт из воздушного заварного теста с нежным заварным кремом, покрытый насыщенной тёмной шоколадной глазурью и украшенный лепестками миндаля.",
    weight: "50 г",
    price: 180,
    image: "/images/pastry/eclair.png",
    category: "Пирожные"
  },
  {
    id: 24,
    name: "Анна Павлова",
    description: "Изысканный десерт с лёгкой хрустящей меренгой, нежным кремом маскарпоне и свежими ягодами.",
    weight: "90 г",
    price: 300,
    image: "/images/pastry/anna_pavlova.png",
    category: "Пирожные"
  },
  {
    id: 25,
    name: "Трюфель Атом",
    description: "Роскошное сочетание молочного и тёмного шоколада с нежной ванильной сливочной начинкой, пропитанной ликёром Куантро.",
    weight: "50 г",
    price: 300,
    image: "/images/pastry/truffel.png",
    category: "Пирожные"
  },
  {
    id: 26,
    name: "Макаронс",
    description: "Тонкие хрустящие оболочки из миндальной муки, соединённые нежной шоколадной начинкой. Лёгкие, яркие и тающие во рту — идеальный выбор для гурманов и ценителей французской классики.",
    weight: "50 г",
    price: 240,
    image: "/images/pastry/makarons.png",
    category: "Пирожные"
  },


  // Торты
  {
    id: 27,
    name: "Эрмитаж",
    description: "Изысканный десерт с медовыми пышками, пропитанными сырно-сливочным кремом, и воздушной обсыпкой из нежного безе. Лёгкий, хрустящий и насыщенный — для тех, кто ценит классику и утончённый вкус.",
    weight: "200 г",
    price: 480,
    image: "/images/cakes/ermitage.png",
    category: "Торты"
  },
  {
    id: 28,
    name: "Пятигорчанка",
    description: "Лёгкий орехово-белковый корж, сочная свежемороженая малина и нежный заварной крем, дополненные грецким орехом и ароматной ноткой коньяка.",
    weight: "500 г",
    price: 850,
    image: "/images/cakes/pyatigorchanka.png",
    category: "Торты"
  },
  {
    id: 29,
    name: "Пятигорчанка шоколадная",
    description: "Нежные шоколадные коржи с насыщенным какао, ореховой крошкой и ароматом коньяка, дополненные кислинкой чёрной смородины.",
    weight: "500 г",
    price: 850,
    image: "/images/cakes/pyatigorchanka_chocolate.png",
    category: "Торты"
  },
  {
    id: 30,
    name: "Королевский",
    description: "Настоящее воплощение роскоши и вкуса. Богатый шоколадный торт с нежными сливками, экзотическим пюре из маракуйи, хрустящей вафельной крошкой и ароматным фундуком.",
    weight: "350 г",
    price: 1240,
    image: "/images/cakes/king.png",
    category: "Торты"
  },
  {
    id: 31,
    name: "Птичье молоко",
    description: "Лёгкое воздушное белковое суфле, покрытое насыщенным шоколадным ганашем и украшенное свежими ягодами голубики. Идеальное сочетание нежности и насыщенного шоколадного вкуса.",
    weight: "1 кг",
    price: 1800,
    image: "/images/cakes/birds_milk.png",
    category: "Торты"
  },
  {
    id: 32,
    name: "Карамелька",
    description: "Нежные слои пышек с сырно-сливочным кремом, пропитанные карамелью и покрытые вафельной крошкой. Лёгкий хруст и насыщенный сливочно-карамельный вкус в каждом кусочке.",
    weight: "200 г",
    price: 480,
    image: "/images/cakes/caramelka.png",
    category: "Торты"
  },
  {
    id: 33,
    name: "Соло",
    description: "Яркий и изысканный десерт с насыщенным вкусом чёрной смородины. Лёгкий ягодный мусс, мягкие коржи и нежное сливочное суфле создают идеальную гармонию вкусов и текстур.",
    weight: "300 г",
    price: 1100,
    image: "/images/cakes/solo.png",
    category: "Торты"
  },
  // ... Добавь все товары из макета по аналогии!
];

const groups = [
  { id: "popular", label: "Популярное" },
  { id: "desserts", label: "Десерты" },
  { id: "cookies", label: "Печенье" },
  { id: "pastry", label: "Пирожные" },
  { id: "cakes", label: "Торты" },
];

export default function Catalog() {
  return (
    <>
      <HeaderWithCategories />
      <main className="mainpage">
        {groups.map(group => (
          <section key={group.id} className="main-section">
            <h2 id={group.id} className="section-title">{group.label}</h2>
            <div className="main-products-row">
              {products
                .filter(p => p.category === group.label)
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
