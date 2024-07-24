import imgStars from "../assets/stars.png";
import imgCheck from "../assets/check.svg";
import imgDiscount from "../assets/discount.png";

const Section02 = () => {
  return (
    <>
    {/*SECTION 2*/}
    <div className="flex flex-col items-center text-center gap-8 md:gap-12 p-10 pb-20 bg-[url('./assets/bg-02.png')] md:bg-[url('./assets/bg-02-desktop.png')] bg-cover font-fontHenrietteC text-[#F5EED8]">
        <div className="flex flex-col items-center gap-2 md:gap-6 max-w-2xl">
          <img src={imgStars} className="w-24"></img>

          <span className="font-bold text-3xl">
            Conheça o essencial da fé católica em 4 semanas para vivê-la com
            simplicidade, bom senso e maturidade.
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 relative">
          <div className="bg-gradient-to-b from-[#cb7a7a] from-0% via-[#d8baa3] via-39% via-[#d7b46b] via-76% to-[#8583d1] to-100% p-[1.5px] rounded-3xl">
            <div className="flex flex-col items-center gap-3 bg-black/90 rounded-3xl w-full py-10">
              <span className="text-3xl font-black w-3/4 md:w-4/6 font-fontBookmania leading-7">
                25 Aulas direto ao ponto
              </span>
              <ul className="text-left">
                <li className="flex flex-row gap-2">
                  <img src={imgCheck}></img> Principais temas da fé na prática
                </li>
                <li className="flex flex-row gap-2">
                  <img src={imgCheck}></img> 15 minutos por dia
                </li>
                <li className="flex flex-row gap-2">
                  <img src={imgCheck}></img> Transcrição das aulas 
                </li>
                <li className="flex flex-row gap-2">
                  <img src={imgCheck}></img> Formação em 4 semanas
                </li>
              </ul>
            </div>
          </div>

          <img
            src={imgDiscount}
            className="w-36 z-10 absolute bottom-[38%] md:bottom-[22%] md:left-[38%]"
          ></img>

          <div className="bg-gradient-to-b from-[#cb7a7a] from-0% via-[#d8baa3] via-39% via-[#d7b46b] via-76% to-[#8583d1] to-100% p-[1.5px] rounded-3xl">
            <div className="flex flex-col items-center gap-3 bg-black/90 rounded-3xl w-full py-10">
              <span className="text-3xl font-black w-3/4 font-fontBookmania leading-7">
                4 Aulas bônus imperdíveis
              </span>
              <ul className="text-left">
                <li className="flex flex-row gap-2">
                  <img src={imgCheck}></img> Literatura
                </li>
                <li className="flex flex-row gap-2">
                  <img src={imgCheck}></img> Filmes e séries
                </li>
                <li className="flex flex-row gap-2">
                  <img src={imgCheck}></img> Música 
                </li>
                <li className="flex flex-row gap-2">
                  <img src={imgCheck}></img> Sites, aplicativos e recursos
                  online
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="flex flex-col justify-center text-center mb-14
            font-fontPrentonRP"
        >
          Oferta de lançamento por tempo limitado
          <li
            className="h-[1px] list-none
            bg-gradient-to-l from-[#cb7a7a] from-0% via-[#d8baa3] via-39% via-[#d7b46b] via-76% to-[#8583d1] to-100%"
          ></li>
        </a>
      </div>

      {/*END OF SECTION 2*/}
    </>
  )
}

export default Section02