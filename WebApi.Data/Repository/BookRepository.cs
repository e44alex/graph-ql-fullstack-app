using MongoDB.Driver;
using WebApi.Models;

namespace WebApi.Data.Repository
{
    public class BookRepository : IRepository<Book, string>
    {
        private readonly IMongoCollection<Book> _collection;

        public BookRepository(IDatabaseService databaseService)
        {
            _collection = databaseService.GetDatabase().GetCollection<Book>(Book.CollectionName);
        }

        public async Task<IEnumerable<Book>> GetAll()
        {
            return await _collection.Find(FilterDefinition<Book>.Empty).ToListAsync();
        }

        public async Task<Book> Get(string id)
        {
            return await _collection.Find(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task Delete(string id)
        {
            await _collection.DeleteManyAsync(book => book.Id == id);
        }

        public async Task Update(string id, Book value)
        {
            var updateDefinition = Builders<Book>.Update
                .Set(b => b.Title, value.Title)
                .Set(b => b.Cover, value.Cover)
                .Set(b => b.Author, value.Author);

            await _collection.UpdateManyAsync(book => book.Id == id, updateDefinition);
        }

        public async Task Create(Book value)
        {
            await _collection.InsertOneAsync(value);
        }
    }
}