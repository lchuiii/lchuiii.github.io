function a() {
  alert("註冊成功!");
}

var newAddr = [
  { city: "縣市名稱", township: "地區" },
  { city: "臺北市", township: "中正區" },
  { city: "臺北市", township: "中山區" },
  { city: "臺北市", township: "松山區" },
  { city: "臺北市", township: "大安區" },
  { city: "臺北市", township: "萬華區" },
  { city: "臺北市", township: "信義區" },
  { city: "臺北市", township: "士林區" },
  { city: "臺北市", township: "北投區" },
  { city: "臺北市", township: "內湖區" },
  { city: "臺北市", township: "南港區" },
  { city: "臺北市", township: "文山區" },
  { city: "基隆市", township: "仁愛區" },
  { city: "基隆市", township: "信義區" },
  { city: "基隆市", township: "中正區" },
  { city: "基隆市", township: "中山區" },
  { city: "基隆市", township: "安樂區" },
  { city: "基隆市", township: "暖暖區" },
  { city: "基隆市", township: "七堵區" },
  { city: "新北市", township: "萬里區" },
  { city: "新北市", township: "金山區" },
  { city: "新北市", township: "板橋區" },
  { city: "新北市", township: "汐止區" },
  { city: "新北市", township: "深坑區" },
  { city: "新北市", township: "石碇區" },
  { city: "新北市", township: "瑞芳區" },
  { city: "新北市", township: "平溪區" },
  { city: "新北市", township: "雙溪區" },
  { city: "新北市", township: "貢寮區" },
  { city: "新北市", township: "新店區" },
  { city: "新北市", township: "坪林區" },
  { city: "新北市", township: "烏來區" },
  { city: "新北市", township: "永和區" },
  { city: "新北市", township: "中和區" },
  { city: "新北市", township: "土城區" },
  { city: "新北市", township: "三峽區" },
  { city: "新北市", township: "樹林區" },
  { city: "新北市", township: "鶯歌區" },
  { city: "新北市", township: "三重區" },
  { city: "新北市", township: "新莊區" },
  { city: "新北市", township: "泰山區" },
  { city: "新北市", township: "林口區" },
  { city: "新北市", township: "蘆洲區" },
  { city: "新北市", township: "五股區" },
  { city: "新北市", township: "八里區" },
  { city: "新北市", township: "淡水區" },
  { city: "新北市", township: "三芝區" },
  { city: "新北市", township: "石門區" },

  { city: "桃園市", township: "中壢區" },
  { city: "桃園市", township: "平鎮區" },
  { city: "桃園市", township: "龍潭區" },
  { city: "桃園市", township: "楊梅區" },
  { city: "桃園市", township: "新屋區" },
  { city: "桃園市", township: "觀音區" },
  { city: "桃園市", township: "桃園區" },
  { city: "桃園市", township: "龜山區" },
  { city: "桃園市", township: "八德區" },
  { city: "桃園市", township: "大溪區" },
  { city: "桃園市", township: "復興區" },
  { city: "桃園市", township: "大園區" },
  { city: "桃園市", township: "蘆竹區" },

  { city: "新竹市", township: "東區" },
  { city: "新竹市", township: "北區" },
  { city: "新竹市", township: "香山區" },
  { city: "新竹縣", township: "竹北市" },
  { city: "新竹縣", township: "新豐鄉" },
  { city: "新竹縣", township: "關西鎮" },
  { city: "新竹縣", township: "芎林鄉" },
  { city: "新竹縣", township: "寶山鄉" },
  { city: "新竹縣", township: "竹東鎮" },
  { city: "新竹縣", township: "五峰鄉" },
  { city: "新竹縣", township: "橫山鄉" },
  { city: "新竹縣", township: "尖石鄉" },
  { city: "新竹縣", township: "北埔鄉" },
  { city: "新竹縣", township: "峨眉鄉" },
  { city: "苗栗縣", township: "竹南鎮" },
  { city: "苗栗縣", township: "頭份市" },
  { city: "苗栗縣", township: "南庄鄉" },
  { city: "苗栗縣", township: "獅潭鄉" },
  { city: "苗栗縣", township: "後龍鎮" },
  { city: "苗栗縣", township: "通霄鄉" },
  { city: "苗栗縣", township: "苑裡鎮" },
  { city: "苗栗縣", township: "苗栗市" },
  { city: "苗栗縣", township: "造橋鄉" },
  { city: "苗栗縣", township: "頭屋鄉" },
  { city: "苗栗縣", township: "公館鄉" },
  { city: "苗栗縣", township: "大湖鄉" },
  { city: "苗栗縣", township: "泰安鄉" },
  { city: "苗栗縣", township: "銅鑼鄉" },
  { city: "苗栗縣", township: "三義鄉" },
  { city: "苗栗縣", township: "西湖鄉" },
  { city: "苗栗縣", township: "卓蘭鎮" },

  { city: "宜蘭縣", township: "宜蘭市" },
  { city: "宜蘭縣", township: "頭城鎮" },
  { city: "宜蘭縣", township: "礁溪鄉" },
  { city: "宜蘭縣", township: "壯圍鄉" },
  { city: "宜蘭縣", township: "員山鄉" },
  { city: "宜蘭縣", township: "羅東鎮" },
  { city: "宜蘭縣", township: "三星鄉" },
  { city: "宜蘭縣", township: "大同鄉" },
  { city: "宜蘭縣", township: "五結鄉" },
  { city: "宜蘭縣", township: "冬山鄉" },
  { city: "宜蘭縣", township: "蘇澳鎮" },
  { city: "宜蘭縣", township: "南澳鄉" },
  { city: "宜蘭縣", township: "釣魚台列嶼" },
];

