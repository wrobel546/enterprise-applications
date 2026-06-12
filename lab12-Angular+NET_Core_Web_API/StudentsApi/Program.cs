using Microsoft.EntityFrameworkCore;
using StudentsApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<StudentContext>(
    opt => opt.UseInMemoryDatabase("StudentList"));
builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddAuthorization();
builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

//app.UseHttpsRedirection();

app.UseCors(options =>
    options.WithOrigins("http://localhost:4200")
        .AllowAnyMethod()
        .AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
