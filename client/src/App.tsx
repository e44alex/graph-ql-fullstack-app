import './App.css';
import { Books } from './books/Books.tsx';
import { WithApiCheck } from './shared/components/WithApiCheck/WithApiCheck.tsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <>
    <div className="header">
      <img
        src="https://res.cloudinary.com/codersociety/image/fetch/f_webp,ar_16:9,c_fill,w_1140/https://cdn.codersociety.com/uploads/graphql-reasons.png"
        width={300} alt={'image'} />
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
    </div>
    <WithApiCheck>
      <Books />
    </WithApiCheck>

    <div>
      <button className="btn btn-success btnspace" onClick={() => toast.success('Hey, this is a Success Message')}> Hey,
        this is a Success Message
      </button>
      <button className="btn btn-info btnspace" onClick={() => toast.info('Hey, this is an Info Message')}>Hey, this is
        an Info Message
      </button>
      <button className="btn btn-danger btnspace" onClick={() => toast.error('Hey, this is an Error Message')}>Hey, this
        is an Error Message
      </button>
      <button className="btn btn-warning btnspace" onClick={() => toast.warning('Hey, this is a Success Message')}>Hey,
        this is a Warning Message
      </button>

    </div>
  </>;
}

export default App;
