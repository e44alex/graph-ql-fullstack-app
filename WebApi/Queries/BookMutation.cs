using WebApi.Data.Repository;
using WebApi.Models;

namespace WebApi.Queries
{
    public class BookMutation
    {
        public async Task<Book> AddBook([Service] IRepository<Book, string> repository, Book book)
        {
            await repository.Create(book);

            return book;
        }
    }
}