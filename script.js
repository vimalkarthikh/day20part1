async function foo(){
    var res= await fetch("https://api.openbrewerydb.org/v1/breweries/");
    var result=await res.json();
    console.log(result);
    for (const key in result) {
        
    console.log(key,result[key].dates);    
    var div=document.createElement("div");
    div.innerHTML=`<div class="card border-success mb-3" style="max-width: 19rem;">
    <div class="card-header border-success"><h3>${result[key].city}</h3></div>
    <div class="card-body text-success">
    <h6 class="card-title">Name: ${result[key].name}</h6>
      <h6 class="card-title">Lat: ${result[key].latitude}</h6>
      <h6 class="card-title">Lon: ${result[key].longitude}</h6>
      <h6 class="card-title">State: ${result[key].state}</h6>
      <h6 class="card-title">Phone: ${result[key].phone}</h6>
      <h6 class="card-title">Province: ${result[key].state_province}</h6>
      <h6 class="card-title">Type: ${result[key].brewery_type}</h6>
    </div>
    <div class="card-footer  border-success"><a href="${result[key].website_url}">Visit Us Here</a></div>
  </div>`;
    document.body.append(div);
    }
}

foo();