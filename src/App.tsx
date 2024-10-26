
import './App.css'
import ImageGallery from './components/ImageGallery'

function App() {

  const images = [{
    id: '1',
    src: "https://picsum.photos/536/354",
    alt: "img1"
  }
    ,
  {
    id: '2',
    src: "https://picsum.photos/536/352",
    alt: "img2"
  },
  {
    id: '3',
    src: "https://picsum.photos/536/353",
    alt: "img3"
  },
  {
    id: '4',
    src: "https://picsum.photos/536/355",
    alt: "img5"
  }
    ,
  {
    id: '5',
    src: "https://picsum.photos/536/356",
    alt: "img6"
  },
  {
    id: '6',
    src: "https://picsum.photos/536/359",
    alt: "img7"
  }]


  return (
    <>
      <ImageGallery images={images} />
    </>
  )
}

export default App
