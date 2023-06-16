const vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const binSearch = (vetor, left, right, valor) => {
    if (right >= left){
        const indice = parseInt(left + (right-left)/2)
        const atual = vetor[indice]
        console.log('passou aqui',valor)
        if(atual === valor){
            return valor
        }
        if (atual > valor){
            return binSearch(vetor, left, indice-1, valor)
        }
        return binSearch(vetor, indice+1, right, valor)
    }
    return -1
}
