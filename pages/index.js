import HomeTemplate from '../components/templates/HomeTemplate';

const context = {
  h5: "SO, YOU WANT TO TRAVEL TO",
  h1: "SPACE",
  body: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
}

export default function Home() {
  return (
    <HomeTemplate 
      gap1={'1rem'} 
      gap2={'1rem'} 
      context={context}
    />
  )
}
