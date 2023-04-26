using WebApi.Models;

namespace WebApi.Queries
{
    public class BookType : ObjectType<Book>
    {
        protected override void Configure(IObjectTypeDescriptor<Book> descriptor)
        {
            descriptor.Field(f => f.Id).Type<NonNullType<StringType>>();
            descriptor.Field(f => f.Title).Type<StringType>();
            descriptor.Field(f => f.Author).Type<AuthorType>();
            descriptor.Field(f => f.Cover).Type<StringType>();
        }
    }

    public class AuthorType : ObjectType<Author>
    {
        protected override void Configure(IObjectTypeDescriptor<Author> descriptor)
        {
            descriptor.Field(f => f.Name).Type<StringType>();
        }
    }
}