
function verificar_c() {
    const checkboxes = document.querySelectorAll('input[name="caixa"]:checked');
    const valoresSelecionados = Array.from(checkboxes).map(checkbox => checkbox.value);
    alert(valoresSelecionados.length > 0 ? `Você selecionou: ${valoresSelecionados.join(', ')}` : 'Nenhuma opção selecionada');
} 
function verificar_r(){
    const radio=document.querySelector('input[name="sx"]:checked');
    var p=document.getElementById('sexo')
    p.innerText=radio ?`Você selecionou ${radio.id}`:'Nenhuma opção selecionada';
}
document.getElementById('button_estado').addEventListener('click',(event)=>{
    const estadoSelecionado = document.getElementById('iestado').value;
    document.getElementById('estado').innerText=(`Estado selecionado: ${estadoSelecionado}`);
});