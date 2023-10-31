let n=parseInt(prompt("Enter the number"));
for(let i=1;i<=n;i++){
    if(i==1 || i==n){
        for(let j=1;j<=n;j++){
            document.write("* ");
        }
    }
    else{
        for(let k=1;k<=n;k++){  
            if(k==1||k==n){
            document.write("* ")
            }
            else{
                document.write("&nbsp&nbsp&nbsp");
            }
        }
    }
    document.write("<br>");
}