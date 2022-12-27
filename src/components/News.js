import React, { Component } from "react";
import  propTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  cat= this.props.category;
  heading = (this.cat).charAt(0).toUpperCase()+ (this.cat).slice(1);

  static defaultProps={
    country:"in",
    pageSize:6,
    category: "general"
  };
  static propTypes={
    country:propTypes.string,
    pageSize:propTypes.number,
    category:propTypes.string
  };

  articles = [
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Argentina vs. France: MINI-MOVIE of 2022 FIFA World Cup final | FOX Soccer - FOX Soccer",
      description:
        "Relive some of the best moments from one of the greatest matches in World Cup history. Lionel Messi and Kylian Mbappé star in this dramatic recap of a match ...",
      url: "https://www.youtube.com/watch?v=2iaE0xHfUro",
      urlToImage: "https://i.ytimg.com/vi/2iaE0xHfUro/maxresdefault.jpg",
      publishedAt: "2022-12-19T03:30:07Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Severe turbulence: Passengers, attendants injured on rough flight to Hawaii - ABC7",
      description:
        'At least 36 people on a Hawaiian Airlines flight were injured, with 20 taken to emergency rooms, after their plane encountered "severe turbulence" on a fligh...',
      url: "https://www.youtube.com/watch?v=ZpiITOzMpkU",
      urlToImage: "https://i.ytimg.com/vi/ZpiITOzMpkU/maxresdefault.jpg",
      publishedAt: "2022-12-19T03:26:58Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "David Goldman",
      title:
        "Elon Musk says he will step down as Twitter CEO if voted out by a poll he tweeted - CNN",
      description:
        "Twitter's mercurial new boss may be out the door after less than two months on the job, if results of a Twitter poll go against him.",
      url: "https://www.cnn.com/2022/12/18/tech/elon-musk-twitter-ceo-poll/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221218204017-elon-musk-file-121822.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-19T02:36:00Z",
      content:
        "Twitters mercurial new boss may be out the door after less than two months on the job, if results of a Twitter poll go against him.\r\nElon Musk tweeted a poll Sunday evening asking people to vote on w… [+2419 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Sam Bankman-Fried Planning to Drop Extradition Fight - Bloomberg Markets and Finance",
      description:
        "Sam Bankman-Fried, the disgraced co-founder of crypto exchange FTX, is planning to drop his fight against extradition to the US where he faces a range of cri...",
      url: "https://www.youtube.com/watch?v=qhsxup5fstQ",
      urlToImage: "https://i.ytimg.com/vi/qhsxup5fstQ/hqdefault.jpg",
      publishedAt: "2022-12-19T02:12:02Z",
      content: null,
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Ryan Morik",
      title:
        "Patriots' Jakobi Meyers, Rhamondre Stevenson take 'full responsibility' for Raiders' miraculous walk-off win - Fox News",
      description:
        "The New England Patriots were just a kneel away from going to overtime, but they tried to pull out a miracle in Vegas. Oh, was there a miracle.",
      url: "https://www.foxnews.com/sports/patriots-jakobi-meyers-rhamondre-stevenson-take-full-responsibility-raiders-miraculous-walk-off-win",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/rhamondre.jpg",
      publishedAt: "2022-12-19T02:04:51Z",
      content:
        "The New England Patriots went for a miracle for their final play and then they turned out to be on the losing end of one. \r\nAll they had to do was take a knee from their own 45-yard line with 3 secon… [+3315 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Snow showers arrive in Seattle area as holidays begin - The Seattle Times",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiaGh0dHBzOi8vd3d3LnNlYXR0bGV0aW1lcy5jb20vc2VhdHRsZS1uZXdzL3dlYXRoZXIvc25vdy1zaG93ZXJzLWFycml2ZS1pbi1zZWF0dGxlLWFyZWEtYXMtaG9saWRheXMtYmVnaW4v0gFuaHR0cHM6Ly93d3cuc2VhdHRsZXRpbWVzLmNvbS9zZWF0dGxlLW5ld3Mvd2VhdGhlci9zbm93LXNob3dlcnMtYXJyaXZlLWluLXNlYXR0bGUtYXJlYS1hcy1ob2xpZGF5cy1iZWdpbi8_YW1wPTE?oc=5",
      urlToImage: null,
      publishedAt: "2022-12-19T01:11:29Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Oscar Holland, CNN",
      title:
        "'How to make applesauce': A photograph that made time stand still - CNN",
      description:
        "Harold Edgerton's image of a bullet passing through an apple was not only a work of art but a feat of electrical engineering that changed photography forever.",
      url: "https://www.cnn.com/style/article/harold-edgerton-bullet-apple-snap/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220727122753-harold-edgerton-snap-super-tease.jpg",
      publishedAt: "2022-12-19T01:03:59Z",
      content:
        "artsPublished 19th December 2022\r\nIn Snap, we look at the power of a single photograph, chronicling stories about how both modern and historical images have been made.\r\nExploding with energy but perf… [+4471 chars]",
    },
    {
      source: { id: null, name: "Big Blue View" },
      author: "Ed Valentine",
      title: "Giants-Commanders, Week 15: Live updates - Big Blue View",
      description: "Follow Sunday’s action right here",
      url: "https://www.bigblueview.com/2022/12/18/23515231/giants-commanders-week-15-live-updates",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/oDq9OwbwWwNo_HqpVvuqfAF8TOQ=/0x0:3024x1583/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24301366/1450193325.jpg",
      publishedAt: "2022-12-19T01:00:00Z",
      content:
        "© 2022 Vox Media, LLC. All Rights Reserved\r\n* 21+ (19+ CA-ONT) (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, (select parishes), MD, MI, NH, NJ, NY, OR, PA, TN, VA, WV, WY, CA-ONT only.Eligibility rest… [+124 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Ashley Joy Parker",
      title:
        "Alex Rodriguez Makes Romance With Jac Cordeiro Instagram Official - Yahoo Entertainment",
      description:
        "Marking his first public relationship since his split from Jennifer Lopez in 2021, Alex Rodriguez shared a photo of his new girlfriend Jac Cordeiro on...",
      url: "https://www.yahoo.com/entertainment/alex-rodriguez-makes-romance-jac-005940574.html",
      urlToImage:
        "https://media.zenfs.com/en/e__181/984c38a76f08ca76a2bae3570a65b923",
      publishedAt: "2022-12-19T00:59:00Z",
      content:
        "Next up to bat.....\r\nAlex Rodriguezhas officially revealed his relationship with new girlfriend Jac Cordeiro. The couple made their romance Instagram official on Dec. 18 when the former MLB star post… [+1990 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Todd Archer",
      title:
        "Cowboys fumble control of playoff fate in OT loss to Jaguars - ESPN",
      description:
        "Sunday's 40-34 OT loss to Jacksonville prevented the Cowboys from clinching a playoff spot without help in back-to-back years for the first time since 2006-07.",
      url: "https://www.espn.com/nfl/story/_/id/35281824/cowboys-fumble-control-playoff-fate-ot-loss-jaguars",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1218%2Fr1108475_1296x729_16%2D9.jpg",
      publishedAt: "2022-12-18T23:57:07Z",
      content:
        "JACKSONVILLE -- The Dallas Cowboys lost 40-34 in overtime to the Jacksonville Jaguars on Sunday but still clinched a playoff spot later in the day after the Washington Commanders fell 20-12 at home t… [+3371 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "A blast of frigid Arctic air will arrive in New Orleans before Christmas - WWLTV",
      description:
        "Meteorologist Alexandra Cranford says an Arctic blast is in the New Orleans Weather forecast at 5:30 p.m. Sunday, December 18, 2022.This week starts cold and...",
      url: "https://www.youtube.com/watch?v=Ktwv37_vhMI",
      urlToImage: "https://i.ytimg.com/vi/Ktwv37_vhMI/maxresdefault.jpg",
      publishedAt: "2022-12-18T23:56:03Z",
      content: null,
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Allie Griffin",
      title:
        "Latest 'Twitter Files' show FBI repeatedly grilled execs about 'state propaganda' - New York Post ",
      description:
        "The FBI questioned Twitter execs over users spewing state propaganda on the social media platform in the summer of 2020, according to the latest Twitter Files release.",
      url: "https://nypost.com/2022/12/18/latest-twitter-files-show-fbi-questioned-executives-over-users-spouting-state-propaganda/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/12/GettyImages-1242718802-copy.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2022-12-18T23:36:00Z",
      content:
        "The FBI repeatedly grilled Twitter execs about state propaganda on the social media platform in the summer of 2020 — insisting that the company provide more information about safety enforcement, acco… [+2412 chars]",
    },
    {
      source: { id: null, name: "Daily Beast" },
      author: "AJ McDougall, Ellie Quinlan Houghtaling",
      title:
        "Russian Oligarch Dmitry Zelenov Dies After Mysterious Fall Down Stairs - The Daily Beast",
      description:
        "The real estate tycoon slipped down a stairwell while visiting friends in the French Riviera.",
      url: "https://www.thedailybeast.com/russian-oligarch-dmitry-zelenov-dies-after-mysterious-fall-down-stairs",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1791,w_3184,x_0,y_128/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1671408980/GettyImages-516094804_iiroxn",
      publishedAt: "2022-12-18T23:15:16Z",
      content:
        "Russian real estate tycoon Dmitry Zelenov passed away earlier this month after tumbling down a flight of stairs while visiting friends in the French Riviera, according to a local outlet and an indepe… [+2059 chars]",
    },
    {
      source: { id: null, name: "CNET" },
      author: "Sean Keane",
      title:
        "'Avatar: The Way of Water': Is There a Post-Credits Scene? - CNET",
      description:
        "Will sitting through the credits offer a hint about the third movie in James Cameron's epic sci-fi series?",
      url: "https://www.cnet.com/culture/entertainment/avatar-the-way-of-water-is-there-a-post-credits-scene/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/8d8c4655331f348dc6583069c3d0cbf78d349d99/hub/2022/12/15/a270c3b5-819f-443c-a399-d2b2c0b67047/2040a-0180-v0492-1100-alteredv2-8192x4320-068a4ee.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-12-18T23:00:03Z",
      content:
        "The long-awaited Avatar: The Way of Water landed in theaters Friday, giving us a fresh visual treat from legendary director James Cameron. The sequel continues the epic tale started by the 2009 origi… [+957 chars]",
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Tariq Malik",
      title:
        "Watch Rocket Lab attempt its 1st US launch with an Electron booster today - Space.com",
      description:
        "Liftoff of the Rocket Lab Electron is scheduled for 6 p.m. EST (2300 GMT), but it could fly anytime between then and 8 p.m. EST (0100 GMT).",
      url: "https://www.space.com/rocket-lab-1st-us-electron-launch-livestream",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/eRT98ikRSLLLcRhSyJwFR4-1200-80.jpg",
      publishedAt: "2022-12-18T22:59:31Z",
      content:
        "Update for 7:58 pm ET: Rocket Lab has called off tonight's Electron launch attempt from NASA's Wallops Flight Facility in Virginia due to high upper-level winds. The next launch attempt will be on Mo… [+5786 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Vatican dismisses Trump-supporting, anti-abortion leader from priesthood - Reuters",
      description:
        'Father Frank Pavone, a leader of the U.S. anti-abortion movement and a strong supporter of former president Donald Trump, has been dismissed from the Catholic priesthood for "blasphemous" social media posts and disobedience to bishops.',
      url: "https://www.reuters.com/world/us/vatican-dismisses-trump-supporting-anti-abortion-leader-priesthood-2022-12-18/",
      urlToImage:
        "https://www.reuters.com/resizer/_avtsv56YmVdpbdS2gsrN6zGlYE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IDYUJVTJHZKFXND6VCOPCUBMKM.jpg",
      publishedAt: "2022-12-18T22:55:00Z",
      content:
        "VATICAN CITY, Dec 18 (Reuters) - Father Frank Pavone, a leader of the U.S. anti-abortion movement and a strong supporter of former president Donald Trump, has been dismissed from the Catholic priesth… [+2114 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Tucker Carlson on 2024 presidential race: ‘I’m not endorsing anybody’ - The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMibWh0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvbWVkaWEvMzc4MDAzNS10dWNrZXItY2FybHNvbi1vbi0yMDI0LXByZXNpZGVudGlhbC1yYWNlLWltLW5vdC1lbmRvcnNpbmctYW55Ym9keS_SAXFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL21lZGlhLzM3ODAwMzUtdHVja2VyLWNhcmxzb24tb24tMjAyNC1wcmVzaWRlbnRpYWwtcmFjZS1pbS1ub3QtZW5kb3JzaW5nLWFueWJvZHkvYW1wLw?oc=5",
      urlToImage: null,
      publishedAt: "2022-12-18T22:23:00Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author:
        'By <a href="/profiles/matt-meyer">Matt Meyer</a>, Mike Hayes and <a href="/profiles/maureen-chowdhury">Maureen Chowdhury</a>, CNN',
      title: "December 18, 2022 Russia-Ukraine news - CNN",
      description:
        "Missile strikes have once again disrupted power and water supplies in Ukraine. In the central city of Kryvyi Rih, officials said at least four people were killed and 13 injured.",
      url: "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-12-18-22/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/221217044540-01-kyiv-power-outage-121622-super-tease.jpg",
      publishedAt: "2022-12-18T21:59:00Z",
      content:
        "Three people have been killed and six people wounded in attacks from Russian forces in Ukraine's Kherson region Sunday, according to a local Ukrainian official.\r\nFifty-four shells have fallen in the … [+1359 chars]",
    },
    {
      source: { id: null, name: "Page Six" },
      author: "Emily Selleck",
      title:
        "Kourtney Kardashian, Scott Disick reunite for Mason’s 13th birthday bash - Page Six",
      description:
        "Exes Kourtney Kardashian and Scott Disick reunited on Saturday to celebrate their eldest son Mason’s 13th birthday bar mitzvah party.",
      url: "https://pagesix.com/2022/12/18/kourtney-kardashian-scott-disick-reunite-for-mason-disicks-13th-birthday/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/12/karashian-family-celebrate-mason-bar-mitzvah-inset.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-12-18T21:47:00Z",
      content:
        "Nothing brings the Kardashian-Jenner family together quite like a party.\r\nExes Kourtney Kardashian and Scott Disick reunited on Saturday to host a star-studded bash for son Masons 13th birthday.\r\nThe… [+2563 chars]",
    },
    {
      source: { id: null, name: "HotNewHipHop" },
      author: "Hayley Hynes",
      title:
        "Yung Miami Speaks After Diddy Is Seen Kissing Podcaster Jade Ramey - HotNewHipHop",
      description:
        "Internet sleuths have identified Diddy's latest date as podcast host Jade Ramey, who herself has over 1.1 million Instagram followers.",
      url: "https://www.hotnewhiphop.com/611692-yung-miami-speaks-after-diddy-is-seen-kissing-podcaster-jade-ramey",
      urlToImage:
        "https://editor.urbanlinx.net/wp-content/uploads/2022/12/GettyImages-1444229878.jpg?resize=1029,1500",
      publishedAt: "2022-12-18T19:46:00Z",
      content:
        "No matter how many times they remind the world that theyre not in an official relationship, Yung Miami and Diddy continue to face flack whenever the latter is seen out and about with another woman. R… [+1887 chars]",
    },
  ];

  constructor(props) {
    super(props);
    console.log("hello this is a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults:0,
    };
    document.title = `${this.cat === "general" ? "Home" : this.heading} - NEWSApp`
  }
