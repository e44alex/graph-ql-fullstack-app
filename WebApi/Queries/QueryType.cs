namespace WebApi.Queries
{
    public class BookQueryType : ObjectType<BookQuery>
    {
        protected override void Configure(IObjectTypeDescriptor<BookQuery> descriptor)
        {
            descriptor.Field(f => f.GetBooks(default!)).Type<ListType<BookType>>();

            descriptor
                .Field(f => f.Foo())
                .Type<NonNullType<StringType>>();

            descriptor.Field(q => q.GetBook(default!, default!))
                .Argument("id", descriptor => descriptor.Type<NonNullType<StringType>>())
                .Type<BookType>();
        }
    }
}