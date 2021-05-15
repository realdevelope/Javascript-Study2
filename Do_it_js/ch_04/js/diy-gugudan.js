for(i = 2; i <= 9; i++){
    document.write("<div>")		//div
    document.write( i + "단 <br>");
    for(j = 1; j <= 9; j++){
        document.write(i + "x" + j + "=" + i*j + "<br>");
    }
        document.write("</div>");	//div가 신기하네.. 어떻게 이렇게 되는지
}