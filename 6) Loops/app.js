for(i = 0;i < 6;i++) // this i is a global variable and cna be accessed the for loop
{
    document.write("The value is: "+i + "</br>")
}

while(i <= 10)
{
    document.write("The while-loop value is: "+i+"</br>")
    i++;
}


do
{
    document.write("The do-while loop value is: "+i+"</br>")
    i++
}while(i <= 13)