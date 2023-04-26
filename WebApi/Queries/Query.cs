using WebApi.Data.Repository;
using WebApi.Models;

namespace WebApi.Queries
{
    public class BookQuery
    {
        public async Task<IEnumerable<Book>> GetBooks([Service] IRepository<Book, string> repository) => await repository.GetAll();

        public async Task<Book> GetBook([Service] IRepository<Book, string> repository, string id) => await repository.Get(id);

        public string Foo() => "Bar";
    }
}