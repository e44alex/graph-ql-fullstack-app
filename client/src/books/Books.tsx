import { gql, useQuery } from '@apollo/client';
import { Book } from '../shared/types';
import { WithLoader } from '../shared/components/Loader.tsx';
import './Books.css';

const GET_BOOKS = gql`
  {
  books {
    id
    title
    cover
    author {
      name
    }
  }
}
`;

export function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (error) return <p>Error : {error.message}</p>;

  return <WithLoader isLoading={loading}>
    <div className={'card-grid'}>
      {!loading && data.books.map(({ id, title, author, cover }: Book) => (
        <div className={'card'} key={id}>
          <h3>{title}</h3>
          {cover && <img width="400" height="250" alt="location-reference" src={cover} />}
          <br />
          <b>Author:</b>
          <p>{author.name}</p>
          <br />
        </div>
      ))}
    </div>
  </WithLoader>;
}