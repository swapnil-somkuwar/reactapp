using Application.Activities;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
                services.AddSwaggerGen();
                services.AddDbContext<DataContext>(options =>
                {
                    options.UseSqlite("Data Source=reactivities.db");
                });
                services.AddEndpointsApiExplorer();

                services.AddCors(opt =>
                {
                    opt.AddPolicy("CorsPolicy", policy=>{
                        policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                    });
                });

                services.AddMediatR(typeof(List.Handler));
                services.AddAutoMapper(typeof(MappingProfiles).Assembly);
                return services;
        }
    }
}