import { gql, useQuery } from '@apollo/client';
import { Book } from '../types';
import { useEffect } from 'react';

const GET_BOOKS = gql`
  {
  books {
    id
    title
    author {
      name
    }
  }
}
`;

export function Books() {
  const { loading, error, data, client } = useQuery(GET_BOOKS);

  console.log(client)

  useEffect(() => {
    const promise = fetch('https://localhost:7107/health/').then(value => console.log(value.ok)).catch(err => console.log(err));
  }, [])

  if (error) return <p>Error : {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return data.books.map(({ id, title, author, cover }: Book) => (
    <div key={id}>
      <h3>{title}</h3>
      {cover && <img width="400" height="250" alt="location-reference" src={`${cover}`} />}
      <br />
      <b>Author:</b>
      <p>{author.name}</p>
      <br />
    </div>
  ));
}