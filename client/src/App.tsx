import './App.css';
import { Books } from './books/Books.tsx';
import { WithApiCheck } from './shared/components/WithApiCheck/WithApiCheck.tsx';

function App() {
  return <>
    <div className="header">
      <img src="https://res.cloudinary.com/codersociety/image/fetch/f_webp,ar_16:9,c_fill,w_1140/https://cdn.codersociety.com/uploads/graphql-reasons.png" width={300} alt={"image"}/>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
    </div>
    <WithApiCheck>
      <Books/>
    </WithApiCheck>
  </>
}

export default App
