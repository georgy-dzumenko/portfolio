import './App.scss';
import { PortfolioLink } from './components/PortfolioLink';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


// I will give you my portfolio by urls:
// 1)https://georgy-dzumenko.github.io/PMDb/
// 2)https://georgy-dzumenko.github.io/layout_miami/ (this app has mobile version)
// 3)https://georgy-dzumenko.github.io/react_todo-app/
// 4)https://georgy-dzumenko.github.io/react_phone-catalog/

const links = [
  {
    href: 'https://fastcast4u.com',
    title: "Fastcast4u website",
    description: "Website of a company I'm working in. I worked with most of pages, and created some of them"
  },
  {
    href: 'https://georgy-dzumenko.github.io/PMDb/',
    title: 'Site with movies',
    description: 'Website writed for programing contest. It works on mobile'
  },
  {
    href: 'https://georgy-dzumenko.github.io/layout_miami/',
    title: 'Landing page example',
    description: 'It is css-only landing page. Also it is looks perfectly fine on mobile'
  },
  {
    href: 'https://georgy-dzumenko.github.io/react_todo-app/',
    title: 'ToDo app',
    description: 'Default app for todos'
  },
  {
    href: 'https://georgy-dzumenko.github.io/react_phone-catalog/',
    title: 'Internet shop frontend',
    description: 'It has the most of functions the online shop should have'
  },
]
function App() {
  return (
    <div className="App">
      <div className="background">
        <Player
          src="./background.json" background="transparent"
          // mode="normal"
          speed="1.5"
          // preserveAspectRatio="xMaxYMax slice"
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice' // also tried 'xMidYMid meet'
          }}
          style={{
            position: "absolute",
            bottom: 0, top: 0,
            left: 0, right: 0,
            scale: 2,
            flex: 1,
            resizeMode: 'contain',
            height: "100%",
            width: "100%",
            padding: 0,
            margin: 0,
          }}
          resizeMode='cover'
          loop
          autoplay
        />
      </div>
      <img src="/avatar.png" alt="" className="avatar" />
      <div className="header">
        Portfolio
      </div>
      <div className="portfolio-links-container">
        {links.map((element) => <PortfolioLink href={element.href} title={element.title} description={element.description}/>)}
      </div>
    </div>
  );
}

export default App;
