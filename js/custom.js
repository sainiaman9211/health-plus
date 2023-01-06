$(document).ready(
    function(){
     
    $("#nav-dept").click(function(){
      $("#dept-list").slideToggle("slow");
    });

  //------------validations------------

  //name---appointment booking

  $("#booker-name").focusout(function(){
      var name=document.getElementById("booker-name").value;
      var letters = /^[a-zA-Z\s]*$/;
      
      if(name.match(letters)){
        document.getElementById("name-span").textContent="";
      }
        else{
        document.getElementById("name-span").textContent="Please Enter Alphabets Only";
        }
      })

    //phone number-----appointment
    $("#booker-no").focusout(function(){
        var name=document.getElementById("booker-no").value;
        var letters = "^[0-9]{10}$";
        
        if(name.match(letters)){
          document.getElementById("no-span").textContent="";
        }
          else{
          document.getElementById("no-span").textContent="Please Enter a Valid Phone Number";
          }
        })
    

    //appointment box opening
    $(".apt-button").click(function(){
        $("#apt-form").fadeIn(1000);
       });

    //alerts after clicking book button

    $("#apt-book-btn").click(function(){
        //department validation
       if(document.getElementById("apt-booking-dept").value == "Null"){
           alert("Please Select Department");
       }
       else{
            confirm("Click Ok to Confirm Your Booking! ");
            
            if(confirm){
                var name=document.getElementById("booker-name").value;
                var phn = document.getElementById("booker-no").value;
                var dept = document.getElementById("apt-booking-dept").value;
                alert("Dear "+name +", Your Appointment has been Successfully Booked in "+dept+" department.Your Booking Appointment Date and Time will be sent on "+phn);
            }
            else{
                alert("Your Appointment Booking has been Canceled!")
            }
        }
    })

    $("#apt-cncl-btn").click(function(){
        $("#apt-form").fadeOut(1000);
    }); 
    
 //department images name animation

  $(".osteo").hover(function(){
    $("#osteo-head").show(500);
    },function(){
      $("#osteo-head").hide(500);
     }
    )

    $(".opthalmo").hover(function(){
      $("#opthalmo-head").show(500);
      },function(){
        $("#opthalmo-head").hide(500);
       }
      )

      $(".ent").hover(function(){
        $("#ent-head").show(500);
        },function(){
          $("#ent-head").hide(500);
         }
        )

        $(".neuro").hover(function(){
          $("#neuro-head").show(500);
          },function(){
            $("#neuro-head").hide(500);
           }
          )

    //Patient login Validation
    $("#patient-login-btn").click(function(){
        var value = document.getElementById("patient-id").value;
        var regex = "^[0-9]{6}$";
         
        if(value.match(regex)){
            document.getElementById("patient-login-span").textContent="";
            alert("Patient -"+value+" has been Logged In Successfully!");
        }
        else{
            document.getElementById("patient-login-span").textContent="Please Enter a Valid ID";
        }
    
    })

  //Doctor Login validation
    $("#doctor-login-btn").click(function(){
      var loginvalue = document.getElementById("doctor-id").value;
      var pswdvalue = document.getElementById("doctor-pin").value;
      var loginId = "^[0-9]{6}$";
      var pswd ="^[0-9]{4}$";
       
      if(loginvalue.match(loginId)&&pswdvalue.match(pswd)){
          document.getElementById("doctor-login-span").textContent="";
          document.getElementById("doctor-pswd-span").textContent="";
          alert("Doctor -"+loginvalue+" has been Logged In Successfully!");
      }
      else if(!(loginvalue.match(loginId))&& pswdvalue.match(pswd)){
        document.getElementById("doctor-pswd-span").textContent="";
        document.getElementById("doctor-login-span").textContent="Please Enter a Valid 6 Digit ID";
    }
      else if(loginvalue.match(loginId)&& !(pswdvalue.match(pswd))){
        document.getElementById("doctor-login-span").textContent="";
          document.getElementById("doctor-pswd-span").textContent="Please Enter a Valid 4 Digit Password";
      }
      else{
        document.getElementById("doctor-login-span").textContent="Please Enter a Valid 6 Digit ID";
        document.getElementById("doctor-pswd-span").textContent="Please Enter a Valid 4 Digit Password";
      }

  
  })


  //registration from validations

  //fullname----fathername----city

  $("#fullname").focusout(function(){
    var letters = /^[a-zA-Z\s]*$/;
    var name=document.getElementById("fullname").value;

    if(!(name.match(letters))){
      document.getElementById("full-name-span").textContent="Enter A Valid Name";
    }
    else{
      document.getElementById("full-name-span").textContent="";
    }
    
  })

  $("#fathername").focusout(function(){
    var letters = /^[a-zA-Z\s]*$/;
    var name=document.getElementById("fathername").value;

    if(!(name.match(letters))){
      document.getElementById("father-name-span").textContent="Enter A Valid Name";
    }
    else{
      document.getElementById("father-name-span").textContent="";
    }
    
  })

  $("#age").focusout(function(){
    var age=document.getElementById("age").value;

    if(age>=150||age<1){
      document.getElementById("age-span").textContent="Enter a Valid Age";
    }
    else{
      document.getElementById("age-span").textContent="";
    }
    
  })

  $("#email").focusout(function(){
    var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=document.getElementById("email").value;

    if(!(email.match(emailregex))){
      document.getElementById("email-span").textContent="Enter A Valid E-mail Address";
    }
    else{
      document.getElementById("email-span").textContent="";
    }
    
  })

  $("#address").focusout(function(){
    var address=document.getElementById("address").value;

    if(address.length==0){
      document.getElementById("address-span").textContent="Address Cannot be Empty";
    }
    else{
      document.getElementById("address-span").textContent="";
    }
    
  })

  $("#city").focusout(function(){
    var letters = /^[a-zA-Z\s]*$/;
    var name=document.getElementById("city").value;

    if(!(name.match(letters))){
      document.getElementById("city-span").textContent="Enter A Valid City Name";
    }
    else{
      document.getElementById("city-span").textContent="";
    }
    
  })

  $("#zip").focusout(function(){
    var letters = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    var name=document.getElementById("zip").value;

    if(!(name.match(letters))){
      document.getElementById("zip-span").textContent="Enter A Valid Canadian ZIP";
    }
    else{
      document.getElementById("zip-span").textContent="";
    }
    
  })

  //all form fields empty validation

  $("#p-register-btn").click(function(){
    const form = document.getElementById("p-register");

    const name = form.elements['fullname'];
    const fathername = form.elements['fathername'];
    const age = form.elements['age'];
    const email = form.elements['email'];
    const address = form.elements['address'];
    const city = form.elements['city'];
    const zip = form.elements['zip'];

    if(((name.value).length==0)||((fathername.value).length==0)||((age.value).length==0)||((email.value).length==0)||((city.value).length==0)||((zip.value).length==0)||((address.value).length==0)){
     
      alert("All fields required!");
    }
    else{
      if(confirm("Click Ok to Confirm Submission")){
        alert("Patient, "+name.value +" has been Registered Successfully.");
      }
    }

  })

  });