function appenCity(arrayCity) {
  var str = "";
  for (i = 1; i < newAddr.length; i++) {
    if (newAddr[i].city == arrayCity) {
      str = str + "<option>" + newAddr[i].township + "</option>";
      $("#township").html(str);
    }
  }
}

$("#city").change(function () {
  var cityVal = $(this).val();
  if (cityVal == "taipei") {
    appenCity("臺北市");
  } else if (cityVal == "keelong") {
    appenCity("基隆市");
  } else if (cityVal == "newtaipei") {
    appenCity("新北市");
  } else if (cityVal == "taoyuan") {
    appenCity("桃園市");
  } else if (cityVal == "hsinchu01") {
    appenCity("新竹市");
  } else if (cityVal == "hsinchu02") {
    appenCity("新竹縣");
  } else if (cityVal == "miaoli") {
    appenCity("苗栗縣");
  }
});
// ],
// [
//   [
//     "中壢區",
//     "平鎮區",
//     "龍潭區",
//     "楊梅區",
//     "新屋區",
//     "觀音區",
//     "桃園區",
//     "龜山區",
//     "八德區",
//     "大溪區",
//     "復興區",
//     "大園區",
//     "蘆竹區",
//   ],

// ],
// [
//   ["東區", "北區", "香山區"],

// ],
// [
//   [
//     "竹北市",
//     "湖口鄉",
//     "新豐鄉",
//     "新埔鎮",
//     "關西鎮",
//     "芎林鄉",
//     "寶山鄉",
//     "竹東鎮",
//     "五峰鄉",
//     "橫山鄉",
//     "尖石鄉",
//     "北埔鄉",
//     "峨眉鄉",
//   ],

// ],
// [
//   [
//     "竹南鎮",
//     "頭份市",
//     "三灣鄉",
//     "南庄鄉",
//     "獅潭鄉",
//     "後龍鎮",
//     "通霄鎮",
//     "苑裡鎮",
//     "苗栗市",
//     "造橋鄉",
//     "頭屋鄉",
//     "公館鄉",
//     "大湖鄉",
//     "泰安鄉",
//     "銅鑼鄉",
//     "三義鄉",
//     "西湖鄉",
//     "卓蘭鎮",
//   ],

// ],
// [
//   [
//     "中區",
//     "東區",
//     "南區",
//     "西區",
//     "北區",
//     "北屯區",
//     "西屯區",
//     "南屯區",
//     "太平區",
//     "大里區",
//     "霧峰區",
//     "烏日區",
//     "豐原區",
//     "后里區",
//     "石岡區",
//     "東勢區",
//     "和平區",
//     "新社區",
//     "潭子區",
//     "大雅區",
//     "神岡區",
//     "大肚區",
//     "沙鹿區",
//     "龍井區",
//     "梧棲區",
//     "清水區",
//     "大甲區",
//     "外埔區",
//     "大安區",
//   ],

