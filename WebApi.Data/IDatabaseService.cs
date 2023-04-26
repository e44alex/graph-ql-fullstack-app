using MongoDB.Driver;

namespace WebApi.Data
{
    public interface IDatabaseService
    {
        IMongoDatabase GetDatabase();
    }
}