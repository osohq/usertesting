using Microsoft.AspNetCore.Mvc;
using OsoCloud;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://localhost:8000");
var app = builder.Build();

const string ApiKey = "<please provide your api key here>";
var oso = new Oso("https://cloud.osohq.com", ApiKey);

app.MapGet("/organization/{orgId}", async ([FromRoute] string orgId) =>
{
    var actor = new OsoCloud.Value("User", "anonymous");
    var resource = new OsoCloud.Value("Organization", orgId);

    bool allowed = await oso.Authorize(actor, "view", resource);
    if (!allowed)
    {
        // Handle authorization failure
        return Results.NotFound("Not Found");
    }

    return Results.Ok(new Organization { Id = orgId });
});

app.Run();
