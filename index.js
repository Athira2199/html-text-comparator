const compareStrings = ()=>{
    const str1 = $("#str1").val()
    const str2 = $("#str2").val()
    let s1 = ""
    let s2 = ""
    for(let i=0;i<str1.length && i<str2.length;i++){
        if(str1[i] == str2[i]){
            s1 += str1[i]
            s2 += str2[i]
        }
        else{
            s1 +=`<em>${str1[i]}</em>`
            s2 +=`<em>${str2[i]}</em>`
        }
    }
    $("#result").html(`${s1}<br>${s2}`)
}