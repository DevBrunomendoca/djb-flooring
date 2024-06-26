import ButtonSecondary from "../../ButtonSecondary"
import ThirdTitle from "../../ThirdTitle"
import { ContainerThumtack } from "./ThumbtackStyle"

const Thumbtack = () => {
  return(
    <ContainerThumtack>
      <img src="/image-thumbtack.png" alt="imagem application Thumbtack" />
      <div>
        <ThirdTitle textThirdTitle='🥇 Top Pro on Thumbtack'/>
        {/* <ButtonSecondary textBtn='Go to Thumbtack'/> */}
      </div>
    </ContainerThumtack>
  )
}

export default Thumbtack