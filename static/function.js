// Code By Webdevtrick ( https://webdevtrick.com )
const langs = [
	"Hello World",
	"مرحبا بالعالم",
	"Salam Dünya",
	"Прывітанне Сусвет",
	"Здравей свят",
	"ওহে বিশ্ব",
	"Zdravo svijete",
	"Hola món",
	"Kumusta Kalibutan",
	"Ahoj světe",
	"Helo Byd",
	"Hej Verden",
	"Hallo Welt",
	"Γειά σου Κόσμε",
	"Hello World",
	"Hello World",
	"Hola Mundo",
	"Tere, Maailm",
	"Kaixo Mundua",
	"سلام دنیا",
	"Hei maailma",
	"Bonjour le monde",
	"Dia duit an Domhan",
	"Ola mundo",
	"હેલો વર્લ્ડ",
	"Sannu Duniya",
	"नमस्ते दुनिया",
	"Hello World",
	"Pozdrav svijete",
	"Bonjou Mondyal la",
	"Helló Világ",
	"Բարեւ աշխարհ",
	"Halo Dunia",
	"Ndewo Ụwa",
	"Halló heimur",
	"Ciao mondo",
	"שלום עולם",
	"こんにちは世界",
	"Hello World",
	"Გამარჯობა მსოფლიო",
	"Сәлем Әлем",
	"សួស្តី​ពិភពលោក",
	"ಹಲೋ ವರ್ಲ್ಡ್",
	"안녕하세요 월드",
	"Ciao mondo",
	"ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ",
	"Labas pasauli",
	"Sveika pasaule",
	"Hello World",
	"Kia Ora",
	"Здраво свету",
	"ഹലോ വേൾഡ്",
	"Сайн уу",
	"हॅलो वर्ल्ड",
	"Hai dunia",
	"Hello dinja",
	"မင်္ဂလာပါကမ္ဘာလောက",
	"नमस्कार संसार",
	"Hallo Wereld",
	"Hei Verden",
	"Moni Dziko Lapansi",
	"ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ",
	"Witaj świecie",
	"Olá Mundo",
	"Salut Lume",
	"Привет, мир",
	"හෙලෝ වර්ල්ඩ්",
	"Ahoj svet",
	"Pozdravljen, svet",
	"Waad salaaman tihiin",
	"Përshendetje Botë",
	"Здраво Свете",
	"Lefatše Lumela",
	"Halo Dunya",
	"Hej världen",
	"Salamu, Dunia",
	"ஹலோ வேர்ல்ட்",
	"హలో వరల్డ్",
	"Салом Ҷаҳон",
	"สวัสดีชาวโลก",
	"Kamusta Mundo",
	"Selam Dünya",
	"Привіт Світ",
	"ہیلو ورلڈ",
	"Salom Dunyo",
	"Chào thế giới",
	"העלא וועלט",
	"Mo ki O Ile Aiye",
	"你好，世界",
	"你好，世界",
	"你好，世界",
	"Sawubona Mhlaba"
];


let charSize = 20;
let fallRate = charSize / 2;
let streams;

// -------------------------------
class Char {
	constructor(value, x, y, speed) {
		this.value = value;
		this.x = x;
		this.y = y;
		this.speed = speed;
	}

	draw() {
		const flick = random(100);
		// 10 percent chance of flickering a number instead
		if (flick < 10) {
			fill(120, 30, 100);
			text(round(random(9)), this.x, this.y);
		} else {
			text(this.value, this.x, this.y);
		}

		// fall down
		this.y = this.y > height ? 0 : this.y + this.speed;
	}
}

// -------------------------------------
class Stream {
	constructor(text, x) {
		const y = random(text.length);
		const speed = random(2, 10);
		this.chars = [];

		for (let i = text.length; i >= 0; i--) {
			this.chars.push(
				new Char(text[i], x, (y + text.length - i) * charSize, speed)
			);
		}
	}

	draw() {
		fill(120, 100, 100);
		this.chars.forEach((c, i) => {
			// 30 percent chance of lit tail
			const lit = random(100);
			if (lit < 30) {
				if (i === this.chars.length - 1) {
					fill(120, 30, 100);
				} else {
					fill(120, 100, 90);
				}
			}

			c.draw();
		});
	}
}

function createStreams() {
	// create random streams from langs that span the width
	for (let i = 0; i < width; i += charSize) {
		streams.push(new Stream(random(langs), i));
	}
}

function reset() {
	streams = [];
	createStreams();
}

function setup() {
	createCanvas(innerWidth, innerHeight);
	reset();
	frameRate(20);
	colorMode(HSB);
	noStroke();
	textSize(charSize);
	textFont("monospace");
	background(0);
}

function draw() {
	background(0, 0.4);
	streams.forEach((s) => s.draw());
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
	background(0);
	reset();
}
