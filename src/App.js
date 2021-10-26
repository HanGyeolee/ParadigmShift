import {ReactComponent as Arrow} from './svg/arrow.svg';
import {ReactComponent as X} from './svg/x.svg';
import {ReactComponent as Twitter} from './svg/twitter-brands.svg';
import {ReactComponent as Facebook} from './svg/facebook-f-brands.svg';
import {ReactComponent as Insta} from './svg/instagram-brands.svg';
import {ReactComponent as Link} from './svg/linkedin-in-brands.svg';
import {ReactComponent as Github} from './svg/github-brands.svg';
import {ReactComponent as Codepen} from './svg/codepen-brands.svg';

import LazyItem from './pages/LazyItem'
import './App.css';
import './Main.css';
import {useState, useRef} from 'react'

function Banner(props) {
  return (
    <div className={props.class}>
      {props.content}
      <article>
        {props.children}
      </article>
    </div>
  )
}

function Button(props){
    return(
      <button className={props.type}>
        {props.children}
        <a href={props.href}>
          <p>{props.text}</p>
        </a>
      </button>
    );
}

const scrollToRef = (ref) => window.scrollTo({top:ref.current.offsetTop, behavior:'smooth'})   

function App() {
  const scrollRef = useRef(null)
  const executeScroll = () => scrollToRef(scrollRef)

  function LoadFullImg(src, name){
    setLoadImg({src: src, name: name, isToggle : !loadImg.isToggle});
  }

  const [loadImg, setLoadImg] = useState({
    isToggle: false,
    src:'',
    name:''
  });

  const [banners, setBanners] = useState([
    {
      content: 
      <header>
        <div className="movingdownanimation">
          <h1>Paradigm</h1>
          <h1>Shift</h1>
          <p>A FREE RESPONSIVE SITE TEMPLATE<br/>
          DESIGNED BY <a>@AJLKN</a> / <a>HTML5 UP</a>
          </p>
          <Arrow className="disable_mobile clickable" onClick={executeScroll}/>
        </div>
      </header>
        ,
      children: 
      <img className="movingupanimation" src="./img/pic01.jpg"></img>
    },
    {
      content: 
      <header ref={scrollRef}>
        <div>
          <h2>MAGNA SED NULLAM</h2>
          <h2>NISL ADIPISCING</h2>
        </div>
      </header>
        ,
      children: 
      <div>
        <p><b>Lorem ipsum dolor</b> sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
        <img src="./img/pic02.jpg"></img>
      </div>
    },
    {
      content: 
      <header>
        <div>
          <h2>FEUGIAT CONSEQUAT</h2>
          <h2>TEMPUS ULTRICES</h2>
        </div>
      </header>
        ,
      children: 
      <div>
        <p><b>Etiam tristique libero</b> eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.</p>
        <ul className="horizontal flex">
            <li><p className="laptop">Consequat tempus</p></li>
            <li><p className="lightning">Etiam adipiscing</p></li>
            <li><p className="signal">Libero nullam</p></li>
            <li><p className="gear">Blandit condimentum</p></li>
            <li><p className="point">Lorem ipsum dolor</p></li>
            <li><p className="code">Nibh amet venenatis</p></li>
        </ul>
        <p>Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
      </div>
    },
    {
      content: 
      <header>
        <div>
          <h2>ULTRICES ERAT MAGNA</h2>
          <h2>SED CONDIMENTUM</h2>
        </div>
      </header>
        ,
      children: 
      <div>
        <p><b>Integer mollis egestas</b>nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
      </div>
    },
    {
      class:"content_mobile",
      content: 
      <header>
        <div>
          <h3>ERAT ALIQUAM</h3>
          <p>
            Vehicula ultrices dolor amet ultricies<br className="disable_mobile"/>
            et condimentum. Magna sed etiam<br className="disable_mobile"/>
            consequat, et lorem adipiscing sed<br className="disable_mobile"/>
            dolor sit amet, consectetur amet do<br className="disable_mobile"/>
            eiusmod tempor incididunt ipsum<br className="disable_mobile"/>
            suspendisse ultrices gravida.
          </p>
        </div>
      </header>
        ,
      children: 
      <div>
        <img className="clickable" src="./img/01.jpg" alt="girl"
        onClick={() => LoadFullImg("./img/01.jpg", "girl")} ></img>
        <div>
          <img className="clickable" src="./img/02.jpg" alt="dog"
        onClick={() => LoadFullImg("./img/02.jpg", "dog")} ></img>
          <img className="clickable" src="./img/03.jpg" alt="apartment"
        onClick={() => LoadFullImg("./img/03.jpg", "apartment")} ></img>
        </div>
        <img className="clickable"  src="./img/04.jpg" alt="bicycle"
        onClick={() => LoadFullImg("./img/04.jpg", "bicycle")} ></img>
      </div>
    },
    {
      class:"content_mobile",
      content: 
      <header>
        <div>
          <h3>NISL CONSEQUAT</h3>
          <p>
            Aenean ornare velit lacus, ac varius<br className="disable_mobile"/>
            enim ullamcorper eu. Proin aliquam<br className="disable_mobile"/>
            sed facilisis ante interdum congue.<br className="disable_mobile"/>
            Integer mollis, nisl amet convallis,<br className="disable_mobile"/>
            porttitor magna ullamcorper, amet<br className="disable_mobile"/>
            mauris. Ut magna finibus nisi nec<br className="disable_mobile"/>
            lacinia ipsum maximus.
          </p>
        </div>
      </header>
        ,
      children:
      <div>
        <img className="clickable"  src="./img/05.jpg" alt="roof"
        onClick={() => LoadFullImg("./img/05.jpg", "roof")} ></img>
        <div>
          <img className="clickable"  src="./img/06.jpg" alt="shoe"
        onClick={() => LoadFullImg("./img/06.jpg", "shoe")} ></img>
          <img className="clickable"  src="./img/07.jpg" alt="desk"
        onClick={() => LoadFullImg("./img/07.jpg", "desk")} ></img>
        </div>
      </div> 
    },
    {
      class:"content_mobile",
      content: 
      <header>
        <div>
          <h3>LOREM GRAVIDA</h3>
          <p>
            Proin aliquam facilisis ante interdum.<br className="disable_mobile"/>
            Sed nulla amet lorem feugiat tempus<br className="disable_mobile"/>
            aenean ornare velit lacus, ac varius<br className="disable_mobile"/>
            sed enim lorem ullamcorper dolore. ac<br className="disable_mobile"/>
            varius enim lorem ullamcorper dolore.<br className="disable_mobile"/>
            Proin aliquam facilisis.<br className="disable_mobile"/>
          </p>
        </div>
      </header>
        ,
      children: 
      <div>
        <div>
          <img className="clickable"  src="./img/08.jpg" alt="mountain"
        onClick={() => LoadFullImg("./img/08.jpg", "mountain")} ></img>
          <img className="clickable"  src="./img/09.jpg" alt="basketball"
        onClick={() => LoadFullImg("./img/09.jpg", "basketball")} ></img>
        </div>
        <img className="clickable"  src="./img/10.jpg" alt="hall"
        onClick={() => LoadFullImg("./img/10.jpg", "hall")} ></img>
      </div>
    },
    {
      content: 
      <header>
        <div>
          <h2>DUIS SED ADPISCING</h2>
          <h2>VEROEROS AMET</h2>
          <p className="disable_mobile">
            Proin aliquam facilisis ante interdum.<br/>
            Sed nulla amet lorem feugiat tempus<br/>
            aenean ornare velit lacus, ac varius<br/>
            sed enim lorem ullamcorper dolore. ac<br/>
            varius enim lorem ullamcorper dolore.<br/>
            Proin aliquam facilisis.<br/>
          </p>
        </div>
      </header>
        ,
      children: 
      <div>
        <p><b>Proin tempus feugiat</b> sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.</p>
        <ul className="horizontal">
          <li><Button type="large primary" text="GET STARTED"></Button></li>
          <li><Button type="large" text="LEARN MORE"></Button></li>
        </ul>
      </div>
    },
    {
      content: 
      <header>
        <div>
          <h2>GET IN TOUCH</h2>

        </div>
      </header>
        ,
      children: 
      <div>
        <p><b>Auctor commodo</b>  interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
      </div>
    },
    {
      class:"reverse_mobile",
      content: 
      <header>
        <div>
          <h3>EMAIL</h3>
          <p><a>information@untitled.ext</a></p>
          <h3>PHONE</h3>
          <p><a>(000) 000-0000</a></p>
          <h3>ADDRESS</h3>
          <p>1234 Somewhere Road, Nashville, TN 00000</p>
          <h3>ELSEWHERE</h3>
          <ul className="horizontal horiend">
            <li><Twitter></Twitter></li>
            <li><Facebook></Facebook></li>
            <li><Insta></Insta></li>
            <li><Link></Link></li>
            <li><Github></Github></li>
            <li><Codepen></Codepen></li>
          </ul>
        </div>
      </header>
        ,
      children: 
      <div>
        <form>
          <div className="wrap">
              <input type="text" name="name" placeholder="Name"/>
              <input type="email" name="email" placeholder="Email"/>
          </div>
          <textarea placeholder="Message"></textarea>
          <ul className="horizontal">
            <li>
              <input type="submit" value="SEND MESSAGE"/>
            </li>
          </ul>
        </form>
      </div>
    },
    {
      class:"content_mobile",
      content: 
      <header><div></div></header>
        ,
      children: 
      <div>
        <p>© Untitled. All rights reserved. Design: <a>HTML5 UP</a>. Demo Images: <a>Unsplash</a>.</p>
      </div>
    }
  ]);  

  return (
    <div className="App">
      <section className={"absolute " + (loadImg.isToggle ? " active" : "")} 
      onClick={() => setLoadImg({...loadImg, isToggle : false})}>
        <X></X>
        <LazyItem src={loadImg.src} name={loadImg.name} ></LazyItem>
      </section>
      <section>
        {banners.map((obj, index) => (
          <Banner class={obj.class} key={index} content={obj.content}>{obj.children}</Banner>
        ))}
      </section>
    </div>
  );
}

export default App;
