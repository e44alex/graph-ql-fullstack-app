namespace WebApi.Queries
{
    public class BookMutationType : ObjectType<BookMutation>
    {
        protected override void Configure(IObjectTypeDescriptor<BookMutation> descriptor)
        {
            descriptor.Field(mutation => mutation.AddBook(default!, default!)).Type<BookType>();
        }
    }
}