class Modal{

    static toggleModal(){

        const openModal   = document.querySelector(".recuperar_senha")
        const modal       = document.querySelector(".modal")

        openModal.addEventListener("click", () =>{
       
            modal.classList.toggle("hidden")

        })
    }

    static fecharModal(){
        const modal       = document.querySelector(".modal")
        const fecharModal = document.querySelector(".close")
        fecharModal.addEventListener("click", () => {

            modal.classList.toggle("hidden")

        })

    }

}

Modal.toggleModal()
Modal.fecharModal()