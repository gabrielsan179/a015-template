let num = Number(prompt("insira um número:"))

let soma = 0

while (num !== 0){
    console.log(num)
    soma += num
    num = Number(prompt("insira um número:"))
}

console.log(soma)

for(let i = 0; i <= num ; i++){
    console.log(i)
}

let nums = [1, 5, 9, 7, 5, 3, 5]

for(let i = 0; i < nums.length; i++){
    console.log(`o numero do indice ${i} é ${nums[i]}`)
}

let usuario= prompt("Qual seu tipo de usuario? A/B/C")

while (usuario.toUpperCase() !== "A"){
    console.log("Acesso negado")
    usuario = prompt("Qual seu tipo de usuario? A/B/C")
}

console.log("Boas-vindas, Admins")

for(let i = 0; i <= 10 ; i++){
    console.log(`${i} x 2 = ${i*2}`)
}

const arr = ["gabriel", "david", "larisa", "janciele"]

for(i = 0; i< arr.length; i++){
    console.log(arr[i].toUpperCase())
}
