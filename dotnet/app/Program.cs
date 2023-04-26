using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://localhost:8000");
var app = builder.Build();

app.MapGet("/organization/{orgId}", async ([FromRoute] string orgId) =>
{
    return Results.Ok(new Organization { Id = orgId });
});

app.Run();
