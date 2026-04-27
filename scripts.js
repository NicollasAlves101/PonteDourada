// scripts.js login

function logar() {
    // Captura os valores digitados pelo usuário
    const emailInput = document.getElementById('email').value.trim();
    const senhaInput = document.getElementById('senha').value;
    const campoSenha = document.getElementById('senha');

    // Simulação da Tabela de Usuários baseada nos requisitos
    const usuarios = [
        {
            email: 'admin',
            senha: 'admin',
            setor: 'GESTOR',
            telaPrincipal: 'ponteDourada-pagInicial.html'
        },
        {
            email: 'operacional',
            senha: 'opec2026',
            setor: 'ATENDIMENTO',
            telaPrincipal: 'agendamentos.html'
        }
    ];

    const usuarioLogado = usuarios.find(
        user => user.email === emailInput && user.senha === senhaInput
    );

    if (usuarioLogado) {
    
    if (usuarioLogado.setor === 'GESTOR') {
        window.location.href = 'ponteDourada-pagInicial.html';
    } 
    else if (usuarioLogado.setor === 'ATENDIMENTO') {
        window.location.href = 'agendamentos.html';
    }

} else {
    alert("Usuário não encontrado.");
}
}

// ===== MÁSCARAS =====
cpfMask = IMask(document.getElementById('cpf'), {
    mask: '000.000.000-00'
});

var cnpjMask = IMask(document.getElementById('cnpj'), {
    mask: '00.000.000/0000-00'
});

// Função para salvar PRODUTO
function salvarProduto() {
    // Pegando os valores dos campos
    let nome = document.getElementById("nomeProduto").value;
    let tipo = document.getElementById("tipoProduto").value;
    let fornecedor = document.getElementById("fornecedorProduto").value;

    // Validação simples
    if (nome === "" || tipo === "Selecione" || fornecedor === "Selecione") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Criando objeto produto
    let produto = {
        nome: nome,
        tipo: tipo,
        fornecedor: fornecedor
    };
    // Feedback para o usuário
    alert("Produto cadastrado com sucesso!");

    // Limpando campos
    document.getElementById("nomeProduto").value = ""
    document.getElementById("tipoProduto").value = "";
    document.getElementById("fornecedorProduto").value = "";
}

// Função para salvar o cadastro do cliente
function salvarCliente() {
    // Captura os valores digitados, removendo espaços em branco extras nas pontas
    const nome = document.getElementById('nomeCliente').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const dataNasc = document.getElementById('dataNascimento').value;
    const responsavel = document.getElementById('responsavelId').value.trim();

    // Validação: verifica se algum campo obrigatório está vazio
    if (nome === "" || cpf === "" || dataNasc === "" || responsavel === "") {
        alert("Atenção: Por favor, preencha todos os campos do cadastro do cliente.");
        return; // Interrompe a execução da função se faltar algum dado
    }

    // Imprime os dados no console do navegador para conferência
    console.log("Novo Cliente Cadastrado:", dadosCliente);

    // Exibe a mensagem de sucesso na tela
    alert(`Sucesso! O cliente ${nome} foi cadastrado corretamente.`);

    // Limpa o formulário para permitir um novo cadastro
    document.getElementById('nomeCliente').value = "";
    document.getElementById('cpf').value = "";
    document.getElementById('dataNascimento').value = "";
    document.getElementById('responsavelId').value = "";

    // Retorna o foco (cursor) para o primeiro campo (Nome)
    document.getElementById('nomeCliente').focus();
}

// Função principal para salvar os dados do formulário De NOVO AGENDAMENTO
function salvarAgendamento() {
    // 1. Captura os valores
    const nomeCliente = document.getElementById('nomeCliente').value;
    const profissionalId = document.getElementById('profissionalId').value;
    const servicoId = document.getElementById('servicoId').value;
    const dataAgendada = document.getElementById('dataAgendada').value;
    const status = document.getElementById('status').value;

    // 2. Validação
    if (nomeCliente === "" || profissionalId === "" || servicoId === "" || dataAgendada === "" || status === "a") {
        alert("Atenção: Por favor, preencha todos os campos obrigatórios antes de salvar.");
        return;
    }

    // 3. Criando o objeto para evitar o erro de 'undefined'
    const dadosAgendamento = {
        cliente: nomeCliente,
        profissional: profissionalId,
        servico: servicoId,
        data: dataAgendada,
        status: status
    };

    // Agora o console.log vai funcionar!
    console.log("Dados do novo agendamento:", dadosAgendamento);

    // 4. Sucesso
    alert(`Sucesso! O agendamento para ${nomeCliente} foi salvo corretamente.`);

    // 5. Limpeza do formulário
    document.getElementById('nomeCliente').value = "";
    document.getElementById('profissionalId').value = "";
    document.getElementById('servicoId').value = "";
    document.getElementById('dataAgendada').value = "";
    document.getElementById('status').value = "a";

    document.getElementById('nomeCliente').focus();
}


