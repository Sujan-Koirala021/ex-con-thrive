import './App.css'
import NavBar from './components/NavBar';


const idol = [
  "Suzy",
  "Yeaji",
  "IU"
]

export default function App()
{
  return(
<div>
    <NavBar idols = {idol} />
</div>
  );
}