// ],
// [
//   [
//     "彰化市",
//     "芬園鄉",
//     "花壇鄉",
//     "秀水鄉",
//     "鹿港鎮",
//     "福興鄉",
//     "線西鄉",
//     "和美鎮",
//     "伸港鄉",
//     "員林市",
//     "社頭鄉",
//     "永靖鄉",
//     "埔心鄉",
//     "溪湖鎮",
//     "大村鄉",
//     "埔鹽鄉",
//     "田中鎮",
//     "北斗鎮",
//     "田尾鄉",
//     "埤頭鄉",
//     "溪州鄉",
//     "竹塘鄉",
//     "二林鎮",
//     "大城鄉",
//     "芳苑鄉",
//     "二水鄉",
//   ],

// ],
// [
//   [
//     "南投市",
//     "中寮鄉",
//     "草屯鎮",
//     "國姓鄉",
//     "埔里鎮",
//     "仁愛鄉",
//     "名間鄉",
//     "集集鎮",
//     "水里鄉",
//     "魚池鄉",
//     "信義鄉",
//     "竹山鎮",
//     "鹿谷鄉",
//   ],

// ],
// [
//   ["東區", "西區"],

// ],
// [
//   [
//     "番路鄉",
//     "梅山鄉",
//     "竹崎鄉",
//     "阿里山",
//     "中埔鄉",
//     "大埔鄉",
//     "水上鄉",
//     "鹿草鄉",
//     "太保市",
//     "朴子市",
//     "東石鄉",
//     "六腳鄉",
//     "新港鄉",
//     "民雄鄉",
//     "大林鎮",
//     "溪口鄉",
//     "義竹鄉",
//     "布袋鎮",
//   ],

