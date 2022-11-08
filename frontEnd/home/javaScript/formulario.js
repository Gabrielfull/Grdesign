class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const telefonesValidas = this.telefonesSaoValidas();
        
        if(camposValidos && telefonesValidas) {
            //this.formulario.submit();
            const resultado = document.getElementById('resultado');

            resultado.innerHTML = '<p>Sua Mensagem foi enviada. <br> Atendimento rápido também pelo WhatsApp: <a href="https://wa.me/qr/HCNRRKJUXWMAF1">Click Aqui</a></p>';
        }
    }

    telefonesSaoValidas() {
        let valid = true;

        const telefone = this.formulario.querySelector('.telefone');

        if(telefone.value.length < 8 || telefone.value.length > 14) {
            valid = false;
            this.criaErro(telefone, 'Telefone precisa estar entre 8 á 12 caractéres');
        }

        return valid;
        }

        camposSaoValidos() {
            let valid = true;

            for(let errorText of this.formulario.querySelectorAll('.error-text')) {
                errorText.remove();
            }

            for(let campo of this.formulario.querySelectorAll('.valida')) {
                const label = campo.previousSibling.innerHTML;

            }
            return valid;
        }
        criaErro(campo, mensagem) {
            const div = document.createElement('div');
            div.innerHTML = mensagem;
            div.classList.add('error-text');
            campo.insertAdjacentElement('afterend', div);
        }
}

const valida = new ValidaFormulario();