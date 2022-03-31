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
    href: 'https://georgy-dzumenko.github.io/PMDb/',
    title: 'site with movies',
    description: 'it works on mobile'
  },
  {
    href: 'https://georgy-dzumenko.github.io/layout_miami/',
    title: 'landing page',
    description: 'it is css-only landing page. Also it is looks perfectly fine on mobile'
  },
  {
    href: 'https://georgy-dzumenko.github.io/react_todo-app/',
    title: 'todo app',
    description: 'default app for todos'
  },
  {
    href: 'https://georgy-dzumenko.github.io/react_phone-catalog/',
    title: 'online shop frontend',
    description: 'it has the most of functions the online shop should have'
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
      <img src="/avatar.jpg" alt="" className="avatar" />
      <div className="header">
        Portfolio
      </div>
      {links.map((element) => <PortfolioLink href={element.href} title={element.title} description={element.description}/>)}
    </div>
  );
}

export default App;