// ],
// [
//   [
//     "斗南鎮",
//     "大埤鄉",
//     "虎尾鎮",
//     "土庫鎮",
//     "褒忠鄉",
//     "東勢鄉",
//     "台西鄉",
//     "崙背鄉",
//     "麥寮鄉",
//     "斗六市",
//     "林內鄉",
//     "古坑鄉",
//     "莿桐鄉",
//     "西螺鎮",
//     "二崙鄉",
//     "北港鎮",
//     "水林鄉",
//     "口湖鄉",
//     "四湖鄉",
//     "元長鄉",
//   ],
//   [
//     "630",
//     "631",
//     "632",
//     "633",
//     "634",
//     "635",
//     "636",
//     "637",
//     "638",
//     "640",
//     "643",
//     "646",
//     "647",
//     "648",
//     "649",
//     "651",
//     "652",
//     "653",
//     "654",
//     "655",
//   ],
// ],
// [
//   [
//     "中西區",
//     "東區",
//     "南區",
//     "北區",
//     "安平區",
//     "安南區",
//     "永康區",
//     "歸仁區",
//     "新化區",
//     "左鎮區",
//     "玉井區",
//     "楠西區",
//     "南化區",
//     "仁德區",
//     "關廟區",
//     "龍崎區",
//     "官田區",
//     "麻豆區",
//     "佳里區",
//     "西港區",
//     "七股區",
//     "將軍區",
//     "學甲區",
//     "北門區",
//     "新營區",
//     "後壁區",
//     "白河區",
//     "東山區",
//     "六甲區",
//     "下營區",
//     "柳營區",
//     "鹽水區",
//     "善化區",
//     "大內區",
//     "山上區",
//     "新市區",
//     "安定區",
//   ],
//   [
//     "700",
//     "701",
//     "702",
//     "704",
//     "708",
//     "709",
//     "710",
//     "711",
//     "712",
//     "713",
//     "714",
//     "715",
//     "716",
//     "717",
//     "718",
//     "719",
//     "720",
//     "721",
//     "722",
//     "723",
//     "724",
//     "725",
//     "726",
//     "727",
//     "730",
//     "731",
//     "732",
//     "733",
//     "734",
//     "735",
//     "736",
//     "737",
//     "741",
//     "742",
//     "743",
//     "744",
//     "745",
//   ],
// ],
// [
//   [
//     "新興區",
//     "前金區",
//     "苓雅區",
//     "鹽埕區",
//     "鼓山區",
//     "旗津區",
//     "前鎮區",
//     "三民區",
//     "楠梓區",
//     "小港區",
//     "左營區",
//     "仁武區",
//     "大社區",
//     "東沙群島",
//     "南沙群島",
//     "岡山區",
//     "路竹區",
//     "阿蓮區",
//     "田寮區",
//     "燕巢區",
//     "橋頭區",
//     "梓官區",
//     "彌陀區",
//     "永安區",
//     "湖內區",
//     "鳳山區",
//     "大寮區",
//     "林園區",
//     "鳥松區",
//     "大樹區",
//     "旗山區",
//     "美濃區",
//     "六龜區",
//     "內門區",
//     "杉林區",
//     "甲仙區",
//     "桃源區",
//     "那瑪夏區",
//     "茂林區",
//     "茄萣區",
//   ],
//   [
//     "800",
//     "801",
//     "802",
//     "803",
//     "804",
//     "805",
//     "806",
//     "807",
//     "811",
//     "812",
//     "813",
//     "814",
//     "815",
//     "817",
//     "819",
//     "820",
//     "821",
//     "822",
//     "823",
//     "824",
//     "825",
//     "826",
//     "827",
//     "828",
//     "829",
//     "830",
//     "831",
//     "832",
//     "833",
//     "840",
//     "842",
//     "843",
//     "844",
//     "845",
//     "846",
//     "847",
//     "848",
//     "849",
//     "851",
//     "852",
//   ],
// ],
// [
//   ["馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉", "湖西鄉"],
//   ["880", "881", "882", "883", "884", "885"],
// ],
// [
//   ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉"],
//   ["890", "891", "892", "893", "894", "896"],
// ],
// [
//   [
//     "屏東市",
//     "三地門鄉",
//     "霧台鄉",
//     "瑪家鄉",
//     "九如鄉",
//     "里港鄉",
//     "高樹鄉",
//     "鹽埔鄉",
//     "長治鄉",
//     "麟洛鄉",
//     "竹田鄉",
//     "內埔鄉",
//     "萬丹鄉",
//     "潮州鎮",
//     "泰武鄉",
//     "來義鄉",
//     "萬巒鄉",
//     "崁頂鄉",
//     "新埤鄉",
//     "南州鄉",
//     "林邊鄉",
//     "東港鎮",
//     "琉球鄉",
//     "佳冬鄉",
//     "新園鄉",
//     "枋寮鄉",
//     "枋山鄉",
//     "春日鄉",
//     "獅子鄉",
//     "車城鄉",
//     "牡丹鄉",
//     "恆春鎮",
//     "滿州鄉",
//   ],
//   [
//     "900",
//     "901",
//     "902",
//     "903",
//     "904",
//     "905",
//     "906",
//     "907",
//     "908",
//     "909",
//     "911",
//     "912",
//     "913",
//     "920",
//     "921",
//     "922",
//     "923",
//     "924",
//     "925",
//     "926",
//     "927",
//     "928",
//     "929",
//     "931",
//     "932",
//     "940",
//     "941",
//     "942",
//     "943",
//     "944",
//     "945",
//     "946",
//     "947",
//   ],
// ],
// [
//   [
//     "台東市",
//     "綠島鄉",
//     "蘭嶼鄉",
//     "延平鄉",
//     "卑南鄉",
//     "鹿野鄉",
//     "關山鎮",
//     "海端鄉",
//     "池上鄉",
//     "東河鄉",
//     "成功鎮",
//     "長濱鄉",
//     "太麻里",
//     "金峰鄉",
//     "大武鄉",
//     "達仁鄉",
//   ],
//   [
//     "950",
//     "951",
//     "952",
//     "953",
//     "954",
//     "955",
//     "956",
//     "957",
//     "958",
//     "959",
//     "961",
//     "962",
//     "963",
//     "964",
//     "965",
//     "966",
//   ],
// ],
// [
//   [
//     "花蓮市",
//     "新城鄉",
//     "秀林鄉",
//     "吉安鄉",
//     "壽豐鄉",
//     "鳳林鎮",
//     "光復鄉",
//     "豐濱鄉",
//     "瑞穗鄉",
//     "萬榮鄉",
//     "玉里鎮",
//     "卓溪鄉",
//     "富里鄉",
//   ],
//   [
//     "970",
//     "971",
//     "972",
//     "973",
//     "974",
//     "975",
//     "976",
//     "977",
//     "978",
//     "979",
//     "981",
//     "982",
//     "983",
//   ],
// ],
// [
//   ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"],
//   ["209", "210", "211", "212"],
// ],
