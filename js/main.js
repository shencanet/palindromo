function palindrome() {
    const text = document.getElementById("text").value
    const smallText = text.toLowerCase().replace(/[\W_]/g, "")
    const reverseText = smallText.split("").reverse().join("")
  
    let answer = ""
    if (reverseText === smallText) answer = "✔ Es un palíndromo"
    else answer = "❌ No es un palíndromo"
    
    document.getElementById("answer").innerHTML = text ? answer : ""
  }