jQuery(document).ready(function($){
  
    $("#envoyer").on("click",function (e)
        { 
            e.preventDefault();
            if ($('#Nom').val()!="" && $('#Prenom').val() !="" && $('#Email').val() !="" && $('#Telephone').val() !="" && $('#Sexe').val() !="") 
            { var x=$("#form").serializeArray();
            console.log(x);
            }
        });
    });
              //  $.ajax(
                   // {
                    //    type:'post',
                     //   url:'https://localhost:44350/api/Employes',
                      //  data:x,
                  
                      //  success:function(result)
                      //  {
                       //     console.log(result);
                       //     alert("Inscription reussi");
                       // },
                       // error: function (xhr, ajaxOptions, thrownError) {
                        //    console.log(xhr,ajaxOptions, thrownError);
                       // }  
                   // });
                
                //location.reload();
                //$('#Réussite').show(); 
                    
           

        



