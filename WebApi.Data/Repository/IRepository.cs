namespace WebApi.Data.Repository
{
    public interface IRepository<T, TKey>
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> Get(TKey id);

        Task Delete(TKey id);

        Task Update(TKey id, T value);

        Task Create(T value);
    }
}