// Função para salvar o novo serviço
function salvarServico() {
    // Captura os valores digitados pelo usuário
    const nomeServico = document.getElementById('nomeServico').value.trim();
    const valorBase = document.getElementById('valorBase').value.trim();

    // Validação 1: verifica se os campos estão vazios
    if (nomeServico === "" || valorBase === "") {
        alert("Atenção: Por favor, preencha o nome do serviço e o valor base.");
        return; // Interrompe a função
    }

    // Validação 2: verifica se o valor é maior que zero
    if (Number(valorBase) <= 0) {
        alert("Atenção: O valor base do serviço deve ser maior que zero.");
        return; // Interrompe a função
    }

    // Cria o objeto com os dados para envio posterior
    const dadosServico = {
        nome: nomeServico,
        // Converte o valor para número decimal (float) para garantir o formato financeiro
        valor: parseFloat(valorBase)
    };

    // Imprime os dados no console para conferência
    console.log("Novo serviço cadastrado:", dadosServico);

    // Exibe a mensagem de sucesso
    alert(`Sucesso! O serviço "${nomeServico}" foi cadastrado com o valor de R$ ${dadosServico.valor.toFixed(2)}.`);

    // Limpa o formulário
    document.getElementById('nomeServico').value = "";
    document.getElementById('valorBase').value = "";

    // Retorna o foco para o primeiro campo
    document.getElementById('nomeServico').focus();
}

// Função para salvar o cadastro do profissional
    function salvarProfissional() {
    // 1. Captura os valores
    const nomeProfissional=document.getElementById('nomeProfissional').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const tipo = document.getElementById('tipoProfissional').value.trim();
    const registro = document.getElementById('conselhoRegistro').value.trim();

    // 2. Validação
    if (nomeProfissional==="" || cpf === "" || tipo === "" || registro === "") {
        alert("Atenção: Por favor, preencha todos os campos do cadastro (CPF, Tipo e Conselho/Registro).");
        return;
    }

    // --- CORREÇÃO AQUI: Criando a variável antes de imprimir ---
    const dadosProfissional = {
        nomeProfissional: nomeProfissional,
        cpf: cpf,
        tipo: tipo,
        registro: registro
    };

    // Agora o console não vai travar o código
    console.log("Novo Profissional Cadastrado:", dadosProfissional);

    // 3. Exibe o sucesso
    alert(`Sucesso! O profissional (${tipo}) com registro ${registro} foi cadastrado corretamente.`);

    // 4. Limpa o formulário
    document.getElementById('nomeProfissional').value="";
    document.getElementById('cpf').value = "";
    document.getElementById('tipoProfissional').value = "";
    document.getElementById('conselhoRegistro').value = "";

    // 5. Foco no CPF
    document.getElementById('cpf').focus();
}

// Função para salvar fornecedor
function salvarFornecedor() {
    // Pegando os valores dos campos
    let razaoSocial = document.getElementById("razaoSocial").value;
    let cnpj = document.getElementById("cnpj").value;

    // Validação simples
    if (razaoSocial === "" || cnpj === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Criando objeto fornecedor
    let fornecedor = {
        razaoSocial: razaoSocial,
        cnpj: cnpj
    };

    // Feedback para o usuário
    alert("Fornecedor cadastrado com sucesso!");

    // Limpando campos
    document.getElementById("razaoSocial").value = "";
    document.getElementById("cnpj").value = "";
}


// Função responsável por calcular e aplicar a responsividade
function aplicarResponsividade() {
    const grid = document.getElementById('menuGrid');
    const larguraJanela = window.innerWidth;

    // Se a tela for menor que 480px (Celulares em pé) - 1 coluna
    if (larguraJanela < 480) {
        grid.style.gridTemplateColumns = 'repeat(1, 1fr)';
    }
    // Se a tela for entre 480px e 768px (Tablets) - 2 colunas
    else if (larguraJanela >= 480 && larguraJanela < 768) {
        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
    // Se a tela for maior que 768px (Desktop/como na imagem) - 3 colunas
    else {
        grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
}



// Executa a função assim que a página é carregada
document.addEventListener('DOMContentLoaded', aplicarResponsividade);

// Executa a função toda vez que a janela for redimensionada
window.addEventListener('resize', aplicarResponsividade);


