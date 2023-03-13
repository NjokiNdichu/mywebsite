document.getElementById("myform").addEventListener("submit",
    function(getdata){
        getdata.preventDefault()
       let fname=document.getElementById("first").value
       let lname=document.getElementById("last").value
       let email=document.getElementById("email").value
       let form=document.getElementById("form_details")
       let row=1
       let newRow=form.insertRow(row)
       let cell1=newRow.insertCell(0)
       let cell2=newRow.insertCell(1)
       let cell3=newRow.insertCell(2)
       cell1.innerHTML=fname
       cell2.innerHTML=lname
       cell3.innerHTML=email
       row++
    }
    )

