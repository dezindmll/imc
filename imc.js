função imc(){
    const formulario = document.getElementsByName("formulario")[0]
    const formDados = new FormData(formulário)
    const paciente = {
        nome:formDados.get("nome"),
        email:formDados.get("email"),
        dataNasc:formDados.get("nasc"),
        telefone:formDados.get("tel"),
        sexo:document.querySelector('input[nome=sexo]:checked').value,
        peso:formDados.get("peso"),
        altura:formDados.get("altura"),
        classificação:"",
        calcularIMC(){
            if (this.altura > 3) this.altura=this.altura/100
            const imc = isto.peso/isto.altura**2;
            if (imc < 18.5 ) this.classificacao = "obesidade mórbida";
            if (imc >= 18.5 && imc < 25 ) this.classificacao = "saudável"
            if (imc >= 25 && imc < 30 ) this.classificacao = "sobrepeso"
            if (imc >= 30 && imc < 35 ) this.classificacao = "obesidade"
            if (imc >= 35 && imc < 40 ) this.classificacao = "obesidade Severa"
            if (imc >= 40 ) this.classificacao = "magreza"
            retornar imc.toFixed(2);
        
            
            
        },
        
    }
    console.log(paciente)
    console.log(paciente.calcularIMC())
    deixe resposta=document.getElementById('resposta');
    resposta.innerHTML="Seu IMC é "+paciente.calcularIMC()+". " + "Sua classificação de peso é " + paciente.classificacao;
}
