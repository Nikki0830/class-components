import React, { Component } from "react";
import NewsItem from "./NewsItem.js";

export default class News extends Component {
  atricles = [
    {
      source: {
        id: null,
        name: "ESPN",
      },
      author: "Pete Thamel",
      title:
        "Nick Saban, Jimbo Fisher and the perfect college football feud for its time",
      description:
        "The verbal battle between the Alabama and Texas A&M coaches is a product of a system with no rules or enforcement. It provided some offseason entertainment but is indicative of larger issues in the sport.",
      url: "https://www.espn.com/college-football/story/_/id/33948070/nick-saban-jimbo-fisher-perfect-college-football-feud",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1221%2Fr473374_3_1296x729_16%2D9.jpg",
      publishedAt: "2022-05-20T01:35:15Z",
      content:
        "The verbal haymakers exchanged by Alabama's Nick Saban and Texas A&amp;M's Jimbo Fisher the past 24 hours can best be summed up as the most appropriate possible soundtrack for 2022.\r\nThe joust center… [+5951 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Trevor Mogg",
      title: "Netflix’s new ‘mystery box’ aims to help kids find new shows",
      description:
        "Netflix has launched a new “mystery box” feature, aimed at helping kids to find new shows to watch on its streaming service.",
      url: "https://www.digitaltrends.com/movies/netflix-mystery-box-help-kids-find-new-shows/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2022/05/kids-watching-tv.jpeg?p=1",
      publishedAt: "2022-05-20T01:30:54Z",
      content:
        "Netflix has launched a new mystery box feature aimed at helping kids to find new shows to watch on its streaming service.\r\nMuch like the play something button that Netflix added to its service last y… [+2171 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Netflix introduces ‘Mystery Box’ to help users discover new shows and movies for kids",
      description:
        "Netflix on Thursday announced a new feature called “Mystery Box,” which works similarly to another existing feature known as “Play Something.” However, “Mystery Box” helps parents find new shows and movies that are appropriate for kids.\n more…\nThe post Netfli…",
      url: "https://9to5mac.com/2022/05/19/netflix-mystery-box-discover-for-kids/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/05/Netflix-Mystery-Box-tv.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-05-20T02:37:50Z",
      content:
        "Netflix on Thursday announced a new feature called “Mystery Box,” which works similarly to another existing feature known as “Play Something.” However, “Mystery Box” helps parents find new shows and … [+1623 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Pixelmator Pro update brings redesigned photo browser, improved PSD and SVG support, more",
      description:
        "The popular image editor Pixelmator Pro for Mac has received a major update that introduces a brand new photo browser, as well as other enhancements such as improved support for PSD and SVG files and better management of photos stored in iCloud.\n more…\nThe po…",
      url: "https://9to5mac.com/2022/05/19/pixelmator-pro-adds-redesigned-photo-browser/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/04/pixelmator-pro-layers.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-05-20T01:30:33Z",
      content:
        "The popular image editor Pixelmator Pro for Mac has received a major update that introduces a brand new photo browser, as well as other enhancements such as improved support for PSD and SVG files and… [+1915 chars]",
    },
    {
      source: {
        id: null,
        name: "Joythebaker.com",
      },
      author: "Joy the Baker",
      title: "The Secrets To My Favorite Blueberry Cobbler",
      description:
        "P\nIn a shock to no one, I have a lot of thoughts about the perfect summer cobbler.  Cobbler is a sweetened fruit base topped with a wet biscuit batter that bakes up to be something between a cake and a biscuit atop simmering fruit.  A cobbler is not a crisp (…",
      url: "https://joythebaker.com/2022/05/my-favorite-blueberry-cobbler/",
      urlToImage:
        "https://joythebaker.com/wp-content/uploads/2022/05/0S9A1307.jpg",
      publishedAt: "2022-05-20T03:03:50Z",
      content:
        "P\r\nIn a shock to no one, I have a lot of thoughts about the perfect summer cobbler.  Cobbler is a sweetened fruit base topped with a wet biscuit batter that bakes up to be something between a cake an… [+6569 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "大野恭希",
      title: "アップル、秋のiPhone発表会は9月13日開催？",
      description:
        "あと少しでWWDC 2022が開催されますが、アップル秋の発表会は9月13日（火）に開催されるという噂です。発表されそうなプロダクトと期待をまとめました。",
      url: "https://www.gizmodo.jp/2022/05/iphone-launch-9-13.html",
      urlToImage:
        "https://assets.media-platform.com/gizmodo/dist/images/2022/05/19/202204iphone14mini-w960.jpg",
      publishedAt: "2022-05-20T03:00:00Z",
      content:
        "WWDC 2022913\r\niPhone 132021915iPhone 1220201013iPhone 122022913\r\niPhone 14iPhone 14 Max\r\niPhone 14iPhone 1314 Pro\r\niPhone 1413iPhone XiPhone XSiPhone 14\r\niPhone 14\r\niPhone 14 ProiPhone 14 Pro Max\r\niP… [+261 chars]",
    },
    {
      source: {
        id: null,
        name: "Phandroid - News for Android",
      },
      author: "Tyler Lee",
      title: "How to use Apple’s AirPods with an Android phone",
      description:
        "If you’re a fan of Apple’s AirPods but you use an Android device, don’t worry because we’ll show you how to connect a pair of AirPods to an Android phone.\nThe post How to use Apple’s AirPods with an Android phone first appeared on Phandroid.",
      url: "https://phandroid.com/2022/05/19/how-to-use-apples-airpods-with-an-android-phone/",
      urlToImage:
        "https://phandroid.com/wp-content/uploads/2021/11/AirPods-Max-Galaxy-Z-Fold-3-640x427.jpg",
      publishedAt: "2022-05-20T00:34:41Z",
      content:
        "It is obvious that Apple designed its AirPods series of true wireless earbuds and headphones to work with its iPhones, iPads, and Mac computers. But at its core, the AirPods do still rely on Bluetoot… [+2598 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title: 'Quavo and Takeoff Drop Debut Unc and Phew Single "HOTEL LOBBY"',
      description:
        'Quavo and Takeoff have officially debuted as Unc and Phew with the release of their first ever single, "HOTEL LOBBY."Clocking in at two-and-a-half minutes, "Hotel Lobby" features production work from Murda Beatz, Keanu Beats and Fabio Aguilar. The track also …',
      url: "https://hypebeast.com/2022/5/quavo-takeoff-hotel-lobby-single-stream",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fquavo-takeoff-hotel-lobby-single-stream-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-05-20T04:07:32Z",
      content:
        "Quavo and Takeoff have officially debuted as Unc and Phew with the release of their first ever single, “HOTEL LOBBY.”\r\nClocking in at two-and-a-half minutes, “Hotel Lobby” features production work fr… [+931 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title: 'Logic Raps Over DJ Premier\'s Classic Production on "Vinyl Days"',
      description:
        'Logic and DJ Premier have dropped off their collaborative effort, "Vinyl Days."Clocking in at almost five-minutes, the single is the title track of the rapper\'s upcoming album and hears Logic spitting non-stop bars over some classic Premier sampling and produ…',
      url: "https://hypebeast.com/2022/5/logic-dj-premier-vinyl-days-single-stream",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Flogic-dj-premier-vinyl-days-single-stream-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-05-20T04:01:36Z",
      content:
        "Logic and DJ Premier have dropped off their collaborative effort, “Vinyl Days.”\r\nClocking in at almost five-minutes, the single is the title track of the rapper’s upcoming album and hears Logic spitt… [+814 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "Andy Meek",
      title: "Costco is offering these special deals for Apple fans",
      description:
        "If you haven’t felt that the price has been quite right yet to sign up for any of the myriad Apple subscription products that the iPhone maker offers — such as Apple TV Plus, Apple News Plus, or Apple Arcade — it might be worth your while to check out a serie…",
      url: "https://bgr.com/deals/costco-is-offering-these-special-deals-for-apple-fans/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2020/11/apple-silicon-macbook-event-1.jpg?quality=82&strip=all",
      publishedAt: "2022-05-20T03:44:30Z",
      content:
        "If you haven’t felt that the price has been quite right yet to sign up for any of the myriad Apple subscription products that the iPhone maker offers — such as Apple TV Plus, Apple News Plus, or Appl… [+2628 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author:
        "Andrew Krok （CNET News） 翻訳校正： 矢倉美登里 吉武稔夫 （ガリレオ）",
      title:
        "アウディ、「Apple Music」を車載システムに統合へ--2022年モデルから",
      description:
        "アウディは、車載インフォテインメントシステム「MMI」の最新バージョンで、直接「Apple Music」を利用できるようにすると発表した。",
      url: "https://japan.cnet.com/article/35187751/",
      urlToImage:
        "https://japan.cnet.com/storage/2022/05/20/92f467b23d180424ac4a5c2e10ec13e6/t/640/480/d/audi-apple-music-ogi_1280x960.jpg",
      publishedAt: "2022-05-20T00:52:00Z",
      content:
        "Apple CarPlayAndroid AutoOEMAudi\r\nAudi519MMIMulti Media InterfaceApple Music2022OTA\r\nAudiApple MusicMMICarPlayAndroid AutoApple Music\r\nRed Ventures",
    },
    {
      source: {
        id: null,
        name: "Ifanr.com",
      },
      author: "方嘉文",
      title:
        "早报 | 海底捞回应顾客河豚中毒事件 / 茅台推出 39 元冰淇淋 / 成都推出「火锅巴士」",
      description:
        "- 武汉 Apple Store 将于 5 月 21 日开幕\n- 小鹏汽车毁约 20 余名应届校招生#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      url: "https://www.ifanr.com/1489861",
      urlToImage:
        "https://s3.ifanr.com/wp-content/uploads/2022/05/cover.004.png",
      publishedAt: "2022-05-20T00:28:19Z",
      content:
        "<ul><li></li><li></li><li></li><li></li><li></li><li> Marni </li><li> Apple Store 5 21 </li><li> 20 </li><li>OPPOvivo </li><li>one on one</li><li></li><li>Ralph Lauren </li></ul>\r\n4 5 3 \r\n 5 6 19 \r\n5… [+712 chars]",
    },
    {
      source: {
        id: "el-mundo",
        name: "El Mundo",
      },
      author: "JAVIER ATTARD, SANTIAGO OSPITAL",
      title:
        'El retorno "de circo" del Emérito: ¿por qué perjudica a la monarquía?',
      description:
        "El rey Juan Carlos ya está en España, una vez despejado su horizonte judicial. Dos años han pasado desde que se fuera a Abu Dabi y ahora ha decidido regresar para una regata Leer",
      url: "https://www.elmundo.es/podcasts/el-mundo-al-dia/2022/05/20/6286a223fc6c8321118b45c3.html",
      urlToImage:
        "https://phantom-elmundo.unidadeditorial.es/38cc6024aaa8fb61569bf39c90285193/resize/1200/f/jpg/assets/multimedia/imagenes/2022/05/19/16529904863324.jpg",
      publishedAt: "2022-05-20T01:50:53Z",
      content:
        '¿Por qué el rey Juan Carlos ha decidido volver ahora? ¿Qué significa su "solitaria" llegada, solo acompañado por la infanta Elena y su amigo Pedro Campos? ¿Cómo impacta su vuelta en el reinado de su … [+661 chars]',
    },
    {
      source: {
        id: null,
        name: "Appbank.net",
      },
      author: "岩佐",
      title: "スマホ時代を終わらせるのは誰？",
      description:
        "» イーロン・マスクが投資する「人工知能」がApple Carを描き出す……その正確すぎる結果に震えた 今、ビック・テックとよばれるGAFAの全てが注目しているのが「AR/VRデバイス」です。まだまだ一般的には馴染みのな […]",
      url: "https://www.appbank.net/2022/05/20/technology/2238004.php",
      urlToImage:
        "https://www.appbank.net/wp-content/uploads/2022/05/2022-0520-GAFA-MR-thumb-1.jpeg",
      publishedAt: "2022-05-20T02:48:17Z",
      content:
        "» Apple Car\r\nGAFAAR/VR\r\n*Category\r\n Technology*SourceMacRurmos ,FaceBook ,Google Japan Blog ,The Verge\r\nGoogle10AR20218Glass Enterprise Edition2\r\n5Google I/OAR\r\nAugmented reality can break down commu… [+410 chars]",
    },
    {
      source: {
        id: null,
        name: "DIE WELT",
      },
      author: "Antonia Beckermann, Antonia Beckermann",
      title: "Mit dieser Strategie verunsichert die Ukraine Wladimir Putin",
      description:
        "Die Ukraine setzt vermehrt auf eine besondere Strategie, in der russischen Truppe herrscht Unruhe und an der Front eine Pattsituation. Welche Optionen hat Wladimir Putin noch, und wie könnte ein Ende des Krieges aussehen? Das erklärt WELT-Chefkorrespondent Cl…",
      url: "https://www.welt.de/podcasts/kick-off/article238841947/Ukraine-Krieg-Diese-Strategie-der-Ukraine-beunruhigt-die-Russen-Podcast.html",
      urlToImage:
        "https://img.welt.de/img/podcasts/kick-off/mobile233821954/5881352687-ci16x9-w1200/DWO-Podcast-Teaser-KOBDBPT-Antonia-cw.jpg",
      publishedAt: "2022-05-20T04:04:23Z",
      content:
        "Abonnieren Sie den Podcast unter anderem bei Spotify, Apple Podcasts, Amazon Music oder direkt per RSS-Feed.\r\nUkraine-Krieg, Ampelregierung und Klimawandel jeden Morgen gibt es neue Schlagzeilen. Im … [+764 chars]",
    },
    {
      source: {
        id: null,
        name: "DIE WELT",
      },
      author: "Frederik Schindler, Frederik Schindler",
      title: "Was in den radikalen Chats der AfD-Bundestagsfraktion steht",
      description:
        "Öffentlich-rechtlichen Medien wurden 40.000 Beiträge aus der Chatgruppe der AfD-Bundestagsfraktion aus den Jahren 2017 bis 2021 zugespielt. Abgeordnete verunglimpfen darin Politiker anderer Parteien auf extreme Weise. Auch über die eigene Partei ziehen einige…",
      url: "https://www.welt.de/politik/deutschland/article238858621/AfD-Was-in-den-radikalen-Chats-der-Bundestagsfraktion-steht.html",
      urlToImage:
        "https://img.welt.de/img/politik/deutschland/mobile237842133/5721351737-ci16x9-w1200/DWO-Teaser-AfD-Streit-jb.jpg",
      publishedAt: "2022-05-20T04:04:04Z",
      content:
        "Am 18. Mai 2019 schrieb ein Abgeordneter in die WhatsApp-Chatgruppe der AfD-Bundestagsfraktion: Der komplette Inhalt dieser Gruppe wird eines Tages bei der Presse landen. Immer daran denken!\r\nDiese A… [+3631 chars]",
    },
    {
      source: {
        id: null,
        name: "Businessinsider.de",
      },
      author: "Lisa Ksienrzyk",
      title: "„Wir haben einige Hundert Mitarbeiter zu Millionären gemacht“",
      description:
        "Nikolay Storonsky ist Milliardär und Chef der Banking-App Revolut. Konkurrenz fürchtet er nicht – weder von N26 noch Apple.",
      url: "https://www.businessinsider.de/gruenderszene/fintech/revolut-nikolay-storonsky-interview-omr/",
      urlToImage:
        "https://cdn.businessinsider.de/wp-content/uploads/2022/05/Nikolay-Storonsky_Revolut.jpg?ver=1652972529",
      publishedAt: "2022-05-20T04:00:00Z",
      content:
        "Revolut-Chef Nikolay Storonsky ist einer der führenden Köpfe der Fintech-Welt. Seine Banking-App ist 30 Milliarden Euro wert. Wieso er Konkurrenz nicht fürchtet weder von N26 noch Apple.\r\nAuf mehr al… [+1024 chars]",
    },
    {
      source: {
        id: null,
        name: "Businessinsider.de",
      },
      author: "Barbara Barkhausen",
      title:
        "Neue Finanzierungsrunde könnte Klarnas Marktwert um ein Drittel einbrechen sehen",
      description:
        "Das schwedische Fintech soll nur noch mit 30 Milliarden Dollar bewertet werden. Außerdem: Meta ändert Geschäftsmodell von Whatsapp.",
      url: "https://www.businessinsider.de/gruenderszene/business/finanzierungsrunde-klarna-marktwert-bricht-ein/",
      urlToImage:
        "https://cdn.businessinsider.de/wp-content/uploads/2021/02/Klarna_pink.jpg",
      publishedAt: "2022-05-20T03:55:00Z",
      content:
        "Das schwedische Fintech soll nur noch mit 30 Milliarden Dollar bewertet werden. Außerdem: Meta ändert Geschäftsmodell von Whatsapp und Lucid baut erste ausländische Fabrik in Saudi-Arabien.\r\nGuten Mo… [+5716 chars]",
    },
    {
      source: {
        id: null,
        name: "SlashGear",
      },
      author: "staff@slashgear.com (Ewdison Then)",
      title:
        "Pebblebee Offers An AirTag Alternative That You Can Easily Hook To A Keychain",
      description:
        "Consumers have more device-tracking options than ever before. Joining Apple&#039;s AirTags and the iconic Tile tracker are two new models from Pebblebee.",
      url: "https://www.slashgear.com/869345/pebblebee-offers-an-airtag-alternative-that-you-can-easily-hook-to-a-keychain/",
      urlToImage:
        "https://www.slashgear.com/img/gallery/pebblebee-offers-an-airtag-alternative-that-you-can-easily-hook-to-a-keychain/l-intro-1653009815.jpg",
      publishedAt: "2022-05-20T01:34:01Z",
      content:
        "The Pebblebee Card offers something that Apple doesn't: a super-thin card-shaped tracker that more easily fits in wallets, bags, passports, and even on the back of phones. The model has most of the s… [+935 chars]",
    },
    {
      source: {
        id: null,
        name: "3dnews.ru",
      },
      author: null,
      title:
        "Apple продемонстрировала совету директоров почти готовую гарнитуру виртуальной реальности",
      description:
        "На прошлой неделе, как сообщает Bloomberg со ссылкой на осведомлённые источники, специалисты Apple продемонстрировали на собрании совета директоров прототип устройства виртуальной реальности высокой степени готовности. Одновременно ускорена работа над специал…",
      url: "https://3dnews.ru/1066306/apple-prodemonstrirovala-sovetu-direktorov-pochti-gotovuyu-garnituru-virtualnoy-realnosti",
      urlToImage:
        "https://3dnews.ru/assets/external/illustrations/2022/05/20/1066306/vr_01.jpg",
      publishedAt: "2022-05-20T02:24:00Z",
      content:
        ", Bloomberg , Apple . Apple rOS, .\r\n: Pixabay\r\n, , , Apple 2015 , Apple Watch. , 80 % Apple, .\r\n Apple N301 WWDC, . , 2023 . M1, Mac. $2000, .\r\nApple N421, . (Tim Cook) , , .\r\n IDC, 92 % 11 , (78 %) … [+73 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello c");
    this.state = {
      articles: this.atricles,
      loading: false,
    };
  }
  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a82d0b85f6144784817c155286599d5a";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  render() {
    console.log("xyz");
    return (
      <>
        <div className=" container my-3">
          <h2>NewsMonkey - Top Headlines</h2>

          <div className="row">
            {this.state.articles.map((elem) => {
              return (
                <div className="col-md-4" key={elem.url}>
                  <NewsItem
                    title={elem.title !== null ? elem.title.slice(0.45) : ""}
                    description={
                      elem.description != null
                        ? elem.description.slice(0, 88)
                        : ""
                    }
                    imgUrl={elem.urlToImage}
                    newsUrl={elem.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
