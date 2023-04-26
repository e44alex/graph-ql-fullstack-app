namespace WebApi.Models
{
    public class Book
    {
        public static string CollectionName = "books";

        public string Id { get; set; }

        public string Title { get; set; }

        public string Cover { get; set; }

        public Author Author { get; set; }
    }
}