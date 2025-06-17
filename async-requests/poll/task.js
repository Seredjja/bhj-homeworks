let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();
xhr.addEventListener("readystatechange", function() {
    if(this.readyState == xhr.DONE && this.status == 200) {
        let data = JSON.parse(this.responseText);
        
        document.getElementById("poll__title").textContent = data.data.title;

        for (let i = 0; i < data.data.answers.length; i++) {
            let elementBtn = document.createElement("button");
            elementBtn.classList.add("poll__answer");
            elementBtn.textContent = data.data.answers[i];
            document.getElementById("poll__answers").appendChild(elementBtn);
        }

    }

    document.querySelectorAll(".poll__answer").forEach(btn => {
        btn.addEventListener("click", function() {
            const xhr = new XMLHttpRequest;
            xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send( 'vote=1&answer=2' );
        
            alert("Спасибо, ваш голос засчитан!");
        });
    });
});