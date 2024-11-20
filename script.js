function beforesumbit()
{
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");  // string --> date( en_IN )
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;   
}