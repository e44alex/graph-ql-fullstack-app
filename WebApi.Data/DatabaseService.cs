using MongoDB.Driver;

namespace WebApi.Data
{
    public class DatabaseService : IDatabaseService
    {
        public IMongoDatabase GetDatabase()
        {
            var client = new MongoClient("mongodb://localhost:27017/?replicaSet=ComposeReplicaSet");

            return client.GetDatabase("usersdb");
        }
    }
}