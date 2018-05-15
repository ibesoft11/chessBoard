/*Contributions on how to optimize the code can be sent...
Enjoy !
*/function chessBoard(height, width){
    var output = "";
    for (var i=1;i<=height;i++){
        if (i % 2 !=0){
            for (var j=0;j<=width;j +=2){
                    output +="# ";
            }
            output = output.slice(0,output.length-1);
            output +="\n";
        } else {
            for (var j=0;j<=width;j+=2){
                output +=" #";
            }
            output = output.slice(0,output.length-1);
            output +="\n";
        }
    }
    return console.log(output);
}
chessBoard(6,5);