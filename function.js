const WelcomeEl=document.getElementById("welcome-el")
    function greetuser(name,greet)
    {
        WelcomeEl.textContent=`${greet},${name}`
    }

    greetuser("kiran","jii")