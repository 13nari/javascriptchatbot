
$(function () {

    var aux = 0
    var aux2 = 1
    var aux3 = "n"
    var aux4 = 0
    var aux5 = 0
    var perguntas = ["hello","hi","hello there","I'm fine thanks","fine","fine thanks","bye","bye bye","cya","later","age","name"];
    //$("#item-list").html(perguntas.toString() + "&nbsp;<span style='color:red'>(Ainda não disponível para dispositivos móveis)</span>");


    function onEnterPress() {

        if (perguntas.includes(aux3)) {
            if (aux3 == "hello" || aux3 == "hi" || aux3 == "hello there") 
                $("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: Hey! How is it going?</div>")
            if (aux3 == "I'm fine thanks" || aux3 == "fine" || aux3 == "fine thanks")
                $("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: That's great news!</div>")
            if (aux3 == "bye" || aux3 == "bye bye" || aux3 == "cya" || aux3 == "later")
                $("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: I'll see you later!</div>")
            if (aux3 == "age")
                $("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: I was born on June the 22th of 2021.</div>")
            if (aux3 == "name")
                $("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: I have no name yet.</div>")
            
        }

        return
    }

    $("#setter").keydown(function (e) {
        if (e.keyCode === 13) {
            if (aux5 < 14) {
                switch (aux) {
                    case 0: // primeira mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 2: // segunda mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 4: // terceira mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 6: // quarta mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 8: // quinta mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 10: // sexta mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 12: // setima mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;



                }

            }
            else {

                $("#apice-" + aux4).remove()
                aux4 += 1
                $("#apice-" + aux4).remove()
                aux4 += 1
                $("#flex").remove()
                $("#container").append(
                    "<div id='flex'>" +
                    "<div>Você:&nbsp;</div>" +
                    "<div class='pergunta' id='apice-" + aux + "'></div>" +
                    "</div>"
                )
                $("#apice-" + aux).text($(this).val())
                $("#setter").val("")
                aux3 = $("#apice-" + aux).text()
                onEnterPress()
                aux += 2
                aux2 += 2
            }
        }
    })
})