using MongoDB.Driver;
using WebApi.Data;
using WebApi.Data.Repository;
using WebApi.Models;
using WebApi.Queries;

namespace WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddGraphQLServer().AddQueryType<BookQueryType>().AddMutationType<BookMutationType>();

            builder.Services.AddSingleton<IDatabaseService, DatabaseService>();

            builder.Services.AddSingleton<IRepository<Book, string>, BookRepository>();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy",
                    policy =>
                    {
                        policy.AllowAnyOrigin();
                    });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapGraphQL();

            app.MapControllers();

            app.Run();
        }
    }
}