//common fn to fetch api
  async updateNews(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData = await data.json();
    this.props.setProgress(70)
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading:false
    });
    this.props.setProgress(100)
  }


  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1982f1087a7741e39dcd68ca30f43f11&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading:false
    // });
    
    this.updateNews();
  }

  


  //next or prev btn for pagination
  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1982f1087a7741e39dcd68ca30f43f11&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   page: this.state.page - 1,
    //   loading:false
    // });
    
    this.setState({page:this.state.page -1})
    this.updateNews();
  };

  handleNextClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1982f1087a7741e39dcd68ca30f43f11&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   page: this.state.page + 1,
    //   loading:false
    // });


    this.setState({page:this.state.page + 1})
    this.updateNews();
  };

  //fn to load more data
  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles:this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };



  render() {
    return (
      <>
        <h2 className="text-center py-2">Top {this.heading} Headlines</h2>
        {this.state.loading && <Spinner />}
        {/*============== with prev and next button ==============*/}
        {/* <div className="row justify-content-around g-3">
          {!this.state.loading && this.state.articles.map((el) => {
            let { description, title, url, urlToImage, publishedAt,author,source } = el;
            return (
              <div className="col-md-4 col-sm-6" key={url}>
                <NewsItem
                  time={publishedAt}
                  title={title}
                  desc={`${description ? description : " "}`}
                  imgUrl={urlToImage}
                  newsUrl={url}
                  author={author}
                  source={source.name}
                />
              </div>
            );
          })}
        </div> */}

        {/* ================== with infinite scroll =============*/}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={
            <div className="spinner-grow d-block mx-auto my-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }
        >
        <div className="container my-3">
        <div className="row justify-content-around g-3">
          {this.state.articles.map((el) => {
            let { description, title, url, urlToImage, publishedAt,author,source } = el;
            return (
              <div className="col-md-4 col-sm-6" key={url}>
                <NewsItem
                  time={publishedAt}
                  title={title}
                  desc={`${description ? description : " "}`}
                  imgUrl={urlToImage}
                  newsUrl={url}
                  author={author}
                  source={source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between my-2">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> &rarr; Next </button>
        </div> */}
      </>
    );
  }
}

export default News;
