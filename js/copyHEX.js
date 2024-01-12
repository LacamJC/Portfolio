var copyConfirm = document.getElementById('copyConfirm')

function copyHEX(x){
    console.log(`Copiando cor : ${x}`)
    navigator.clipboard.writeText(x)

    copyConfirm.innerHTML = `${x} Copiado para area de transferencia`
    setTimeout(function(){
        copyConfirm.innerHTML = ""
    }, 1000)

}