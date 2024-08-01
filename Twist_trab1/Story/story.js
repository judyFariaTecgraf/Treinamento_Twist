class Stories{
    constructor(id){
        this.story = document.querySelector("#conteudo") 
        this.active = 0 // qual slide está ativo
        this.init();
    }
 
    // método para ativar o slide
    ativaSlide(index){
        this.active = index;

        this.itens.forEach(item => item.classList.remove('ativo')) // remove

        //item específico
        this.itens[index].classList.add('ativo'); // adiciona classe de ativo
    }

    prev(){
        if (this.active > 0){
            this.ativaSlide(this.active - 1)
        }
        // else: 
        //      if(for o primeiro "usuario"){reinicia tempo do story}
        //      volta para o "usuario" anterior (no último storys)

        
    }

    next(){      
        if (this.active < this.itens.length - 1){
            this.ativaSlide(this.active + 1)
        }
        else{ //voltando ao primeiro story *** (alterar para minha funcionalidade)
            this.ativaSlide(0)
        }
    }

    addNavigator(){
        const btnNext = this.story.querySelector(".story-next")
        const btnPrev = this.story.querySelector(".story-prev")

        btnNext.addEventListener('click', this.next) // clique ao btn next
        btnPrev.addEventListener('click', this.prev)

    }

    addBarraNav(){
        this.itens.forEach( () => this.barraNav.innerHTML += "<article></article>" )
    }

    init(){
         //todos os itens 
        this.itens = this.story.querySelectorAll(".itens-story > *") // > * = todo elemento 'filho'
        this.barraNav = this.story.querySelector("#barra-nav")
        this.addBarraNav()
        this.ativaSlide(0)
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this)
        this.addNavigator();
    }
}

new Stories('story_quiz');