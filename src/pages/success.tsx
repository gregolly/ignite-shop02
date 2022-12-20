import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/sucess";

export default function Success() {
    return(
        <SuccessContainer>
            <h1>Compra efetuada!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuul <strong>Diego Fernandes</strong>, 
                sua compra de <strong>3 camisetas</strong> já está a 
                caminho da sua casa. 
            </p>

            <Link href="/">Voltar ao catalogo</Link>
        </SuccessContainer>
    )
}