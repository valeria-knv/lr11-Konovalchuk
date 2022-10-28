const imgs = [
    {src: ".\\imgs\\anonymous.png", word: "Anonymous", translate: "анонімний"},
    {src: ".\\imgs\\conscious.png", word: "Conscious", translate: "свідомий"},
    {src: ".\\imgs\\commodity.png", word: "Commodity", translate: "товар"},
    {src: ".\\imgs\\entrepreneur.png", word: "Entrepreneur", translate: "підприємець"},
    {src: ".\\imgs\\hospitality.png", word: "Hospitality", translate: "гостинність"},
    {src: ".\\imgs\\maintenance.png", word: "Maintenance", translate: "обслуговування"},
    {src: ".\\imgs\\philosophical.png", word: "Philosophical", translate: "філософський"},
    {src: ".\\imgs\\pronunciation.png", word: "Pronunciation", translate: "вимова"},
    {src: ".\\imgs\\superfluous.png", word: "Superfluous", translate: "зайвий"},
    {src: ".\\imgs\\thesaurus.png", word: "Thesaurus", translate: "скарбниця"},
];

$(window).on('load', function(){
    $("#correct").css("color", "green");
    $("#incorrect").css("color", "red");
    let length = imgs.length;
    let rand = Math.floor(Math.random() * length), count = 1, tempSrc = [10], tempWord = [10], tempTr = [10];
    let check = 0;
    for(let i = 0; i < length; i++){
        rand = Math.floor(Math.random() * (length - i)) + i;
        tempSrc[i] = imgs[rand].src;
        tempWord[i] = imgs[rand].word;
        tempTr[i] = imgs[rand].translate;
        imgs[rand].src = imgs[i].src;
        imgs[rand].word = imgs[i].word;
        imgs[rand].translate = imgs[i].translate;
        imgs[i].src = tempSrc[i];
        imgs[i].word = tempWord[i];
        imgs[i].translate = tempTr[i];
    }
    $(".img").attr("src", tempSrc[count - 1]);
    $(".container>div").html("<h2>" + tempWord[count - 1] + "</h2>");
    $("#right").on('click', function(){
        if(count < 10){
            count++;
            $("#count").html(count + " / 10");
            $(".img").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<h2>" + tempWord[count - 1] + "</h2>");
            //alert(tempTr[count - 2].toLowerCase());
            if(check == 0){
                if($("#answer").val().toLowerCase() == tempTr[count - 2]){
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else{
                    $("#incorrect").text(Number($("#incorrect").text()) + 1);
                }
            }
            else{ check--; }
            $("#answer").val('');
        }
        else{
            $("#count").html(count + " / 10");
            $(".img").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<h2>" + tempWord[count - 1] + "</h2>");
            if(check == 0){
                if($("#answer").val().toLowerCase() == tempTr[count - 2]){
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else{
                    $("#incorrect").text(Number($("#incorrect").text()) + 1);
                }
            }
            else{ check--; }
            $("#answer").val('');
            let res = Number($("#correct").text());
            //alert(Number($("#correct").text()));
            if(res < 4){alert("You have a LOW level of English");}
            else{if(res < 7){alert("You have an INTERMEDIATE level of English");}
                else{if(res < 10){alert("You have a HIGH level of English");}
                    else{alert("You have an EXCELLENT level of English");}
                }
            }
            window.location.href=".\\lr11.html";
        }
    });
    $("#left").on('click', function(){
        count--;
        check++;
        $("#count").html(count + " / 10");
        $(".img").attr("src", tempSrc[count - 1]);
        $(".container>div").html("<h2>" + tempWord[count - 1] + "</h2>");
        $("#answer").val('');
    });
});
